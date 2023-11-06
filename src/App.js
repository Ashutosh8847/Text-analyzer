import { useState } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Page from './components/page.js';
import Alert from './components/Alert';
import About from './components/About'; //
import Translate from './components/translate';
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
// import { RedirectFunction,Route, Switch } from "react-router";

// import { createBrowserRouter, RouterProvider, Routes,Router, Link,useLocation  } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("");


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert("");

    }, 1500);

  }


  const removebodyclasses = () => {
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-secondary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-info")
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
  }

  const colorMode = (cls) => {
    removebodyclasses()
    console.log(cls)
    document.body.classList.add("bg-" + cls)
    if (cls === "secondary" || cls === "dark") {
      const myElement = document.getElementById("myclass");
      const hElement = document.getElementById("hyper");
      const clr = document.getElementsByClassName("btn btn-primary")
      for (const container of clr) {
        container.style.backgroundColor = "#C7B750";
        container.style.color = "white"
      }
      if (myElement) {
        myElement.style.color = "white";
        hElement.style.color = "white";
        // clr.style.backgroundColor="red"

      }
    } else if (cls === "primary") {
      const clrs = document.getElementsByClassName("btn btn-primary")
      for (const containers of clrs) {
        containers.style.backgroundColor = "red";
        containers.style.color = "black"
      }


    } else if (cls === "danger") {
      const clrs = document.getElementsByClassName("btn btn-primary")
      for (const containers of clrs) {
        containers.style.backgroundColor = "#505AC7";
        containers.style.color = "black"
      }

    }


  }




  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#206666";
      showAlert("Dark mode is enabled", "success");

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success")


    }
  }


  return (
    <>
      
      <Main >
      <Nav mode={mode} tooglemode={toogleMode} colormode={colorMode} />
      <Alert Alert={alert} />

        <Routes>
        {/* <Route exact path="/" element={<Nav mode={mode} tooglemode={toogleMode} colormode={colorMode} />} />
        <Route exact path="/"   elemrnt={<Alert Alert={alert} />} /> */}
          <Route exact path="/" element={<Page showalert={showAlert} heading="Enter the text analyzer" mode={mode} />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Translate" element={<Translate />} />
         
        </Routes>
      </Main>



    </>

  );



}



export default App;
