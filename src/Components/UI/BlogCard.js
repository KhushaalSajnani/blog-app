import React from "react";
import styles from './BlogCard.module.css'

export const BlogCard = props => {
    return(
        <div className={styles["blog-container"]}>
            <div className={styles["blog-card"]}>
                <div className={styles["blog-name"]}>
                    <h3>{props.name}</h3>
                </div>
                <div className={styles["blog-writer"]}>
                    <h4>{props.handle}</h4>
                    <h5>{props.email}</h5>
                </div>
                <div className={styles["blog-data"]}>
                    <p>{props.data}</p>
                </div>
            </div>
        </div>
    );
}