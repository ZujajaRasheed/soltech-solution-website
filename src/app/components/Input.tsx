import React from 'react'



type inputprop={
   
    type:string,
    name:string,
  placeHolder:string,
    label:string,
    value?:string,
    min?:number,
    step?:number,
    pattern?:string
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void

}






const Input = (props:inputprop) => {
  return (
    <div className="flex flex-col justify-start items-start space-y-3  w-full">
       
      <label htmlFor={props.name} className="font-bold">{props.label}</label>
      <input type={props.type} name={props.name} id={props.name} placeholder={props.placeHolder} className=" w-full px-4 py-2 border border-gray-300  rounded-2xl text-left  focus:outline-none  "
      {...(props.onChange!==undefined? {onChange:props.onChange}:{}) } 
      {...(props.min!==undefined? {min:props.min}:{})}
      {...(props.pattern!==undefined?{pattern:props.pattern}:{})}
      {...(props.step!==undefined? {step:props.step}:{})}
      {...(props.value!==undefined? {value:props.value}:{})}></input>
    </div>
  )
}

export default Input
