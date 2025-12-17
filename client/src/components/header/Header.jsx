import { Link } from "react-router"
import { useUserContext } from "../../contexts/UserContext";

export default function Header() {
    const { isAuthenticated } = useUserContext();

    return (
        <header>
            <nav>
                <div className="logo-container">
                    <Link to="/">
                        <img
                            src="/images/bearLogo.png"
                            alt="The Bear Minimum logo"
                            className="logo-img"
                        />
                    </Link>
                    <h1 className="logo">The Bear Minimum </h1>
                </div>
                <ul className="nav-links">
                    {/* All users */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/bears/catalog">Bears</Link></li>

                    {isAuthenticated
                        ? (
                            <>
                                <li><Link to="/bears/create">Add a bear</Link></li>
                                <li><Link to="/bears/myBears">My Bears</Link></li>
                                <li><Link to="/logout">Logout</Link></li>
                            </>
                        )
                        : (
                            <>
                                {/* // Guests */}
                                < li > <Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </>
                        )
                    }
                </ul>
            </nav>
        </header >
    )
}