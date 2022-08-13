import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getUsers } from '../../actions/indexActions';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import styles from "./home.module.css";
// import SearchBar from '../SearchBar/SearchBar';

export default function Home(){

    const dispatch = useDispatch()
    const allUsers = useSelector( state => state.users)

    useEffect(() => {
        dispatch(getUsers())
    },[dispatch])

    return (
        <>
        {/* <SearchBar/> */}
        <div  className={styles.conteiner1}>
            {
                allUsers?.map((e) => {
                    return (
                        <Link to={`/users/${e.id}`}>
                        <div>
                            <Card username={e.username} name={e.name} email={e.email}/>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
        </>
    )
}
