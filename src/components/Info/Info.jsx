import React from "react";
import style from './Info.module.css';

const Info = (props) => {

    return (
      <div className={style.infoWrapper}>
        <div>Profile info:</div>
        <div>Selected profile: {props.selectedUser.firstName} {props.selectedUser.lastName}</div>
        <div>Description: {props.selectedUser.description}</div>
        <div>Address: {props.selectedUser.adress.streetAddress}</div>
        <div>City: {props.selectedUser.adress.city}</div>
        <div>State: {props.selectedUser.adress.state}</div>
        <div>Index: {props.selectedUser.adress.zip}</div>
      </div>
    )
}

export default Info;