import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [apiSearch, setApiSearchData] = useState([]);
  const [puId, setpuId] = useState(null);

  const updateSearchResults = async (searchQuery) => {
    const searchUrl = `https://academics.newtonschool.co/api/v1/facebook/post?search={"$or":[{"author.name":"${searchQuery}"},{"content":"${searchQuery}"}]}`;

    if (searchQuery.trim() === "") {
      setApiSearchData([]);
      return;
    }

    try {
      const response = await fetch(searchUrl, {
        headers: {
          projectID: "mkrxzeo3o2hi",
        },
      });
      const searchData = await response.json();
      setApiSearchData(searchData["data"]);
    } catch (error) {
      console.log("Error fetching search data", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        setApiSearchData,
        apiSearch,
        puId,
        setpuId,
        updateSearchResults,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
