import React from "react";
import style from './Info.module.css';

const Info = (props) => {

    return (
      <div className={style.infoWrapper}>
        <div>Profile info:</div>
        <div>Selected profile: {props.selectedUser.firstName} {props.selectedUser.lastName}</div>
        <div>Description: {props.selectedUser.description}</div>
        <div>Address:</div>
        <div>City: </div>
        <div>State: </div>
        <div>Index: </div>
      </div>
    )
}

export default Info;