import Header from '@/shared/header/header'
import React, { useEffect } from 'react'
import { BsFuelPumpFill } from "react-icons/bs";
import { IoIosSpeedometer } from "react-icons/io";
import { GiGearStick } from "react-icons/gi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import data from "../../data/allCars"
import Aos from 'aos';
import "aos/dist/aos.css"


function Cars_List() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <>

            <div className="">
                <Header />
            </div>
            <div className="text-center text-2xl my-10 font-bold uppercase">
                <h2> all what you need is here </h2>
            </div>

            <div className="flex justify-center mx-5 items-center">
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {data.map((allCars, index) => (
            <div key={index} className="flex justify-center items-center">
                <div data-aos="flip-right">
                    <div className="hover:scale-105 shadow-sm border">
                        <h2 className="absolute m-2 bg-green-800 text-white p-2 rounded-lg">NEW</h2>
                        <img
                            src={allCars.img}
                            alt=""
                            width={400}
                            height={250}
                            className="rounded-t-xl border"
                        />
                        <h2 className="font-bold text-2xl mb-2 p-5 uppercase">{allCars.name}</h2>
                        <div className="p-5 border w-full">
                            <div className="grid grid-cols-3 mt-5">
                                <div className="text-3xl">
                                    <BsFuelPumpFill />
                                </div>
                                <div className="items-center ">
                                    <IoIosSpeedometer className="text-4xl mx-1" />
                                    <h2 className="text-xl my-2">{allCars.speed}</h2>
                                </div>
                                <div className="items-center">
                                    <GiGearStick className="text-4xl mx-1" />
                                    <h2 className="text-xl my-2">{allCars.gear}</h2>
                                </div>
                            </div>
                            <div className="my-5 grid grid-cols-2">
                                <h2 className="font-bold text-2xl">{allCars.price}</h2>
                                <h2 className="text-lg text-blue-600 font-bold">
                                    <Link to="/card_details1" className="text-center">
                                        view details <FaExternalLinkAlt />
                                    </Link>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>



            <br />
            <div className="">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
                <br />
                <br />

            </div>

        </>
    )
}

export default Cars_List
