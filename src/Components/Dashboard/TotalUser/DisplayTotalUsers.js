import React from 'react'

function DisplayTotalUsers({ allUser, handleDeleteUser }) {

    const { _id, email } = allUser




    return (
            
                <tr>
                    <td>
                        <div class="flex items-center space-x-3">

                            <div>
                                <div class="text-sm opacity-50">{email}</div>
                            </div>
                        </div>
                    </td>

                    <th>
                        <button onClick={() => handleDeleteUser(_id)} class="btn btn-xs">Delete</button>
                    </th>
                </tr>
    )
}

export default DisplayTotalUsers
