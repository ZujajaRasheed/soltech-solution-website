'use client'
import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import Animation from './Animation'

const Services = () => {

  return (

<Animation direction="bottom">
<section id="services" className="container mx-auto mt-30 text-center py-10 px-6 md:text-[20px] text-[16px]">
 

  <div className="text-center  flex flex-col items-center space-y-10  ">
  <h1 className="md:text-[58px] text-[28px] text-center ">
  Install solar panels <br></br>in just <span className="text-[#F7921E]">4 steps</span>
  </h1>
  <p >
  At Soltech Solutions, we make switching to solar simple. From installation to upkeep and easy monitoring, our services are designed to give you reliable savings and clean energy every day.
  </p>
  </div>





 <div className="mt-10 grid lg:grid-cols-2 2xl:grid-cols-3 gap-5 grid-cols-1  ">
            
<div className= "rounded-3xl border border-gray-500 flex flex-col justify-start items-start  text-left py-10 px-10 space-y-5 transform transition duration-300 hover:scale-105 ">
<h1 className="text-[#F7921E] md:text-[58px] text-[28px]">01</h1>
<h1  >Free Consultation</h1>
<p className="max-w-md ">We start with a visit or call to understand your home’s energy needs and answer your questions.</p>
</div>

<div className= "rounded-3xl border border-gray-500 flex flex-col justify-start items-start  text-left py-10 px-10 space-y-5 transform transition duration-300 hover:scale-105">
<h1 className="text-[#F7921E] md:text-[58px] text-[28px]">02</h1>
<h1>Custom Plan</h1>
<p className="max-w-md ">Our team designs a solar system made for your house and budget..</p>
</div>

<div className= " relative rounded-3xl  w-full md:h-[295px] h-[220px] transform transition duration-300 hover:scale-105">
<Image src="/solar4.png" alt ="solar image"  fill className="rounded-3xl object-cover"/>
</div>

              
<div className= "relative rounded-3xl  w-full md:h-[295px] h-[220px]  transform transition duration-300 hover:scale-105">
<Image src="/solar5.png" alt ="solar image"  fill className="rounded-3xl object-cover"/>
</div>


<div className= "rounded-3xl border border-gray-500 flex flex-col justify-start items-start  text-left py-10 px-10 space-y-5 transform transition duration-300 hover:scale-105">
<h1 className="text-[#F7921E] md:text-[58px] text-[28px]">03</h1>
<h1>Professional Installation</h1>
<p className="max-w-md ">Certified experts install the panels safely and ensure everything is connected properly.</p>
</div>

<div className= "rounded-3xl border border-gray-500 flex flex-col justify-start items-start  text-left py-10 px-10 space-y-5 transform transition duration-300 hover:scale-105">
<h1 className="text-[#F7921E] md:text-[58px] text-[28px]">04</h1>
<h1  >Monitoring & Support</h1>
<p className="max-w-md ">We give you easy tools to track your savings and provide ongoing support whenever you need it.</p>
</div>

</div>

<button className="mt-16 px-8 py-3 bg-[#F7921E] text-white rounded-full font-medium shadow-md hover:bg-orange-300 transition flex items-center gap-2 mx-auto hover:cursor-pointer"    onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}>
Start Today
<FaArrowRight />
</button>
         
</section>
</Animation>

)
}

export default Services
