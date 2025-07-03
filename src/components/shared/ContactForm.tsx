"use client"
import React, { useEffect, useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import Textarea from '../ui/Textarea'
import Dropdown from '../ui/Dropdown'
import { useParams } from 'next/navigation'
import { useContact } from '@/lib/mutations/contact'

interface Option {
    label: string;
    value: string;
}

const ContactForm = ({ data }: any) => {


    const params = useParams();

    const { mutate, isPending, isSuccess, isError, error } = useContact();

    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [textarea, setTextarea] = useState("")
    const [destinationCity, setDestinationCity] = useState("")
    const [media, setMedia] = useState("")
    const [userId, setUserId] = useState("")


    useEffect(() => {
        if (data) {
            setFirstName(data.user.first_name || "");
            setLastName(data.user.last_name || "");
            setEmail(data.user.email || "");
            setPhone(data.user.phone || "");
            setCity(data.user.sublocation.city || "");
            setUserId(data.user.id || "");
        }
    }, [data]);


    //     const mediaOptions: Option[] = [
    //     { label: "Active Duty", value: "activeDuty" },
    //     { label: "Reserves", value: "reserves" },
    //     { label: "National Guard", value: "nationalGuard" },
    //     { label: "Veteran", value: "veteran" },
    //     { label: "Retirees", value: "retirees" },
    //     { label: "Military Spouse", value: "militarySpouse" },
    //     { label: "Surviving Spouse", value: "survivingSpouse" },
    //   ];

    const socialOptions: Option[] = [
        { label: "Google", value: "Google" },
        { label: "Facebook", value: "Facebook" },
        { label: "Instagrma", value: "Instagrma" },
        { label: "Linkedin", value: "Linkedin" },
        { label: "TikTok", value: "TikTok" },
        { label: "Base Event", value: "Base Event" },
        { label: "Transition Brief", value: "Transition Brief" },
        { label: "Agent Referral", value: "Agent Referral" },
        { label: "friend Referral", value: "friend Referral" },
        { label: "Skillbridge", value: "Skillbridge" },
        { label: "Youtube", value: "Youtube" },
        { label: "Other", value: "Other" },
    ];


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Temporary object to store validation errors
        const errors: { [key: string]: string } = {};

        // Validation rules
        if (!firstName.trim()) errors.firstName = "First Name is required";
        if (!lastName.trim()) errors.lastName = "Last Name is required";
        if (!phone.trim()) errors.phone = "Phone Number is required";
        if (!email.trim()) errors.email = "Email is required";
        if (!city.trim()) errors.city = "Current City is required";
        // if (!destinationCity.trim()) errors.destinationCity = "Destination City is required";
        if (!media) errors.media = "Please select a media option";
        if (!textarea) errors.textarea = "Additional Comments is required";

        // If errors exist, set them and stop submission
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }

        // Clear any previous errors
        setFieldErrors({});


        const formData = new FormData();
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("current_base", city);
        formData.append("how_did_you_hear", media);
        formData.append("message", textarea);
        formData.append("receiver_id", params.id);
        formData.append("sender_id", userId);

        console.log("📨 FormData entries:");
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        mutate(formData);

    };

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
                            error={fieldErrors.lastName}
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
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            error={fieldErrors.phone}
                        />
                        <Input
                            label="City"
                            placeholder='City'
                            type="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            error={fieldErrors.city}
                        />
                        {/* <Input
                            label="Destination Base/City"
                            placeholder='Destination Base/City'
                            type="city"
                            value={destinationCity}
                            onChange={(e) => setDestinationCity(e.target.value)}
                            error={fieldErrors.destinationCity}
                        /> */}

                        <Dropdown
                            label="How did you hear about us?"
                            options={socialOptions}
                            value={media}
                            onChange={(value) => {

                                setMedia(value);
                            }}
                            error={fieldErrors.media}
                        />
                    </div>

                    <Textarea
                        className="col-span-2"
                        label="Additional Comments"
                        placeholder='Add Comments'
                        value={textarea}
                        onChange={(e) => setTextarea(e.target.value)}
                        error={fieldErrors.textarea}
                    />


                    <Button type="submit" variant="primary" width="full" disabled={isPending}>
                        {isPending ? <p>Submitting...</p> : 'Submit'}
                    </Button>

                    {isSuccess && <p className="text-green-600">Contact successful!</p>}
                    {isError && <p className="text-red-600">{(error as Error).message}</p>}


                </form>
            </div>
        </div>

    )
}

export default ContactForm