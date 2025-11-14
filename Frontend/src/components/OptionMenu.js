import { useState } from "react";

const buttonStyles = {
    'display' : 'flex',
    'justifyContent' : 'center',
    'alignItems' : 'center',
    'width' : '2rem',              
    'height' : '2rem',
    'backgroundColor' : 'lightsalmon',
    'color' : 'white',
    'border' : '1px solid white',
    'borderRadius' : '8px',
    'cursor' : 'pointer',
    'fontWeight' : 'bold',
    'fontSize' : '1rem',
    'margin' : '0.5rem 0.5rem auto 0.3rem'
}

function OptionMenu({menuOptions, onOpen}) {
    const [display, setDisplay] = useState(false);

    const toggleDisplay = () => {
        const opening = !display;
        setDisplay(opening);

        if (onOpen) {
            onOpen();
        }
    };

    return (
        <div style={
            {
                display: 'inline-block',
                position: 'relative'
            }
        }>
            <button 
                onClick={toggleDisplay}
                style={buttonStyles}
            > 
                ... 
            </button>
            {display && <div
                style={{
                    position: "absolute",
                    top: "2.5rem",
                    right: 0,
                    backgroundColor: "white",
                    border: "1px solid lightgray",
                    borderRadius: "8px",
                    padding: "0.3rem 0",
                    display: "flex",
                    flexDirection: "column",
                    minWidth: "120px",
                    zIndex: 100,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                }}
            >
                {menuOptions.map((option) => {
                    return <button 
                                key={option.name}
                                onClick={option.action}
                                style={{
                                    background: "white",
                                    border: "none",
                                    textAlign: "left",
                                    padding: "0.5rem 1rem",
                                    cursor: "pointer",
                                    fontSize: "0.9rem",
                                    color: "black",
                                    width: "100%",
                                }}
                                onMouseEnter={(e) => e.target.style.background = "#f0f0f0"}
                                onMouseLeave={(e) => e.target.style.background = "white"}
                            > 
                                {option.name} 
                            </button>
                })} 
                </div>
            }
        </div>
    )
}

export default OptionMenu;