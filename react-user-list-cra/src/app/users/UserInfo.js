import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = (props) => {
    if (!props.myUser){
       return null;
    }

    const { name, email, dob, picture } = props.myUser;
    return (
        <div className="container">
            <div className="col s12 m12">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={picture} alt="user-img" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p><b>Name:</b>{name}</p>
                            <p><b>Email:</b>{email}</p>
                            <p><b>Date:</b>{dob}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

UserInfo.propTypes = {
    myUser: propTypes.object.isRequired
}
UserInfo.defaultProps ={
    myUser: {}
}

export { UserInfo };