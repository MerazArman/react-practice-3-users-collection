import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';

const Main = () => {
    const [users, setUsers] = useState([]);
    const [join, setJoin] = useState([]);
    const btnHandel = (x) =>{
        console.log('click', x);
        const newX = [...join, x]
        setJoin(newX)
        
    }
    useEffect(() =>{
        fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => {
            console.log(data.results);
            setUsers(data.results)
        });
    },[])
    
    return (
        <div>
            <h3> join: {join.length} </h3>

            {
                users.map(user => <Users user= {user} btnHandel={btnHandel} > </Users>)
            }

        </div>
    );
};

export default Main;