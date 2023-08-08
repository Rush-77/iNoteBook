import React from 'react'

const AlertBox = (props) => {

  // let mystyle= {
  //   marginTop : '50px'
  // }

  // const Capitalized = (text) =>{
  //   let lower = text.toLowerCase();
  //   return lower[0].toUpperCase() + lower.slice(1);
  // }
  
  return (
    props.alert && 
    <div className='mt-5 pt-2'>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong> {props.alert.msg} </strong>
      </div>
    </div>

  )
}

export default AlertBox