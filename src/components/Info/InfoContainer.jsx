import React from "react";
import Info from "./Info";
import { connect } from "react-redux";

class InfoContainer extends React.Component {
  render() {
    return (
        <Info selectedUser={this.props.selectedUser}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.tableData.selectedUser
  }
}

export default connect(mapStateToProps,)(InfoContainer);