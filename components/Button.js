import React from 'react';
//import '../styles/Button.scss'


const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkbuttonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkbuttonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];


    return (
        <button className={`btn ${checkbuttonStyle} ${checkbuttonSize}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button