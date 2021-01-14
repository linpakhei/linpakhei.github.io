import React from 'react'
import Particles from 'react-particles-js';

function Background() {
    return (
        <div>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                area: 800,
                                factor: 1000
                            },
                        },
                        opacity: {
                            value: 0.5
                        },
                        links: {
                            opacity: 0.1
                        }
                    }
                }}
                style={{
                    position: 'fixed',
                }}
            />
        </div>
    )
}

export default Background
