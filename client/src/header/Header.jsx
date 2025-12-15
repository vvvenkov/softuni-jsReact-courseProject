export default function Header() {

    return (< header >
        <nav>
            <div className="logo-container">
                <a href="URL_YOU_WANT_TO_LINK_TO">
                    <img
                        src="/images/bearLogo.png"
                        alt="The Bear Minimum logo"
                        className="logo-img"
                    />
                </a>
                <h1 className="logo">The Bear Minimum</h1>
            </div>
            <ul className="nav-links">
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
    )
}