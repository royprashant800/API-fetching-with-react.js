import React, { useEffect, useState } from 'react';

const UserCard = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://reqres.in/api/users?page=1');
        const jsondata = await response.json();
        console.log(jsondata.data);
        setUsers(jsondata.data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    {
                        users.map((currEle) => {
                            return (
                                <div className="col-10 col-md-4 mt-5">
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                            <div className="box">
                                                <img src={currEle.avatar} alt="" />
                                                <p>User ID : {currEle.id}</p>
                                                <p>Email ID : {currEle.email}</p>
                                                <p>Name : {currEle.first_name} {currEle.last_name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default UserCard;