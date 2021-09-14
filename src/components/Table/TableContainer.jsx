import React from "react";
import Table from "./Table";
import { getData } from '../../redux/data-reducer';
import { connect } from "react-redux";
import style from './Table.module.css';

class TableContainer extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className={style.tableWrapper} >
        <Table data={this.props.data} 
          totalUsers={this.props.totalUsers}
          usersPerPage={this.props.usersPerPage
          }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.tableData.data,
    totalUsers: state.tableData.totalUsers,
    usersPerPage: state.tableData.usersPerPage
  };
}


export default connect(mapStateToProps, {getData})(TableContainer);