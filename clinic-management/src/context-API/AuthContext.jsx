import { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const mockUser = {
      id: 1,
      name: "John Doe",
      email,
      role: "patient",
    };
    setUser(mockUser);
  };
  const register = async (userData) => {
    // Mock registration
    const mockUser = {
      id: Date.now(),
      name: userData.fullName,
      email: userData.email,
      role: "patient",
    };

    setUser(mockUser);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext