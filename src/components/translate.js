import React from 'react'
import './translate.css';
// import { useEffect } from 'react';
// import countries from '../data'

export default function translate() {
    // const Translate = () => {
    //     useEffect(() => {
    //         const fromtext = document.querySelector(".from-text");
    //         const toText = document.querySelector(".to-text");
    //         const icons = document.querySelectorAll(".row i");
    //         const exchange = document.querySelector(".exchange");
    //         const translatebutton = document.querySelector("button");
    //         const selectTag = document.querySelectorAll("select");

    //         selectTag.forEach((tag, id) => {
    //             console.log(tag)
    //             for (let country_code in countries) {

    //                 // let selected = id === 0?country_code === "en-GB"?"selected":"":
    //                 // country_code === "hi-IN"?"selected":"";
    //                 // let option = "<p>My new paragraph.</p>";
    //                 // h2.insertAdjacentHTML("afterend", html);     
    //             }

    //         });

    //     })

    // }
    return (

        <div className='container' style={{
            minWidth: "100px",
            width: "800px",
            padding: "30px",
            background: "#fff",
            borderRadius: "7px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.01)",
            marginTop: "5%"
        }}>
            <div className='wrapper'>
                <div className='text-input'>
                    <textarea
                        spellcheck-false="true"
                        className="from-text"
                        placeholder="Enter some thing">
                    </textarea>
                    <textarea
                        spellcheck-false="true"
                        className="to-text"
                        placeholder="translate"
                        readOnly
                        disabled>
                    </textarea>
                </div>
                <ul className='controls'>
                    <li className='row-form'>
                        <div className='icons'>
                            <i id="from" className='fas fa-volume-up'></i>
                            <i id="from" className='fas fa-copy'></i>
                        </div>
                        <select></select>
                        <li className='exchange'>
                            <i className='fas fa-exchange-alt'> </i>
                        </li>
                    </li>
                    <li className='row-to'>
                        <div className='icons'>
                            <select></select>
                            <i id="to" className='fas fa-volume-up'></i>
                            <i id="to" className='fas fa-copy'></i>
                        </div>
                    </li>
                </ul>
                <button style={{
                    width: "100%",
                    padding: "14px",
                    outline: "none",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    marginTop: "5px",
                    fontSize: "17px",
                    borderRadius: '5px',
                    background: "#ffc107"
                }}>Translate</button>
            </div>
        </div>

    )
}

