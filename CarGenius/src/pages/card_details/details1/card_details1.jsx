import Footer from '@/shared/footer/footer'
import Header from '@/shared/header/header'
import { FaCartShopping } from "react-icons/fa6";
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
            <div className="">
                <div className=" border p-10 px-20  ">
                    <h1 className='text-4xl font-bold' >BMW X6</h1>

                </div>
                <br />
                <div className=" mx-20   flex justify-center  items-center ">
                    <Carousel className="">
                        <CarouselContent>
                            <CarouselItem> < img className='lg:mx-64' src="../../../../public/images (2).jpeg" width={1000} height={500} alt="" /> </CarouselItem>
                            <CarouselItem> < img className='lg:mx-64' src="../../../../public/images (2).jpeg" width={1000} height={500} alt="" /> </CarouselItem>
                            <CarouselItem>...</CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <br />
                <div className="mx-10 sm:w-[200px]  lg:w-[400px] xl:w-[500px]">
                    <a
                        className="group flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring sm:[150px]"
                        href="#"
                    >
                        <span
                            className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500 "
                        >
                            <div className="flex gap-4 text-2xl sm:w-[150px]">
                                BUY <span className='my-1'><FaCartShopping /> </span>
                            </div>
                            <span className='my-12 text-xl'> 100000 L.E </span>
                        </span>

                        <span
                            className="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500"
                        >
                            <svg
                                className="size-5 rtl:rotate-180"
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
                        </span>
                    </a>
<br />
                   
                </div>
                <br />
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                    <div className="h-auto rounded-lg bg-gray-200">
                        <h1 className='p-4 text-4xl font-bold'> Car Overview</h1>
                        <div className="p-10 text-xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore perspiciatis, quibusdam alias sed id numquam? Temporibus explicabo nulla dolorem minus, sunt facere repellat beatae, est eum, magnam architecto nobis nihil?
                            <br />
                            <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore perspiciatis, quibusdam alias sed id numquam? Temporibus explicabo nulla dolorem minus, sunt facere repellat beatae, est eum, magnam architecto nobis nihil?  <br />
                            <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore perspiciatis, quibusdam alias sed id numquam? Temporibus explicabo nulla dolorem minus, sunt facere repellat beatae, est eum, magnam architecto nobis nihil?
                        </div>



                    </div>
                    <div className="h-32 rounded-lg bg-gray-200">

                        <div className="overflow-x-auto rounded-lg border border-gray-200">
                            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">

                                <h2 className='text-2xl font-bold text-center'>  Car Properties </h2>
                                <tbody className="divide-y divide-gray-200 ">
                                    <tr className='py-10'>
                                        <td className="whitespace-nowrap px-4 py-10 font-medium text-gray-900"> BMW  X6</td>
                                        <td className="whitespace-nowrap px-4 py-10 text-gray-700">24/05/2022</td>

                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-10 font-medium text-gray-900">model: 2022</td>
                                        <td className="whitespace-nowrap px-4 py-10 text-gray-700"> cairo  </td>
                                        <td className="whitespace-nowrap px-4 py-10 text-gray-700"> </td>

                                    </tr>

                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-10 font-medium text-gray-900">petrol </td>
                                        <td className="whitespace-nowrap px-4 py-10 text-gray-700">automatic</td>


                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-4 py-10 font-medium text-gray-900">3 year leucines </td>


                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>






            {/* <div className="">
                <Footer />
            </div> */}
        </>
    )
}

export default Card_details1
