import React from 'react';
import PropTypes from 'prop-types';

import { UserCard } from './UserCard'

const UserGrid = (props) => {
    const userGrid = props.myUsers
    return (
        <div className="container">
            <div className="row">
                {userGrid.map((user, index) => {
                    return <UserCard key={index} myUser={user} />
                })}
            </div>
        </div>
    )

}
UserGrid.propTypes = {
    myUsers: PropTypes.array.isRequired
}

UserGrid.defaultProps = {
    myUsers: []
}
export { UserGrid };