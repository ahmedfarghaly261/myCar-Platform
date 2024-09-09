import cardData from '@/data/cardData'
import Car_cards from '@/shared/footer/car_cards'
import React, { useEffect } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import "aos/dist/aos.css"


function CarItem() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <br />
            <div className=" mx-16  ">
                <h2 className='text-center text-4xl my-20'>
                    <b>The Most Searched Cars </b>
                    <div className="text-[#4f46e5] text-5xl text-center" >  <b>ـــــــــــــــــ</b> </div>
                    </h2>

                <Carousel>
                    <CarouselContent >
                        {cardData.map((car, index) => (
                            <CarouselItem data-aos="fade-up"
                                className="sm:1/0 md:basis-1/2 lg:basis-1/4">
                                <Car_cards car={car} key={index} />
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>

            <div className=" my-9 flex items-center justify-center"  > 
                <Link to={"/Cars_List"}> <Button className="w- text-2xl p-7  hover:scale-105"> see more car </Button> </Link>
            </div>



        </div>
    )
}

export default CarItem
