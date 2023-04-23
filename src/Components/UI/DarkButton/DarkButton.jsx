import React from 'react';
import './DarkButton.scss';
function DarkButton({children, fun}) {
    return (
        <button className='DarkButton' onClick={() => fun()}>{children}</button>
    );
}

export default DarkButton;
