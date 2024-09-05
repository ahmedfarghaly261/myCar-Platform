
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
      {/* <br /> */}
      <div  className="">
        <div className=" lg:w-[100%] flex flex-col items-center p-20 py-30 gap-6 h-[700px] w-full bg-[#eef1fb]  " >
          <h2 className='text-center text-4xl text-[#4f46e5] grid grid- '><FaCarSide />  <b>welcome in CarGenius <span className='flex text-end'> <center>     </center> </span>  </b> </h2>

          <h2 className='text-center lg:text-[200px] xl:text-[70px]  '><b >Find Your Dream Car  </b> </h2>
          <h2 className='text-center text-xl'> Find cars for sale and for rent near you</h2> <br />
          {/* <Search/> */}
          <img data-aos="fade-left" className='mt--10' src={slider51} alt="" width={1700} height={250} />
        </div>
      </div>

    </div>
  )
}

export default HeroSec
