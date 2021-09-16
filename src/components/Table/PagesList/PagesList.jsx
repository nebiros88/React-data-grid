import React from "react";
import style from './PagesList.module.css';

const PagesList = (props) => {
  const selectNextPage = () => {
    let currentPage = props.selectedPage;
    if(props.pagesList.length) {
      if(currentPage < props.pagesList.length) {
        currentPage++;
        props.onPageChanged(currentPage)
      }
    }
  }

  const selectPrevioustPage = () => {
    let currentPage = props.selectedPage;
    if(props.pagesList.length) {
      if(currentPage > 1)  {
        currentPage--;
        props.onPageChanged(currentPage)
      }
    }
  }

  return (
    <div className={style.pagesList}>
      <button className={style.sideButton} onClick={() => selectPrevioustPage()} >Previous </button>
      {props.pagesList.length !== 0
        && props.pagesList.map(p => {
          return <button onClick={() => {props.onPageChanged(p)}}>{p}</button>
        })
      }
      <button className={style.sideButton} onClick={() => selectNextPage()}>Next </button>
    </div>
  )
}

export default PagesList;