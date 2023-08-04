import React from 'react'

const AlertBox = (props) => {

  // let mystyle= {
  //   marginTop : '50px'
  // }

  const Capitalized = (text) =>{
    let lower = text.toLowerCase();
    return lower[0].toUpperCase() + lower.slice(1);
  }
  
  return (
    props.alert && 
    <div className='my-5'>
      <div className={`alert alert-success alert-dismissible fade show`} role="alert">
        <strong>{Capitalized(props.alert.type)}</strong> : {props.alert.msg}
      </div>
    </div>

  )
}

export default AlertBox