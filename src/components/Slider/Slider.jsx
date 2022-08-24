import React from "react";
import {useParams, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './detail.module.css';
import axios from "axios";

export default function SliderBlog(){

    const { id } = useParams();
    const [posts, setPost] = useState();

    useEffect(() => {
        const post = async () => {
            var json = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
            console.log(json);
            if(json){
                setPost(json.data)
            }
          };
          post();
    },[])

    return (
        <div>
            <Link to='/home'>
                <button className={styles.back}>HOME</button>
            </Link>
           {
            posts?.map((e) => {
            return(
                <div className={styles.pri}>
                        <div className={styles.card}>
                            <div className={styles.cardInner}>
                                <div className={`${styles.cardFace} ${styles.cardFront}`}>
                                        <div className={styles.encabezado}>
                                            <h2>{e.title}</h2>
                                                <div className={styles.content}>
                                                    <div>
                                                        <h3>-POST-</h3>
                                                        <h4>{e.body}</h4>
                                                    </div>
                                                </div>
                                        </div>
                                </div>
                                </div>
                            </div>
                    </div>
            ) 
            })
           }
           <Link to='/home'>
                <button className={styles.back}>HOME</button>
            </Link>
        </div>
    )
}