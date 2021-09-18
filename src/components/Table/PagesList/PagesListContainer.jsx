import React from "react";
import PagesList from "./PagesList";
import { changeSelectedPage, changePage } from '../../../redux/data-reducer';
import { connect } from "react-redux";

class PagesListContainer extends React.Component {
  onPageChanged = (page) => {
    this.props.changePage(page);
  }

  render() {
    return (
      <PagesList {...this.props}
        onPageChanged={this.onPageChanged.bind(this)}
        selectedPage={this.props.selectedPage}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPage: state.tableData.selectedPage,
  };
}

export default connect(mapStateToProps, {changeSelectedPage,changePage})(PagesListContainer);