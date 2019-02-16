
import axios from 'axios';


// dialogs

export const LIBRARY_CREATE_OPEN = 'LIBRARY_CREATE_OPEN';
export const LIBRARY_CREATE_SAVE = 'LIBRARY_CREATE_SAVE';
export const LIBRARY_CREATE_CANCEL = 'LIBRARY_CREATE_CANCEL';

export const LIBRARY_EDIT_DETAILS_OPEN = 'LIBRARY_EDIT_DETAILS_OPEN';
export const LIBRARY_EDIT_TAGS_OPEN = 'LIBRARY_EDIT_TAGS_OPEN';
export const LIBRARY_EDIT_SYNCS_OPEN = 'LIBRARY_EDIT_SYNCS_OPEN';
export const LIBRARY_EDIT_SEARCHES_OPEN = 'LIBRARY_EDIT_SEARCHES_OPEN';

export const EDIT_LIBRARY_OPEN = 'EDIT_LIBRARY_OPEN';

export const DELETE_LIBRARY_OPEN = 'DELETE_LIBRARY_OPEN';


// api

export const CREATE_LIBRARY_REQUEST = 'CREATE_LIBRARY_REQUEST';
export const CREATE_LIBRARY_SUCCESS = 'CREATE_LIBRARY_SUCCESS';
export const CREATE_LIBRARY_FAILURE = 'CREATE_LIBRARY_FAILURE';

export const UPDATE_LIBRARY_REQUEST = 'UPDATE_LIBRARY_REQUEST';
export const UPDATE_LIBRARY_SUCCESS = 'UPDATE_LIBRARY_SUCCESS';
export const UPDATE_LIBRARY_FAILURE = 'UPDATE_LIBRARY_FAILURE';

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
