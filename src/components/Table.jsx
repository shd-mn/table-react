import React from 'react';
import { useUsers } from '../context/MainContext';
export default function Table() {
    const { users, search, setList } = useUsers();

    const filteredUser = users.filter((user) =>
        JSON.stringify(user)
            .toString()
            .toLowerCase()
            .includes(search.toString().toLowerCase())
    );

    const highlightText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <>
                {parts.map((part, i) => (
                    <span
                        key={i}
                        style={
                            part.toLowerCase() === highlight.toLowerCase()
                                ? { fontWeight: 'bold', background: 'yellow' }
                                : {}
                        }
                    >
                        {part}
                    </span>
                ))}
            </>
        );
    };

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

                    {/* Table Body */}
                    <tbody>
                        {filteredUser?.map((user, id) => (
                            <tr key={id}>
                                <td>{id + 1}</td>
                                <td>{highlightText(user.name, search)}</td>
                                <td>{highlightText(user.email, search)}</td>
                                <td>{highlightText(user.phone, search)}</td>
                                <td>
                                    {highlightText(user.address.city, search)} -
                                    {highlightText(user.address.street, search)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
