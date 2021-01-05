import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Particles from 'react-particles-js';
import Background from './Background';

function Home() {
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
            <Background/>
            <Container>
                Home Testing
            </Container>
        </Wrapper>
    )
}

export default Home
