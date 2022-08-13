// import { useEffect, useState } from "react";
// import {useDispatch, useSelector} from 'react-redux';
// import { getUsers } from '../../actions/indexActions';

// export default function SearchBar(){

//     const dispatch = useDispatch()
//     const allUsers = useSelector( state => state.users)

//     useEffect(() => {
//         dispatch(getUsers())
//     },[dispatch])

//     const [users, setUsers] = useState([]);
//     const [filteredUsers, setFilteredUsers] = useState([]);

//     setUsers(allUsers);
//     setFilteredUsers(allUsers);

//     const filterUsers = (searchString) => {
//         const filtered = users.filter((user) => (user.name.first).includes(searchString))
//         setFilteredUsers(filtered);
//     }

//     return (
//         <div>
//         <input type="text" onChange={(e) => filterUsers(e)}/>
//         </div>
//     )
// }