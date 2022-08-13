import React from "react";
import styles from './card.module.css';

export default function UserCard({name, username, email, city}){
    return (
        <div className={styles.conteiner}>
        <div className={styles.conteinerCard}>
            <h1>{username}</h1>
            {/* <h4>{name}</h4>
            <h4>{email}</h4> */}
            
        </div>
        </div>
    )
}