"use client";

import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import FileUpload from "../ui/FileUpload";
import RadioGroup from "../ui/RadioGroup";
import Dropdown from "../ui/Dropdown";

interface Option {
  label: string;
  value: string;
}

const AuthForm = ({ type }: { type: "login" | "signup" }) => {
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

  const [selectedDirectory, setSelectedDirectory] = useState("");
  const [selectedSubDirectory, setSelectedSubDirectory] = useState("");
  const [primaryMilitaryBaseServing, setPrimaryMilitaryBaseServing] = useState("");
  const [professionalMainDirectory, setProfessionalMainDirectory] = useState("");


  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSubLocation, setSelectedSubLocation] = useState("");

  const [person, setPerson] = useState("consumer");
  const [formError, setFormError] = useState("");

  const [branchOfService, setBranchOfService] = useState("")
  const [militaryStatus, setMilitaryStatus] = useState("")

  const [militaryRank, setMilitaryRank] = useState("")

  primaryMilitaryBaseServing

  const primaryMilitaryBaseServingOptions: Option[] = [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Guest", value: "guest" },
  ];

  const militaryStatusOptions: Option[] = [
    { label: "Active Duty", value: "activeDuty" },
    { label: "Reserves", value: "reserves" },
    { label: "National Guard", value: "nationalGuard" },
    { label: "Veteran", value: "veteran" },
    { label: "Retirees", value: "retirees" },
    { label: "Military Spouse", value: "militarySpouse" },
    { label: "Surviving Spouse", value: "survivingSpouse" },
  ]

  const branchOfServiceOptions: Option[] = [
    { label: "Army", value: "army" },
    { label: "Navy", value: "navy" },
    { label: "Air Force", value: "airForce" },
    { label: "Coast Guard", value: "coastGuard" },
    { label: "Space Force", value: "spaceForce" },
  ]

  const directoryOptions: Option[] = [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Guest", value: "guest" },
  ];
  const SubDirectoryOptions: Option[] = [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Guest", value: "guest" },
  ];

  const locationOptions: Option[] = [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Guest", value: "guest" },
  ];

  const subLocationOptions: Option[] = [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Guest", value: "guest" },
  ];

  const personOptions = [
    { label: "Consumer", value: "consumer" },
    { label: "Professional", value: "professional" },
  ];


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please upload a file.");
      return;
    }

    if (!person) {
      setFormError("Please select a person.");
      return;
    }

    setError("");
    console.log("Form submitted", { name, file });
    console.log({ email, password, firstName, lastName, contactPerson, phone });
  };

  return (
    <form onSubmit={handleSubmit} className=" mx-auto ">
      {type === "signup" && (
        <div className="w-full mb-6">
          <RadioGroup
            name="type"
            label=""
            value={person}
            options={personOptions}
            onChange={setPerson}
            error={formError && !person ? formError : undefined}
          />
        </div>
      )}

      <div className={`grid grid-cols-1 ${type === 'signup' ? 'md:grid-cols-2' : ''} gap-6`}>
        {type === "signup" && (
          <>
            <Input
              label="First Name"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              label="Last Name"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </>
        )}

        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />



        {type === "signup" && (
          <Input
            label="Phone"
            type="  "
            placeholder="xxxxx xxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        )}
        {type === "signup" && (
          <>
            <Dropdown
              label="Branch of Service"
              options={branchOfServiceOptions}
              value={branchOfService}
              onChange={setBranchOfService}
            />
            <Dropdown
              label="Military Status"
              options={militaryStatusOptions}
              value={militaryStatus}
              onChange={setMilitaryStatus}
            />
          </>
        )}
        {type === "signup" && (
          <Input
            label="Military Rank"
            placeholder="Military Rank"
            value={militaryRank}
            onChange={(e) => setMilitaryRank(e.target.value)}
          />
        )}




        {type === "signup" && person === "professional" && (
          <>
            <Dropdown
              label="Primary Military Base Serving"
              options={primaryMilitaryBaseServingOptions}
              value={primaryMilitaryBaseServing}
              onChange={setPrimaryMilitaryBaseServing}
            />
            

            <Dropdown
              label="Professional Main Directory"
              options={primaryMilitaryBaseServingOptions}
              value={professionalMainDirectory}
              onChange={setProfessionalMainDirectory}
            />
            {/* <Dropdown
              label="Directory"
              options={directoryOptions}
              value={selectedDirectory}
              onChange={setSelectedDirectory}
            /> */}
            {/* <Dropdown
              label="Sub Directory"
              options={SubDirectoryOptions}
              value={selectedSubDirectory}
              onChange={setSelectedSubDirectory}
            /> */}
            {/* <Dropdown
              label="Location"
              options={locationOptions}
              value={selectedLocation}
              onChange={setSelectedLocation}
            /> */}
            <Dropdown
              label="Sub Location"
              options={subLocationOptions}
              value={selectedSubLocation}
              onChange={setSelectedSubLocation}
            />
          </>
        )}
        <div className={`grid grid-cols-1 md:col-span-2 gap-6 ${type=== "signup" ? "md:grid-cols-2" : ""}`}>
          <Input
            label="Password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {type === "signup" && (
            <Input
              label="Confirm Password"
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
        </div>
        {type === "signup" && (
          <div className="md:col-span-2">
            <FileUpload
              label="Upload Document to Verify Your Military Affiliation"
              onChange={(selectedFile) => setFile(selectedFile)}
              error={error}
            />
          </div>
        )}
      </div>
      <div className="mt-6">
        <Button type="submit" variant="primary" width="full">
          {type === "signup" ? "Sign Up" : "Login"}
        </Button>
      </div>
    </form>
  );
}

export default AuthForm;
