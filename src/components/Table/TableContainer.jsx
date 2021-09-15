import React from "react";
import Table from "./Table";
import { getData, selectUser } from '../../redux/data-reducer';
import { connect } from "react-redux";
import style from './Table.module.css';

class TableContainer extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  changeSelectedUser = (user) => {
    debugger;
    this.props.selectUser(user);
  }

  render() {
    return (
      <div className={style.tableWrapper} >
        <Table data={this.props.data}
          totalUsers={this.props.totalUsers}
          usersPerPage={this.props.usersPerPage}
          selectedPage={this.props.selectedPage}
          selectedUser={this.props.selectedUser}
          changeSelectedUser={this.changeSelectedUser}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.tableData.data,
    totalUsers: state.tableData.totalUsers,
    usersPerPage: state.tableData.usersPerPage,
    selectedPage: state.tableData.selectedPage,
    selectedUser: state.tableData.selectedUser
  };
}


export default connect(mapStateToProps, { getData, selectUser })(TableContainer);