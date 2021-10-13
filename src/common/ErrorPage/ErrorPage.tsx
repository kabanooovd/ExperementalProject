import React from "react";
import st from './ErrorPage.module.css'
// import {UniqueButton} from "../UniqueButton/UniqueButton";
import {Link} from "react-router-dom";

export const ErrorPage = () => {

    return (
        <div className={st.errorContainer}>
            <h3>Something wrong</h3>
            <h1>404</h1>
            <h1>Page not found</h1>

            <p>
                Get back to main menu
            </p>

            <Link to={'/'} className={st.getBackBtn}>BACK</Link>

        </div>
    )
}


