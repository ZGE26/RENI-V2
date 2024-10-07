import React, { useState } from "react"; // Pastikan useState diimpor
import { useNavigate } from "react-router-dom";
import style from "../style/Form.module.css";

const FormRegist = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        if (formData.username === "" || formData.email === "" || formData.password === "") {
            alert("Semua data harus diisi");
        } else {
            alert("Registrasi berhasil");
            console.log(formData);
            navigate("/");
        }
    };

    const navigate = useNavigate();

    return (
        <div className={style.displayForm}>
            <h1>Registrasi</h1>

            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Create Username"
                        aria-label="Username"
                        onChange={handleChange}
                        value={formData.username} // Pastikan state username di-update
                    />
                </div>

                <div className="input-group mb-3">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email pengguna"
                        aria-label="Nama pengguna"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>

                <div className="input-group mb-3">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        aria-label="Password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-sm">
                    Regist
                </button>
            </form>
        </div>
    );
}

export default FormRegist;
