"use client";

import React, { useEffect, useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import FileUpload from "../ui/FileUpload";
import RadioGroup from "../ui/RadioGroup";
import Dropdown from "../ui/Dropdown";
import { useDirectory, useDirectorySub, useLocation, useLocationSub } from "@/lib/query/Query";
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



  // ----------------------------- location start -----------------------------
  const [location, setLocation] = useState("");

  const { data: locationData, isLoading: isLoadingLocation } = useLocation();

  const locationOptions: Option[] = isLoadingLocation || error
    ? [
      { label: "Admin", value: "admin" },
      { label: "User", value: "user" },
      { label: "Guest", value: "guest" },
    ]
    : locationData.map((location: any) => ({
      label: location.location,
      value: location.id
    }));


  const [locationId, setLocationId] = useState<number | null>(null);


  // ----------------------------- sub location start -----------------------------
  const [subLocation, setSubLocation] = useState("");

  const { data: subLocationData, isLoading: isLoadingSubLocation } = useLocationSub(locationId ?? 0);
  console.log("subLocationData", subLocationData);
  const subLocationOptions: Option[] = (subLocationData ?? []).map((item: any) => ({
    label: item.city,
    value: item.id,
  }));


  // ------------------------------------ directory start ------------------------------------

  const [directory, setDirectory] = useState("");
  const { data: directoryData, isLoading: isLoadingDirectory } = useDirectory();

  const directoryOptions: Option[] = isLoadingDirectory || error
    ? [
      { label: "Admin", value: "admin" },
      { label: "User", value: "user" },
      { label: "Guest", value: "guest" },
    ]
    : directoryData.map((location: any) => ({
      label: location.title,
      value: location.id
    }));


  const [directoryId, setDirectoryId] = useState<number | null>(null);

  console.log("directoryId", directoryId);

  // ------------------------------------ directory sub start ------------------------------------
  const [subDirectory, setSubDirectory] = useState("");


      const { data: subDirectoryData, isLoading: isLoadingSubDirectory } = useDirectorySub(directoryId);
  console.log("subDirectoryData", subDirectoryData);
  const subDirectoryOptions: Option[] = (subDirectoryData ?? []).map((item: any) => ({
    label: item.title,
    value: item.id,
  }));










  // ---------------------------



  const [person, setPerson] = useState("consumer");
  const [formError, setFormError] = useState("");

  const [branchOfService, setBranchOfService] = useState("")
  const [militaryStatus, setMilitaryStatus] = useState("")

  const [militaryRank, setMilitaryRank] = useState("")



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


  const SubDirectoryOptions: Option[] = [
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


        <div className={`grid md:grid-cols-2 md:col-span-2 gap-6 `}>



          {type === "signup" && person === "professional" && (
            <>
              <Dropdown
                label="Primary Military Base Serving (location)"
                options={locationOptions}
                value={location}
                onChange={(value) => {
                  setLocationId(Number(value));  // for useLocationSub
                  setLocation(value);            // for controlled dropdown value
                }}
              />
              <Dropdown
                label="Primary Military Base Sub Serving (sub location)"
                options={subLocationOptions}
                value={subLocation}
                onChange={setSubLocation}
              />

              <Dropdown
                label="Professional Main Directory "
                options={directoryOptions}
                value={directory}
                onChange={(value) => {
                  setDirectoryId(Number(value));  // for useDirectorySub
                  setDirectory(value);            // for controlled dropdown value
                }}
              />
              <Dropdown
                label="Professional Main Sub Directory"
                options={subDirectoryOptions}
                value={subDirectory}
                onChange={setSubDirectory}
              />

            </>
          )}
        </div>

        <div className={`grid grid-cols-1 md:col-span-2 gap-6 ${type === "signup" ? "md:grid-cols-2" : ""}`}>
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
