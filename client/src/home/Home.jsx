export default function Home() {
    return (
        <>
            {/* <!-- Header --> */}
            < header >
                <nav>
                    <h1 class="logo">The Bear Minimum </h1>
                    <ul class="nav-links">
                        {/* All users */}
                        <li><a href="#">About</a></li>
                        <li><a href="#">Bears</a></li>

                        {/* Users logged in*/}
                        <li><a href="#">My Bears</a></li>
                        <li><a href="#">Logout</a></li>
                        {/* Guests */}
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </nav>
            </header >

            {/* <!-- Main Content --> */}
            < main >
                <h4>When time is not a luxury you can afford... </h4>
                <h1>Latest Bears</h1>

                <section class="cards">
                    <article class="card">
                        <img src="https://via.placeholder.com/300x200" alt="Fluffy Bear" />
                        <h3>Fluffy Bear</h3>
                        <p>Soft and cuddly teddy bear.</p>
                        <button>Details</button>
                    </article>

                    <article class="card">
                        <img src="https://via.placeholder.com/300x200" alt="Brown Bear" />
                        <h3>Brown Bear</h3>
                        <p>Classic brown teddy bear.</p>
                        <button>Details</button>
                    </article>

                    <article class="card">
                        <img src="https://via.placeholder.com/300x200" alt="Panda Bear" />
                        <h3>Panda Bear</h3>
                        <p>Adorable panda teddy bear </p>
                        <button>Details</button>
                    </article>
                </section>
            </main >
            {/* <!-- Footer --> */}
            < footer >
                <p>&copy; This site is a bear minimum project course for ReactJS in SoftUni-Bulgaria.</p>
            </footer >
        </>
    )
}