import Footer from '@/shared/footer/footer'
import Header from '@/shared/header/header'
import { FaCartShopping, FaCheck, FaGasPump, FaGears, FaShield, FaLocationDot } from "react-icons/fa6";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import React from 'react'

function Card_details1() {
    return (
        <>
            <div className="">
                <Header />
            </div>
            
            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header Section */}
                    <div className="mb-8 md:mb-12">
                        <h1 className='text-5xl md:text-6xl font-bold text-gray-900'>BMW X6</h1>
                        <p className='text-lg text-gray-500 mt-2'>Premium SUV Excellence</p>
                    </div>

                    {/* Image Carousel Section */}
                    <div className="mb-8 md:mb-12 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                        <div className="flex justify-center items-center py-8 px-4 md:px-8 bg-gradient-to-b from-gray-100 to-white">
                            <Carousel className="w-full max-w-4xl">
                                <CarouselContent>
                                    <CarouselItem> 
                                        <img 
                                            className='w-full h-96 object-cover rounded-xl' 
                                            src="../../../../public/images (2).jpeg" 
                                            alt="BMW X6 Front View" 
                                        /> 
                                    </CarouselItem>
                                    <CarouselItem> 
                                        <img 
                                            className='w-full h-96 object-cover rounded-xl' 
                                            src="../../../../public/images (2).jpeg" 
                                            alt="BMW X6 Side View" 
                                        /> 
                                    </CarouselItem>
                                    <CarouselItem> 
                                        <img 
                                            className='w-full h-96 object-cover rounded-xl' 
                                            src="../../../../public/images (2).jpeg" 
                                            alt="BMW X6 Detail View" 
                                        /> 
                                    </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious className="left-4 hover:bg-indigo-600 hover:border-indigo-600" />
                                <CarouselNext className="right-4 hover:bg-indigo-600 hover:border-indigo-600" />
                            </Carousel>
                        </div>
                    </div>

                    {/* Price and CTA Section */}
                    <div className="mb-8 md:mb-12 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl shadow-xl p-8 md:p-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <p className='text-indigo-100 text-sm font-semibold uppercase tracking-wide mb-2'>Price</p>
                                <p className='text-4xl md:text-5xl font-bold text-white'>100,000 L.E</p>
                                <p className='text-indigo-100 text-sm mt-2'>All-inclusive, no hidden fees</p>
                            </div>
                            <button
                                className="group flex items-center justify-center gap-3 bg-white text-indigo-600 rounded-xl px-8 py-4 font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
                                href="#"
                            >
                                <FaCartShopping className="text-xl" />
                                <span>Buy Now</span>
                                <svg
                                    className="size-5 ml-2 transition-transform group-hover:translate-x-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 md:mb-12">
                        
                        {/* Car Overview Section */}
                        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 px-8 py-6 border-b border-gray-100">
                                <h2 className='text-3xl font-bold text-gray-900'>Car Overview</h2>
                            </div>
                            <div className="p-8 md:p-10 text-gray-700 leading-relaxed space-y-6">
                                <p className='text-lg'>
                                    Experience the pinnacle of luxury and performance with the BMW X6. This exceptional SUV combines stunning elegance with cutting-edge technology and unmatched driving dynamics. Every detail has been meticulously crafted to deliver an unforgettable driving experience.
                                </p>
                                <p className='text-lg'>
                                    The BMW X6 features premium materials, advanced safety systems, and innovative infotainment technology. Its powerful engine delivers exhilarating performance while maintaining exceptional fuel efficiency. Perfect for those who demand the very best.
                                </p>
                                <p className='text-lg'>
                                    Discover luxury redefined with spacious interiors, panoramic sunroof, premium leather seating, and state-of-the-art climate control. The BMW X6 is not just a vehicle—it's a statement of sophistication and excellence.
                                </p>
                            </div>
                        </div>

                        {/* Car Properties Section */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 px-8 py-6 border-b border-gray-100">
                                <h2 className='text-2xl font-bold text-gray-900'>Key Specs</h2>
                            </div>
                            <div className="p-6">
                                <div className="space-y-5">
                                    {/* Model */}
                                    <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
                                        <div className="text-indigo-600 text-xl mt-1">
                                            <FaCheck />
                                        </div>
                                        <div>
                                            <p className='text-gray-600 text-sm font-semibold uppercase tracking-wide'>Model</p>
                                            <p className='text-gray-900 font-bold text-lg'>BMW X6 2022</p>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
                                        <div className="text-indigo-600 text-xl mt-1">
                                            <FaLocationDot />
                                        </div>
                                        <div>
                                            <p className='text-gray-600 text-sm font-semibold uppercase tracking-wide'>Location</p>
                                            <p className='text-gray-900 font-bold text-lg'>Cairo</p>
                                        </div>
                                    </div>

                                    {/* Fuel Type */}
                                    <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
                                        <div className="text-indigo-600 text-xl mt-1">
                                            <FaGasPump />
                                        </div>
                                        <div>
                                            <p className='text-gray-600 text-sm font-semibold uppercase tracking-wide'>Fuel Type</p>
                                            <p className='text-gray-900 font-bold text-lg'>Petrol</p>
                                        </div>
                                    </div>

                                    {/* Transmission */}
                                    <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
                                        <div className="text-indigo-600 text-xl mt-1">
                                            <FaGears />
                                        </div>
                                        <div>
                                            <p className='text-gray-600 text-sm font-semibold uppercase tracking-wide'>Transmission</p>
                                            <p className='text-gray-900 font-bold text-lg'>Automatic</p>
                                        </div>
                                    </div>

                                    {/* Warranty */}
                                    <div className="flex items-start gap-4">
                                        <div className="text-indigo-600 text-xl mt-1">
                                            <FaShield />
                                        </div>
                                        <div>
                                            <p className='text-gray-600 text-sm font-semibold uppercase tracking-wide'>Warranty</p>
                                            <p className='text-gray-900 font-bold text-lg'>3 Years Coverage</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl shadow-lg border border-indigo-100 p-8 md:p-10 mb-8 md:mb-12">
                        <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>Premium Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                'Panoramic Sunroof',
                                'Premium Leather Interior',
                                'Advanced Climate Control',
                                'Touchscreen Infotainment',
                                'Adaptive Suspension',
                                'Premium Sound System',
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-indigo-600 text-lg">
                                        <FaCheck />
                                    </div>
                                    <span className='text-gray-700 font-medium'>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>



            {/* <div className="">
                <Footer />
            </div> */}
        </>
    )
}

export default Card_details1
