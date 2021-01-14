import React, { useState, useEffect } from 'react'
import Painting from './Painting';
import styled from "styled-components";
import emailjs from 'emailjs-com';

function Contact() {

    const [state, setState] = useState({name: "", email: "", message: ""});

    const handleChange = e => {
        const {name, value} = e.target;
        setState(({
            ...state,
            [name]: value
        }));
    }

    const handleSubmit = event => {
        console.log(JSON.stringify(state));

        event.preventDefault();

        emailjs.sendForm('service_7nu66iv', 'template_w2nmcdj', event.target, 'user_Kdvxq9GqpnMNT4qAbTGm0')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }

    var htmlStart = "<html>";
    var headerStart = "<header>";
    var headerEnd = "</header>";
    var bodyStart = "<body>";
    var bodyend = "</body>";
    var htmlEnd = "</html>";

    const container = {
        marginTop: '90px',
        marginLeft: '50px',
        position: 'relative',
        display: 'flex',
        // height: '100%',
        width: '100%',
    };
    
    const containerLeft = {
        width: '40%',
    };

    const inputStyle = {
        background: "#37414e",
        border: "0",
        boxSizing: "border-box",
        color: "#fff",
        display: "block",
        fontSize: "12pt",
        marginBottom: "3px",
        outline: "none",
        padding: "10px 15px",
        width: "100%",
    }

    const textareaStyle = {
        background: "#37414e",
        border: "0",
        boxSizing: "border-box",
        color: "#fff",
        display: "block",
        fontSize: "12pt",
        marginBottom: "3px",
        outline: "none",
        padding: "10px 15px",
        width: "100%",
        marginBottom: "5px",
        minHeight: "150px",
    }

    return (
        <div className="wrapper">
            <div style={container} className="container">
                <div style={containerLeft} className="container-left">
                    
                    <div className="htmlTag">{htmlStart}</div>

                    <span className="htmlTag htmlTagHeader" style={{marginLeft: "60px"}}>{headerStart}</span>
                        <span className="headerText"> Contact </span>
                    <span className="htmlTag">{headerEnd}</span>

                    <div className="htmlTag htmlTagBody" style={{marginLeft: "60px"}}>{bodyStart}</div>
                        <form style={{marginLeft: "100px"}} onSubmit={handleSubmit} className="htmlContent">
                            <input key="input1" placeholder="Name" type="text" name="name" style={inputStyle} value={state.name} onChange={handleChange}/>
                            <input key="input2" placeholder="Email" type="text" name="email" style={inputStyle} value={state.email} onChange={handleChange}/>
                            <textarea key="input3" placeholder="Your Message" type="text" name="message" style={textareaStyle} value={state.message} onChange={handleChange}/>

                            <button type="submit" data-hover="Thanks!" id="contactButton"><div id="contactText">Submit</div></button>
                        </form>
                    <div className="htmlTag htmlTagBody" style={{marginLeft: "60px"}}>{bodyend}</div>

                    <div className="htmlTag">{htmlEnd}</div>

                    
                </div>
                <Painting/>
            </div>
        </div>
    )
}

export default Contact
