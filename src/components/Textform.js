import React , {useState} from 'react'

export default function Textform(props) {
  const handleUpClick= ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick= ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  } 

const [text, setText]= useState("Enter text here");
  return (
    <>
      <div>
          <h1>{props.heading}</h1>
          <h2>{props.test}</h2>
          
  <div className="mb-3">
    <textarea className="form-control" id="myBox" value={text} onChange ={handleOnChange} rows="8"></textarea>

  </div>
  <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button type="button" className="btn btn-primary mx-2 " onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className = "container my-3">
      <h3>Your Text and Word Count</h3>
      <h5>{text.length} and {text.split(" ").length}</h5>

    </div>
    </>
  )
}
