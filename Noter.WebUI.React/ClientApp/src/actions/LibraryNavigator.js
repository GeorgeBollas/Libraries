
import axios from 'axios';
import uuid1 from 'uuid/v1';

import {
    FETCH_LIBRARIES_REQUEST,
    FETCH_LIBRARIES_SUCCESS,
    CREATE_LIBRARY_DIALOG_OPEN,
    CREATE_LIBRARY_DIALOG_CANCEL,
    EDIT_LIBRARY_OPEN,
    DELETE_LIBRARY_OPEN,
    CREATE_LIBRARY_REQUEST,
    CREATE_LIBRARY_SUCCESS,
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

// Create Library Dialog

export const createLibraryDialogOpen = () => {
    return { type: CREATE_LIBRARY_DIALOG_OPEN };
}

export const createLibraryDialogCancel = () => {
    return { type: CREATE_LIBRARY_DIALOG_CANCEL };
}

export const createLibrary = (name, tags) => {
    //todo handle uuid better
    return (dispatch) => {
        dispatch(createLibraryRequest(name, tags))

        return axios.post('http://localhost:63315/api/Libraries', { requestGuid: uuid1(), name, tags: tags || [] });
    }
}

// Edit Library 

export const editLibraryOpen = (id) => {
    return { type: EDIT_LIBRARY_OPEN, libraryId: id };
}

// Delete Library 

export const deleteLibraryOpen = (id) => {
    return { type: DELETE_LIBRARY_OPEN, libraryId: id };
}

// Create Library Request

export function createLibraryRequest(name, tags) {
    return {
        type: CREATE_LIBRARY_REQUEST,
        payload: { name, tags }
    };
}

export function createLibrarySuccess(libraryId) {
    return {
        type: CREATE_LIBRARY_SUCCESS,
        payload: libraryId
    };
}

