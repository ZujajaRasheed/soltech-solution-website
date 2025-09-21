'use client'
import React from 'react'
import Animation from './Animation'

type ManagePlanProps = {
  selectedPlan: string
  setSelectedPlan: (plan: string) => void
}




const Pricing = ({selectedPlan,setSelectedPlan}:ManagePlanProps) => {

  
function handlePlan(plan:string)
{
setSelectedPlan(plan)
document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})
}


return (
<Animation direction="bottom">
  <section id="pricing" className=" mt-20 container mx-auto text-center py-16 px-6 md:text-[20px] text-[16px]">
 

    <div className=" text-center flex flex-col items-center md:space-y-10  ">
    <h1 className="md:text-[58px] text-[28px] text-center ">Find the Plan That <span className="text-[#F7921E]">Fits <br></br>Your Needs</span> </h1>
    <p>Our solar plans are designed to fit different needs and budgets. No hidden fees, just honest pricing that makes switching to solar easy.</p>
    </div>

<div className="mt-10 grid md:grid-cols-3  gap-x-8 2xl:w-[1150px]  md:w-[750px] grid-cols-1 gap-y-10 ">

    <div className={`flex flex-col justify-center items-center px-5 py-8 space-y-2  rounded-3xl shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(255,255,255,0.7)] ${selectedPlan==="Starter"? "border border-[#F7921E] ":"border border-gray-100 "}`}>
    <h1> Starter Plan</h1>
    <p className="text-[12px] font-bold">Starting from</p>
    <h1 className="2xl:text-[64px] md:text-[46px]  text-[32px]"> $4,500</h1>
    <p className="text-[12px] font-bold">Perfect for small homes or apartments</p>
    <p className="text-black mt-5 text-[12px] ">Up to 3 kW system <br></br>Professional installation included<br></br>Energy monitoring app<br></br>Standard warranty</p>
    <button className={`mt-6 px-8 py-3 border  rounded-full font-medium shadow-md  transition ${selectedPlan==="Starter"? "border-[#F7921E] bg-[#F7921E] text-white":"border-[#F7921E] text-[#F7921E] hover:bg-orange-300 hover:cursor-pointer"} `} onClick={()=>handlePlan("Starter")}>Get Now</button>
    </div>

    <div className={`flex flex-col justify-center items-center px-5 py-8 space-y-2  rounded-3xl shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(255,255,255,0.7)] ${selectedPlan==="Standard"? "border-1 border-[#F7921E] ":"border border-gray-100 "}`}>
    <h1> Standard Plan</h1>
    <p className="text-sm  lg:text-[12px] font-bold">Premium Plan</p>
    <h1 className="2xl:text-[64px] md:text-[46px]  text-[32px]"> $7,800</h1>
    <p className=" lg:text-[12px] text-sm font-bold">Best for medium-size households</p>
    <p className=" lg:text-[12px] text-black mt-5 text-sm">Up to 5 kW system <br></br>Smart energy monitoring<br></br>Priority customer support<br></br>Extended warranty</p>
    <button className={`mt-6 px-8 py-3 border  rounded-full font-medium shadow-md  transition ${selectedPlan==="Standard"? "border-[#F7921E] bg-[#F7921E] text-white":"border-[#F7921E] text-[#F7921E] hover:bg-orange-300 hover:cursor-pointer"} `}  onClick={()=>handlePlan("Standard")}>Get Now</button>
    </div>

    <div className={`flex flex-col justify-center items-center px-5 py-8 space-y-2  rounded-3xl shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(255,255,255,0.7)] ${selectedPlan==="Premium"? "border-1 border-[#F7921E] ":"border border-gray-100 "}`}>
    <h1> Premium Plan</h1>
    <p className="text-sm lg:text-[12px] font-bold">Starting from</p>
    <h1 className=" 2xl:text-[64px]  md:text-[40px] text-[32px]"> $4,500</h1>
    <p className="lg:text-[12px] text-sm font-bold">For larger homes with higher energy use</p>
    <p className="lg:text-[12px] text-black mt-5 text-sm">Up to 8 kW system <br></br>Advanced performance monitoring<br></br>Free yearly maintenance check<br></br>Long-term warranty</p>
    <button className={`mt-6 px-8 py-3 border  rounded-full font-medium shadow-md  transition ${selectedPlan==="Premium"? "border-[#F7921E] bg-[#F7921E] text-white":"border-[#F7921E] text-[#F7921E] hover:bg-orange-300 hover:cursor-pointer"} `} onClick={()=>handlePlan("Premium")}>Get Now</button>
    </div>



</div>


</section>
</Animation>
  )
}

export default Pricing



// 'use client'
// import React from 'react'

// type ManagePlanProps = {
//   selectedPlan: string
//   setSelectedPlan: (plan: string) => void
// }

// const Pricing = ({ selectedPlan, setSelectedPlan }: ManagePlanProps) => {
//   function handlePlan(plan: string) {
//     setSelectedPlan(plan)
//     document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
//   }

//   return (
//     <section
//       id="pricing"
//       className="container mx-auto text-center py-16 px-4 sm:px-6 md:px-10 lg:px-16"
//     >
//       {/* Heading */}
//       <div className="mt-10 md:mt-20 text-center flex flex-col items-center space-y-6 md:space-y-10">
//         <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[58px] font-bold leading-tight">
//           Find the Plan That{" "}
//           <span className="text-[#F7921E]">
//             Fits <br className="sm:hidden" />
//             Your Needs
//           </span>
//         </h1>
//         <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl">
//           Our solar plans are designed to fit different needs and budgets. No hidden fees,
//           just honest pricing that makes switching to solar easy.
//         </p>
//       </div>

//       {/* Pricing Cards */}
//       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 max-w-[1150px] mx-auto">
//         {/* Starter Plan */}
//         <div
//           className={`flex flex-col justify-center items-center px-6 py-10 space-y-3 rounded-3xl transition shadow-md ${
//             selectedPlan === "Starter"
//               ? "border-2 border-[#F7921E]"
//               : "border border-gray-200"
//           }`}
//         >
//           <h2 className="text-xl md:text-2xl font-semibold">Starter Plan</h2>
//           <p className="text-sm font-bold">Starting from</p>
//           <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold">$4,500</h1>
//           <p className="text-sm font-medium">Perfect for small homes or apartments</p>
//           <p className="text-gray-700 mt-4 text-sm leading-relaxed">
//             Up to 3 kW system <br />
//             Professional installation included <br />
//             Energy monitoring app <br />
//             Standard warranty
//           </p>
//           <button
//             className={`mt-6 px-6 py-3 rounded-full font-medium shadow-md transition w-full sm:w-auto ${
//               selectedPlan === "Starter"
//                 ? "bg-[#F7921E] text-white"
//                 : "border border-[#F7921E] text-[#F7921E] hover:bg-orange-300 hover:text-white"
//             }`}
//             onClick={() => handlePlan("Starter")}
//           >
//             Get Now
//           </button>
//         </div>

//         {/* Standard Plan */}
//         <div
//           className={`flex flex-col justify-center items-center px-6 py-10 space-y-3 rounded-3xl transition shadow-md ${
//             selectedPlan === "Standard"
//               ? "border-2 border-[#F7921E]"
//               : "border border-gray-200"
//           }`}
//         >
//           <h2 className="text-xl md:text-2xl font-semibold">Standard Plan</h2>
//           <p className="text-sm font-bold">Premium Plan</p>
//           <h1 className="text-[32px] md:text-[46px] lg:text-[64px] font-bold">$7,800</h1>
//           <p className="text-sm font-medium">Best for medium-size households</p>
//           <p className="text-gray-700 mt-4 text-sm leading-relaxed">
//             Up to 5 kW system <br />
//             Smart energy monitoring <br />
//             Priority customer support <br />
//             Extended warranty
//           </p>
//           <button
//             className={`mt-6 px-6 py-3 rounded-full font-medium shadow-md transition w-full sm:w-auto ${
//               selectedPlan === "Standard"
//                 ? "bg-[#F7921E] text-white"
//                 : "border border-[#F7921E] text-[#F7921E] hover:bg-orange-300 hover:text-white"
//             }`}
//             onClick={() => handlePlan("Standard")}
//           >
//             Get Now
//           </button>
//         </div>

//         {/* Premium Plan */}
//         <div
//           className={`flex flex-col justify-center items-center px-6 py-10 space-y-3 rounded-3xl transition shadow-md ${
//             selectedPlan === "Premium"
//               ? "border-2 border-[#F7921E]"
//               : "border border-gray-200"
//           }`}
//         >
//           <h2 className="text-xl md:text-2xl font-semibold">Premium Plan</h2>
//           <p className="text-sm font-bold">Starting from</p>
//           <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold">$12,000</h1>
//           <p className="text-sm font-medium">For larger homes with higher energy use</p>
//           <p className="text-gray-700 mt-4 text-sm leading-relaxed">
//             Up to 8 kW system <br />
//             Advanced performance monitoring <br />
//             Free yearly maintenance check <br />
//             Long-term warranty
//           </p>
//           <button
//             className={`mt-6 px-6 py-3 rounded-full font-medium shadow-md transition w-full sm:w-auto ${
//               selectedPlan === "Premium"
//                 ? "bg-[#F7921E] text-white"
//                 : "border border-[#F7921E] text-[#F7921E] hover:bg-orange-300 hover:text-white"
//             }`}
//             onClick={() => handlePlan("Premium")}
//           >
//             Get Now
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Pricing
