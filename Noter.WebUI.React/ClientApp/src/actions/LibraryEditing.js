import axios from 'axios';
import uuid1 from 'uuid/v1';

import { fetchLibraries } from './libraries'

import {
    SET_CREATE_LIBRARY_DIALOG_OPEN_STATUS,
    CREATE_LIBRARY_DIALOG_CANCEL,
    CREATE_LIBRARY_REQUEST,
    CREATE_LIBRARY_SUCCESS
} from './actionTypes';
// dialogs


//// Edit Library Server Call

//export const editLibrary = (libraryId, name) => {
    
//    return (dispatch) => {
//        dispatch(updateLibraryRequest(libraryId, name))

//        return axios.put('http://localhost:63315/api/Libraries', { libraryId, name}); //todo this is really a rename
//    }
//}

//// Edit Library Dialog

//export const editLibraryOpen = (id) => {
//    return { type: EDIT_LIBRARY_OPEN, libraryId: id };
//}

//// Update Library Request

//export function updateLibraryRequest(libraryId, name) {
//    return {
//        type: UPDATE_LIBRARY_REQUEST,
//        payload: { libraryId, name}
//    };
//}

//export function updateLibrarySuccess(libraryId) {
//    return {
//        type: UPDATE_LIBRARY_SUCCESS,
//        payload: libraryId
//    };
//}

