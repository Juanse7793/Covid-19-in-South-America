import fetchData from '../Service/api';

const GET_DATA = 'REDUCER/GET_DATA';
const FILTER_DATA = 'REDUCER/FILTER_DATA';

export default function getDataReducer(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    case FILTER_DATA:
      return [...state.map((country) => {
        if (country.id === action.payload.id) {
          return { ...country, filtered: action.payload.status };
        }
        return country;
      }),
      ];
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

export const filterData = (id, status) => (dispatch) => {
  dispatch({
    type: FILTER_DATA,
    payload: {
      id,
      status: Boolean(Number(status)),
    },
  });
};
