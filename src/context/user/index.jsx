import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const UserContext = createContext({
  user: null,
  register: () => {},
  unregister: () => {},
});

const UserProvider = ({ children }) => {
  const userData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null;
  const navigate = useNavigate();
  const [user, setUser] = useState(userData);

  const register = (userForm) => {
    setUser(userForm);
    localStorage.setItem('user', JSON.stringify(userForm));
    // navigate("/user");
  }

  const unregister = () => {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (
    <UserContext.Provider value={{ user, register, unregister }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;

export const useUser = () => {
  return useContext(UserContext);
}