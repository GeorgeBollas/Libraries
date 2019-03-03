import axios from 'axios';
//import uuid1 from 'uuid/v1';

import {
    FETCH_LIBRARIES_REQUEST,
    FETCH_LIBRARIES_SUCCESS,
    FETCH_LIBRARIES_FAILURE,

    FETCH_LIBRARY_REQUEST,
    FETCH_LIBRARY_SUCCESS,
    FETCH_LIBRARY_FAILURE,

    CREATE_LIBRARY_REQUEST,
    CREATE_LIBRARY_SUCCESS,
    CREATE_LIBRARY_FAILURE,

    UPDATE_LIBRARY_DETAILS_REQUEST,
    UPDATE_LIBRARY_DETAILS_SUCCESS,
    UPDATE_LIBRARY_DETAILS_FAILURE

} from './actionTypes';


// Fetching Libraries Request

const fetchLibrariesRequest = () => {
    return { type: FETCH_LIBRARIES_REQUEST };
}

const requestLibrariesSuccess = (libraries) => {
    return {
        type: FETCH_LIBRARIES_SUCCESS, data: { libraries }
    };
}

export const fetchLibraries = () => {
    return (dispatch) => {
        dispatch(fetchLibrariesRequest());

        //todo should the 'then' be moved to the component
        return axios.get(`http://localhost:63315/api/Libraries`)
            .then(response => {
                dispatch(requestLibrariesSuccess(response.data.libraries));
            })
            .catch(error => { throw (error) });
    }

}

// Create Library Details

const createLibraryRequest = (name) => {
    return {
        type: CREATE_LIBRARY_REQUEST, data: { name }
    };
}

const createLibrarySuccess = (libraryId) => {
    return {
        type: UPDATE_LIBRARY_DETAILS_SUCCESS, data: { libraryId }
    };
}


// Update Library Details

const updateLibraryDetailsRequest = (libraryId) => {
    return {
        type: UPDATE_LIBRARY_DETAILS_REQUEST, data: { libraryId }
    };
}

const updateLibraryDetailsSuccess = (libraryId) => {
    return {
        type: UPDATE_LIBRARY_DETAILS_SUCCESS, data: { libraryId }
    };
}


// Fetching Library Request

const fetchLibraryRequest = (libraryId) => {
    return {
        type: FETCH_LIBRARY_REQUEST, data: { libraryId }
    };
}

const requestLibrarySuccess = (library) => {
    return {
        type: FETCH_LIBRARY_SUCCESS, data: { library }
    };
}

export const fetchLibrary = (id) => {
    return (dispatch) => {
        dispatch(fetchLibraryRequest());

        //todo should the 'then' be moved to the component
        return axios.get(`http://localhost:63315/api/Libraries/${id}`)
            .then(response => {
                dispatch(requestLibrarySuccess(response.data));
            })
            .catch(error => { throw (error) });
    }
}

export const createLibraryDetailsLibrary = (name, notes) => {
    return (dispatch) => {
        dispatch(createLibraryRequest(name));

        //todo should the 'then' be moved to the component
        return axios.post(`http://localhost:63315/api/Libraries/${name}`)
            .then(response => {
                dispatch(createLibrarySuccess(response.data));
            })
            .catch(error => { throw (error) });
    }
}

export const updateLibraryDetailsLibrary = (id, name, notes) => {
    return (dispatch) => {
        dispatch(updateLibraryDetailsRequest(id));

        //todo should the 'then' be moved to the component
        return axios.put(`http://localhost:63315/api/Libraries/${id}`)
            .then(response => {
                dispatch(updateLibraryDetailsSuccess(response.data));
            })
            .catch(error => { throw (error) });
    }
}