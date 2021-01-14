import React, { useEffect, useState } from 'react'

function ProgressBar(props) {
    const { bgcolor, completed, lang } = props;
    const [ percent, setPercent ] = useState(0)

    const containerStyles = {
        display: 'flex',
    };

    const langStyles = {
        marginTop: 20,
        // padding: 2,
        color: 'white',
        fontWeight: 'bold',
        width: 120,
        textAlign: 'center',
        backgroundColor: '#35c2c9'
    };

    const progressBarStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#b1b1b1",
        // borderRadius: 50,
        marginTop: 20
    }

    const fillerStyles = {
        height: '100%',
        width: `${percent}%`,
        backgroundColor: bgcolor,
        // borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    useEffect(() => {
        setTimeout(()=>{
            setPercent(completed);
        }, 250)
    }, []);

    return (
        <div style={containerStyles}>
            <div style={langStyles}>{`${lang}`}</div>
            <div style={progressBarStyles}>
                <div style={fillerStyles} id="filler">
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar
