import React from 'react'
import styled from "styled-components";
import Particles from 'react-particles-js';
import Background from './Background';
import Polygon from './Home/Polygon';
import Perspective from './Home/Perspective';

function Exp() {
    return (
        <div className="wrapper">
            <Background/>
            <div className="container2">
                {/* <Polygon/> */}
                <Perspective/>
            </div>
        </div>
    )
}

export default Exp
