"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import FileUpload from "../ui/FileUpload";
import RadioGroup from "../ui/RadioGroup";
import Dropdown from "../ui/Dropdown";
import { useDirectory, useDirectorySub, useLocation, useLocationSub } from "@/lib/query/Query";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Option {
  label: string;
  value: string;
}
interface AuthFormProps {
  type: "login" | "signup";
  onSubmit?: (formData: FormData) => void;
  status?: {
    isPending: boolean;
    isError: boolean;
    isSuccess: boolean;
    error?: unknown;
  };
}

// const AuthForm = ({ type, onSubmit , status }: { type: "login" | "signup"; onSubmit?: (formData: any) => void }) => {
const AuthForm = ({ type, onSubmit, status }: AuthFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

  const [location, setLocation] = useState("");
  const { data: locationData, isLoading: isLoadingLocation } = useLocation();
  const locationOptions: Option[] = isLoadingLocation || error
    ? [{ label: "Admin", value: "admin" }, { label: "User", value: "user" }, { label: "Guest", value: "guest" }]
    : locationData.map((location: any) => ({ label: location.location, value: location.id }));
  const [locationId, setLocationId] = useState<number | null>(null);

  const [subLocation, setSubLocation] = useState("");
  const { data: subLocationData } = useLocationSub(locationId ?? 0);
  const subLocationOptions: Option[] = (subLocationData ?? []).map((item: any) => ({ label: item.city, value: item.id }));

  const [directory, setDirectory] = useState("");
  const { data: directoryData, isLoading: isLoadingDirectory } = useDirectory();
  const directoryOptions: Option[] = isLoadingDirectory || error
    ? [{ label: "Admin", value: "admin" }, { label: "User", value: "user" }, { label: "Guest", value: "guest" }]
    : directoryData.map((location: any) => ({ label: location.title, value: location.id }));
  const [directoryId, setDirectoryId] = useState<number | null>(null);

  const [subDirectory, setSubDirectory] = useState("");
  const { data: subDirectoryData } = useDirectorySub(directoryId);
  const subDirectoryOptions: Option[] = (subDirectoryData ?? []).map((item: any) => ({ label: item.title, value: item.id }));

  const [person, setPerson] = useState("consumer");
  const [formError, setFormError] = useState("");
  const [branchOfService, setBranchOfService] = useState("");
  const [militaryStatus, setMilitaryStatus] = useState("");
  const [militaryRank, setMilitaryRank] = useState("");

  const militaryStatusOptions: Option[] = [
    { label: "Active Duty", value: "activeDuty" },
    { label: "Reserves", value: "reserves" },
    { label: "National Guard", value: "nationalGuard" },
    { label: "Veteran", value: "veteran" },
    { label: "Retirees", value: "retirees" },
    { label: "Military Spouse", value: "militarySpouse" },
    { label: "Surviving Spouse", value: "survivingSpouse" },
  ];

  const branchOfServiceOptions: Option[] = [
    { label: "Army", value: "army" },
    { label: "Navy", value: "navy" },
    { label: "Air Force", value: "airForce" },
    { label: "Coast Guard", value: "coastGuard" },
    { label: "Space Force", value: "spaceForce" },
  ];

  const personOptions = [
    { label: "Consumer", value: "consumer" },
    { label: "Professional", value: "professional" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";

    if (type === "signup") {
      if (!firstName) errors.firstName = "First Name is required";
      if (!lastName) errors.lastName = "Last Name is required";
      if (!phone) errors.phone = "Phone is required";
      if (!contactPerson) errors.contactPerson = "Contact person is required";
      if (!confirmPassword) errors.confirmPassword = "Please confirm password";
      if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match";

      if (!branchOfService) errors.branchOfService = "Branch of service is required";
      if (!militaryStatus) errors.militaryStatus = "Military status is required";
      if (!militaryRank) errors.militaryRank = "Military rank is required";

      if (person === "professional") {
        if (!location) errors.location = "Location is required";
        if (!subLocation) errors.subLocation = "Sub location is required";
        if (!directory) errors.directory = "Directory is required";
        if (!subDirectory) errors.subDirectory = "Sub directory is required";
      }

      if (!file) errors.file = "Document upload is required";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});

    const formData = new FormData();
    if (type === "signup") {
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("confirmPassword", confirmPassword);
      formData.append("phone", phone);
      formData.append("contact_person", contactPerson);
      const userTypeId = person === "consumer" ? "3" : "2";
      formData.append("user_type", userTypeId);
      if (userTypeId === "2") {
        formData.append("location", location);
        formData.append("subLocation", subLocation);
        formData.append("directory", directory);
        formData.append("subDirectory", subDirectory);
      }
      formData.append("branch_of_service", branchOfService);
      formData.append("military_status", militaryStatus);
      formData.append("military_rank", militaryRank);
      if (file) formData.append("document", file);
    } else {
      formData.append("email", email);
      formData.append("password", password);
    }

    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto">
      {type === "signup" && (
        <div className="w-full mb-6">
          <RadioGroup
            name="type"
            label=""
            value={person}
            options={personOptions}
            onChange={setPerson}
            error={fieldErrors.person}
          />
        </div>
      )}

      <div className={`grid grid-cols-1 ${type === "signup" ? "md:grid-cols-2" : ""} gap-6`}>
        {type === "signup" && (
          <>
            <Input label="First Name" placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)} error={fieldErrors.firstName} />
            <Input label="Last Name" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)} error={fieldErrors.lastName} />
          </>
        )}
        <Input label="Email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} error={fieldErrors.email} />

        {type === "signup" && (
          <>
            <Input
              label="Phone"
              placeholder="1234567890"
              type="tel"
              value={phone}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, ""); // remove non-digits
                setPhone(numericValue);
              }}
              error={fieldErrors.phone}
            />
            <Input label="Contact Person" placeholder="Contact Person" value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} error={fieldErrors.contactPerson} />
            <Dropdown label="Branch of Service" options={branchOfServiceOptions} value={branchOfService} onChange={setBranchOfService} error={fieldErrors.branchOfService} />
            <Dropdown label="Military Status" options={militaryStatusOptions} value={militaryStatus} onChange={setMilitaryStatus} error={fieldErrors.militaryStatus} />
            <Input label="Military Rank" placeholder="Military Rank" value={militaryRank} onChange={(e) => setMilitaryRank(e.target.value)} error={fieldErrors.militaryRank} />
          </>
        )}
        {type === "signup" && person === "professional" && (
          <>
            <Dropdown
              label="Primary Military Base Serving (location)"
              options={locationOptions}
              value={location}
              onChange={(value) => {
                setLocationId(Number(value));
                setLocation(value);
              }}
              error={fieldErrors.location}
            />
            <Dropdown
              label="Primary Military Base Sub Serving (sub location)"
              options={subLocationOptions}
              value={subLocation}
              onChange={setSubLocation}
              error={fieldErrors.subLocation} />


            <Dropdown label="Professional Main Directory" options={directoryOptions} value={directory} onChange={(value) => {
              setDirectoryId(Number(value));
              setDirectory(value);
            }} error={fieldErrors.directory} />
            <Dropdown label="Professional Main Sub Directory" options={subDirectoryOptions} value={subDirectory} onChange={setSubDirectory} error={fieldErrors.subDirectory} />
          </>
        )}
        <Input label="Password" type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} error={fieldErrors.password} />
        {type === "signup" && (
          <Input label="Confirm Password" type="password" placeholder="********" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} error={fieldErrors.confirmPassword} />
        )}
        {type === "signup" && (
          <div className="md:col-span-2">
            <FileUpload label="Upload Document to Verify Your Military Affiliation" onChange={(selectedFile) => setFile(selectedFile)} error={fieldErrors.file} />
          </div>
        )}
      </div>
      <div className="mt-6">
        <Button type="submit" variant="primary" width="full" >
          {type === "signup" ? "Sign Up" : "Login"}
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
