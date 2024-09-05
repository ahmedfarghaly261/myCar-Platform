import { Button } from '@/components/ui/button'
// import Cars_card from '@/shared/cars_card1/cars_card'
import CategorySec from '@/shared/Category/categorySec'
import Footer from '@/shared/footer/footer'
import Header from '@/shared/header/header'
import HeroSec from '@/shared/heroSec/heroSec'
import Search from '@/shared/Search'
import React, { useEffect } from 'react'
import CarItem from '../carItem/carItem'
import Car_section from '../car_section/car_section1'
import Card_section2 from '../car_section/card_section2'
import CarItem2 from '../carItem/carItem2'
import Numbers_sec from '../numbers_sec/numbers_sec'
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import Sell_section from '../sell_section/sell_section'
import Sell_cards from '../sell_section/sell_cards'
import Headroom from 'react-headroom'
import Reviews_sec from '../reviews_sec/reviews_sec'
import Aos from 'aos';
import "aos/dist/aos.css"






function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    const { user, isSignedIn } = useUser();
    return (
        <div>

            <Headroom>
                <div className="">
                    <Header />
                </div>
            </Headroom>


            <div className="w-">
                <HeroSec />
                <br />
            </div>
            <div className="">
                <CategorySec />
            </div>

            {/* if sign in  */}

            <div className="">
                <br />
                <br />
                <h1 className='text-5xl font-bold text-center my-5'>sell your car
                    <div className="text-[#4f46e5] text-5xl text-center" >  <b>ـــــــــــــــــ</b> </div>
                </h1>

                {isSignedIn ?
                    <div className=" ">
                        <Sell_cards />

                    </div>
                    :
                    <div className=" text-center my-14" >
                        <div className="my-10">
                            <h2 className='text-4xl m-10'> to sell car .. you must sign in </h2>
                            <Button className="text-xl w-[150px] hover:scale-110"> Sign In </Button>
                        </div> </div>

                }
            </div>

            <div className="">
                <CarItem />
            </div>

            <div className="">
                <Car_section />
            </div>
            <div className="">
                <CarItem2 />
            </div>
            <div className="" data-aos="zoom-in-down">
                <Card_section2 />
            </div>
            <div className="" data-aos="zoom-in-up">
                <Numbers_sec />
            </div>
{/* 
            <div className="" data-aos="zoom-out-down">
                <Reviews_sec />
            </div> */}




            <div className="my-10">
                <Footer />
            </div>
        </div>
    )
}

export default Home
