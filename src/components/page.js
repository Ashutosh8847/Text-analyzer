import React, { useState } from "react";
import '../App.css';
// import translate from 'google-translate-api';
// import { showAlert } from '../App';
// import translate from "google-translate-api-browser";
export default function Page(props) {
  const [text, setText] = useState("");


  const handleuppercase = () => {
    console.log("butten is fired ")
    let upperstring = text.toLocaleUpperCase();
    setText(upperstring)
    props.showalert("Uppercase is enabled", "success")


  }
  const handlelowercase = () => {
    console.log("lower button is fired")
    let lowerstring = text.toLocaleLowerCase();
    setText(lowerstring)
    props.showalert("lowercase is enabled", "success")
  }
  const maintaininggap = () => {
    console.log("gap button fired")
    let words = text.split(/[ ]+/);
    setText(words.join(" "))
    props.showalert("Removing gap is enabled", "success")
  }
  const handliecopytext = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showalert("Copy text is enabled", "success")

  }
  const handleClearText = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    console.log("cleartext is fired")
    text.value = "";
    setText("");
    props.showalert("Clear text is enabled", "success")

  }
  const handleDuplicate = () => {
    const sentences = text.split(/(?<=[.!?])\s+(?=[A-Za-z])/);
    const duplicates = {};
    const duplicateSentences = [];

    for (const sentence of sentences) {
      const trimmedSentence = sentence.trim();

      if (duplicates[trimmedSentence]) {
        duplicates[trimmedSentence]++;
        if (duplicates[trimmedSentence] === 2) {
          duplicateSentences.push(trimmedSentence);
        }
      } else {
        duplicates[trimmedSentence] = 1;
      }
    }

    setText(duplicateSentences.join(". "));

    console.log("Duplicate Sentences:", duplicateSentences);
  };
  const removeDupicate = () => {
    const sentences = text.split((/(?<=[.!?])\s+(?=[A-Za-z])/));
    const duplicates = {};
    const duplicateSentences = [];

    for (const sentence of sentences) {
      const trimmedSentence = sentence.trim();

      if (duplicates[trimmedSentence]) {
        duplicates[trimmedSentence]++;
      } else {
        duplicates[trimmedSentence] = 1;
        duplicateSentences.push(trimmedSentence);
      }
    }

    setText(duplicateSentences.join(" "));

    console.log("Duplicate Sentences:", duplicateSentences);
  };


  const handleOnChange = (event) => {
    console.log("on change clicked")
    setText(event.target.value);
  }

  // const entospanish = async ()=>{
  //   console.log("spanish nutton is clicked")
  //   try {
  //     const { text: translatedText } = await translate(text, { to: "es" });
  //     setText(translatedText);
  //   } catch (error) {
  //     console.error("Translation error:", error);
  //   }
  // }
  return (
    <div>
      <>
        <div className="container " style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <div id="hyper" style={{paddingTop:"50px" }}>
            <h2>{props.heading}</h2>
          </div>
          <div className="mb-3">

            <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "#9DC750" : "white", color: props.mode === "dark" ? "white" : "black" }} id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button disabled={text.length === 0} type="button" className="btn btn-primary" onClick={handleuppercase}>click to upper case</button>
          <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-1" onClick={handlelowercase}>click to lower case</button>
          <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={maintaininggap}>Removing gap</button>
          <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handliecopytext}>copy text</button>
          <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleDuplicate}>check duplicate</button>
          <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={removeDupicate}>remove duplicate</button>
          <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-2"  onClick={handleClearText}>clear text</button>
          {/* <button disabled={text.length === 0} type="button" className="btn btn-primary mx-1 my-2"  onClick={entospanish}>change to spanish</button> */}




        </div>
        <div className="container my-2" id='myclass' style={{ color: props.mode === "dark" ? "white" : "black" }}  >
          <h2>Your text summary</h2>
          <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} chars</p>
          <p> {Math.round(0.008 * text.split(" ").length)} minutes take to read</p>
          <h3>preview summary:</h3>
          <p>{text.length > 0 ? text : "Enter something to see the preview"}</p>

        </div>
      </>
    </div>
  )
}







