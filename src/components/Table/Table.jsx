import React from "react";
import style from './Table.module.css';
import PagesListContainer from "./PagesList/PagesListContainer";

const Table = (props) => {
  const pagesCount = Math.ceil(props.totalUsers / props.usersPerPage);
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
      let startUsers = props.usersPerPage * props.selectedPage - props.usersPerPage;
      for (let i = startUsers; i < props.usersPerPage * props.selectedPage; i++) { 
        result.push(
          <tr key={users[i].id}>
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
          {/* {props.data.map(user => 
            (  
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.adress.state}</td>
              </tr>
            )
          )} */}
          {renderUsers(props.data)}
        </tbody>
      </table>
      <PagesListContainer {...props} pagesList={getPages()} />
    </div>
  )
}

export default Table;