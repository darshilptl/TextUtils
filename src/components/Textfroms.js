import React, { useState } from "react";

export default function Textfroms(props) {

  // This style is for Darkmode

  // This style is for Navbar 
  let navstyle = {
    color : 'black',
    backgroundColor : 'sliver',
    border: '1px solid black',
}

  // This Function is for convert to UpperCase Text

  const handleUpclike = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  // This Function is for convert to Only first letter to UpperCase Text

  const handleFlUpclike = () => {
    // Get the current text of the textarea
    let currentText = document.getElementById("myBox").value;

    // Convert the first letter of each word in the text to uppercase
    let convertedText = currentText.replace(/\b\w/g, function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Set the new text of the textarea
    document.getElementById("myBox").value = convertedText;
  };

  // This Function Is For Convert To LowerCase Text

  const handleLoclike = () => {
    // console.log("Uppercase was cliked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  // This Function Use For Clear Text

  const handleClearText = () => {
    // Get the current text of the textarea
    // let currentText = document.getElementById("myBox").value;

    // Set the new text of the textarea to an empty string
    document.getElementById("myBox").value = "";
  };

  // This Function Use for Remove Extra Spaces

  const handleRemoveExtraSpace = () => {
    // Get the current text of the textarea
    let currentText = document.getElementById("myBox").value;

    // Remove extra spaces from the text
    let convertedText = currentText.replace(/\s+/g, " ");

    // Set the new text of the textarea
    document.getElementById("myBox").value = convertedText;
  };

  const handleOnchange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h2>{props.heading}</h2>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn mx-1 my-1" style={navstyle} onClick={handleUpclike}>
          Convert To Uppercase
        </button>
        <button className="btn mx-1 my-1" style={navstyle} onClick={handleFlUpclike}>
          Only First Letter To Uppercase
        </button>
        <button className="btn mx-1 my-1"style={navstyle} onClick={handleLoclike}>
          Convert To Lowercase
        </button>
        <button className="btn mx-1 my-1" style={navstyle} onClick={handleClearText}>
          Clear Text
        </button>
        <button
          className="btn mx-1 my-1" style={navstyle}
          onClick={handleRemoveExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3">
        <h4>Your Text Summary</h4>
        <p>
          {text.split(" ").length} word and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes To Take For Read</p>
        <h4>Preview</h4>
        <p>{text} </p>
      </div>
    </>
  );
}
