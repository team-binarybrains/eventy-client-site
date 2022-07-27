import React from 'react'

function DisplayTotalUsers({ allUser, handleDeleteUser }) {

    const { _id, email } = allUser




    return (
            
                <tr>
                    <td>
                        <div class="flex items-center space-x-3">

                            <div>
                                <div class="text-lg">{email}</div>
                            </div>
                        </div>
                    </td>

                    <th>
                        <button onClick={() => handleDeleteUser(_id)} class="bg-red-400 text-white px-4 py-1 rounded-sm">Delete</button>
                    </th>
                </tr>
    )
}

export default DisplayTotalUsers
