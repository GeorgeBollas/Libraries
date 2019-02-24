import axios from 'axios';
import uuid1 from 'uuid/v1';

import {
    LIBRARY_LIST_SELECT_LIBRARY,
    LIBRARY_LIST_SELECT_LIBRARY_MENU,
    LIBRARY_LIST_SET_FILTER_TEXT,
    SET_CREATE_LIBRARY_DIALOG_OPEN_STATUS,
    CREATE_LIBRARY_DIALOG_CANCEL,
    CREATE_LIBRARY_REQUEST,
    CREATE_LIBRARY_SUCCESS
} from './actionTypes';

import { fetchLibraries } from './Libraries'; //todo is this how we handle calling other

export const filterLibraries = (filterText, libraries) => {
    return libraries.filter(l => l.name.includes(filterText)); //2015 way
    //todo we need to handle the selected item. if it becomes invisible then
    //we need to select the next or whatever rule we use
}

export const selectLibrary = (libraryId) => ({
    type: LIBRARY_LIST_SELECT_LIBRARY, libraryId
})

export const selectLibraryMenu = (libraryId) => ({
    type: LIBRARY_LIST_SELECT_LIBRARY_MENU, libraryId
})

export const setFilterText = (filterText) => ({
    type: LIBRARY_LIST_SET_FILTER_TEXT, filterText: filterText
})

export const createLibraryDialogOpen = (isOpen) => {
    return { type: SET_CREATE_LIBRARY_DIALOG_OPEN_STATUS, isOpen: isOpen };
}

export const createLibraryRequest = () => {
    return { type: CREATE_LIBRARY_REQUEST };
}


export const createLibraryRequestSuccess = (id) => {
    return { type: CREATE_LIBRARY_SUCCESS, id };
}

export const requestCreateLibrary = (name, tags) => {
    return (dispatch) => {
        dispatch(createLibraryRequest());

        //todo handle uuid better

        return axios.post('http://localhost:63315/api/Libraries', { requestGuid: uuid1(), name, tags: tags || [] })
            .then(res => {
                var libVM = res.data;
                dispatch(createLibraryRequestSuccess(libVM.libraryId));
                dispatch(fetchLibraries());
                return res;
            });
            //.catch(e => {
            //    // response.data.failures.Name [] of errors for name
            //    // extract and throw as validation error suitable for setErrors({ name: 'error message' });
            //    throw e;
            //});

    }
}
