import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
// import translate from "./translate";

// import Alert from '//Alert';
// import Page from './page';
// import About from './About'



export default function Nav(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Translate">Translate</Link>
                            </li>


                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                    </div>
                    <div className="d-flex">
                        {/* <button type="button" class="btn btn-primary" style={{height:"30px" , width:"30px",borderRadius:"50%"}}></button> */}
                        <div className="bg-primary rounded mx-2" onClick={() => { props.colormode('primary') }} style={{ height: "30px", width: "30px", border: "1px solid black" }}></div>
                        <div className="bg-secondary rounded mx-2" onClick={() => { props.colormode('secondary') }} style={{ height: "30px", "width": "30px", border: "1px solid black" }}></div>
                        <div className="bg-success rounded mx-2" onClick={() => { props.colormode('success') }} style={{ height: "30px", "width": "30px", border: "1px solid black" }}></div>
                        <div className="bg-danger rounded mx-2" onClick={() => { props.colormode('danger') }} style={{ height: "30px", "width": "30px", border: "1px solid black" }}></div>
                        <div className="bg-warning rounded mx-2" onClick={() => { props.colormode('warning') }} style={{ height: "30px", "width": "30px", border: "1px solid black" }}></div>
                        <div className="bg-info rounded mx-2" onClick={() => { props.colormode('info') }} style={{ height: "30px", "width": "30px", border: "1px solid black" }}></div>
                        <div className="bg-light rounded mx-2" onClick={() => { props.colormode('light') }} style={{ height: "30px", "width": "30px", border: "1px solid black" }}></div>
                        <div className="bg-dark rounded mx-2" onClick={() => { props.colormode('dark') }} style={{ height: "30px", "width": "30px", border: "1px solid white" }}></div>

                    </div>
                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input className="form-check-input mx-3" onClick={() => { props.tooglemode(null) }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
                    </div>
                </div>
            </nav>

            {/* <Page heading="Enter the text analyzer" /> */}
            {/* <About /> */}
            {/* <Alert/> */}








        </>

    )
}