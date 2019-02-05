﻿
import axios from 'axios';
import uuid1 from 'uuid/v1';

//import { REQUEST_LIBRARY_LIST, RECEIVE_LIBRARY_LIST, REQUEST_CREATE_LIBRARY, RECEIVE_CREATE_LIBRARY } from '../constants/action-types';
export const FETCH_LIBRARIES_REQUEST = 'FETCH_LIBRARIES_REQUEST';
export const FETCH_LIBRARIES_SUCCESS = 'FETCH_LIBRARIES_SUCCESS';
export const FETCH_LIBRARIES_FAILURE = 'FETCH_LIBRARIES_FAILURE';

export const CREATE_LIBRARY_DIALOG_OPEN = 'CREATE_LIBRARY_DIALOG_OPEN';
export const CREATE_LIBRARY_DIALOG_SAVE = 'CREATE_LIBRARY_DIALOG_SAVE';
export const CREATE_LIBRARY_DIALOG_CANCEL = 'CREATE_LIBRARY_DIALOG_CANCEL';

export const EDIT_LIBRARY_OPEN = 'EDIT_LIBRARY_OPEN';


export const CREATE_LIBRARY_REQUEST = 'CREATE_LIBRARY_REQUEST';
export const CREATE_LIBRARY_SUCCESS = 'CREATE_LIBRARY_SUCCESS';
export const CREATE_LIBRARY_FAILURE = 'CREATE_LIBRARY_FAILURE';


export const requestLibraries = () => {
    return { type: FETCH_LIBRARIES_REQUEST };
}

export const requestLibrariesSucceded = (libraries) => {
    return { type: FETCH_LIBRARIES_SUCCESS, libVM: libraries };
}

export const fetchLibraries = () => {
    return (dispatch) => {
        dispatch(requestLibraries());

        //todo should the 'then' be moved to the component
        return axios.get(`http://localhost:63315/api/Libraries`)
            .then(response => {
                dispatch(requestLibrariesSucceded(response.data));
            })
            .catch(error => { throw (error) });
    }

}

export const editLibraryOpen = (id) => {
    return { type: EDIT_LIBRARY_OPEN, libraryId: id };
}

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

export function createLibraryRequest(name, tags) {
    return {
        type: CREATE_LIBRARY_SUCCESS,
        payload: { name, tags }
    };
}

export function createLibrarySuccess(libraryId) {
    return {
        type: CREATE_LIBRARY_SUCCESS,
        payload: libraryId
    };
}
