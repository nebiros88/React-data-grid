import React from "react";
import Table from "./Table";
import { getData } from '../../redux/data-reducer';
import { connect } from "react-redux";

class TableContainer extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        <Table />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
}


export default connect(mapStateToProps, {getData})(TableContainer);