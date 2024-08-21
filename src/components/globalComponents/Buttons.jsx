import React from "react";
import { Link } from "react-router-dom";

export const ButtonPrincipal = (text, url ) =>{
    return (
        <Link to={url}>
{text}
        </Link>
    )
}