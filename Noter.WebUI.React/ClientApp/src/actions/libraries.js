import axios from 'axios';
//import uuid1 from 'uuid/v1';

import {
    FETCH_LIBRARIES_REQUEST,
    FETCH_LIBRARIES_SUCCESS,
    FETCH_LIBRARIES_FAILURE,
    FETCH_LIBRARY_REQUEST,
    FETCH_LIBRARY_SUCCESS,
    FETCH_LIBRARY_FAILURE,
} from './actionTypes';


// Fetching Libraries Request

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

// Fetching Library Request

const fetchLibraryRequest = (id) => {
    return { type: FETCH_LIBRARIES_REQUEST, id };
}

const requestLibrarySuccess = (library) => {
    return { type: FETCH_LIBRARIES_SUCCESS, libVM: library };
}

export const fetchLibrary = (id) => {
    return (dispatch) => {
        dispatch(fetchLibraryRequest());

        //todo should the 'then' be moved to the component
        return axios.get(`http://localhost:63315/api/Libraries/{id}`)
            .then(response => {
                dispatch(requestLibrarySuccess(response.data));
            })
            .catch(error => { throw (error) });
    }

}