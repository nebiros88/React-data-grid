import React from "react";
import Info from "./Info";
import { connect } from "react-redux";

class InfoContainer extends React.Component {
  render() {
    return (
      <div>
        <Info selectedUser={this.props.selectedUser}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.tableData.selectedUser
  }
}

export default connect(mapStateToProps,)(InfoContainer);