export default function MyBears() {
    return (
        <main>
            <h2>Your personal collection</h2>
            <h1>My Bears</h1>

            <section className="cards">
                <article className="card">
                    <img src="https://via.placeholder.com/300x200" alt="Fluffy Bear" />
                    <h3>Fluffy Bear</h3>
                    <p>My very first teddy bear.</p>

                    <div className="card-actions">
                        <button>Details</button>
                        <button className="secondary">Edit</button>
                        <button className="danger">Delete</button>
                    </div>
                </article>

                <article className="card">
                    <img src="https://via.placeholder.com/300x200" alt="Panda Bear" />
                    <h3>Panda Bear</h3>
                    <p>Gift from a special person.</p>

                    <div className="card-actions">
                        <button>Details</button>
                        <button className="secondary">Edit</button>
                        <button className="danger">Delete</button>
                    </div>
                </article>

                <article className="card">
                    <img src="https://via.placeholder.com/300x200" alt="Brown Bear" />
                    <h3>Brown Bear</h3>
                    <p>Classic and cozy.</p>

                    <div className="card-actions">
                        <button>Details</button>
                        <button className="secondary">Edit</button>
                        <button className="danger">Delete</button>
                    </div>
                </article>
            </section>
        </main>
    );
}
