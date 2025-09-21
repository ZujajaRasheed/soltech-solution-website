'use client'
import React from 'react'
import Image from 'next/image'
import { FaCheck,FaTimes } from 'react-icons/fa'
import Animation from './Animation'


const ChooseUs = () => {


 return (
    
  <Animation direction="bottom">
 <section id="chooseUs" className="mt-20 container mx-auto text-center py-10 px-6 md:text-[20px] text-[16px]">
 

    <div className=" text-center flex flex-col items-center space-y-10  ">
    <h1 className="md:text-[58px] text-[28px] text-center ">
    Why do you want us by your  <br></br>side as a <span className="text-[#F7921E]">solar ally?</span>
    </h1>
    <p>We focus on making solar simple and stress free. From planning to installation, we guide you at every step and take care of the details.</p>
    </div>





  <div className="mt-10 grid 2xl:grid-cols-2 gap-10 2xl:w-[1100px] grid-cols-1 ">
            
    <div className= "rounded-3xl border  flex flex-col justify-center items-center  text-left py-10 px-10 space-y-15 transform transition duration-300 hover:scale-105 border-[#F7921E]">
    <Image src="/image.png" alt="logo" width={80} height={80}/>

    <ol className="flex flex-col items-start space-y-5 text-gray-700">

    <li className="font-bold text-black">Installation adapted to you</li>
    <li className="flex items-center gap-3">
    <FaCheck className="text-[#F7921E]" />Project tailored to your home</li>
    <li className="flex items-center gap-3"><FaCheck className="text-[#F7921E]" />The most powerful panels on the market</li>


    <li className="font-bold text-black"> We continue with you to infinity and beyond</li>
    <li className="flex items-center gap-3">
    <FaCheck className="text-[#F7921E]" />
    360°guarantee on your panels, inverter and installations</li>
    <li className="flex items-center gap-3">
    <FaCheck className="text-[#F7921E]" />
    The most powerful panels on the market</li>


   <li className="font-bold text-black">We continue with you to infinity and beyond</li>
   <li className="flex items-start gap-3">
   <FaCheck className="text-[#F7921E]" size={34}/>
   Possibility of expanding your installation in the future with battery and chargers for your electric cars.</li>
   <li className="flex items-center gap-3">
   <FaCheck className="text-[#F7921E]" />
   We take care of everything. True truth.</li>
  
  </ol>


  <div  className="bg-[#F8EFE9] flex flex-col justify-center items-center text-center space-y-5 rounded-3xl px-8 py-8">
  <h1 className=" text-[#F7921E]">The price of stone curfew</h1>
  <p>Pay for your installations in advance or financed up to 12 years, but the price does not move. What you see is what it is..</p>
  <h1 >Permanent</h1>
  </div>

</div>



  <div className= "rounded-3xl border border-gray-300 flex flex-col justify-center items-center  text-left py-10 px-10 space-y-15 transform transition duration-300 hover:scale-105 ">
  <h1 className="text-3xl"> Traditional Installer</h1>

  <ol className="mt-5 flex flex-col items-start space-y-5 text-gray-700">
  
  <li className="font-bold text-black">Installation adapted to you</li>
  <li className="flex items-center gap-3">
  <FaCheck className="text-[#F7921E]" />
  Project tailored to your home
  </li>
  <li className="flex items-center gap-3">
  <FaTimes className="text-[#F7921E]" />
  The most powerful panels on the market
  </li>



  <li className="font-bold text-black"> We continue with you to infinity and beyond</li>
  <li className="flex items-center gap-3">
  <FaTimes className="text-[#F7921E]" />
  360°guarantee on your panels, inverter and installations</li>
  <li className="flex items-center gap-3">
  <FaTimes className="text-[#F7921E]" />
  The most powerful panels on the market</li>


  <li className="font-bold text-black">We continue with you to infinity and beyond</li>
  <li className="flex items-start gap-3">
  <FaTimes className="text-[#F7921E]" size={34}/>
  Possibility of expanding your installation in the future with battery and chargers for your electric cars.</li>
  <li className="flex items-center gap-3">
  <FaCheck className="text-[#F7921E]" />
  We take care of everything. True truth.</li>
  
  </ol>

  <div  className="bg-[#F8EFE9] flex flex-col justify-center items-center text-center space-y-5 rounded-3xl px-8 py-8">
  <h1 className=" text-[#F7921E]">The price of stone curfew</h1>
  <p>Pay for your installations in advance or financed up to 12 years, but the price does not move. What you see is what it is..</p>
  <h1 >Additional costs</h1>
  </div>

</div>
</div>


  <button className="mt-20 px-8 py-3 bg-[#F7921E] text-white rounded-full font-medium shadow-md hover:bg-orange-300 transition hover:cursor-pointer" onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}>
  Get a quote
  </button>
         
</section>
  </Animation>
  )
}

export default ChooseUs
