import React from "react";
import { useQuery } from '../../redux/features/socialMedia/service';
import './user.css';

export default function Users() {
    const usersData = useQuery.useGetUsersQuery().data;
    console.log('masukk');
    console.log(useQuery.useGetUsersQuery().data);

    return (
        <div id="container-userpage">
            {
                usersData?.map((user) => {
                    return (
                      <div className="cont-list">
                        <h2>{user?.name}</h2>
                      </div>
                    );
                })
            }
        </div>
    )
}
