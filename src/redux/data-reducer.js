import { itrexAPI } from '../api/api';

const SET_DATA = 'SET_DATA';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const CHANGE_SELECTED_PAGE = 'CHANGE_SELECTED_PAGE';

let InitialState = {
  data: [],
  usersPerPage: 20,
  totalUsers: 0,
  selectedPage: 1
}

const dataReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_DATA :
      return {...state, data: [...action.data]}
      case SET_TOTAL_USERS :
      return {...state, totalUsers: action.totalUsers}
      case CHANGE_SELECTED_PAGE :
      return {...state, selectedPage: action.page}
    default:
      return state;
  }
}

export const setData = (data) => ({type: SET_DATA, data});
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});
export const changeSelectedPage = (page) => ({type: CHANGE_SELECTED_PAGE}, page);

export const getData = () => {
  return(dispatch) => {
    itrexAPI.getData()
      .then(response => {
        dispatch(setTotalUsers(response.data.length))
        dispatch(setData(response.data));
      })
  }
}

export default dataReducer;