import React from 'react';
import './InputText.scss';

function InputText({dataAtr, children, placeholderValue, id}) {
    return (
        <div className='InputText'>
            <label className='InputText__label' htmlFor={id}>{children}</label>
            <input data-input={dataAtr} className='InputText__input' id={id} type='text' placeholder={placeholderValue}/>
        </div>
    );
}

export default InputText;
