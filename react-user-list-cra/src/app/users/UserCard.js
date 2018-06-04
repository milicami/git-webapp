import React from 'react';
import PropTypes from 'prop-types';

const UserCard = (props) => {
    const { name, picture } = props.myUser;
    return (

        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={picture} alt="user-img" />
                    <span className="card-title">{name}</span>
                </div>
                <div className="card-content">
                    <p><b>Name:</b> {props.myUser.getUserEmail()}</p>
                    <p><b>Date of birth:</b> {props.myUser.getDate()}</p>
                </div>
            </div>
        </div>

    )
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}
UserCard.defaultProps = {
    name: "Name",
    dob: "Date of birth",
    picture: "User picture"
}
export { UserCard }

// import React from 'react'

// const UserCard = (props) => {
//     const user = props.myUser;
//     return (

//         <div className="col s4">
//             <div className="card">
//                 <div className="card-image">
//                     <img src={user.picture} alt="user-img" />
//                     <span className="card-title">{user.name}</span>
//                 </div>
//                 <div className="card-content">
//                     <p><b>Name:</b> {user.getUserEmail()}</p>
//                     <p><b>Date of birth:</b> {user.dob}</p>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export { UserCard }