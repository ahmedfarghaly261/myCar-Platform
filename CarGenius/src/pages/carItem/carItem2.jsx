
import cardData2 from '@/data/cardData2'
import React, { useEffect } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Car_cards2 from '@/shared/cars_card1/car_cards2'
import Aos from 'aos';
import "aos/dist/aos.css"


function CarItem2() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <br />
            <div className="mx-24">
                <h2 className='text-center text-4xl my-20'>
                    <b>Latest Cars </b>
                    <div className="text-[#4f46e5] text-5xl">  <b>ـــــــــــــــــــــــ</b> </div>

                </h2>



                <Carousel>
                    <CarouselContent   >
                        {cardData2.map((car2, index) => (
                            <CarouselItem data-aos="zoom-in-down" className=" md:basis-1/2 lg:basis-1/4">
                                <Car_cards2 car2={car2} key={index} />
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>



            </div>
        </div>
    )
}

export default CarItem2
