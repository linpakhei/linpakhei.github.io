import React from 'react'
import styled from "styled-components";
import Particles from 'react-particles-js';
import Background from './Background';

function Exp() {
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
        z-index: 0;
    `;

    return (
        <Wrapper>
            {/* <Background/> */}
            <Container>
                <Particles
                    params={{
                        "fps_limit": 28,
                        "particles": {
                            "collisions": {
                                "enable": false
                            },
                            "number": {
                                "value": 200,
                                "density": {
                                    "enable": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 30,
                                "opacity": 0.5
                            },
                            "move": {
                                "speed": 1
                            },
                            "opacity": {
                                "anim": {
                                    "enable": true,
                                    "opacity_min": 0.05,
                                    "speed": 1,
                                    "sync": false
                                },
                                "value": 0.5
                            }
                        },
                        "polygon": {
                            "enable": true,
                            "scale": 0.5,
                            "type": "inline",
                            "move": {
                                "radius": 10
                            },
                            "url": "/small-deer.2a0425af.svg",
                            "inline": {
                                "arrangement": "equidistant"
                            },
                            "draw": {
                                "enable": true,
                                "stroke": {
                                    "color": "rgba(255, 255, 255, .2)"
                                }
                            }
                        },
                        "retina_detect": false,
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "size": 6,
                                    "distance": 30,
                                    "opacity": 8,
                                    "duration": 2
                                }
                            }
                        }
                    }} 
                />
            </Container>
        </Wrapper>
    )
}

export default Exp
