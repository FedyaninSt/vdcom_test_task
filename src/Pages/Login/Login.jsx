import React, {useEffect} from 'react';
import './Login.scss';
import InputText from "../../Components/UI/Input/InputText";
import InputPass from "../../Components/UI/InputPass/InputPass";
import DarkButton from "../../Components/UI/DarkButton/DarkButton";
import SendingForm from "../../Utils/SendingForm";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigation = useNavigate();
    useEffect(() => {
        new SendingForm(changePage)
    }, [])
    const changePage = () => {
        navigation('/client');
    }
    return (
        <form className='Login' data-form-container="">
            <h1 className='Login__logo'>LOGO</h1>
            <p className='Login__description'>Welcome To CRM System
                Sign In To Your Account</p>
            <InputText dataAtr='mail' placeholderValue='Petrov@gmai.com' id='loginMail'>Login</InputText>
            <InputPass dataAtr='password' placeholderValue='*****' id='passMail'>Password</InputPass>
            <DarkButton fun={() => {
            }}>SIGN IN</DarkButton>
        </form>
    );
}

export default Login;
