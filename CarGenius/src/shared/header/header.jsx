import { Button } from '@/components/ui/button';
import { SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import { FontSizeIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";

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

function Header() {
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
                                    <SheetTitle className="border text-2xl py-2  m-2 bg-slate-300 text-center rounded-lg hover:scale-105 font-bold items-center "> <Link to={"/"} className=''> <IoIosHome className='text- relative top-7 left-24  ' /> Home</Link> </SheetTitle>
                                    <br />
                                    <SheetTitle className="border text-2xl py-2 m-3 bg-slate-300 text-center rounded-lg hover:scale-105 font-bold  "> <Link  > About</Link> </SheetTitle>
                                    <SheetTitle className="border text-2xl py-2 m-3 bg-slate-300 text-center rounded-lg hover:scale-105 font-bold  "> <Link to={"/Contact"} > Contact</Link> </SheetTitle>
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

export default Header

