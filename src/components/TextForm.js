import React,{useState} from 'react'

function TextForm(props) {
    const [text,setText]=useState("")
    const [copyText,setCopyText] =useState("Copy Text")
    const [removeSpace,setRemoveSpace] =useState("Remove Extra Space")
    const handleUpperClick=()=>{
        setText(text.toUpperCase())
        props.showAlert("Text converted into upper case","success")
    }
    const handleOnClick=(e)=>{
        setText(e.target.value)
        setCopyText("Copy Text")
        setRemoveSpace("Remove Extra Space")
    }
    const handleLowerClick=()=>{
        setText(text.toLowerCase())
        props.showAlert("Text converted into lower case","success")
    }
    const handleClrClick=()=>{
        setText("")
        props.showAlert("Textbox is clear","success")
    }
    const handleExtraSpaces=()=>{
        // setText(text.split(/[  ]+/).join(" "))
        if(removeSpace === "Remove Extra Space")
        {
            setText(text.split(/[  ]+/).join(" "))
            setRemoveSpace("Removed") 
            
        }else{
            setRemoveSpace("Remove Extra Space")
        }
        props.showAlert("Extra spaces are removed","success")
    }
    const handleCopy=()=>{
        if(copyText === "Copy Text")
        {
            navigator.clipboard.writeText(text)
            setCopyText("Copied")
        }else{
            setCopyText("Copy Text")
        }
        props.showAlert("Extra spaces are removed","success")
    }
  return (
    <>
    <div className='container' style={{color: props.mode ==="dark"?"white":"black"}}>
    <h2>{props.heading}</h2>
        <div className="form-group">
            {/* <label for="myBox">Example textarea</label> */}
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode ==="dark"?"#38516a":"white",color: props.mode ==="dark"?"white":"black"}} onChange={handleOnClick} id="myBox" rows="4"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-3' onClick={handleUpperClick} >Convert To UpperCase</button>
        <button disabled={text.length===0}className='btn btn-primary mx-1 my-3' onClick={handleLowerClick} >Convert To LowerCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-3' onClick={handleCopy} >{copyText}</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-3' onClick={handleExtraSpaces} >{removeSpace}</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-3' onClick={handleClrClick} >Clear Text</button>
    </div>
    <div className='container my-1' style={{color: props.mode ==="dark"?"white":"black"}}>
    <h2>Your text summary</h2>
    <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(/\s+/).filter((e)=>{return e.length!==0}).length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ?text:"Enter some text in the above textbox to preview "}</p>
    </div>
    </>
  )
}

export default TextForm
