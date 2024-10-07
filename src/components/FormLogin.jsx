import React, { useState } from "react";
import Mascot from "../components/Maskot";
import style from "../style/Form.module.css";

const FormLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [eyeColor, setEyeColor] = useState("white"); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleFocus = () => {
    setEyeColor("red");
  };

  const handleBlur = () => {
    setEyeColor("white"); 
  };

  return (
    <div className={style.displayForm}>
      <form onSubmit={handleSubmit}>
        <div className={style.dispalyDiv}>
          <h1 className={style.Judul}>Login RENI</h1>
        </div>
        <div className={style.dispalyDiv} >
          <Mascot eyeColor={eyeColor} /> 
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            required
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{width: "20rem"}}
          />
          <div id="emailHelp" className="form-text" style={{ color: "white" }}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            required
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            style={{width: "20rem"}}
          />
        </div>
        <div className={style.ukuranFont}>
          <p>New User? <a href="/regist" className={style.link}>Register Now</a></p>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default FormLogin;
