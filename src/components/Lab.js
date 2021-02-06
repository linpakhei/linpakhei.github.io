import React, { useEffect } from 'react'
import Background from "./Background";

function Profolio() {
    window.scrollPos = 0;
    
    useEffect(() => {
        console.log("useEffect called");

        var pos = document.documentElement;

        const getRelativePos = e => {    
            try{
                pos.style.setProperty("--img1x", (e.clientX-document.getElementById("imgDiv1").offsetLeft) + "px");
                pos.style.setProperty("--img1y", (e.clientY-document.getElementById("imgDiv1").offsetTop+window.scrollPos) + "px");
                pos.style.setProperty("--img2x", (e.clientX-document.getElementById("imgDiv2").offsetLeft) + "px");
                pos.style.setProperty("--img2y", (e.clientY-document.getElementById("imgDiv2").offsetTop+window.scrollPos) + "px");
                pos.style.setProperty("--img3x", (e.clientX-document.getElementById("imgDiv3").offsetLeft) + "px");
                pos.style.setProperty("--img3y", (e.clientY-document.getElementById("imgDiv3").offsetTop+window.scrollPos) + "px");
    
                pos.style.setProperty("--img4x", (e.clientX-document.getElementById("imgDiv4").offsetLeft) + "px");
                pos.style.setProperty("--img4y", (e.clientY-document.getElementById("imgDiv4").offsetTop+window.scrollPos) + "px");
                pos.style.setProperty("--img5x", (e.clientX-document.getElementById("imgDiv5").offsetLeft) + "px");
                pos.style.setProperty("--img5y", (e.clientY-document.getElementById("imgDiv5").offsetTop+window.scrollPos) + "px");
                pos.style.setProperty("--img6x", (e.clientX-document.getElementById("imgDiv6").offsetLeft) + "px");
                pos.style.setProperty("--img6y", (e.clientY-document.getElementById("imgDiv6").offsetTop+window.scrollPos) + "px");
    
                pos.style.setProperty("--img7x", (e.clientX-document.getElementById("imgDiv7").offsetLeft) + "px");
                pos.style.setProperty("--img7y", (e.clientY-document.getElementById("imgDiv7").offsetTop+window.scrollPos) + "px");
                pos.style.setProperty("--img8x", (e.clientX-document.getElementById("imgDiv8").offsetLeft) + "px");
                pos.style.setProperty("--img8y", (e.clientY-document.getElementById("imgDiv8").offsetTop+window.scrollPos) + "px");
                pos.style.setProperty("--img9x", (e.clientX-document.getElementById("imgDiv9").offsetLeft) + "px");
                pos.style.setProperty("--img9y", (e.clientY-document.getElementById("imgDiv9").offsetTop+window.scrollPos) + "px");
    
                pos.style.setProperty("--img10x", (e.clientX-document.getElementById("imgDiv10").offsetLeft) + "px");
                pos.style.setProperty("--img10y", (e.clientY-document.getElementById("imgDiv10").offsetTop+window.scrollPos) + "px");
                pos.style.setProperty("--img11x", (e.clientX-document.getElementById("imgDiv11").offsetLeft) + "px");
                pos.style.setProperty("--img11y", (e.clientY-document.getElementById("imgDiv11").offsetTop+window.scrollPos) + "px");
                pos.style.setProperty("--img12x", (e.clientX-document.getElementById("imgDiv12").offsetLeft) + "px");
                pos.style.setProperty("--img12y", (e.clientY-document.getElementById("imgDiv12").offsetTop+window.scrollPos) + "px");
            } catch(err) {
                // console.log(err);
                window.removeEventListener('mousemove', getRelativePos);
            }
        }

        // First enter this page
        pos.style.setProperty("--img1x", (-1000) + "px");
        pos.style.setProperty("--img1y", (-1000) + "px");
        pos.style.setProperty("--img2x", (-1000) + "px");
        pos.style.setProperty("--img2y", (-1000) + "px");
        pos.style.setProperty("--img3x", (-1000) + "px");
        pos.style.setProperty("--img3y", (-1000) + "px");
        pos.style.setProperty("--img4x", (-1000) + "px");
        pos.style.setProperty("--img4y", (-1000) + "px");
        pos.style.setProperty("--img5x", (-1000) + "px");
        pos.style.setProperty("--img5y", (-1000) + "px");
        pos.style.setProperty("--img6x", (-1000) + "px");
        pos.style.setProperty("--img6y", (-1000) + "px");
        pos.style.setProperty("--img7x", (-1000) + "px");
        pos.style.setProperty("--img7y", (-1000) + "px");
        pos.style.setProperty("--img8x", (-1000) + "px");
        pos.style.setProperty("--img8y", (-1000) + "px");
        pos.style.setProperty("--img9x", (-1000) + "px");
        pos.style.setProperty("--img9y", (-1000) + "px");
        pos.style.setProperty("--img10x", (-1000) + "px");
        pos.style.setProperty("--img10y", (-1000) + "px");
        pos.style.setProperty("--img11x", (-1000) + "px");
        pos.style.setProperty("--img11y", (-1000) + "px");
        pos.style.setProperty("--img12x", (-1000) + "px");
        pos.style.setProperty("--img12y", (-1000) + "px");

        // Mouse move event listener
        window.addEventListener('mousemove', getRelativePos);

        // Scroll event listener
        document.querySelector('.wrapper').addEventListener('scroll', () => {
            window.scrollPos = document.querySelector('.wrapper').scrollTop;
        })

        return () => {
            // console.log("component unmounted.");
            window.removeEventListener('mousemove', getRelativePos);
        }
        
    }, []);

    return (
        <div className="wrapper">
            <Background/>
            <div className="container3">
                <div className="gallery">
                    <div className="imgDiv" id="imgDiv1">
                        <text className="text">x-rays</text>
                        <img className='image' id='img1' src={'/gallery/i-xrays.png'} alt="img1"/>
                    </div>
                    <div className="imgDiv" id="imgDiv2">
                        <text className="text">worms</text>
                        <img className='image' id='img2' src={'/gallery/i-worms.png'} alt="img2"/>
                    </div>
                    <div className="imgDiv" id="imgDiv3">
                        <text className="text">aurora</text>
                        <img className='image' id='img3' src={'/gallery/i-aurora.png'} alt="img3"/>
                    </div>
                    <div className="imgDiv" id="imgDiv4">
                        <text className="text">angus</text>
                        <img className='image' id='img4' src={'/gallery/i-angus.png'} alt="img4"/>
                    </div>
                    <div className="imgDiv" id="imgDiv5">
                        <text className="text">huitzi</text>
                        <img className='image' id='img5' src={'/gallery/i-huitzi.png'} alt="img5"/>
                    </div>
                    <div className="imgDiv" id="imgDiv6">
                        <text className="text">dali</text>
                        <img className='image' id='img6' src={'/gallery/i-dali.png'} alt="img6"/>
                    </div>
                    <div className="imgDiv" id="imgDiv7">
                        <text className="text">bride</text>
                        <img className='image' id='img7' src={'/gallery/i-bride.png'} alt="img7"/>
                    </div>
                    <div className="imgDiv" id="imgDiv8">
                        <text className="text">man</text>
                        <img className='image' id='img8' src={'/gallery/i-man.png'} alt="img8"/>
                    </div>
                    <div className="imgDiv" id="imgDiv9">
                        <text className="text">d</text>
                        <img className='image' id='img9' src={'/gallery/i-d.png'} alt="img9"/>
                    </div>
                    <div className="imgDiv" id="imgDiv10">
                        <text className="text">v</text>
                        <img className='image' id='img10' src={'/gallery/i-v.png'} alt="img10"/>
                    </div>
                    <div className="imgDiv" id="imgDiv11">
                        <text className="text">vii</text>
                        <img className='image' id='img11' src={'/gallery/i-v2.png'} alt="img11"/>
                    </div>
                    <div className="imgDiv" id="imgDiv12">
                        <text className="text">viii</text>
                        <img className='image' id='img12' src={'/gallery/i-v3.png'} alt="img12"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profolio
