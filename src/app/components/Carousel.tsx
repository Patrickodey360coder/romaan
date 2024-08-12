"use client"
import React from 'react'
import Image from 'next/image'
import Slide_One from '../../../public/images/slider-1.jpg'
import Slide_Two from '../../../public/images/slider-2.jpg'
import Slide_Three from '../../../public/images/slider-3.jpg'
import Slide_Four from '../../../public/images/slider-4.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const Slider = () => {
  return (
    <Swiper
      className='h-[500px]'
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      navigation={true}
      modules={[Autoplay]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='w-full h-full'>
        <Image src={Slide_One}  alt='slide one' height={1980}/>
      </SwiperSlide>
      <SwiperSlide className='w-full'>
        <Image src={Slide_Two}  alt='slide two' height={1980}/>
      </SwiperSlide>
      <SwiperSlide className='w-full'>
        <Image src={Slide_Three}  alt='slide three' height={1980}/>
      </SwiperSlide>
      <SwiperSlide className='w-full'>
        <Image src={Slide_Four}  alt='slide Four' height={1980}/>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider