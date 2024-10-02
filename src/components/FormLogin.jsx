import React from "react";

const FormLogin = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default FormLogin;