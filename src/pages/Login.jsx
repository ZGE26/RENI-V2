import React from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../components/FormLogin";

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
        <h1>Login Reni</h1>
        <FormLogin />

        <button onClick={() => navigate('/regist')}>Registrasi</button>

        </>
    );
}

export default Login;