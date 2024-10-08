
import React, { useEffect } from 'react'
import { FaCarSide } from "react-icons/fa";
import Search from '../Search'
import slider51 from "../../../public/slider51.png"
import Aos from 'aos';
import "aos/dist/aos.css"


function HeroSec() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  
  return (
    <div>
      <div  className="">
        <div className=" flex flex-col items-center p-20 py-30 gap-6 h-[700px] w-full bg-[#eef1fb]  " >
          <h2 data-aos="fade-down" className='text-center text-4xl text-[#4f46e5] grid grid- '><FaCarSide />  <b>welcome in CarGenius <span className='flex text-end'> <center>     </center> </span>  </b> </h2>

          <h2 data-aos="fade-down" className='text-center sm:text-2xl md:text-2xl lg:text-2xl  xl:text-[70px]  '><b >Find Your Dream Car  </b> </h2>
          <h2 data-aos="fade-right" className='text-center text-xl'> Find cars for sell and for rent near you</h2> <br />
          {/* <Search/> */}
          <img data-aos="fade-left" className='mt-10' src="https://i.ibb.co/ggqwYZR/slider51.png" alt="" width={1300} height={250} />
        </div>
      </div>

    </div>
  )
}

export default HeroSec
