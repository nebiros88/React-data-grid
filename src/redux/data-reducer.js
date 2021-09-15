import { itrexAPI } from '../api/api';

const SET_DATA = 'SET_DATA';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const CHANGE_SELECTED_PAGE = 'CHANGE_SELECTED_PAGE';
const SELECT_USER = 'SELECT_USER';
const SET_SEARCH_BY_NAME_VALUE = 'SET_SEARCH_BY_NAME_VALUE';
const SET_STATES = 'SET_STATES'; 
const SET_SELECTED_STATE = 'SET_SELECTED_STATE';

let InitialState = {
  data: [],
  usersPerPage: 20,
  totalUsers: 0,
  selectedPage: 1,
  selectedUser: { adress: {} },
  searchByNameValue: '',
  states: [],
  selectedState: ''
}

const dataReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: [...action.data] }
    case SET_TOTAL_USERS:
      return { ...state, totalUsers: action.totalUsers }
    case CHANGE_SELECTED_PAGE:
      return { ...state, selectedPage: action.page }
    case SELECT_USER:
      return { ...state, selectedUser: action.user }
    case SET_SEARCH_BY_NAME_VALUE:
      return { ...state, searchByNameValue: action.value }
    case SET_STATES:
      return { ...state, states: action.states }
    case SET_SELECTED_STATE:
      return { ...state, selectedState: action.state }
    default:
      return state;
  }
}

export const setData = (data) => ({ type: SET_DATA, data });
export const setTotalUsers = (totalUsers) => ({ type: SET_TOTAL_USERS, totalUsers });
export const changeSelectedPage = (page) => ({ type: CHANGE_SELECTED_PAGE, page });
export const selectUser = (user) => ({ type: SELECT_USER, user });
export const setSearchByNameValue = (value) => ({ type: SET_SEARCH_BY_NAME_VALUE, value });
export const setStates = (states) => ({type: SET_STATES, states});
export const setSelectedState = (state) => ({type: SET_SELECTED_STATE, state})

export const getData = () => {
  return (dispatch) => {
    itrexAPI.getData()
      .then(response => {
        dispatch(setTotalUsers(response.data.length))
        dispatch(setData(response.data));
        const statesList = new Set(response.data.map(el => el.adress.state));
        dispatch(setStates(statesList));
      })
  }
}

export const changePage = (page) => {
  return (dispatch) => {
    dispatch(changeSelectedPage(page));
  }
}

export default dataReducer;