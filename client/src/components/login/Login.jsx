import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Login() {
    const navigate = useNavigate();
    const { loginHandler } = useContext(UserContext);

    const submitHandler = async (values, e) => {
        const { email, password } = values;

        if (!email || !password) {
            return alert('Email and password are required!');
        }

        try {
            loginHandler(email, password);

            navigate('/');

        } catch (err) {
            console.error('Login Failed:', err);
            alert(`Login failed: ${err}`);
        }
    }

    const {
        register,
        formAction,
    } = useForm(submitHandler, {
        email: '',
        password: '',
    });

    return (
        <section id="login-page">

            <form id="login" onSubmit={formAction}>
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email')}
                        placeholder="Your Email"
                        autoComplete="email"
                    />

                    <label htmlFor="login-password">Password</label>
                    <input
                        type="password"
                        id="login-password"
                        {...register('password')}
                        placeholder="Password"
                        autoComplete="current-password"
                    />
                    <input type="submit" className="btn submit" value="Login" />
                </div>
            </form>
        </section>
    );
}