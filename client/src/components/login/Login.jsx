export default function Login() {
    return (
        <main className="login-page">
            <form className="login-card">
                <h1>Login</h1>

                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                </label>

                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                    />
                </label>

                <button type="submit">Login</button>

                <p className="register-link">
                    Don&apos;t have an account?{" "}
                    <a href="/register">Register</a>
                </p>
            </form>
        </main>
    );
}
