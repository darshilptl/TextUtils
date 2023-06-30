import React, { useState } from 'react';

export default function Textfroms(props){
  const handleUpclike = () =>{
    // console.log("Uppercase was cliked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnchange = (event) =>{
    // console.log("On Change");
    setText(event.target.value)
  }
  const [text, setText] = useState();
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3 my-3">
        <textarea className ="form-control" value={text} onChange={handleOnchange} id="myBox" rows="10" placeholder='Enter Text Here'></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpclike}>Convert To Uppercase</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} word and {text.length} characters</p>
    </div>
    </>
  );
}

