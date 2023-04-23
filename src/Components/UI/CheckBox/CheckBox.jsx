import React from 'react';
import './CheckBox.scss';

function CheckBox({children, id}) {
    return (
        <div className='CheckBox'>
            <input className='CheckBox__input' id={id + 'checkBox'} type='checkbox'/>
            <label className='CheckBox__label' htmlFor={id + 'checkBox'}>{children}</label>
        </div>
    );
}

export default CheckBox;
