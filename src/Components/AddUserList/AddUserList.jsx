import React, {useRef} from 'react';
import './AddUserList.scss';
import InputText from "../UI/Input/InputText";
import Button from "../UI/Button/Button";
import GetValue from "../../Utils/GetValue";
import {useDispatch} from "react-redux";
import {addUserDate} from "../../Redux/Slice/UserSlice";

function AddUserList({setModal}) {
    const containerData = useRef();
    const dispatch = useDispatch();
    const addUser = () => {
        const data = GetValue.giveData(containerData.current);
        if (data.flag) {
            dispatch(addUserDate(data.value));
            setModal(false);
        }
    }
    return (
        <div className='AddUserList'>
            <h1 className='AddUserList__title'>Add client</h1>
            <div className='AddUserList__content' ref={containerData}>
                <div className='AddUserList__item'>
                    <InputText id='nameAdd' dataAtr='name' placeholderValue='name...'>Name</InputText>
                </div>
                <div className='AddUserList__item'>
                    <InputText id='mailAdd' dataAtr='email' placeholderValue='email...'>Email</InputText>
                </div>
                <div className='AddUserList__item'>
                    <InputText id='phoneAdd' dataAtr='phone' placeholderValue='phone...'>Phone</InputText>
                </div>
                <div className='AddUserList__item'>
                    <InputText id='websiteAdd' dataAtr='website' placeholderValue='website...'>Website</InputText>
                </div>
            </div>
            <div className='AddUserList__btn'>
                <Button fun={() => addUser()}>Добавить</Button>
            </div>
        </div>
    );
}

export default AddUserList;
