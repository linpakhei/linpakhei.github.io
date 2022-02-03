import React, { useEffect } from 'react';
import styled from "styled-components";
import Background from '../Background';
import { useHistory } from "react-router-dom";
import Perspective from "./Perspective";


function Home() {
    // button click redirect to Contact Page
    const history = useHistory();
    
    const buttonClick = () => {
        let path = `contact`; 
        history.push(path);
    }

    function inputConsole(words) {
        var letterCount = 1;
        var target = document.getElementById('text')
        target.setAttribute('style', 'color: white')
        var row = 0;
        var waiting = false

        var visible = true;
        var con = document.getElementById('console');

        // text
        window.consoleText = window.setInterval(function() {
            if(words[row].length+1 === letterCount && row<words.length-1) {
                waiting = true;
                window.setTimeout(function() {
                    waiting = false;
                }, 500);

                row++;
                letterCount = 0;

                if(row!==1)
                    target.innerHTML += '<br>';

                if(row===3) {
                    target = document.getElementById('small-text');
                    target.setAttribute('style', 'opacity: 1');
                    con.setAttribute('style', 'font-size: 1em');
                }
            } else if(waiting === false) {
                target.innerHTML += words[row].substring(letterCount-1, letterCount)
                letterCount += 1;
            }
        }, 50)

        // underscore
        window.consoleUnderscore = window.setInterval(function() {
          if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;
      
          } else {
            con.className = 'console-underscore'
            visible = true;
          }
        }, 400)
    }

    useEffect(() => {
        inputConsole(['Hi,', ' this is Jason,', 'a Software Engineer.', 'I\'m a web developer based in Great Manchester, United Kingdom', 'specializing in Java (Back-end) and React JS (Front-end).']);

        return () => {
            window.clearInterval(window.consoleText);
            window.clearInterval(window.consoleUnderscore);
        };
    }, []);

    var htmlStart = "<html>";
    var headerStart = "<header>";
    var headerEnd = "</header>";
    var bodyStart = "<body>";
    var bodyend = "</body>";
    var htmlEnd = "</html>";

    const Container = styled.div`
        margin-top: 90px;
        margin-left: 50px;
        position: relative;
        display: flex;
        // height: 100%;
        width: 100%;
    `;

    const ContainerLeft = styled.div`
        width: 48%;
    `;

    const ContainerRight = styled.div`
        width: 50%;
    `;

    return (
        <div className="wrapper">
            <Background/>
            <Container className="container">
                <ContainerLeft className="container-left">
                    <div className="htmlTag">{htmlStart}</div>

                        <span className="htmlTag htmlTagHeader" style={{marginLeft: "60px"}}>{headerStart}</span>
                            <span className="headerText"> Home </span>
                        <span className="htmlTag">{headerEnd}</span>

                        <div className="htmlTag htmlTagBody" style={{marginLeft: "60px"}}>{bodyStart}</div>

                            <div className='console-container htmlContent' style={{marginLeft: "100px"}}>
                                <span id='text' className="htmlContentText"></span>
                                <span id='small-text' className="htmlContentSmallText"></span>
                                <div className='console-underscore' id='console'>&#95;</div>
                                <br/>
                                <br/>
                                <br/>
                                <button data-hover="click me!" id="contactButton" onClick={buttonClick}><div id="contactText">Contact me!</div></button>
                            </div>
                            
                        <div className="htmlTag htmlTagBody" style={{marginLeft: "60px"}}>{bodyend}</div>

                    <div className="htmlTag">{htmlEnd}</div>
                </ContainerLeft>
                <ContainerRight className="container-right">
                    {/* <Polygon/> */}
                    <Perspective/>
                </ContainerRight>
            </Container>
        </div>
    )
}

export default Home
