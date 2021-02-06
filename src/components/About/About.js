import React, { useEffect } from 'react';
import styled from "styled-components";
import Background from '../Background';
import ProgressBar from './ProgressBar';

function About() {
    useEffect(() => {
        const settings = {
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
            width: 600,
            height: 600,
            radius: '80%',
            radiusMin: 75,
            bgDraw: false,
            bgColor: '#111',
            opacityOver: 1.00,
            opacityOut: 0.05,
            opacitySpeed: 6,
            fov: 800,
            speed: 1,
            fontFamily: 'Oswald, Arial, sans-serif',
            fontSize: '20',
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
        }

        // tag cloud
        new window.SVG3DTagCloud( document.getElementById( 'tagSphere' ), settings );
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

    const testData = [
        { bgcolor: "#6a1b9a", completed: 90, lang: "Java" },
        { bgcolor: "#00695c", completed: 90, lang: "Spring" },
        { bgcolor: "#ef6c00", completed: 85, lang: "Redis" },
        { bgcolor: "#00a1a7", completed: 80, lang: "Javascript" },
        { bgcolor: "#a70000", completed: 75, lang: "HTML" },
        { bgcolor: "#ff04be", completed: 70, lang: "React JS" },
        { bgcolor: "#069217", completed: 50, lang: "CSS" },
    ];
                        
    return (
        <div className="wrapper">
            <Background/>
            <Container className="container">
                <ContainerLeft className="container-left">
                    <div className="htmlTag">{htmlStart}</div>

                    <span className="htmlTag htmlTagHeader" style={{marginLeft: "60px"}}>{headerStart}</span>
                        <span className="headerText"> About </span>
                    <span className="htmlTag">{headerEnd}</span>

                    <div className="htmlTag htmlTagHeader" style={{marginLeft: "60px"}}>{bodyStart}</div>
                        <div style={{marginLeft: "100px"}} id="about-content" className="htmlContent">
                            Hi, I'm Jason, a Software Engineer based in Hong Kong.<br/>
                            I am passionate about creating things that improves the lives around me.<br/>
                            I specialize on Java (back-end) application development and with some experience on web development.
                        </div>
                        <br/>
                        <div style={{marginLeft: "100px"}} className="htmlContent">
                            {testData.map((item, idx) => (
                                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} lang={item.lang} />
                            ))}
                            {/* <ProgressBar bgcolor={"#6a1b9a"} completed={60}/> */}
                        </div>
                    <div className="htmlTag htmlTagHeader" style={{marginLeft: "60px"}}>{bodyend}</div>

                    <div className="htmlTag">{htmlEnd}</div>
                </ContainerLeft>

                <ContainerRight className="container-right">
                    <div id="tagSphere"/>
                </ContainerRight>
            </Container>
        </div>
    )
}

export default About