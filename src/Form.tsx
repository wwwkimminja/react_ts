import { useState } from "react";

function Form() {
  const [value,setValue]=useState("")
  const onChange=(event:React.FormEvent<HTMLInputElement>)=>{
    const {currentTarget:{value},}=event;
    setValue(value)
  };
  const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log("hello",value)
  }
  return (
    <div>
     <form onSubmit={onSubmit}>
      <input 
      type="text" 
      onChange={onChange} 
      value={value} 
      placeholder="username"/>
      <button>Login</button>
     </form>
    </div>
  )
}

export default Form;