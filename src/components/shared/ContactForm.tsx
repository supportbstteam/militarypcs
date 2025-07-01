"use client"
import React, { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import Textarea from '../ui/Textarea'
import Dropdown from '../ui/Dropdown'

interface Option {
  label: string;
  value: string;
}

const ContactForm = () => {
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [currentCity, setCurrentCity] = useState("")
    const [textarea, setTextarea] = useState("")
    const [destinationCity, setDestinationCity] = useState("")
    const [media, setMedia] = useState("")

    const mediaOptions: Option[] = [
    { label: "Active Duty", value: "activeDuty" },
    { label: "Reserves", value: "reserves" },
    { label: "National Guard", value: "nationalGuard" },
    { label: "Veteran", value: "veteran" },
    { label: "Retirees", value: "retirees" },
    { label: "Military Spouse", value: "militarySpouse" },
    { label: "Surviving Spouse", value: "survivingSpouse" },
  ];


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errors: { [key: string]: string } = {}
        if (!firstName) errors.firstName = "First Name required"
        if (!lastName) errors.lastName = "Last Name required"
        if (!phone) errors.phone = "Phone Number required"
        if (!email) errors.email = "Email is required"
        if (!currentCity) errors.currentCity = "Current City is required"
        if (!destinationCity) errors.destinationCity = "Destination City is required"
        if (!media) errors.media = "Please select an option"
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }

        setFieldErrors({});
    }
    return (
            <div className="max-w-[1420px] mx-auto flex items-center justify-center py-12 flex-col ">
                <div className="w-fit bg-white shadow-md rounded-md p-6 " >
                    <h3>Contact Form</h3>
                    <form onSubmit={handleSubmit} >
                        <div className='grid gap-6 grid-cols-2'>

                        <Input
                            label="First Name"
                            placeholder='John Wick'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            error={fieldErrors.firstName}
                        />
                        <Input
                            label="Last Name"
                            placeholder='John Wick'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            error={fieldErrors.firstName}
                        />
                        <Input
                            label="Email"
                            placeholder='John_Wick@gmail.com'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={fieldErrors.email}
                        />
                        <Input
                            label="Phone"
                            placeholder='+1 555 554-4444'
                            type="phone"
                            value={email}
                            onChange={(e) => setPhone(e.target.value)}
                            error={fieldErrors.phone}
                        />
                        <Input
                            label="Current Base/City"
                            placeholder='Current Base/City'
                            type="city"
                            value={currentCity}
                            onChange={(e) => setCurrentCity(e.target.value)}
                            error={fieldErrors.currentCity}
                        />
                        <Input
                            label="Destination Base/City"
                            placeholder='Destination Base/City'
                            type="city"
                            value={destinationCity}
                            onChange={(e) => setDestinationCity(e.target.value)}
                            error={fieldErrors.destinationCity}
                        />
                        <Textarea
                            label="Additional Comments"
                            placeholder='Add Comments'
                            value={textarea}
                            onChange={(e) => setTextarea(e.target.value)}
                        />
                        <Dropdown
                            label="Primary Military Base Serving (location)"
                            options={mediaOptions}
                            value={media}
                            onChange={(value) => {
             
                                setMedia(value);
                            }}
                            error={fieldErrors.media}
                        />
                        </div>


                        <Button type='submit' variant='primary' width='full'>
                            Submit
                        </Button>
                    </form>
                </div>
            </div>

    )
}

export default ContactForm