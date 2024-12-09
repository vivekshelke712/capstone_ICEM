import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add logic to handle form submission
    };

    return (
        <>
            <section className="bg-blue-50 text-black" id="contact">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p className="text-base font-semibold uppercase tracking-wide text-black">
                                Contact
                            </p>
                            <h2 className="font-heading mb-4 font-bold tracking-tight text-black text-3xl sm:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                                connect@aidbridge.com
                            </p>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div className="h-full pr-6">
                                <p className="mt-3 mb-12 text-lg text-black">
                                    Need help with Aidbridge ? Connect with us for personalized support and
                                    partnership opportunities. Our team is here to assist you every step of the way.
                                </p>
                            </div>
                            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                                <form id="contactForm" onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                            />
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your email address"
                                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                            />
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Write your message..."
                                                rows="5"
                                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
