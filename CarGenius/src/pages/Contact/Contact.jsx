import Header from '@/shared/header/header'
import React from 'react'
import { FaPhone, FaEnvelope, FaMapLocation, FaClock } from 'react-icons/fa6'

function Contact() {
    return (
        <>
            <div className="">
                <Header />
            </div>
            
            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-12 md:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                        <p className="text-lg text-indigo-100">We'd love to hear from you. Let's get in conversation.</p>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="py-12 md:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {/* Phone */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-shadow">
                                <div className="text-indigo-600 text-4xl mb-4 flex justify-center">
                                    <FaPhone />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                                <p className="text-gray-600">+20 (100) 123-4567</p>
                            </div>

                            {/* Email */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-shadow">
                                <div className="text-indigo-600 text-4xl mb-4 flex justify-center">
                                    <FaEnvelope />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                                <p className="text-gray-600">hello@cargenius.com</p>
                            </div>

                            {/* Location */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-shadow">
                                <div className="text-indigo-600 text-4xl mb-4 flex justify-center">
                                    <FaMapLocation />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                                <p className="text-gray-600">Cairo, Egypt</p>
                            </div>

                            {/* Hours */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-shadow">
                                <div className="text-indigo-600 text-4xl mb-4 flex justify-center">
                                    <FaClock />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
                                <p className="text-gray-600">9 AM - 6 PM, Daily</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Contact Section */}
                <section className="py-12 md:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Image */}
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                <img
                                    alt="CarGenius Logo"
                                    src="../../../public/logo.png"
                                    className="w-full h-96 object-cover bg-white"
                                />
                            </div>

                            {/* Right Side - Form */}
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to CarGenius 🚗</h2>
                                <p className="text-xl text-indigo-600 font-semibold mb-4">How we can help you</p>
                                <p className="text-gray-600 text-lg mb-8">
                                    Have questions about our vehicles or services? We're here to help! Fill out the form below and our team will get back to you shortly.
                                </p>

                                <form className="space-y-6">
                                    {/* Name Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="FirstName" className="block text-sm font-semibold text-gray-900 mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="FirstName"
                                                name="first_name"
                                                placeholder="John"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="LastName" className="block text-sm font-semibold text-gray-900 mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="LastName"
                                                name="last_name"
                                                placeholder="Doe"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="Email" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="Email"
                                            name="email"
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="Subject" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="Subject"
                                            name="subject"
                                            placeholder="How can we help?"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="Message" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="Message"
                                            name="message"
                                            placeholder="Tell us more about your inquiry..."
                                            rows="5"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent resize-none"
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Contact
