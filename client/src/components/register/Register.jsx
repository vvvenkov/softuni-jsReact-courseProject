import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../contexts/UserContext";

export default function Register() {
    const navigate = useNavigate();
    const { registerHandler } = useContext(UserContext);

    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const { email, password, confirmPassword } = form;

        if (!email || !password) return alert("Email and password are required!");
        if (password !== confirmPassword) return alert("Passwords do not match!");

        try {
            await registerHandler(email, password);
            navigate("/");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={changeHandler}
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={changeHandler}
                    />

                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={form.confirmPassword}
                        onChange={changeHandler}
                    />

                    <input className="btn submit" type="submit" value="Register" />
                </div>
            </form>
        </section>
    );
}