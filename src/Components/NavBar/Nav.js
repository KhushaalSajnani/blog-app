import React from 'react';
import styles from "./Nav.module.css"

export const Nav = props => {
    return(
        <React.Fragment>
            <div className={styles["nav-container"]}>
                <ul className={styles["nav-ul"]}>
                    <li><a href="/"> Home </a></li>
                    <li><a href="/blogs"> Blogs </a></li>
                    <li><a> Feedback </a></li>
                </ul>
            </div>
        </React.Fragment>
    );
}