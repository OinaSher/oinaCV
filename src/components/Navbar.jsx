import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import MailIcon from '@material-ui/icons/Mail';

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location])

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    {expandNavbar ? <Close /> : <Menu />}
                </button>
            </div>
            <div className="links">
                <div className="leftAlign">
                    <Link className="name" to="/oina_portfolio">Oina Sher</Link>
                </div>
                <Link to="/oina_portfolio/about">About</Link>
                <Link to="https://www.linkedin.com/in/oinamo-shegozieva-48205a239/">Linkedin</Link>
                <Link to="mailto:oina.sher@gmail.com"><MailIcon/></Link>
            </div>
        </div>
    )
}

export default Navbar