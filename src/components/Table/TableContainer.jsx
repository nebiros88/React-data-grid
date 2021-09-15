import React from "react";
import Table from "./Table";
import { getData, selectUser, setStates } from '../../redux/data-reducer';
import { connect } from "react-redux";
import style from './Table.module.css';

class TableContainer extends React.Component {
  

  componentDidMount() {
    this.props.getData();
  }

  changeSelectedUser = (user) => {
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
          getStates={this.getStates}
        />
      </div>
    )
  }
}

const getSortedData = (data, searchByName) => {
  if (searchByName) {
    data = data.filter(el => el.firstName.includes(searchByName));
  }
  return data;
}

const getSortedDataByState = (data, state) => {
  if(state) {
    data = data.filter(el => el.adress.state === state);
  }
  return data;
}

const mapStateToProps = (state) => {
  return {
    data: getSortedDataByState(getSortedData(state.tableData.data, state.tableData.searchByNameValue),state.tableData.selectedState),
    totalUsers: state.tableData.totalUsers,
    usersPerPage: state.tableData.usersPerPage,
    selectedPage: state.tableData.selectedPage,
    selectedUser: state.tableData.selectedUser,
    selectedState: state.tableData.selectedState
  };
}

export default connect(mapStateToProps, { getData, selectUser, setStates })(TableContainer);