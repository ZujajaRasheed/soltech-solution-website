'use client'
import React, { use, useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import Animation from './Animation'
const HeroSection = () => {

const [currentIndex,setCurrentIndex]=useState<number>(0)
const[visible,setVisible]=useState(false)


useEffect(()=>
{
  const timer=setTimeout(()=>setVisible(true),100)
  return(()=>clearTimeout(timer))
},[])






const images=[
    "/image1.jpg",
    "/image2.png",
    "/image3.png"
]

function prevImage(){
setCurrentIndex(prev=>prev===0?images.length-1:prev-1)
}
function nextImage(){
setCurrentIndex(prev=>prev===images.length-1?0:prev+1)
}



  return (

<section className={`transition-all duration-1000 ease-out ${visible ?"translate-x-0 opacity-100":"-translate-x-100 opacity-0"}`} >
       
      <div className="container mx-auto text-center py-16 px-6">
      <h1 className="2xl:text-[128px] md:text-[80px] font-extrabold leading-tight text-[40px]">
       Solar energy <br />for <span className="text-[#F7921E]">your home</span></h1>
      <p className="mt-6 text-gray-700 max-w-8xl mx-auto md:text-[24px] text-[16px]">
       Every solar panel installed is a step towards a cleaner, healthier planet.
       By harnessing the sun’s energy, you’re reducing your carbon footprint and
       helping to combat climate change. From reducing greenhouse gas emissions to
       preserving natural resources.
      </p>
      <button className="mt-8 px-8 py-4 bg-[#F7921E] text-white rounded-full font-medium shadow-md hover:bg-orange-300 transition " onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}>Get A Quote Now</button>
      </div>



    <div className="relative w-full 2xl:h-[900px] md:h-[600px] h-[400px]">
      <Image src={images[currentIndex]} alt="solar" fill className="object-cover z-10 shadow-lg"/>

      <div className="absolute  bottom-5 left-3 w-full flex flex-col gap-y-8 z-20 text-[#FFFbF9]  ">
      <div className="container mx-auto flex flex-col gap-y-8">

      <h1 className="md:max-w-90  max-w-50 md:text-4xl text-2xl font-medium"> Break Free from High Electricity Bills</h1>
      <div className="flex gap-x-6">
      <button    className="flex items-center justify-center rounded-full border border-[#FFFbF9] text-[#FFFbF9] hover:text-black hover:bg-[#FFFbF9] transition md:font-bold
       w-12 h-12 md:w-20 md:h-20" onClick={prevImage}><FaArrowLeft  /></button>
      <button className ="flex items-center justify-center rounded-full  border  border-[#FFFbF9] text-[#FFFbF9] hover:text-black hover:bg-[#FFFbF9] transition w-12 h-12 md:w-20 md:h-20 md:font-bold " onClick={nextImage}> <FaArrowRight/></button>
      </div>

      </div>
      </div>

    </div>


    </section>



  )
}

export default HeroSection
