import React from "react";
import { Link } from "react-router-dom";
import es from "../../utilities/lenguajes/es.json"

const Nav = () => {
    return (<nav>
        <ul>
            <li><Link to="/"></Link>{es.nav.home}</li>
            <li><Link to=""></Link>{es.nav.projects}</li>
            <li><Link to=""></Link>{es.nav.blog}</li>
            <li><Link to=""></Link>{es.nav.contact}</li>
        </ul>
    </nav>)
}

export default Nav