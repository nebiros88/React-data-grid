import React from "react";
import Table from "./Table";
import { getData, selectUser, setStates, setSortConfig } from '../../redux/data-reducer';
import { connect } from "react-redux";
import style from './Table.module.css';

class TableContainer extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  changeSelectedUser = (user) => {
    this.props.selectUser(user);
  }

  onColumnHeaderClick = (columnName) => {
    const config = {
      colName: columnName,
      method:this.props.sortConfig.method &&  this.props.sortConfig.method ==='asc' ? 'desc' : 'asc'
    }
    this.props.setSortConfig(config)
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
          sortConfig={this.props.sortConfig}
          onColumnHeaderClick= {this.onColumnHeaderClick.bind(this)}
        />
      </div>
    )
  }
}

const filter = (data, searchByName, state) => {
  if (searchByName) {
    data = data.filter(el => (el.firstName.toLowerCase()).includes(searchByName.toLowerCase()));
  }
  if(state) {
    data = data.filter(el => el.adress.state === state);
  }
  return data;
}

const sort = (data, sortConfig) => {
  if(!sortConfig.colName) return data;
  const userComparer = (user1, user2) => {
    if(user1[sortConfig.colName] > user2[sortConfig.colName]) return 1;
    if(user1[sortConfig.colName] < user2[sortConfig.colName]) return -1;
    return 0;
  }
  data = data.sort(userComparer);
  return sortConfig.method === 'desc' ? data.reverse() : data;
}

const mapStateToProps = (state) => {
  return {
    data: sort(filter(state.tableData.data, state.tableData.searchByNameValue, state.tableData.selectedState), state.tableData.sortConfig),
    totalUsers: state.tableData.totalUsers,
    usersPerPage: state.tableData.usersPerPage,
    selectedPage: state.tableData.selectedPage,
    selectedUser: state.tableData.selectedUser,
    selectedState: state.tableData.selectedState,
    sortConfig: state.tableData.sortConfig,
  };
}

export default connect(mapStateToProps, { getData, selectUser, setStates, setSortConfig })(TableContainer);
