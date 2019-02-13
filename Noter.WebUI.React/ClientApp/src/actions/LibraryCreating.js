
import axios from 'axios';
import uuid1 from 'uuid/v1';

import {
    CREATE_LIBRARY_DIALOG_OPEN,
    CREATE_LIBRARY_DIALOG_CANCEL,
    CREATE_LIBRARY_REQUEST,
    CREATE_LIBRARY_SUCCESS,
} from '../actions/actionTypes';



// Create Library Dialog

export const createLibraryDialogOpen = () => {
    return { type: CREATE_LIBRARY_DIALOG_OPEN };
}

export const createLibraryDialogCancel = () => {
    return { type: CREATE_LIBRARY_DIALOG_CANCEL };
}

// Create Library Server Call

export const createLibrary = (name, tags) => {
    //todo handle uuid better
    return (dispatch) => {
        dispatch(createLibraryRequest(name, tags))

        return axios.post('http://localhost:63315/api/Libraries', { requestGuid: uuid1(), name, tags: tags || [] });
    }
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