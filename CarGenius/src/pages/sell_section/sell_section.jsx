import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Header from '@/shared/header/header'
import Footer from '@/shared/footer/footer'
import { FaUser, FaCar, FaMoneyBillWave, FaPhone, FaImage, FaPalette, FaStickyNote, FaRocket, FaCheckCircle } from "react-icons/fa"

const Sell_section = () => {
    return (
        <>
            <Header />
            <section className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-blue-50 to-white flex items-center justify-center py-16 px-4">
                <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden bg-white border border-indigo-100">
                    {/* Image Section */}
                    <div className="relative h-80 lg:h-full flex items-center justify-center bg-gradient-to-br from-indigo-400 via-blue-400 to-indigo-500 overflow-hidden">
                        <img
                            alt="Sell your car"
                            src="../../../public/sec2_img.jpg"
                            className="absolute inset-0 object-cover w-full h-full opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-indigo-700/30 to-transparent"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
                            <span className="bg-white/90 text-indigo-700 font-bold px-5 py-2 rounded-full shadow-lg mb-4 text-lg">Sell Fast, Sell Smart!</span>
                            <h3 className="text-white text-3xl md:text-4xl font-extrabold drop-shadow-lg mb-2">Get the Best Value</h3>
                            <p className="text-indigo-100 text-base md:text-lg max-w-xs">List your car in minutes and reach thousands of buyers instantly.</p>
                            <div className="mt-6 flex gap-4">
                                <span className="flex items-center gap-2 bg-white/80 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold shadow"><FaCheckCircle className="text-green-500" /> Verified Buyers</span>
                                <span className="flex items-center gap-2 bg-white/80 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold shadow"><FaCheckCircle className="text-green-500" /> Free Listing</span>
                            </div>
                        </div>
                    </div>
                    {/* Form Section */}
                    <div className="flex flex-col justify-center p-8 lg:p-14 bg-gradient-to-br from-white via-indigo-50 to-white">
                        <h2 className="text-4xl font-extrabold text-indigo-700 mb-2 flex items-center gap-3"><FaCar className="text-indigo-400" /> Sell Your Car!</h2>
                        <p className="text-gray-500 mb-8">Fill in the details below and we'll help you find the perfect buyer.</p>
                        <form className="space-y-5">
                            <div className="relative">
                                <Label htmlFor="UserName" className="text-base font-semibold text-gray-700 flex items-center gap-2"><FaUser className="text-indigo-400" /> Your Name</Label>
                                <Input type="text" id="UserName" placeholder="Enter your name" className="mt-2 pl-4 border-indigo-200 focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div className="relative">
                                <Label htmlFor="car_model" className="text-base font-semibold text-gray-700 flex items-center gap-2"><FaCar className="text-indigo-400" /> Car Model</Label>
                                <Input type="text" id="car_model" placeholder="e.g. BMW X6" className="mt-2 pl-4 border-indigo-200 focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="relative">
                                    <Label htmlFor="price" className="text-base font-semibold text-gray-700 flex items-center gap-2"><FaMoneyBillWave className="text-indigo-400" /> Expected Price</Label>
                                    <Input type="number" id="price" placeholder="e.g. 100000" className="mt-2 pl-4 border-indigo-200 focus:ring-2 focus:ring-indigo-400" />
                                </div>
                                <div className="relative">
                                    <Label htmlFor="contact" className="text-base font-semibold text-gray-700 flex items-center gap-2"><FaPhone className="text-indigo-400" /> Contact Number</Label>
                                    <Input type="tel" id="contact" placeholder="e.g. 0123456789" className="mt-2 pl-4 border-indigo-200 focus:ring-2 focus:ring-indigo-400" />
                                </div>
                            </div>
                            <div className="relative">
                                <Label htmlFor="picture" className="text-base font-semibold text-gray-700 flex items-center gap-2"><FaImage className="text-indigo-400" /> Car Picture</Label>
                                <Input id="picture" type="file" className="mt-2 border-indigo-200 focus:ring-2 focus:ring-indigo-400" />
                            </div>
                            <div className="relative">
                                <Label htmlFor="theme" className="text-base font-semibold text-gray-700 flex items-center gap-2"><FaPalette className="text-indigo-400" /> Condition</Label>
                                <Select>
                                    <SelectTrigger className="w-full mt-2 border-indigo-200 focus:ring-2 focus:ring-indigo-400">
                                        <SelectValue placeholder="Choose condition" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="new">New</SelectItem>
                                        <SelectItem value="used">Used</SelectItem>
                                        <SelectItem value="certified">Certified Pre-Owned</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="relative">
                                <Label htmlFor="OrderNotes" className="text-base font-semibold text-gray-700 flex items-center gap-2"><FaStickyNote className="text-indigo-400" /> Additional Notes</Label>
                                <textarea
                                    id="OrderNotes"
                                    className="mt-2 w-full rounded-xl border border-indigo-200 shadow-sm p-4 text-sm focus:ring-2 focus:ring-indigo-400 transition"
                                    rows="3"
                                    placeholder="Enter any additional details about your car..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-4 flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold py-4 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all text-lg"
                            >
                                <FaRocket className="text-xl" /> Submit Listing
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Sell_section
