import React from "react";
import Filters from "./Filters";
import { connect } from "react-redux";
import { setSearchByNameValue } from '../../redux/data-reducer';

class FiltersContainer extends React.Component {
  onChangeValue(event) {
    this.props.setSearchByNameValue(event.target.value);
  }

  render() {
    return (
        <Filters searchByNameValue={this.props.searchByNameValue}
        onChangeValue={this.onChangeValue.bind(this)}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchByNameValue: state.tableData.searchByNameValue
  }
}

export default connect(mapStateToProps, {setSearchByNameValue})(FiltersContainer);