import React from 'react';
import styled from "styled-components";

function Page(props) {
    console.log(props);

    const tmp = (val) => {
        switch (val) {
            case 1: return "#03a9f4";
            case 2: return "#4caf50";
            case 3: return "#ff9c07";
            case 4: return "#F44336";
            case 5: return "#673AB7";
            case 6: return "#3F51B5";
        }
    };

    const Wrapper = styled.div`
        background-color: ${tmp(props.value)};
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        // padding: 100px 48px 48px 48px;
        width: 100%;
    `;

    const Container = styled.div`
        margin: auto;
    `;

    const Title = styled.h1`
        font-size: 2.4rem;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 24px;
        color: rgba(255, 255, 255, 0.9);
    `;

    return (
        <Wrapper>
            <Container>
                <Title>Page {props.value} : Testing</Title>
            </Container>
        </Wrapper>
    )
}

export default Page
