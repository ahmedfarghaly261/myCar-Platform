import React from 'react'
import { BsFuelPumpFill } from "react-icons/bs";
import { IoIosSpeedometer } from "react-icons/io";
import { GiGearStick } from "react-icons/gi";
import { FaExternalLinkAlt } from "react-icons/fa";


function Car_cards2({ car2 }) {
    return (
        <div>
            <div className=" hover:scale-105 shadow-sm" >
                <h2 className='absolute m-2 bg-green-800 text-white p-2 rounded-lg'>NEW</h2>
                <img src={car2?.img} alt="" width={400} 
                    className='rounded-t-xl border'
                />
        
                <div className="p-5 border bg-slate-600 rounded-2xl">
                    <h2 className='font-bold text-2xl mt-2 text-white uppercase  text-center py-4 '>{car2?.name}</h2>
                    <div className="grid grid-cols-3 mt-6 gap-10 ">
                        <div className="text-4xl text-white py-4 px-4">

                            <BsFuelPumpFill />
                        </div>
                        <div className="items-center text-white">
                            <IoIosSpeedometer className='text-4xl mx-1  ' />
                            <h2 className='text-xl my-2 ' >{car2?.speed}</h2>
                        </div>
                        <div className="items-center text-white">
                            <GiGearStick className='text-4xl mx-1 ' />
                            <h2 className='text-xl my-2 '>{car2?.gear}</h2>
                        </div>
                    </div>
                    <div className=" my-5 grid grid-cols-2 text-white">
                        <h2 className='font-bold text-2xl'>{car2?.price}</h2>
                        <h2 className='mx-4 text-lg text-blue-400 font-bold  '><a href=" " className='text-center '> view details <FaExternalLinkAlt className='' /> </a></h2>
                    </div>
                </div>

            </div>
            <br />
            <br />
        </div>

    )
}

export default Car_cards2
