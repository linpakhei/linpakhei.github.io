import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Particles from 'react-particles-js';
import Background from './Background';

function About() {
    const[settings, setSettings] = useState({
        entries: [
            { label: 'Dev Blog', url: 'http://niklasknaack.blogspot.de/', target: '_top' },
            { label: 'Flashforum', url: 'http://www.flashforum.de/', target: '_top' },
            { label: 'jQueryScript.net', url: 'http://www.jqueryscript.net/', target: '_top' },
            { label: 'Javascript-Forum', url: 'http://forum.jswelt.de/', target: '_top' },
            { label: 'JSFiddle', url: 'https://jsfiddle.net/user/NiklasKnaack/fiddles/', target: '_top' },
            { label: 'CodePen', url: 'http://codepen.io/', target: '_top' },
            { label: 'three.js', url: 'http://threejs.org/', target: '_top' },
            { label: 'WebGLStudio.js', url: 'http://webglstudio.org/', target: '_top' },
            { label: 'JS Compress', url: 'http://jscompress.com/', target: '_top' },
            { label: 'TinyPNG', url: 'https://tinypng.com/', target: '_top' },
            { label: 'Can I Use', url: 'http://caniuse.com/', target: '_top' },
            { label: 'URL shortener', url: 'https://goo.gl/', target: '_top' },
            { label: 'HTML Encoder', url: 'http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx', target: '_top' },
            { label: 'Twitter', url: 'https://twitter.com/niklaswebdev', target: '_top' },
            { label: 'deviantART', url: 'http://nkunited.deviantart.com/', target: '_top' },
            { label: 'Gulp', url: 'http://gulpjs.com/', target: '_top' },
            { label: 'Browsersync', url: 'https://www.browsersync.io/', target: '_top' },
            { label: 'GitHub', url: 'https://github.com/', target: '_top' },
            { label: 'Shadertoy', url: 'https://www.shadertoy.com/', target: '_top' },
            { label: 'Starling', url: 'http://gamua.com/starling/', target: '_top' },
            { label: 'jsPerf', url: 'http://jsperf.com/', target: '_top' },
            { label: 'Foundation', url: 'http://foundation.zurb.com/', target: '_top' },
            { label: 'CreateJS', url: 'http://createjs.com/', target: '_top' },
            { label: 'Velocity.js', url: 'http://julian.com/research/velocity/', target: '_top' },
            { label: 'TweenLite', url: 'https://greensock.com/docs/#/HTML5/GSAP/TweenLite/', target: '_top' },
            { label: 'jQuery', url: 'https://jquery.com/', target: '_top' },
            { label: 'jQuery Rain', url: 'http://www.jqueryrain.com/', target: '_top' },
            { label: 'jQuery Plugins', url: 'http://jquery-plugins.net/', target: '_top' },
        ],
        width: 480,
        height: 480,
        radius: '65%',
        radiusMin: 75,
        bgDraw: false,
        bgColor: '#111',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 1,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#fff',
        fontWeight: 'bold',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10,
        animatingSpeed: 0.01,
        animatingRadiusLimit: 1.3
    });

    useEffect(() => {
        var svg3DTagCloud = new window.SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    });

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
        margin: auto;
        z-index: 0;
    `;
                        
    return (
        <Wrapper>
            {/* <Background/> */}
            <Container>
                <div id="holder"></div>
            </Container>
        </Wrapper>
    )
}

export default About
