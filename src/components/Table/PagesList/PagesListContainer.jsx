import React from "react";
import PagesList from "./PagesList";
import style from './PagesList.module.css';
import { changeSelectedPage } from '../../../redux/data-reducer';
import { connect } from "react-redux";


class PagesListContainer extends React.Component {
  render() {
    return (
      <PagesList {...this.props}/>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    selectedPage: state.tableData.selectedPage,
    
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedPage: (page) => {
      dispatch(changeSelectedPage(page));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesListContainer);