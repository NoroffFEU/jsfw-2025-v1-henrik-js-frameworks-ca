"use client";

import { useState } from "react";
import type { ContactData } from "../types/contactData";

export default function ContactPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const contactDetails: ContactData = {
      fullName: formData.get("fullName") as string,
      subject: formData.get("subject") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    if (!contactDetails.fullName || contactDetails.fullName.trim().length < 3) {
      setError("Please enter a valid full name.");
      return;
    }

    if (!contactDetails.subject || contactDetails.subject.trim().length < 3) {
      setError("Please enter a valid subject.");
      return;
    }

    if (!contactDetails.email || !/^\S+@\S+\.\S+$/.test(contactDetails.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!contactDetails.message || contactDetails.message.trim().length < 10) {
      setError("Please enter a message with at least 10 characters.");
      return;
    }

    console.log("Contact Details:", contactDetails);
    setSuccess(`Thank you for your message, ${contactDetails.fullName}!`);

    setTimeout(() => {
      setSuccess("");
    }, 5000);

    event.currentTarget.reset();
    setError("");
  };

  return (
    <main className="bg-gray-300 p-6 text-black min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 md:max-w-1/2 mx-auto"
      >
        <h1 className="font-bold">Contact Us</h1>
        <div className="flex flex-col">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="border-2 border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="border-2 border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="border-2 border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send Message
        </button>
      </form>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      {success && (
        <p className="text-green-700 mt-4 text-center font-bold">{success}</p>
      )}
    </main>
  );
}
