"use client";

import type { ContactData } from "../types/contactData";

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const contactDetails: ContactData = {
      fullName: formData.get("fullName") as string,
      subject: formData.get("subject") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    if (
      !contactDetails.fullName ||
      !contactDetails.email ||
      !contactDetails.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!contactDetails.fullName || contactDetails.fullName.trim().length < 3) {
      alert("Please enter a valid full name.");
      return;
    }

    if (!contactDetails.subject || contactDetails.subject.trim().length < 3) {
      alert("Please enter a valid subject.");
      return;
    }

    if (!contactDetails.email || !/^\S+@\S+\.\S+$/.test(contactDetails.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!contactDetails.message || contactDetails.message.trim().length < 10) {
      alert("Please enter a message with at least 10 characters.");
      return;
    }

    console.log("Contact Details:", contactDetails);
    alert(`Thank you for your message, ${contactDetails.fullName}!`);
    event.currentTarget.reset();
  };

  return (
    <main className="bg-gray-300 p-6 text-black min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h1>Contact Us</h1>
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
        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}
