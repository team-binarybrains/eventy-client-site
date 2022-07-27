import React from 'react'

function DisplayTotalUsers({allUser, handleDeleteUser}) {

    const { _id, email } = allUser




    return (
        <div>
            <p>{_id}</p>
            <p>{email}</p>

            <button onClick={()=> handleDeleteUser(_id)}>Delete user</button>
        </div>
    )
}

export default DisplayTotalUsers
