import React, { useState } from "react"

type UserProp = {
    name: string,
    email: string,
}

export const LoggedIn = () => {
    const [user, setUser] = useState<UserProp>({} as UserProp); //  type assertion
    const handleLogin = () => {
        setUser({ name: "vishwas", email: "vishwas@gmail.com" })
    }
    const handleLogout = () => {
        //setUser(null);
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Login</button>
            <div>Username  is {user.name}</div>
            <div>Username  is {user.email}</div>
        </div>
    )
}