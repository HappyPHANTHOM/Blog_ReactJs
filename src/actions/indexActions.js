import axios from 'axios';

export function getUsers(){
    return async function (dispatch){
        var json = await axios.get('https://jsonplaceholder.typicode.com/users')
        return dispatch({
            type: 'GET_USERS',
            payload: json.data
        })
    }
}

export function getDetail (id){
    return async function(dispatch){
        try {
            var json = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            return dispatch ({
                type: 'GET_DETAIL',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getPosts (id){
    return async function(dispatch){
        try {
            var json = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
            return dispatch ({
                type: 'GET_POSTS',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

