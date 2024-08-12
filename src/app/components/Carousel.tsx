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
import Autoplay from "embla-carousel-autoplay"



const Slider = () => {
  return (
    <div className='slider'>
      <Carousel className='w-full' 
        plugins={
          [
          Autoplay({
            delay: 3000,
          })
        ]}

        opts={{
          loop: true
        }}
      >
        <CarouselContent className='w-full'>
          <CarouselItem className='w-full'>
            <Image src={Slide_One}  alt='slide one' height={1980}/>
          </CarouselItem>
          <CarouselItem>
            <Image src={Slide_Two}  alt='slide two' height={1980}/>
          </CarouselItem>
          <CarouselItem>
            <Image src={Slide_Three}  alt='slide three' height={1980}/>
          </CarouselItem>
          <CarouselItem>
            <Image src={Slide_Four}  alt='slide Four' height={1980}/>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  )
}

export default Slider