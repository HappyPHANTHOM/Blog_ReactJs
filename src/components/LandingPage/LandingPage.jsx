import React from 'react';
import {Link} from 'react-router-dom';
import styles from "./landingpage.module.css";


export default function LandingPage(){
    return(
        <div className={styles.full}>
            {/* <h1 >Welcome!</h1> */}
            <Link to='/home'>
                <button className={styles.btn}>HOME</button>
            </Link>
        </div>
    )
}