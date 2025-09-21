import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {



  return (


    <div className="bg-gray-100 flex flex-col items-center 2xl:space-y-20 space-y-10 py-5 mt-20">
      
<div className="flex flex-col 2xl:flex-row space-y-8 2xl:space-y-5 2xl:space-x-10 container mx-auto md:text-[20px] text-[12px] justify-between items-center py-10 text-black font-semibold">
    <Image src="/image.png" alt ="logo" width={80} height={80}/> 
        
    <div className="flex flex-col 2xl:items-start items-center">
    <h2> Ebert Summit Suite 375 </h2>
    <h2>Lake Leonardchester</h2>
    </div>

    <div className="flex flex-col 2xl:items-start items-center">
    <h2>+44 123 654 7890</h2><Link href="">example@teamwebflow.com</Link></div>
  
    <div className="flex flex-col 2xl:items-start items-center">
    <Link href="/privacyPolicy" className="hover:underline hover:cursor-pointer">Privacy Policy</Link>
    <Link href ="/term" className="hover:underline hover:cursor-pointer">Terms and conditions</Link>
    </div>

    </div>

   
    <h2 className="text-md hover:underline">Copyright © 2025 SOLTECH SOLUTIONS. All rights reserved.</h2>
    </div>
  )
}

export default Footer
