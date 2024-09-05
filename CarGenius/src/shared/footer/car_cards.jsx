import React from 'react'
import { BsFuelPumpFill } from "react-icons/bs";
import { IoIosSpeedometer } from "react-icons/io";
import { GiGearStick } from "react-icons/gi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Car_cards({ car }) {
    return (
        <div>
            <div className=" hover:scale-105 shadow-sm" >
                <h2 className='absolute m-2 bg-green-800 text-white p-2 rounded-lg'>NEW</h2>
                <img src={car?.img} alt="" width={400} height={250}
                    className='rounded-t-xl border'
                />
                <h2 className='font-bold text-2xl mb-2 p-5 uppercase'>{car?.name}</h2>
                <div className="p-5 border">
                    <div className="grid grid-cols-3 mt-5 ">
                        <div className="text-3xl">
                            <BsFuelPumpFill />
                        </div>
                        <div className="items-center">
                            <IoIosSpeedometer className='text-4xl mx-1 ' />
                            <h2 className='text-xl my-2 ' >{car?.speed}</h2>
                        </div>
                        <div className="items-center">
                            <GiGearStick className='text-4xl mx-1 ' />
                            <h2 className='text-xl my-2 '>{car?.gear}</h2>
                        </div>
                    </div>
                    <div className=" my-5 grid grid-cols-2">
                        <h2 className='font-bold text-2xl'>{car?.price}</h2>
                        <h2 className='my- text-lg text-blue-600 font-bold  '><a href=" " className='text-center '>  <Link to={"/card_details1"}>view details <FaExternalLinkAlt className='' /> </Link>  </a></h2>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Car_cards
