export default function Header() {

    return (< header >
        <nav>
            <div className="logo-container">
                <a href="/">
                    <img
                        src="/images/bearLogo.png"
                        alt="The Bear Minimum logo"
                        className="logo-img"
                    />
                </a>
                <h1 className="logo">The Bear Minimum </h1>
            </div>
            <ul className="nav-links">
                {/* All users */}
                <li><a href="/about">About</a></li>
                <li><a href="/catalog">Bears</a></li>

                {/* Users logged in*/}
                <li><a href="/myBears">My Bears</a></li>
                <li><a href="#">Logout</a></li>
                {/* Guests */}
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
        </nav>
    </header >
    )
}