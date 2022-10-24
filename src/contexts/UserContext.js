// import { createContext, useState } from 'react';

// export const UserContext = createContext({});

// const UserProvider = (props) => {
//     const [loginResponse, setLoginResponse] = useState(null);
//     const [progress, setProgress] = useState(0);

//     return (
//         <UserContext.Provider value={{ loginResponse, setLoginResponse, progress, setProgress }}>
//             {props.children}
//         </UserContext.Provider>
//     )
// }

// export default UserProvider;

import { createContext } from "react";

const UserContext = createContext();

export default UserContext;