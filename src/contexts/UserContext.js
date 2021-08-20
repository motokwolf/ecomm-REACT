import React, {createContext, useState} from 'react'

const UserContext = createContext(null)

/*
const [userData, setUserData] = useState({
    id:666,
    username: `motoki`,
    photo: `student.png`,
    favourites: [],
})

return {
    <UserContext.Provider value=({data})
}
*/

export default UserContext