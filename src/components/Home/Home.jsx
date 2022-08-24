import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import styles from "./home.module.css";
// import Navbar from '../NavBar/Navbar';
import axios from 'axios';

export default function Home(){

    const [usersData, setUsersData] = useState();

    useEffect(() => {
      const users = async () => {
        var json = await axios.get('https://jsonplaceholder.typicode.com/users')
        if(json){
            setUsersData(json.data)
        }
      };
      users();
    },[])
    
    return (
        <>
        {/* <Navbar/> */}
        <div  className={styles.conteiner1}>
            {
                usersData?.map((e) => {
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
