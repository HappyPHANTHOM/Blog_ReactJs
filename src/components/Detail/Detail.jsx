import React from 'react';
import { Link, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { getDetail } from 'actions/indexActions';
import { getDetail } from '../../actions/indexActions';
import { useEffect } from 'react';
import styles from './detail.module.css';

export default function Detail(){

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(()=> {
        dispatch(getDetail(id));
    }, [])
    
    const user = useSelector((state) => state.detail)
    // console.log(user.name)
    return (
        <div>
            <Link to='/home'>
                <button className={styles.back}>HOME</button>
            </Link>
            <div>
                {
                    user.name ?
                    <div className={styles.pri}>
                        <div className={styles.card}>
                            <div className={styles.cardInner}>
                                <div className={`${styles.cardFace} ${styles.cardFront}`}>
                                        <div className={styles.encabezado}>
                                            <h2>{user.username}</h2>
                                    
                                            <div className={styles.content}>
                                            <div>
                                                <h3>Name:</h3>
                                                <h4>{user.name}</h4>
                                            </div>
                                            <div>
                                                <h3>Email:</h3>
                                                <h4>{user.email}</h4>
                                            </div>
                                            <div>
                                                <h3>City:</h3>
                                                <h4>{user.address.city}</h4>
                                            </div>
                                            <div>
                                                <h3>Website:</h3>
                                                <h4>{user.website}</h4>
                                            </div>
                                            </div>
                                        </div>
                                </div>
                                </div>
                            </div>
                        <div>
                            <Link to={`/posts/${id}`}>
                            <button className={styles.back}>POSTS</button>
                            </Link>
                        </div>
                    </div>:<p>LOADING...</p>
                }
            </div>
        </div>
       
     
    )
}
            