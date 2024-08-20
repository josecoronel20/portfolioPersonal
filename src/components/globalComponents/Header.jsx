import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav"
import Translate from "./Translate"

const Header = () => {
    return (<header>
        <Link to="/"><div>JC</div></Link>
        <Nav/>
        <Translate />
    </header>)
}

export default Header