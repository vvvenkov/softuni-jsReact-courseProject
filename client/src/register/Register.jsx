export default function Register() {
    return (
        <main>
            <h2>Create your account</h2>
            <h1>Register</h1>

            <section className="cards">
                <article className="card">
                    <form className="register-form">
                        <label>
                            Email
                            <input type="email" placeholder="Enter email" />
                        </label>

                        <label>
                            Password
                            <input type="password" placeholder="Enter password" />
                        </label>

                        <label>
                            Confirm Password
                            <input type="password" placeholder="Confirm password" />
                        </label>

                        <button type="submit">Register</button>
                    </form>
                </article>
            </section>
        </main>
    );
}
