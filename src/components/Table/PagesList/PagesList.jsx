import React from "react";
import style from './PagesList.module.css';

const PagesList = (props) => {
  return (
    <div className={style.pagesList}>
      <button>Previous</button>
      {props.pagesList.length !== 0
        && props.pagesList.map(p => {
          return <button onClick={() => {props.onPageChanged(p)}}>{p}</button>
        })
      }
      <button>Next</button>
    </div>
  )
}

export default PagesList;