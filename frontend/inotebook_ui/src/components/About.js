import React from 'react'

const About = () => {
    
    let myStyle={
        display:'inline-block',
        width:'inherit'
    }
    return (
      <div className='container' style={{'marginTop':'70px'}}>
        <h2>About Us</h2>
        <p className='blockquote-footer'>Click on the below button to to know about us.</p>
        <span type="button" className="btn btn-danger my-3" data-toggle="collapse" data-target="#demo1" style={myStyle}>Purpose</span>
        <div id="demo1" className="collapse m-3" >
            As world’s technology is rapidly growing we has fast connection and network to instantly connect to other person. Day to day use in mobile, tablets and laptop is increasing,
            most of the people already have this facilities. In this fast and information oriented world we need to stay updated with every incidents and news too. 
            This News app is web application where user have access to latest news from 120+ newspapers from 50+ countries. The main focus of this
            application is to connect news articles from all around the world and deliver it to user as fast as possible in best visualize way. 
            The main focus of this application is to connect news articles from all around the world and deliver it to user as fast as possible in best visualize way.
        </div>
        <br/>
        <button type="button" className="btn btn-dark my-3" data-toggle="collapse" data-target="#demo2" style={myStyle}>Benefits </button>
        <div id="demo2" className="collapse my-3" >
            <ul>
                <li>
                    <p>
                        <b>Automatic updates </b>: The user gets automatic updates of the latest news on the app and so does not have to refresh the app window again and again. 
                        The user can get regular news updates related to business, sports, technology, and others on their Smartphone with simple to use navigation and in the preferred language as well.
                    </p>
                </li>
                <li>
                    <p>
                        <b>wide range </b>: Such mobile apps provide the latest and reliable news update from the world. 
                        The user gets access to information in every field such as politics, sports and many.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Bookmarks </b>: The users get the option to save their favorite news topics for later view by bookmarking it in the app.
                    </p>
                </li>
            </ul>
        </div>
        <br/>
        {/* <button type="button" className="btn btn-dark my-1" data-toggle="collapse" data-target="#demo3">Partner</button>
        <div id="demo3" className="collapse" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div> */}
      </div>
    )
}

export default About
