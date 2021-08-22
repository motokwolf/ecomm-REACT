import React, {createContext, useState} from 'react'

const UserContext = createContext(null)

/*
 const [userData, setUserData] = useState({
    id:123,
    username: `toki`,
    photo: `user.png`,
    userFav: [],
    userCart: [],
});

return {
    <UserContext.Provider value=({data})
}
*/

export default UserContext