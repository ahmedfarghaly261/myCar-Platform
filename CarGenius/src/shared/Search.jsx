import React from 'react'
import { FaSearch } from "react-icons/fa";


function Search() {
    return (
        <div>
            <div className="flex text-[60px]">
                 <span className=''> <input className='rounded-3xl ' type="search" placeholder /> </span> 
                  <span className='p-5 rounded-e-3xl bg-[#0b57d0] h-22 text-white'  >  <FaSearch />  </span>
            </div>
        </div>
    )
}

export default Search
