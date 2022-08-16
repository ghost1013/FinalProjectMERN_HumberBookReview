import { START_LOADING, END_LOADING, FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getContactUs = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.getContactUs(page);

    dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};


export const createContactUs = (query) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createContactUs(query);

    dispatch({ type: CREATE, payload: data });

  } catch (error) {
    console.log(error);
  }
};

export const updateContactUs = (id, updatedQuery) => async (dispatch) => {
  try {
    const { data } = await api.updateContactUs(id, updatedQuery);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteContactUs = (id) => async (dispatch) => {
  try {
    await await api.deleteContactUs(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
