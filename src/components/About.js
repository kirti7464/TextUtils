import React from 'react'

function About(props) {
    // const [myStyle,setMyStyle] =useState({
    //     color:"black",
    //     backgroundColor:"white"
        
    // })
    const myStyle={
        color:props.mode === "dark"?"white":"#546d93",
        backgroundColor:props.mode === "dark"?"#546d93":"white"
    }
   
  return (
    <div className='container' style={{color:props.mode === "dark"?"white":"#546d93"}}>
    <h1 className='my-2'>About Us</h1>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Word and character counting</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle} >
                <strong>Accurately count the number of words and characters in your text.</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Text manipulation</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle} >
                <strong>Remove extra spaces, clear text, and convert text to uppercase or lowercase effortlessly.</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Copy and paste</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <strong>Seamlessly copy the manipulated text to your clipboard for easy sharing and editing.</strong>
                </div>
                </div>
            </div>
            </div>
            
    </div>
  )
}

export default About