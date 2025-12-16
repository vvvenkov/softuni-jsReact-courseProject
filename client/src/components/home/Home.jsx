export default function Home() {
    return (
        < main >
            <h2>When time is not a luxury you can afford... </h2>
            <h1>Latest Bears</h1>

            <section className="cards">
                <article className="card">
                    <img src="https://via.placeholder.com/300x200" alt="Fluffy Bear" />
                    <h3>Fluffy Bear</h3>
                    <p>Soft and cuddly teddy bear.</p>
                    <button>Details</button>
                </article>

                <article className="card">
                    <img src="https://via.placeholder.com/300x200" alt="Brown Bear" />
                    <h3>Brown Bear</h3>
                    <p>Classic brown teddy bear.</p>
                    <button>Details</button>
                </article>

                <article className="card">
                    <img src="https://via.placeholder.com/300x200" alt="Panda Bear" />
                    <h3>Panda Bear</h3>
                    <p>Adorable panda teddy bear </p>
                    <button>Details</button>
                </article>
            </section>
        </main >
    )
}