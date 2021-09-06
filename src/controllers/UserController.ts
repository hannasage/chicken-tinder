import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { User } from '../models/UserModel'

let baseUrl: string = 'http://localhost:5000'
let id: string = '5e9a3c100c864f4f4cedc6ae'

export function loginUser(username: string, password: string) {
    
}

export function getUserById() {
    let user: User;
    axios.get(`${baseUrl}/users/${id}`)
        .then((res) => {
            user = {
                _id: res.data._id,
                username: res.data.username
            }
            return console.log(user);
        })
        .catch((err) => {
            return console.log(err)
        })
}