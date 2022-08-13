import React from "react";
import {useParams, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/indexActions';
import { useEffect, useState } from 'react';
import styles from './detail.module.css';

export default function SliderBlog(){

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(()=> {
        dispatch(getPosts(id));
    }, [])

    const posts = useSelector((state) => state.posts)

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