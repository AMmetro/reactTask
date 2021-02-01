import React from "react";
import {NavLink} from "react-router-dom";
import s from "./eror.module.css";

function Error404() {
    return (
        <div className={s.error_wrapper}>
            <section className={s.error404}>
                <h1>Error 404</h1>
                <h1>Page not found!</h1>
                <hr/>
                <h1>Choose the page from list the below</h1>
            </section>

            <ul className={s.first}>
                <li><NavLink to="/pre-junior"> go home</NavLink></li>
                <li><NavLink to="/junior">go work </NavLink></li>
                <li><NavLink to="/juniorPlus">go study </NavLink></li>
             </ul>
        </div>
    );
}

export default Error404;
