import React from "react";
import { useNavigate } from "react-router-dom";

const FormResgist = () => {
    const navigate = useNavigate();
    return (
        <>
        <h1>Registrasi</h1>
        <form>
            <input type="text" placeholder="Nama" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Registrasi</button>
        </form>
        <button onClick={() => navigate('/')}>Login</button>
        </>
    );
}

export default FormResgist;