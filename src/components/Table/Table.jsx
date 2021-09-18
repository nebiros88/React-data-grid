import React from "react";
import style from './Table.module.css';
import PagesListContainer from "./PagesList/PagesListContainer";
import upArrowImg from '../../img/up-arrow.png';
import downArrowImg from '../../img/down-arrow.png';

const Table = (props) => {
  const pagesCount = Math.ceil(props.data.length / props.usersPerPage);
  const getPages = () => {
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return pages;
  }

  const renderArrow = (sortConfig) => {
    if (sortConfig.method) {
      return <img src={sortConfig.method === 'desc' ? downArrowImg : upArrowImg} className={style.tableHead_img} alt='arrow_img' />
    }
  }

  const renderUsers = (users) => {
    let result = [];
    if (users.length > 0) {
      const curPage = Math.min(pagesCount, props.selectedPage);
      let startUser = props.usersPerPage * curPage - props.usersPerPage;
      for (let i = startUser; i < Math.min(props.usersPerPage * curPage, users.length); i++) {
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

  const renderColumn = (colVlaue, colName) => {
    return (
      <th>
        <div className={style.tableHead} onClick={() => props.onColumnHeaderClick(colVlaue)}>
          <div className={style.tableHead_description}>{colName}</div>
          {props.sortConfig.colName === colVlaue && renderArrow(props.sortConfig)}
        </div>
      </th>
    )
  }

  return (
    <div className={style.wrapper}>
      <table className={style.table}>
        <thead>
          <tr>
            {renderColumn('id', 'id')}
            {renderColumn('firstName', 'First name')}
            {renderColumn('lastName', 'Last name')}
            {renderColumn('email', 'Email')}
            {renderColumn('phone', 'Phone')}
            {renderColumn('state', 'State')}
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