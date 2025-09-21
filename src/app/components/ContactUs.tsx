'use client'
import React from 'react'
import Input from './Input'
import { useActionState,useState } from 'react'
import Animation from './Animation'

type ManagePlanProps = {
  selectedPlan: string
  setSelectedPlan: (plan: string) => void
}
const ContactUs = ({selectedPlan, setSelectedPlan}:ManagePlanProps) => {
const[name,setName]=useState<string>("");
const[email,setEmail]=useState<string>("");
const[phoneNo,setPhoneNo]=useState<string>("");
const[city,setCity]=useState<string>("");
const[bill,setBill]=useState<string>("");
const[address,setAddress]=useState<string>("");
const[message,setMessage]=useState<string>("");
const[rooftypee,setRooftype]=useState<string>("");
const[shift,setShift]=useState<string>("morning");





async function handleForm(formData:FormData)
{
  let name=formData.get("name") 
  let email=formData.get("email")
  let phoneNo=formData.get("phoneNo")
  let city=formData.get("city")
  let bill=formData.get("bill")
  let address=formData.get("address")
  let message=formData.get("message");
  let rooftype=formData.get("rooftype")
  let shift=formData.get("time")
  let plan=formData.get("plan")
  console.log(name,email,phoneNo,city,bill,address,message,rooftype,shift,plan)

  if(!name||!email||!phoneNo||!city||!bill||!message||!plan||!rooftype||!shift||!address)
  {
  return {error:"kindly fill all the required fields"}
  }

  else
  {
  let response = await fetch("http://localhost:3000/api/soltechUsers",{
    method:'POST',
    headers:{'Accept':"Application/json",'Content-Type':"application/json"},
    body:JSON.stringify({name,email,phoneNo,city,bill,message,plan,rooftype,shift,address})
  }
  )

  let data =await response.json();

  if(response.status===200)
  {
    setName("");
    setEmail("");
    setPhoneNo("");
    setBill("");
    setCity("");
    setAddress("");
    setShift("");
    setMessage("")
    setRooftype("")
    return {message:data.message}
  }
  else
  {
    return {error :"couldnot send your request try again"}
  }

  }

}


const[data,action,pending]=useActionState(handleForm,undefined)


return (
    

    <Animation direction="bottom">
<section id="contact" className=" md:mt-20 container mx-auto text-center py-16 px-6 md:text-[20px] text-[16px]">
 
     <div className=" mt-10 text-center flex flex-col items-center space-y-10  ">
     <h1 className="md:text-[58px] text-[28px] text-center ">Get a<span className="text-[#F7921E]"> Free Quote</span> </h1>
     <p>Start your journey to clean energy and lower bills. Fill out the form below and we will prepare a custom solar quote for your home.</p>
     </div>

    <div className="md:w-[1150] mt-16">
    {data?.error&&<span className="text-red-500">{data.error}</span>}
    {data?.message&&<span className="text-green-500">{data.message}</span>}

    <form action={action} className="2xl:grid md:grid-cols-2 gap-15 lg:gap-y-10 flex flex-col md:px-5 items-center">
    
      <Input label="Full Name"  type="text" placeHolder="Russell Kris" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <Input label="Full Email"  type="email" placeHolder="Russell.Kris@gmail.com" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <Input label="Phone Number"  type="tel" pattern ="^\+?[0-9]{10,15}$" placeHolder="+123 456 7890" name="phoneNo" value={phoneNo}   onChange={(e) => {
      e.target.value = e.target.value.replace(/[^0-9+]/g, "");
      setPhoneNo(e.target.value)}}/>
      <Input label="Address"  type="text" placeHolder="6927 vandervort Courts,Santa Ana 43990" name="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>

      <div className="flex flex-col justify-start items-start gap-y-3 w-full">
      <label htmlFor="rooftype" className="font-semibold">Roof Type</label>
      <select 
      name="rooftype" 
      id="rooftype" 
      value={rooftypee}
      className="border border-gray-300 rounded-2xl  w-full px-4 py-2 text-gray-500 focus:outline-none"
      onChange={(e)=>{e.target.classList.remove("text-gray-500"); setRooftype(e.target.value)}}>

      <option value="" disabled hidden >Select Roof Type</option>
      <option value="flat">Flat Roof</option>
      <option value="gabled">Gabled Roof</option>
      <option value="hipped">Hipped Roof</option>
      <option value="shed">Shed Roof</option>
      <option value="mansard">Mansard Roof</option>
      </select>
      </div>

      <div className="flex flex-col justify-start items-start gap-y-3 w-full">
      <label htmlFor="plan" className="font-semibold">Choose Plan</label>
      <select
      id="plan"
      name="plan"
      value={selectedPlan} // controlled by parent
      className="border border-gray-300 rounded-2xl  w-full px-4 py-2 focus:outline-none"
      onChange={(e)=>setSelectedPlan(e.target.value)}>
        
      <option value="Starter">Starter</option>
      <option value="Standard">Standard</option>
      <option value="Premium">Premium</option>
      </select>
      </div>


      <Input label="City / Location"  type="text" placeHolder="Santa Ana" name="city" value={city} onChange={(e)=>setCity(e.target.value)} />
      <Input label="Montly Electricity Bill" min={0} step={0.01} type="number"  placeHolder="$ 100" name="bill" value={bill} onChange={(e)=>setBill(e.target.value)}/>
      


      <div className="flex flex-col justify-start items-start gap-y-3 w-full">
      <label htmlFor="message" className="font-semibold">Message / Special Notes</label>
      <textarea 
      placeholder="Write your message or any special notes here" 
      name="message" 
      id="message"
      value={message} 
      onChange={(e)=>setMessage(e.target.value)}
      className="border border-gray-300 rounded-2xl  w-full h-[150px] px-4 py-6 resize-none focus:outline-none"></textarea>
      </div>


      <div  className="flex flex-col justify-start items-start gap-y-3 w-full ">
      <h1 className="block mb-2 font-semibold">Best Time to Contact You*</h1>
      <div className="flex gap-6 w-full">
      <label className="flex items-center gap-2">
      <input type="radio" name="time" value="morning" checked={shift==="morning"} onChange={(e)=>setShift(e.target.value)} />
      Morning
      </label>
      <label className="flex items-center gap-2">
      <input type="radio" name="time" value="afternoon"  checked={shift==="afternoon"} onChange={(e)=>setShift(e.target.value)} />
      Afternoon
      </label>
      <label className="flex items-center gap-2">
      <input type="radio" name="time" value="evening" checked={shift==="evening"}  onChange={(e)=>setShift(e.target.value)} />
      Evening
      </label>
      </div>
      </div>


      <div className="col-span-2 flex justify-center  items-center mt-10 ">
      <button type="submit" className="md:px-80 px-40 py-4 bg-[#F7921E] text-white rounded-full font-medium shadow-md hover:bg-orange-300 transition flex items-center gap-2 mx-auto hover:cursor-pointer">Submit</button>
      </div>


  

  </form>
           
 </div>
 </section>
 </Animation>
  )
}

export default ContactUs
