import React from 'react';
import './Button.scss';

function Button({children, fun}) {
    return (
        <button onClick={() => fun()} className='Button'>
            {children}
        </button>
    );
}

export default Button;
