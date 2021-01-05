import React, {useState, useEffect, useRef} from 'react'
import styled from "styled-components";
import '../styles.css';

function Profolio() {
    window.scrollPos = 0;

    var pos = document.documentElement;

    const getRelativePos = e => {    
        try{
            pos.style.setProperty("--img1x", (e.clientX-document.getElementById("img1").offsetLeft) + "px");
            pos.style.setProperty("--img1y", (e.clientY-document.getElementById("img1").offsetTop+window.scrollPos) + "px");
            pos.style.setProperty("--img2x", (e.clientX-document.getElementById("img2").offsetLeft) + "px");
            pos.style.setProperty("--img2y", (e.clientY-document.getElementById("img2").offsetTop+window.scrollPos) + "px");
            pos.style.setProperty("--img3x", (e.clientX-document.getElementById("img3").offsetLeft) + "px");
            pos.style.setProperty("--img3y", (e.clientY-document.getElementById("img3").offsetTop+window.scrollPos) + "px");

            pos.style.setProperty("--img4x", (e.clientX-document.getElementById("img4").offsetLeft) + "px");
            pos.style.setProperty("--img4y", (e.clientY-document.getElementById("img4").offsetTop+window.scrollPos) + "px");
            pos.style.setProperty("--img5x", (e.clientX-document.getElementById("img5").offsetLeft) + "px");
            pos.style.setProperty("--img5y", (e.clientY-document.getElementById("img5").offsetTop+window.scrollPos) + "px");
            pos.style.setProperty("--img6x", (e.clientX-document.getElementById("img6").offsetLeft) + "px");
            pos.style.setProperty("--img6y", (e.clientY-document.getElementById("img6").offsetTop+window.scrollPos) + "px");

            pos.style.setProperty("--img7x", (e.clientX-document.getElementById("img7").offsetLeft) + "px");
            pos.style.setProperty("--img7y", (e.clientY-document.getElementById("img7").offsetTop+window.scrollPos) + "px");
            pos.style.setProperty("--img8x", (e.clientX-document.getElementById("img8").offsetLeft) + "px");
            pos.style.setProperty("--img8y", (e.clientY-document.getElementById("img8").offsetTop+window.scrollPos) + "px");
            pos.style.setProperty("--img9x", (e.clientX-document.getElementById("img9").offsetLeft) + "px");
            pos.style.setProperty("--img9y", (e.clientY-document.getElementById("img9").offsetTop+window.scrollPos) + "px");

            pos.style.setProperty("--img10x", (e.clientX-document.getElementById("img10").offsetLeft) + "px");
            pos.style.setProperty("--img10y", (e.clientY-document.getElementById("img10").offsetTop+window.scrollPos) + "px");
            pos.style.setProperty("--img11x", (e.clientX-document.getElementById("img11").offsetLeft) + "px");
            pos.style.setProperty("--img11y", (e.clientY-document.getElementById("img11").offsetTop+window.scrollPos) + "px");
            pos.style.setProperty("--img12x", (e.clientX-document.getElementById("img12").offsetLeft) + "px");
            pos.style.setProperty("--img12y", (e.clientY-document.getElementById("img12").offsetTop+window.scrollPos) + "px");
        } catch(err) {
            // console.log(err);
            window.removeEventListener('mousemove', getRelativePos);
        }
    }
    
    useEffect(() => {
        console.log("useEffect called");

        window.addEventListener('mousemove', getRelativePos);

        document.querySelector('#wrapper').addEventListener('scroll', () => {
            // console.log("Y: " + document.querySelector('#wrapper').scrollTop);
            window.scrollPos = document.querySelector('#wrapper').scrollTop;
        })

        return () => {
            // console.log("component unmounted.");
            window.removeEventListener('mousemove', getRelativePos);
        }
        
    }, []);

    const Wrapper = styled.div`
        // background-color: #2e2e2e;
        background: linear-gradient(45deg, rgb(69, 72, 77) 0%, rgb(0, 0, 0) 100%);
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow-x: scroll;
    `;
    const Container = styled.div`
        margin-top: 90px;
        margin-left: auto;
        margin-right: auto;
        z-index: 0;
    `;

    return (
        <Wrapper id="wrapper">
            <Container id="container">
                <div>
                    <img className='image' id='img1' src={'/gallery/i-xrays.png'}/>
                    <img className='image' id='img2' src={'/gallery/i-worms.png'}/>
                    <img className='image' id='img3' src={'/gallery/i-aurora.png'}/>
                </div>
                <div>
                    <img className='image' id='img4' src={'/gallery/i-angus.png'}/>
                    <img className='image' id='img5' src={'/gallery/i-huitzi.png'}/>
                    <img className='image' id='img6' src={'/gallery/i-dali.png'}/>
                </div>
                <div>
                    <img className='image' id='img7' src={'/gallery/i-bride.png'}/>
                    <img className='image' id='img8' src={'/gallery/i-man.png'}/>
                    <img className='image' id='img9' src={'/gallery/i-d.png'}/>
                </div>
                <div>
                    <img className='image' id='img10' src={'/gallery/i-v.png'}/>
                    <img className='image' id='img11' src={'/gallery/i-v2.png'}/>
                    <img className='image' id='img12' src={'/gallery/i-v3.png'}/>
                </div>
            </Container>
        </Wrapper>
    )
}

export default Profolio
