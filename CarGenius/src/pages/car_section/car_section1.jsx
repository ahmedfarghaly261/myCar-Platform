import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"

function Car_section() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <div className="hidden lg:block">
                <section>
                    <div className="mx-auto max-w-screen-xl px-4  lg:px-8 py-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-screen">

                            {/* Image Section */}
                            <div className="relative z-10 lg:py-1">
                                <div className="relative h-64 sm:h-80 lg:h-full">
                                    <img
                                        data-aos="fade-up-right"
                                        alt=""
                                        src="https://i.ibb.co/jRbb17m/sec-img.jpg"
                                        className="absolute inset-0 h-full w-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="relative flex items-center bg-gray-100" data-aos="fade-up-left">
                                <span className="hidden lg:block lg:absolute lg:inset-y-0 lg:-start-16 lg:w-16 lg:bg-gray-100"></span>

                                <div className="p-8 sm:p-12 lg:p-24">
                                    <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
                                    </h2>

                                    <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio
                                        deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat
                                        dicta.
                                    </p>

                                    <a
                                        href="#"
                                        className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-10 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                    >
                                        Get in Touch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default Car_section
