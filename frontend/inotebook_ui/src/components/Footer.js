import React from 'react'

const Footer = () => {
    

    let myStyle = {
        fontSize:'95px'
    }
    return (
      <div>
        <div className="container-fluid bg-dark h-20 py-5 ">
            <div className="container ">
                <div className="row mx-5">
                    <i className="bi bi-facebook px-5" style={myStyle}></i>
                    <i className="bi bi-google px-5" style={myStyle}></i>
                    <i className="bi bi-telegram px-5" style={myStyle}></i>
                    <i className="bi bi-whatsapp px-5" style={myStyle}></i>
                    <i className="bi bi-messenger px-5" style={myStyle}></i>
                </div>
                <div className="row mx-auto my-2 d-flex justify-content-center text-white">
                    <span ><i className="bi bi-envelope-open"></i> feedback@newspaper.com</span>
                </div>
            </div>
        </div>
      </div>
    )

}

export default Footer
