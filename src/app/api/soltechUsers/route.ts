import {db} from '@/lib/db'
import { NextResponse } from 'next/server'

import {users} from '@/schema'

import nodemailer from "nodemailer"





export async function POST(req:Request,res:Response){
try
{

let body= await req.json();
// const billVal =parseFloat(body.bill);

 console.log(body)
if(!body.name||!body.email||!body.bill||!body.rooftype||!body.shift||!body.plan||!body.message||!body.address||!body.city||!body.phoneNo)
{
    return NextResponse.json({error:"required fields are missing"})
}
let result = await db.insert(users).values({
  name: body.name,
  email: body.email,
  bill:Number( body.bill),
  rooftype: body.rooftype,
  shift: body.shift,
  plan: body.plan,
  message: body.message,
  address: body.address,
  city: body.city,
  phoneNo: body.phoneNo
});

 

 try
 {
    const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASS
    },
});


//sending mail to user

await transporter.sendMail({
    from:process.env.EMAIL,
    to:body.email,
    subject: "Thanks for contacting SolTech!",
    text:`Hi ${body.name} we received your message "${body.message}"`
})


//sending mail to admin

await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `New inquiry from ${body.email}`,
    text:`"${body.message}"`
})

}catch(error)
{
 console.log("error in sending email to admin")
}




return NextResponse.json({ message: "Data saved & emails sent successfully", },{ status: 200 }  );


}
catch(error)
{
    console.log("somethin went wrong")
    return NextResponse.json({error:"something went wrong "},{status:500})

}









}