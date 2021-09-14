import React from "react";
import PagesList from "./PagesList";
import style from './PagesList.module.css';
import { changeSelectedPage, changePage } from '../../../redux/data-reducer';
import { connect } from "react-redux";


class PagesListContainer extends React.Component {
  onPageChanged = (page) => {
    this.props.changePage(page);
  }

  render() {
    return (
      <PagesList {...this.props}
        onPageChanged={this.onPageChanged}
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