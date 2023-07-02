import React, { useState } from "react";

export default function Textfroms(props) {
  // This style is for Darkmode

  // This style is for Navbar

  // This Function is for convert to UpperCase Text

  const handleUpclike = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to uppercase!", "success");
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
    props.showalert("Converted to only first letter to uppercase!", "success");
  };

  // This Function Is For Convert To LowerCase Text

  const handleLoclike = () => {
    // console.log("Uppercase was cliked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lowercase!", "success");
  };

  // This Function is For CopyText
  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert("CopyText", "success");
  };

  // This Function Use For Clear Text

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showalert("Clear Text!", "success");
  };

  // This Function Use for Remove Extra Spaces

  const handleRemoveExtraSpace = () => {
    // Get the current text of the textarea
    let currentText = document.getElementById("myBox").value;

    // Remove extra spaces from the text
    let convertedText = currentText.replace(/\s+/g, " ");

    // Set the new text of the textarea
    document.getElementById("myBox").value = convertedText;
    props.showalert("Remove extra spaces", "success");
  };

  const handleOnchange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>{props.heading}</h2>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#B5ABAB" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button disabled={text.length===0}
          className="btn mx-1 my-1"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            border:
              props.mode === "dark" ? "1px solid white" : "1px solid black",
          }}
          onClick={handleUpclike}
        >
          Convert To Uppercase
        </button>
        <button disabled={text.length===0}
          className="btn mx-1 my-1"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            border:
              props.mode === "dark" ? "1px solid white" : "1px solid black",
          }}
          onClick={handleFlUpclike}
        >
          Only First Letter To Uppercase
        </button>
        <button disabled={text.length===0}
          className="btn mx-1 my-1"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            border:
              props.mode === "dark" ? "1px solid white" : "1px solid black",
          }}
          onClick={handleLoclike}
        >
          Convert To Lowercase
        </button>
        <button disabled={text.length===0}
          className="btn mx-1 my-1"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            border:
              props.mode === "dark" ? "1px solid white" : "1px solid black",
          }}
          onClick={handleCopyText}
        >
          CopyText
        </button>
        <button disabled={text.length===0}
          className="btn mx-1 my-1"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            border:
              props.mode === "dark" ? "1px solid white" : "1px solid black",
          }}
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button disabled={text.length===0}
          className="btn mx-1 my-1"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            border:
              props.mode === "dark" ? "1px solid white" : "1px solid black",
          }}
          onClick={handleRemoveExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h4>Your Text Summary</h4>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Take For Read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Noting To Preview"} </p>
      </div>
    </>
  );
}
