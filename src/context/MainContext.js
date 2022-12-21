import React, { createContext, useContext, useState, useEffect } from 'react';

const MainContext = createContext();

const Provider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [list, setList] = useState();
  const [search, setSearch] = useState('');

  useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);


  const data = {
    users,
    setUsers,
    list,
    setList,
    search, setSearch
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export const useUsers = () => useContext(MainContext);

export default Provider;
