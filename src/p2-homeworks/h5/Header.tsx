import React from "react";
import Navigation from "./pages/Navigation";
import s from "./pages/navigation.module.css";

function Header() {
    return (
        <div>

            <header className={s.head}><h1>Home work</h1></header>

            <Navigation/>

        </div>
);
}

export default Header;
