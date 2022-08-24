import React from 'react';
import { Link, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { getDetail } from 'actions/indexActions';
// import { getDetail } from '../../actions/indexActions';
import { useEffect, useState } from 'react';
import styles from './detail.module.css';
import axios from 'axios';

export default function Detail(){


    const { id } = useParams();
    const[details, setDetails] = useState();

    useEffect(() => {
        const detail = async () => {
            var json = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            //console.log(json);
            if(json){
                setDetails(json.data)
            }
          };
          detail();
    },[])
    
   
    console.log(details)
    return (
        <div>
            <Link to='/home'>
                <button className={styles.back}>HOME</button>
            </Link>
            <div>
                {
                    details?
                    <div className={styles.pri}>
                        <div className={styles.card}>
                            <div className={styles.cardInner}>
                                <div className={`${styles.cardFace} ${styles.cardFront}`}>
                                        <div className={styles.encabezado}>
                                            <h2>{details.username}</h2>
                                    
                                            <div className={styles.content}>
                                            <div>
                                                <h3>Name:</h3>
                                                <h4>{details.name}</h4>
                                            </div>
                                            <div>
                                                <h3>Email:</h3>
                                                <h4>{details.email}</h4>
                                            </div>
                                            <div>
                                                <h3>City:</h3>
                                                <h4>{details.address.city}</h4>
                                            </div>
                                            <div>
                                                <h3>Website:</h3>
                                                <h4>{details.website}</h4>
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
            