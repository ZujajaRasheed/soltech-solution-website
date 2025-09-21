
'use client'
import React from 'react'
import Image from 'next/image'
import Animation from './Animation'
const About = () => {




  return (
    
    <Animation direction='top'>
 <section id="about" className="container mx-auto text-center mt-20 w-full md:text-[20px] text-[16px]">


      <div className="flex md:space-x-40 space-x-3 text-left">
      <h1 className="md:text-[32px] text-[20px] px-3">About</h1>

      <div className="flex flex-col items-center">
      <p className="md:max-w-[1000px] max-w-[300px] md:text-[26px] 2xl:text-[28px] text-[17px] px-2">Every solar panel installed is a step towards a cleaner, healthier planet. By harnessing the sun’s energy, you’re reducing your carbon footprint and helping to combat climate change. From reducing greenhouse gas emissions to preserving natural resources.</p>

      <div className="flex mt-16 md:mt-20 text-gray-700 md:space-x-40 space-x-8 md:text-[20px] text-sm pr-2">
      <h1><span className="2xl:text-[64px] md:text-[40px] text-[30px] text-black">60K+ </span> <br />Every solar panel installed</h1>
      <h1><span className="2xl:text-[64px] md:text-[40px] text-[30px] text-black">60K+</span> <br />Every solar panel installed</h1>
      <h1><span className="2xl:text-[64px] md:text-[40px] text-[30px] text-black">60K+</span> <br />Every solar panel installed</h1>
      </div>

      </div>
      </div>

      <div className="md:mt-36 text-center flex flex-col items-center space-y-10 mt-24">
      <h1 className="md:text-[58px] text-[28px] text-center ">Smart <span className="text-[#F7921E]">Solar Solutions</span> <br />for Your Home</h1>
      <p className=" px-5"> At Soltech Solutions, we make switching to solar simple. From installation to upkeep and easy monitoring, our services are designed to give you reliable savings and clean energy every day.</p>
      </div>



      <div className="relative bg-[#F1F1FD] 2xl:w-[1150px] md:h-[350px] md:w-[800px] h-[500px] rounded-3xl px-20 py-20 mt-20 transform transition duration-300 hover:scale-105  ">

      <div className="flex flex-col justify-start items-start gap-y-10">
      <h1 className="font-semibold text-[22px]">Solar Panels Installation</h1>
      <p className="max-w-lg text-left">We design and install solar panel systems that fit your home and energy needs. Our team makes sure everything is set up safely and works at full capacity.</p>
      <button className="px-6 py-3 bg-[#F7921E] text-white rounded-full font-medium shadow-md hover:bg-orange-300 transition hover:cursor-pointer"      onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}> Get A Quote</button>
      </div>

      <div className="absolute right-20  bottom-0 2xl:w-[400px] md:h-[229px] md:w-[250px] w-[200px] h-[150px]">
      <Image src="/solar1.png" alt="solar panel" fill className="rounded-t-2xl" />
      </div>

     </div>

           
          
      <div className="md:flex-row items-center mt-10 md:space-x-15 2xl:w-[1150px] rounded-3xl  flex flex-col space-y-10">
      {/* Card 1 */}
      <div className="bg-[#FDF5F2]  relative py-15 2xl:w-[540px] md:h-[600px]  w-[350px] h-[540px] rounded-3xl px-20 transform transition duration-300 hover:scale-105">
            
      <div className="flex flex-col justify-start items-start text-left gap-y-10">
      <h1 className="font-semibold text-[22px]">Solar Panels Installation</h1>
      <p className="max-w-lg "> We design and install solar panel systems that fit your home and energy needs. Our team makes sure everything is set up safely and works at full capacity.</p>
      <button className="px-6 py-3 bg-[#F7921E] text-white rounded-full font-medium shadow-md hover:bg-orange-300 transition hover:cursor-pointer" onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}> Get A Quote</button>
      </div>


      <div className="absolute right-20 bottom-0 2xl:w-[400px] 2xl:h-[229px] md:w-[250px] w-[200px] h-[150px]">
      <Image src="/solar2.png" alt="solar panel" fill className="rounded-t-2xl" />
      </div>

      </div>

      {/* Card 2 */}
      <div className="bg-[#EEFAF0] md:h-[600px] relative py-15 2xl:w-[540px]  rounded-3xl px-20 w-[350px] h-[540px] transform transition duration-300 hover:scale-105">
      
      <div className="flex flex-col justify-start items-start text-left gap-y-10">
      <h1 className="font-semibold text-[22px]">Solar Panels Installation</h1>
      <p className="max-w-lg "> We design and install solar panel systems that fit your home and energy needs. Our team makes sure everything is set up safely and works at full capacity.</p>
      <button className="px-6 py-3 bg-[#F7921E] text-white rounded-full font-medium shadow-md hover:bg-orange-300 transition hover:cursor-pointer" onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}>Get A Quote</button>
      </div>
              
      <div className="absolute right-20 bottom-0 2xl:w-[400px] 2xl:h-[229px] md:w-[250px] w-[200px] h-[150px]">
      <Image src="/solar3.jpg" alt="solar panel" fill className="rounded-t-2xl" />
      </div>

      </div>


      </div>
      

 </section>
 </Animation>
  )
}

export default About
