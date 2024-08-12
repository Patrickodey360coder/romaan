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
      className='2xl:h-[1000px] xl:h-[700px] lg:h-[600px] md:h-[500px] h-[400px] w-full'
      spaceBetween={25}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      loop={true}
      navigation={true}
      modules={[Autoplay]}
    >
      <SwiperSlide className='w-full h-full relative'>
        <Image
          src={Slide_One}
          alt='slide one'
          fill
          style={{ objectFit: 'cover' }} // or 'cover' depending on your needs
        />
      </SwiperSlide>
      <SwiperSlide className='w-full h-full relative'>
        <Image
          src={Slide_Two}
          alt='slide two'
          fill
          style={{ objectFit: 'cover' }} // or 'cover'
        />
      </SwiperSlide>
      <SwiperSlide className='w-full h-full relative'>
        <Image
          src={Slide_Three}
          alt='slide three'
          fill
          style={{ objectFit: 'cover' }} // or 'cover'
        />
      </SwiperSlide>
      <SwiperSlide className='w-full h-full relative'>
        <Image
          src={Slide_Four}
          alt='slide four'
          fill
          style={{ objectFit: 'cover' }} // or 'cover'
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
