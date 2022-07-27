import React from 'react'

function DisplayTotalUsers({allUser}) {

    const { _id, email } = allUser




    return (
        <div>
            <p>{_id}</p>
            <p>{email}</p>

            <button>Delete user</button>
        </div>
    )
}

export default DisplayTotalUsers
