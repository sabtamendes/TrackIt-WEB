import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [image, setImage] = useState({})
    return (
        <AuthContext.Provider value={{ image, setImage }}>
            {props.children}
        </AuthContext.Provider>
    )
}