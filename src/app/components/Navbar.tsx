
'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'


const Navbar = () => {
const pathName=usePathname();
const[isOpen,setIsOpen]= useState<boolean>(false)

const navLink=[
    {
    id:"/#about",
    label:"About"
    },
{
    id:"/#services",
    label:"Services"
},
{
    id:"/#chooseUs",
    label:"Why Choose Us"

},
{
    id:"/#pricing",
    label:"Pricing"

}
]



  return (

    <nav className="mt-10 w-full ">
      <div className="container mx-auto flex justify-between items-center py-4 px-5 text-[16px]">
    <Image src="/image.png"  alt="soltech-logo" width={80} height={80}/>
   
 
     <div className="hidden md:flex  justify-between space-x-10 items-center font-semibold">
    {
        navLink.map((link ,index)=>
        (
            <Link href={link.id} key={index}  className={`px-2 py-2 hover:scale-x-80 hover:cursor-pointer transition duration-300  ${pathName===link.id ?'font-bold':""}`} >{link.label}</Link>
        ))
    }
  
    <button className="px-8 py-4 rounded-full font-semibold  text-[#FFFbF9] bg-[#F7921E] hover:bg-orange-300 hover:cursor-pointer"onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}>Get A Quote</button>
    </div>
  
    

    <div className="md:hidden flex items-center">
    <button  className="text-2xl font-bold focus:outline-none" onClick={()=>setIsOpen(!isOpen)}>
        {isOpen? '✖' : '☰'}

    </button>
    </div>
    </div>
    

    {isOpen && 
    <div className="md:hidden bg-white w-full px-5 pb-5 flex flex-col space-y-4 font-semibold">
     {
        navLink.map((link,index)=>
        (
            <Link href={link.id} key={index}  className={`px-2 py-2 hover:scale-x-80 hover:cursor-pointer transition duration-300  ${pathName===link.id ?'font-bold':""}`} >{link.label}</Link>
        ))
     }

 <button   className="px-4 py-2 rounded-full font-semibold text-white bg-orange-500 hover:bg-orange-600"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              setIsOpen(false)
            }}>Get a Quote</button>
    </div>

    }

    </nav>
   
  )
}

export default Navbar







