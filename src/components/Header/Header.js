import React from "react";
import styles from "./Header.modular.css";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <Link to="/"> {/* Make the logo a link to the home page */}
                    <img className="logo" src="logo.png" alt="logo" />
                </Link>
                <nav className="nav__links">
                    <ul>
                        <li><Link to="/build">Create</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/templates">Templates</Link></li>
                    </ul>
                </nav>
                <a className="cta" href="/contact"><button>Contact</button></a>
            </header>
        </>
    )
}

export default Header;
