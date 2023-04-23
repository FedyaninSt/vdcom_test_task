import React, {useState} from 'react';
import './InputPass.scss';
import showIcon from '../../../Resources/passButton.svg'
import hiddenIcon from '../../../Resources/passButtonHidden.svg'

function InputPass({dataAtr,children, placeholderValue, id}) {
    const [showPass, setShowPass] = useState(false);
    const [passType, setPassType] = useState('password');
    return (
        <div className='InputPass'>
            <label className='InputPass__label' htmlFor={id}>{children}</label>
            <div className='InputPass__content'>
                <input data-input={dataAtr} className='InputPass__input' id={id} type={passType} placeholder={placeholderValue}/>
                {
                    showPass ?
                        <img className='InputPass__icon' src={showIcon} alt='pass' onClick={() => {
                            setShowPass(false);
                            setPassType('text')
                        }}/> :
                        <img className='InputPass__icon' src={hiddenIcon} alt='pass' onClick={() => {
                            setShowPass(true);
                            setPassType('password')
                        }}/>
                }
            </div>
        </div>
    );
}

export default InputPass;
