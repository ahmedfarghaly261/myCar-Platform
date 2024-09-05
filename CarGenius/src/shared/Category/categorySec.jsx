import React, { useEffect } from 'react'
import data from '@/data/data'
import Aos from 'aos';
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';


function CategorySec() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <br />
            <div className="mt-56 mx-10">
                <h2 className='font-bold text-4xl text-center'>Browse by type</h2>
                <div className="text-[#4f46e5] text-5xl text-center" >  <b>ـــــــــــــــــ</b> </div>

                <div data-aos="fade-right" className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-7 pz-10">
                    {data.Category.map((Category, index) => (

                        <Link to={"Cars_List"}>
                            <div data-aos="fade-right" className="mt-10 font-bold border rounded-xl flex flex-col p-5 items-center hover:scale-105 shadow-sm translate-x-1 cursor-pointer">
                                <img src={Category.icon} alt="" width={50} />
                                <h2>{Category.name}</h2>
                            </div>
                        </Link>


                    )

                    )

                    }
                </div>
            </div>
        </div>
    )
}

export default CategorySec
