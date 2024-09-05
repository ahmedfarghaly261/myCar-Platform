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

const Sell_section = () => {
    return (<>
<div className="">
    <Header/>
</div>
        <section className='bg-[#eef1fb]'>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <img
                            alt=""
                            src="../../../public/sec2_img.jpg"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Sell Your Car!</h2>
                        
                        <br />


                        <label
                            htmlFor="UserEmail"
                            className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                        >
                            <input
                                type="email"
                                id="UserEmail"
                                placeholder="Email"
                                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                            />

                            <span
                                className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                            >
                                your Name
                            </span>
                        </label>
                        {/* <br /> */}
                        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                            <Label htmlFor="car_model">car model</Label>
                            <Input type="email" id="car_model" placeholder="Email" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                            <Label htmlFor="price"> expected price</Label>
                            <Input type="email" id="price" placeholder="Email" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                            <Label htmlFor="email"> number for Contact</Label>
                            <Input type="email" id="email" placeholder="Email" />
                        </div>


                        <br />
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture"> car Picture</Label>
                            <Input id="picture" type="file" />

                        </div>

                        <br />
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>


                        <div className='mt-5'>
                            <label htmlFor="OrderNotes" className="block text-sm font-medium text-gray-700"> Order notes </label>

                            <textarea
                                id="OrderNotes"
                                className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                                rows="4"
                                placeholder="Enter any additional order notes..."
                            ></textarea>
                        </div>
                        <a
                            href="#"
                            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>

    )
}

export default Sell_section
