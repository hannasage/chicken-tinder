import { User } from '../models/UserModel'

export function getUser() {
    let user: User = {
        _id: '123',
        username: 'user'
    }
    return console.log(user);
}