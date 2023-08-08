import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login= (props)=> {
  const host = "http://localhost:5000";
  const [credential,setCredential] = useState({email:"",password:""});
  let navigate = useNavigate();

  const ValidateCredential = async(e)=>{
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/validateUser`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: credential.email,password: credential.password}),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      localStorage.setItem('token',json.authToken);
      navigate("/");
      props.showAlert('Login successful.','success');
    }else{
      props.showAlert('Invalid credentials','danger')
    }
  }

  const onChange = (e)=>{
    setCredential({...credential,[e.target.name]: e.target.value});
  }

  return (
    <div className='my-5 py-4'>
      <h2>Login to iNotebook</h2>
      <form className='mt-3' onSubmit={ValidateCredential}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={onChange} aria-describedby="emailHelp"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={onChange} name="password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login