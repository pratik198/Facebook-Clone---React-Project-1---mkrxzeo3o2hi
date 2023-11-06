import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
export function useAuth() {
    return useContext(AuthContext);
  }
  export function AuthProvider({ children }) {
    const storedUserId = localStorage.getItem("userId");
    const [loggedInUserId, setLoggedInUserId] = useState(storedUserId || null);
    const [apiSearch, setApiSearchData] = useState([]);
  
    return (
      <AuthContext.Provider value={{loggedInUserId, setLoggedInUserId,setApiSearchData,apiSearch }}>
        {children}
      </AuthContext.Provider>
    );
  }