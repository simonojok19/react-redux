import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const activeStyle = { color: "#f15b2a" }
    return (
        <na>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink> {" | "}
            <NavLink to="/about" activeStyle={activeStyle} >About</NavLink>
        </na>
    )
}
