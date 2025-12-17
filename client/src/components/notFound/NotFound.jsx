import { useNavigate } from "react-router";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <main>
            <h2>Oops!</h2>
            <h1>404 - Page Not Found</h1>

            <section className="cards">
                <article className="card">
                    <img
                        src="/images/404bear.png"
                        alt="Lost bear"
                    />
                    <h3>Looks like you’re lost</h3>
                    <p>
                        The page you’re looking for doesn’t exist. But don’t worry, our bears
                        will guide you back!
                    </p>
                    <button onClick={() => navigate("/")}>Go Home</button>
                </article>
            </section>
        </main>
    );
}
