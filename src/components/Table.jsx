import React from 'react';
import { useUsers } from '../context/MainContext';
export default function Table() {
  const { users, search, setList } = useUsers();

  const filteredUser = users.filter(user => JSON.stringify(user).toString().toLowerCase().includes(search.toString().toLowerCase())
  );
  
  const sortName = () => {
    setList(users?.sort((a, b) => a.name.localeCompare(b.name)));
    console.log(users);
  };
  const sortEmail = () => {
    setList(users?.sort((a, b) => a.email.localeCompare(b.email)));
  };

  return (
    <>
      <div className="res-table">
        <table className="table">
          <thead className="t-head">
            <tr>
              <th>ID</th>
              <th>
                Name <button onClick={sortName}>sort</button>{' '}
              </th>
              <th>
                Email <button onClick={sortEmail}>sort</button>
              </th>
              <th>Phone</th>
              <th>Adress</th>
            </tr>
          </thead>
          <tbody>
            {filteredUser?.map((user, id) => (
              <tr key={id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  {user.address.city} - {user.address.street}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
