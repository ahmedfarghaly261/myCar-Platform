import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"

function Car_section() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <>
            <section className="overflow-hidden bg-[#050b20] sm:grid sm:grid-cols-2 sm:items-center mx-10">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-2xl font-bold text-white md:text-3xl">
                        Online, in-person, everywhere
                        </h2>

                        <p className="hidden text-white md:mt-4 md:block">
                        Choose from thousands of vehicles from multiple brands and buy online with Click & Drive, or visit us at one of our dealerships today.  
                        </p>

                        <div className="mt-4 md:mt-8">
                            <a
                                href="#"
                                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>

                <img
                    alt=""
                      src="https://i.ibb.co/jRbb17m/sec-img.jpg"
                    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                />
            </section>
        </>

    )
}

export default Car_section
