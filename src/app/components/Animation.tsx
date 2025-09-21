
'use client'
import React from 'react'
import{useState,useEffect ,useRef} from 'react'


type AnimationProps={
  children:React.ReactNode,
  direction?:"top"|"bottom",
  delay?:number
}



const Animation = ({children,direction="top",delay=0}:AnimationProps) => {


const[visible,setVisible]=useState(false)
const myref=useRef<HTMLDivElement>(null)
useEffect(()=>
{const observer=new IntersectionObserver((entries)=>
{
    entries.forEach((entry)=>
    {console.log("entry:", entry.isIntersecting);
     if(entry.isIntersecting)
     {
    const timer=setTimeout(()=>setVisible(true),delay)
    // observer.unobserve(entry.target)
     }
     else {
         
          setVisible(false)
        }
    
    })

},{threshold:0.1})

    if(myref.current)
        observer.observe(myref.current)
    return ()=>{
        if(myref.current)
            observer.unobserve(myref.current)
    }
},[delay])



const baseClass="transition-all duration-1000  ease-out ";
const visibleClass= "translate-y-0 opacity-100"
      
const hiddenClass= direction === "top" ? "-translate-y-50 opacity-0" : "translate-y-50 opacity-0";
  return (

    <div ref={myref}
      className={`${baseClass} ${visible?visibleClass:hiddenClass}`}>
      {children}
    </div>
  )
}

export default Animation
