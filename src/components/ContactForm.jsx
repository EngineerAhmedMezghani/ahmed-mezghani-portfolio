// src/components/ContactForm.jsx (or ContactForm.tsx)
// This file contains the React component for your contact form.
// It runs in the user's web browser.

import React, { useState } from 'react';

function ContactForm() {
    // State to hold the form data entered by the user
    const [formData, setFormData] = useState({
        name: '',        // Field for the sender's name
        senderEmail: '', // Field for the sender's email (the person filling the form)
        subject: '',
        message: ''
    });
    // State to manage the status message displayed to the user (e.g., "Sending...", "Success!", "Error!")
    const [status, setStatus] = useState('');

    // Handle changes in form input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value // Update the corresponding field in formData based on input name
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior (page reload)
        setStatus('Sending...'); // Set status to indicate that the email is being sent

        try {
            const response = await fetch("https://email-sender-api-54o3.onrender.com/send-email", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        to: 'ahmed.mezghani@enis.tn',
        subject: `[Portfolio Contact] ${formData.subject}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px;">
                <h2>New Portfolio Contact Message</h2>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.senderEmail}</p>
                <p><strong>Subject:</strong> ${formData.subject}</p>
                <hr />
                <div>${formData.message}</div>
            </div>
        `,
        text: `
            From: ${formData.name}
            Email: ${formData.senderEmail}
            Subject: ${formData.subject}
            
            ${formData.message}
        `
    })
});


            const data = await response.json();

            if (response.ok) {
                setStatus('Message sent successfully! ✅');
                // Clear the form fields after successful submission for a clean state.
                setFormData({ name: '', senderEmail: '', subject: '', message: '' });
                // Clear success message after 5 seconds
                setTimeout(() => setStatus(''), 5000);
            } else {
                throw new Error(data.message || 'Failed to send message');
            }
        } catch (error) {
            // Catch any network errors or other exceptions during the fetch operation.
            console.error('Error:', error);
            const errorMessage = error.message.includes('Failed to fetch') 
                ? 'Unable to connect to email service. Please check your internet connection.'
                : `Failed to send message: ${error.message}`;
            setStatus(`${errorMessage} ❌`);
            // Clear error message after 5 seconds
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Envoyez-moi un message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Sender's Name Input */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg"
                    />
                </div>
                {/* Sender's Email Input */}
                <div>
                    <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700">Your Email:</label>
                    <input
                        type="email"
                        id="senderEmail"
                        name="senderEmail"
                        value={formData.senderEmail}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg"
                    />
                </div>
                {/* Subject Input */}
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg"
                    />
                </div>
                {/* Message Textarea */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg"
                    ></textarea>
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg"
                >
                    Send Email
                </button>
            </form>
            {/* Status Message Display */}
            {status && <p className="mt-4 text-center text-sm text-gray-600">{status}</p>}
        </div>
    );
}

export default ContactForm;