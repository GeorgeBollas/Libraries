
import axios from 'axios';
import uuid1 from 'uuid/v1';

import {
    FETCH_LIBRARIES_REQUEST,
    FETCH_LIBRARIES_SUCCESS,
    NAVIGATOR_SELECT_LIBRARY,
    NAVIGATOR_SELECT_LIBRARY_MENU
} from '../actions/actionTypes';


// Fetching Library Request

const fetchLibrariesRequest = () => {
    return { type: FETCH_LIBRARIES_REQUEST };
}

const requestLibrariesSuccess = (libraries) => {
    return { type: FETCH_LIBRARIES_SUCCESS, libVM: libraries };
}

export const fetchLibraries = () => {
    return (dispatch) => {
        dispatch(fetchLibrariesRequest());

        //todo should the 'then' be moved to the component
        return axios.get(`http://localhost:63315/api/Libraries`)
            .then(response => {
                dispatch(requestLibrariesSuccess(response.data));
            })
            .catch(error => { throw (error) });
    }

}

