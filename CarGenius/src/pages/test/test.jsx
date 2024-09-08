

import { Button } from '@/components/ui/button';
import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import { FontSizeIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { FaRegMessage } from "react-icons/fa6";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { TiThMenuOutline } from "react-icons/ti";


import React from 'react'
import Contact from '@/pages/Contact/Contact';

function Test() {
    const { user, isSignedIn } = useUser();
    return (

        <div>
            <div className="flex justify-between items-center shadow-sm px-7 p-5 bg-[#eef1fb] ">
                <img src="https://i.ibb.co/NnHQmsB/logo.png" alt="" width={100} height={50} />

                <nav class="">
                    <div class="container mx-auto flex justify-between items-center">

                        <div className=" lg:hidden xl:hidden text-4xl bg-[#829efc] text-b rounded-xl  p-5" >     <Sheet>
                            <SheetTrigger>  <TiThMenuOutline />  </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    {
                                        isSignedIn ?
                                            <div className="flex items-center gap-5 ">
                                                <UserButton className="text-2xl" />

                                                <h2><a href=""> profile</a></h2>
                                            </div>
                                            :
                                            <Button className="text-xl w-[150px] hover:scale-110"> Sign In </Button>

                                    }
                                    <br />
                               
                                    <SheetTitle className="flex items-center gap-2 border-s-[3px] border-blue-500 bg-blue-50 px-4 py-3 text-blue-700"> <Link to={"/"} className=''> <span className='flex items-center justify-center'><IoIosHome className=' m-2 ' /> Home </span> </Link> </SheetTitle>
                                    <SheetTitle className="flex items-center gap-2 border-s-[3px]  border-2 px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"> <Link  > <span className='flex items-center justify-center'><FcAbout className='m-2' /> About </span>  </Link> </SheetTitle>
                                    <SheetTitle className="flex items-center gap-2 border-s-[3px]  border-2 px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"> <Link to={"/Contact"} > <span className='flex items-center justify-center '><FaRegMessage className='m-2' />  Contact</span> </Link> </SheetTitle>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet> </div>

                        <ul id="nav-menu" class="hidden lg:flex space-x-4 gap-10 text-xl">

                            <li><a href="#" class="text-black hover:text-gray-400"> <Link to={"/"}>Home </Link>  </a></li>
                            <li><a href="#" class="text-black hover:text-gray-400">About</a></li>
                            <li><a href="#" class="text-black hover:text-gray-400"> <Link to={"/Contact"}> Contact </Link>    </a></li>

                            {
                                isSignedIn ?
                                    <div className="flex items-center gap-5 ">
                                        <UserButton />
                                        <h2><a href=""> profile</a></h2>

                                    </div>
                                    :
                                    <SignInButton>
                                        <Button className="text-xl w-[150px] hover:scale-110"> Sign In </Button>
                                    </SignInButton>
                            }

                        </ul>

                    </div>

                </nav>

            </div>
        </div>
    )
}

export default Test





































// import React from 'react'
// import { RiCoinsFill } from "react-icons/ri";
// import { Button } from "@/components/ui/button"
// import { MdSell } from "react-icons/md";
// import { Link } from 'react-router-dom';
// import { GoArrowUpRight } from "react-icons/go";
// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "@/components/ui/sheet"
// import { UserButton } from '@clerk/clerk-react';
// function Test() {
//     return (
//         <div>
//             {/* <div className="lg:grid grid-cols-2 mx-20 m-10 gap-6">

//                 <a href="#" className="group relative block h-64 sm:h-80 lg:h-96 bg-blue-600" >
//                     <span className="absolute inset-0 border-2 border-dashed border-black"></span>
//                     <div
//                         className="relative flex h-full transform items-end border-2 border-black bg-[#e9f2ff]  transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
//                     >
//                         <div
//                             className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
//                         >
//                             <div className="text-7xl"> <RiCoinsFill /> </div>

//                             <h2 className="mt-4 text-xl font-medium sm:text-2xl">Are You Looking
//                                 For a Car ?</h2>
//                             <h3> We are committed to providing our customers with exceptional service.</h3>
//                         </div>

//                         <div
//                             className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
//                         >
//                             <h3 className="mt-4 text-xl font-medium sm:text-2xl">Buying sec</h3>

//                             <p className="mt-4 text-sm sm:text-base">
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
//                                 omnis atque culpa repellendus.
//                             </p>
//                             <br />
//                             <Button className='bg-blue-700 text-white w-40 h-11 text-lg hover:bg-blue-400' variant=""> Get Started   <GoArrowUpRight className='m-3 text-2xl' /></Button>

//                         </div>
//                     </div>
//                 </a>

//                 <a href="#" className="group relative block h-64 sm:h-80 lg:h-96 bg-red-700">
//                     <span className="absolute inset-0 border-2 border-dashed border-black"></span>
//                     <div
//                         className="relative flex h-full transform items-end border-2 border-black bg-[#ffe9f3]  transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
//                     >
//                         <div
//                             className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
//                         >
//                             <div className="text-7xl"><MdSell /></div>

//                             <h2 className="mt-4 text-xl font-medium sm:text-2xl">
//                             Do You Want to
//                             Sell a Car ?
//                                 </h2>
//                             <h3> We are committed to providing our customers with exceptional service.</h3>
//                         </div>

//                         <div
//                             className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
//                         >
//                             <h3 className="mt-4 text-xl font-medium sm:text-2xl">Buying sec</h3>

//                             <p className="mt-4 text-sm sm:text-base">
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
//                                 omnis atque culpa repellendus.
//                             </p>
//                             <br />
//                             <Link to={""}> </Link><Button className='bg-red-600 text-white w-40 h-11 text-lg hover:bg-red-500' variant=""> Get Started  <GoArrowUpRight className='m-3 text-2xl' /></Button>
                            
//                         </div>
//                     </div>
//                 </a>

//             </div> */}







// <> 
//   <ul>
//                 <li>
//                     <a
//                         href="#"
//                         className="flex items-center gap-2 border-s-[3px] border-blue-500 bg-blue-50 px-4 py-3 text-blue-700"
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="size-5 opacity-75"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//                             />
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                         </svg>

//                         <span className="text-sm font-medium"> General </span>
//                     </a>
//                 </li>

//                 <li>
//                     <a
//                         href="#"
//                         className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="size-5 opacity-75"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                             />
//                         </svg>

//                         <span className="text-sm font-medium"> Teams </span>
//                     </a>
//                 </li>

//                 <li>
//                     <a
//                         href="#"
//                         className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="size-5 opacity-75"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
//                             />
//                         </svg>

//                         <span className="text-sm font-medium"> Billing </span>
//                     </a>
//                 </li>

//                 <li>
//                     <a
//                         href="#"
//                         className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="size-5 opacity-75"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
//                             />
//                         </svg>

//                         <span className="text-sm font-medium"> Invoices </span>
//                     </a>
//                 </li>

//                 <li>
//                     <a
//                         href="#"
//                         className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="size-5 opacity-75"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                             />
//                         </svg>

//                         <span className="text-sm font-medium"> Account </span>
//                     </a>
//                 </li>
//             </ul>

// </>
           
         


