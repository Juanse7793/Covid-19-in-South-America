import fetchData from '../Service/api';

const GET_DATA = 'REDUCER/GET_DATA';

export default function getDataReducer(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
}

export const getData = () => async (dispatch) => {
  const data = await fetchData();
  dispatch({
    type: GET_DATA,
    payload: data,
  });
};
