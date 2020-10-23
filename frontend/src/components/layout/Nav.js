import React, {Component} from "react";
import {Link} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <header className="nav-header">
                <Link className="nav-logo" to="/">
                    <img src={"/img/logo.png"} alt="logo"/>
                </Link>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link to="/articles">Articles</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">About me</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Nav;
