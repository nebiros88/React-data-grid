import React from "react";
import style from './Filters.module.css';

const enterOptions = (arr) => {
  let options = [];
  arr.forEach(el => {
    options.push(
      <option>{el}</option>
    )
  }) 
  return options;
}

const Filters = (props) => {

  return (
    <div className={ style.filtersWrapper }>
      <div className={ style.searchBox}>
        <div className={ style.searchBox_description}> Search by name:</div>
        <input className={ style.searchBox_input} onChange={props.onChangeValue} value={props.searchByNameValue}></input>
      </div>
      <div className={style.selectBox}>
         <div className={style.selectBox_description} >Filter by state</div>
        <select className={style.selectBox_select} onChange={props.onChangeSelectedState}>
          <option disabled></option>
          {enterOptions(props.states)}
        </select>
      </div>
    </div>
  )
}

export default Filters;