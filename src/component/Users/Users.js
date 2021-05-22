import React from 'react';
import './Users.css'

const Users = (props) => {
    const {name, gender, email, phone, picture} = props.user
    return (
        <div className="users-design">
            <img src={picture.large} alt="" />
            <h4>{`${name.first}    ${name.last}`}</h4>
            <p>{gender}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <button onClick={() => props.btnHandel(props.user)}>Join Now </button>
        </div>
    );
};

export default Users;