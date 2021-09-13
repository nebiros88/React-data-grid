import { itrexAPI } from '../api/api';

const SET_DATA = 'SET_DATA';

let InitialState = {
  data: [],
  usersPerPage: 20
}

const dataReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_DATA :
      return {...state, data: [...action.data]}
    default:
      return state;
  }
}

export const setData = (data) => ({type: SET_DATA, data})

export const getData = () => {
  return(dispatch) => {
    itrexAPI.getData()
      .then(response => {
        dispatch(setData(response.data));
      })
  }
}

export default dataReducer;