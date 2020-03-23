import React from "react";
import ReactDOM from "react-dom";
import {useForm} from "react-hook-form";
import "./styles.css";

function App() {
  const {register, handleSubmit, errors} = useForm()
  //  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
  const onSubmit = data => {
   
    console.log(data);
  };

  
  // const validateUser = async (value) => {
  //   await sleep(1000)
  //   if(value === 'Bill') return true
  //   return false
  // } 

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <label>First Name:</label>
      <input name="firstName" ref={register({required: true, minLength: 3})}/>

      {errors.firstName && errors.firstName.type === 'required' && (
      <p>This is required</p>
      )}
      
      {errors.firstName && errors.firstName.type === 'minLength' && (
      <p>This field required min 3 char</p>
      )}

      <label>Last Name:</label>
      <input name="lastName"  ref={register({required: true})}/>

      {errors.lastName && errors.lastName.type === 'required' && (
      <p>This is required</p>
      )}

      <label>Gender</label>
      <select name="gender"  ref={register}>
        <option>Select...</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <label>Username</label>
      {/* <input name="username"  ref={register({required: true, validate: validateUser})}/> */}
      <input name="username"  ref={register({required: true})}/>

      {errors.username && errors.username.type === 'required' && (
      <p>This is required</p>
      )}

      <label>Email</label>
      <input name="email"  ref={register({ 
        required: 'This is required',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
        }})} />

      {errors.email && <p>{errors.email && errors.email.message}</p>}
    
    
      {/* {errors.email && errors.email.type === 'required' && (
      <p>This is required</p>
      )} */}

      <label>About you</label>
      <textarea name="about you"  ref={register} />

      <input type="submit"  />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
