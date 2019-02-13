
import axios from 'axios';

import {
    EDIT_LIBRARY_OPEN,
    UPDATE_LIBRARY_REQUEST,
    UPDATE_LIBRARY_SUCCESS
} from '../actions/actionTypes';

// Edit Library Server Call

export const editLibrary = (libraryId, name) => {
    
    return (dispatch) => {
        dispatch(updateLibraryRequest(libraryId, name))

        return axios.put('http://localhost:63315/api/Libraries', { libraryId, name}); //todo this is really a rename
    }
}

// Edit Library Dialog

export const editLibraryOpen = (id) => {
    return { type: EDIT_LIBRARY_OPEN, libraryId: id };
}

// Update Library Request

export function updateLibraryRequest(libraryId, name) {
    return {
        type: UPDATE_LIBRARY_REQUEST,
        payload: { libraryId, name}
    };
}

export function updateLibrarySuccess(libraryId) {
    return {
        type: UPDATE_LIBRARY_SUCCESS,
        payload: libraryId
    };
}
