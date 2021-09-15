import React from "react";
import Filters from "./Filters";
import { connect } from "react-redux";
import { setSearchByNameValue, setSelectedState } from '../../redux/data-reducer';

class FiltersContainer extends React.Component {
  onChangeValue(event) {
    this.props.setSearchByNameValue(event.target.value);
  }

  onChangeSelectedState(event) {
    this.props.setSelectedState(event.target.value)
  }

  render() {
    return (
      <Filters searchByNameValue={this.props.searchByNameValue}
        onChangeValue={this.onChangeValue.bind(this)}
        states={this.props.states}
        onChangeSelectedState={this.onChangeSelectedState.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchByNameValue: state.tableData.searchByNameValue,
    states: state.tableData.states,
    selectedState: state.tableData.selectedState
  }
}

export default connect(mapStateToProps, { setSearchByNameValue, setSelectedState })(FiltersContainer);