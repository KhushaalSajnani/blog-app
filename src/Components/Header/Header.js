import React from 'react';
import styles from "./Header.module.css"
import {Nav} from "../NavBar/Nav";

export const Header = props => {
    return(
        <React.Fragment>
            <div className={styles["header-container"]}>
                <h2>DarkBlogs</h2>
            </div>
            <Nav/>
        </React.Fragment>
    );
}