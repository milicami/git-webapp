import { usersData } from './../data/UserData'
import { User } from './../entities/User'

const getUsers = () => {
    return usersData.map((user) => {
        return new User(user.name.first, user.email, user.dob, user.picture.large)
    })
}

export { getUsers };