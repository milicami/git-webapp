import React from 'react';
import UserInfo from './UserInfo'


const UserList = (props) => {
    const userList = props.myUsers
    return (
        <div className="container">
            <div className="row">
                {userList.map((user, index) => {
                    return <UserInfo key={index} myUser={user} />
                })}
            </div>
        </div>
    )

}

export { UserList };