"use client"
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Slide_One from '../../../public/images/slider-1.jpg'
import Slide_Two from '../../../public/images/slider-2.jpg'
import Slide_Three from '../../../public/images/slider-3.jpg'
import Slide_Four from '../../../public/images/slider-4.jpg'



const Slider = () => {
  return (
    <div className='slider h-[800px]'>
      <Carousel className='w-full'>
        <CarouselContent>
          <CarouselItem>
            <Image src={Slide_One}  alt='slide one'/>
          </CarouselItem>
          <CarouselItem>
            <Image src={Slide_Two}  alt='slide one'/>
          </CarouselItem>
          <CarouselItem>
            <Image src={Slide_Three}  alt='slide one'/>
          </CarouselItem>
          <CarouselItem>
            <Image src={Slide_Four}  alt='slide one'/>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  )
}

export default Slider