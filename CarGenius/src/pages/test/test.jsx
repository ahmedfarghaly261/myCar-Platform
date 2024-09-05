import React from 'react'
import { RiCoinsFill } from "react-icons/ri";
import { Button } from "@/components/ui/button"
import { MdSell } from "react-icons/md";
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";
function Test() {
    return (
        <div>
            <div className="lg:grid grid-cols-2 mx-20 m-10 gap-6">

                <a href="#" className="group relative block h-64 sm:h-80 lg:h-96 bg-blue-600" >
                    <span className="absolute inset-0 border-2 border-dashed border-black"></span>
                    <div
                        className="relative flex h-full transform items-end border-2 border-black bg-[#e9f2ff]  transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                    >
                        <div
                            className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                        >
                            <div className="text-7xl"> <RiCoinsFill /> </div>

                            <h2 className="mt-4 text-xl font-medium sm:text-2xl">Are You Looking
                                For a Car ?</h2>
                            <h3> We are committed to providing our customers with exceptional service.</h3>
                        </div>

                        <div
                            className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                        >
                            <h3 className="mt-4 text-xl font-medium sm:text-2xl">Buying sec</h3>

                            <p className="mt-4 text-sm sm:text-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                                omnis atque culpa repellendus.
                            </p>
                            <br />
                            <Button className='bg-blue-700 text-white w-40 h-11 text-lg hover:bg-blue-400' variant=""> Get Started   <GoArrowUpRight className='m-3 text-2xl' /></Button>

                        </div>
                    </div>
                </a>

                <a href="#" className="group relative block h-64 sm:h-80 lg:h-96 bg-red-700">
                    <span className="absolute inset-0 border-2 border-dashed border-black"></span>
                    <div
                        className="relative flex h-full transform items-end border-2 border-black bg-[#ffe9f3]  transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                    >
                        <div
                            className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
                        >
                            <div className="text-7xl"><MdSell /></div>

                            <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                            Do You Want to
                            Sell a Car ?
                                </h2>
                            <h3> We are committed to providing our customers with exceptional service.</h3>
                        </div>

                        <div
                            className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                        >
                            <h3 className="mt-4 text-xl font-medium sm:text-2xl">Buying sec</h3>

                            <p className="mt-4 text-sm sm:text-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                                omnis atque culpa repellendus.
                            </p>
                            <br />
                            <Link to={""}> </Link><Button className='bg-red-600 text-white w-40 h-11 text-lg hover:bg-red-500' variant=""> Get Started  <GoArrowUpRight className='m-3 text-2xl' /></Button>
                            
                        </div>
                    </div>
                </a>

            </div>

        </div>

    )
}

export default Test
