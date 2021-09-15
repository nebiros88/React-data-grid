import React from "react";
import style from './Table.module.css';
import PagesListContainer from "./PagesList/PagesListContainer";

const Table = (props) => {
  const pagesCount = Math.ceil(props.data.length / props.usersPerPage);
  const getPages = () => {
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return pages;
  }

  const renderUsers = (users) => {
    let result = [];
    if (users.length > 0) {
      let startUser = props.usersPerPage * props.selectedPage - props.usersPerPage;
      for (let i = startUser; i < Math.min(props.usersPerPage * props.selectedPage, users.length); i++) { 
        result.push(
          <tr className={style.tableRow} onClick={() => props.changeSelectedUser(users[i])}>
          <td>{users[i].id}</td>
          <td>{users[i].firstName}</td>
          <td>{users[i].lastName}</td>
          <td>{users[i].email}</td>
          <td>{users[i].phone}</td>
          <td>{users[i].adress.state}</td>
        </tr>
        );
      }
    }
    return result;
  }

  return (
    <div className={style.wrapper}>
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
          {renderUsers(props.data)}
        </tbody>
      </table>
      <PagesListContainer {...props} pagesList={getPages()} />
    </div>
  )
}

export default Table;