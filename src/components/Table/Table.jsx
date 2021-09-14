import React from "react";
import style from './Table.module.css';

const Table = (props) => {
  const pagesCount = Math.ceil(props.totalUsers / props.usersPerPage);
  const getPages = () => {
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return pages;
  }

  return (
    <div >
      <table className={style.table}>
        <thead>
          <tr>
            <th>id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.adress.state}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
      <div className={style.pagesList}>
        {getPages().length !== 0 && getPages().map(p => { return <span>{p}</span> })}
      </div>
    </div>
  )
}

export default Table;