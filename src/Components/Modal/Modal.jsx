import React from 'react';
import './Modal.scss';
function Modal({modal,setModal,children}) {
    const styleModal = ['Modal'];
    if (modal){
        styleModal.push('active')
    }
    return (
        <div className={styleModal.join(' ')} onClick={()=>setModal(false)}>
            <div className='Modal__container' onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
