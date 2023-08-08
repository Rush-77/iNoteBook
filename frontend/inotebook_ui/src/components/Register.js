import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Register = (props)=> {
  const host = "http://localhost:5000";
  const [credential,setCredential] = useState({name:"",email:"",password:""});
  let navigate = useNavigate();

  const newRegistration = async(e)=>{
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name:credential.name, email: credential.email,password: credential.password}),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      localStorage.setItem('token',json.authToken);
      navigate("/");
      props.showAlert('Login successful.','success');
    }else{
      alert(json.error);
      props.showAlert('Invalid credentials','danger')
    }
  }

  const onChange = (e)=>{
    setCredential({...credential,[e.target.name]: e.target.value});
  }

  return (
    <div className='my-5 py-4'>
      <h2>Register to iNotebook</h2>
      <form className="mt-3" onSubmit={newRegistration}>
        <div className="form-group">
          <label htmlFor="exampleInputName1">User Name</label>
          <input type="text" className="form-control" id="exampleInputName1" name="name" onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Register
