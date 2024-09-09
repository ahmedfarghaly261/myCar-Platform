import { Button } from '@/components/ui/button';
import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { FaRegMessage } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
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


function Header() {
    const { user, isSignedIn } = useUser();
    return (

        <div>
            <div className="flex justify-between items-center shadow-sm px-7 p-5 bg-[#eef1fb] ">
                <img src="https://i.ibb.co/VwjNngm/2New.png" alt="" width={180} height={50} />

                <nav class="">
                    <div class="container mx-auto flex justify-between items-center">

                        <div className=" lg:hidden xl:hidden text-4xl bg-[#829efc] text-b rounded-xl  p-5" >
                            <Sheet>
                                <SheetTrigger>  <TiThMenuOutline />  </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        {
                                            isSignedIn ?
                                                <div className=" items-center gap-10 ">

                                                    <div className="">
                                                        <br />
                                                        <SheetTitle className="flex items-center gap-2 border-s-[3px]  border-gray-300   border-2 px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"> <Link to={"/Contact"} > <span className='flex items-center justify-center gap-4 '>     <UserButton className="text-4xl" />   Profile  </span> </Link> </SheetTitle>
                                                    </div>

                                                </div>
                                                :
                                                <SignInButton>
                                                    <Button className="text-xl w-[150px] hover:scale-110"> Sign In </Button>
                                                </SignInButton>
                                        }
                                        <br />
                                        <SheetTitle className="flex items-center gap-2 border-s-[3px] border-blue-500 bg-blue-50 px-4 py-3 text-blue-700">
                                            <Link to={"/"} className=''>
                                                <span className='flex items-center justify-center'><IoIosHome className=' m-2 ' /> Home </span>
                                            </Link>
                                        </SheetTitle>
                                        <SheetTitle className="flex items-center gap-2 border-s-[3px]  border-2 px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700">
                                            <Link  >
                                                <span className='flex items-center justify-center'><FcAbout className='m-2' /> About </span>
                                            </Link>
                                        </SheetTitle>
                                        <SheetTitle className="flex items-center gap-2 border-s-[3px]  border-2 px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700">

                                            <Link to={"/Contact"} >
                                                <span className='flex items-center justify-center '><FaRegMessage className='m-2' />  Contact</span>
                                            </Link>
                                        </SheetTitle>

                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>

                        <ul id="nav-menu" className="hidden lg:flex space-x-4 gap-7 text-xl">


                            <li>
                                <a className="relative   group  py-1.5 px-2.5 text-gray-600 font-bold hover:text-indigo-600 ">
                           
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span >  <Link to={"/"}  >   Home </Link>
                                </a>
                            </li >
                            <li>
                                <a className=" relative   group  py-1.5 px-2.5 text-gray-600 font-bold hover:text-indigo-600">
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>  <Link to={"/"}>About </Link>
                                </a>
                            </li >
                            <li>
                                <a className=" relative   group  py-1.5 px-2.5 text-gray-600 font-bold hover:text-indigo-600">
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all"></span>  <Link to={"/Contact"}> Contact </Link>
                                </a>
                            </li >

                            {/* <li><a href="#" class="text-black hover:text-gray-400"> <Link to={"/"}>Home </Link>  </a></li>
                            <li><a href="#" class="text-black hover:text-gray-400">About </a> </li>
                            <li><a href="#" class="text-black hover:text-gray-400"> <Link to={"/Contact"}> Contact </Link>    </a></li> */}

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

export default Header

