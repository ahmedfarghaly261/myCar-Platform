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
    useEffect(()=>{
        Aos.init({duration:2000});
      },[])
      
    return (
        <div>
            <br />
            <div className="mx-24">
                <h2 className='text-center text-4xl my-20'>
                    <b>The Most Searched Cars </b>
                    <div className="text-[#4f46e5] text-xl">  <b>ـــــــــــــــــــــــ</b> </div>

                </h2>

                <Carousel>
                    <CarouselContent >
                        {cardData.map((car, index) => (
                            <CarouselItem data-aos="fade-up"
                             className=" md:basis-1/2 lg:basis-1/4">
                                <Car_cards car={car} key={index} />
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
            <span className="flex items-center justify-between ">
                <span className="pr-6 ">
                    <div className="lg:w-[400px] xl:w-[500px] text-center "  > <Link to={"/Cars_List"}> <Button className="text-center mx-40 my-10 p-6 text-2xl  lg:w-[400px] xl:w-[500px] "> see more car </Button> </Link>  </div></span>
                <span className="h-px flex-1 bg-black"></span>
            </span>


        </div>
    )
}

export default CarItem
