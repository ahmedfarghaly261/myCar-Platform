import Header from "@/shared/header/header";
import Footer from "@/shared/footer/footer";
import { FaRocket, FaUsers, FaShieldAlt, FaAward, FaHandshake, FaHeart, FaCheckCircle, FaStar } from "react-icons/fa";

function AboutUs() {
    return (
        <>
            <Header />
            
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">About CarGenius</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-indigo-100">
                        Your trusted partner in finding, buying, and selling the perfect vehicle. We connect buyers and sellers with transparency, trust, and innovation.
                    </p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="w-full bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl shadow-xl p-10 border border-indigo-100">
                        <div className="flex items-center gap-4 mb-6">
                            <FaRocket className="text-5xl text-indigo-600" />
                            <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            To revolutionize the car buying and selling experience by providing a seamless, transparent, and customer-centric platform. We believe everyone deserves access to quality vehicles and fair transactions.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-10 border border-blue-100">
                        <div className="flex items-center gap-4 mb-6">
                            <FaStar className="text-5xl text-blue-600" />
                            <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            To become the leading automotive marketplace where trust, innovation, and exceptional service converge. We aim to empower every buyer and seller with the tools and confidence they need.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition-transform border border-gray-100">
                            <div className="flex justify-center mb-6">
                                <FaShieldAlt className="text-6xl text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trust & Transparency</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We prioritize honest communication and transparent transactions, ensuring every customer feels confident and secure.
                            </p>
                        </div>
                        <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition-transform border border-gray-100">
                            <div className="flex justify-center mb-6">
                                <FaUsers className="text-6xl text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer First</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Your satisfaction is our top priority. We go above and beyond to deliver exceptional service and support at every step.
                            </p>
                        </div>
                        <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition-transform border border-gray-100">
                            <div className="flex justify-center mb-6">
                                <FaAward className="text-6xl text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We strive for excellence in everything we do, from vehicle quality to customer experience and platform innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-extrabold text-center mb-12">Why Choose CarGenius?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="flex items-start gap-4">
                            <FaCheckCircle className="text-3xl text-green-300 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Verified Listings</h3>
                                <p className="text-indigo-100">Every vehicle is thoroughly verified to ensure quality and authenticity.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaCheckCircle className="text-3xl text-green-300 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Wide Selection</h3>
                                <p className="text-indigo-100">Browse thousands of vehicles from trusted sellers across the region.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaCheckCircle className="text-3xl text-green-300 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Easy Process</h3>
                                <p className="text-indigo-100">Our streamlined platform makes buying and selling cars simple and hassle-free.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaCheckCircle className="text-3xl text-green-300 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Fair Pricing</h3>
                                <p className="text-indigo-100">Get the best value with competitive pricing and no hidden fees.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaCheckCircle className="text-3xl text-green-300 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
                                <p className="text-indigo-100">Our dedicated support team is always here to help you succeed.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaCheckCircle className="text-3xl text-green-300 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Secure Transactions</h3>
                                <p className="text-indigo-100">Your security is our priority with encrypted, safe payment options.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Values Section */}
            <section className="w-full bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-12">Built on Trust & Passion</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="flex flex-col items-center">
                            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 p-8 rounded-full mb-6 shadow-lg">
                                <FaHandshake className="text-6xl text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Integrity</h3>
                            <p className="text-gray-600">We conduct business with honesty and ethical standards at all times.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-full mb-6 shadow-lg">
                                <FaHeart className="text-6xl text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Passion</h3>
                            <p className="text-gray-600">Our team is passionate about cars and dedicated to serving you better.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 p-8 rounded-full mb-6 shadow-lg">
                                <FaAward className="text-6xl text-yellow-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Excellence</h3>
                            <p className="text-gray-600">We continuously innovate and improve to deliver the best experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="w-full bg-gradient-to-br from-indigo-700 via-blue-700 to-indigo-800 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-extrabold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-indigo-100 mb-10">
                        Join thousands of satisfied customers who trust CarGenius for their automotive needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="/cars"
                            className="bg-white text-indigo-700 font-bold px-10 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform text-lg"
                        >
                            Browse Cars
                        </a>
                        <a
                            href="/sell"
                            className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-10 py-4 rounded-xl shadow-xl hover:scale-105 transition-transform text-lg"
                        >
                            Sell Your Car
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default AboutUs;