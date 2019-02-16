import axios from 'axios';
//import uuid1 from 'uuid/v1';

import {
    FETCH_LIBRARIES_REQUEST,
    FETCH_LIBRARIES_SUCCESS,
    FETCH_LIBRARIES_FAILURE,    LIBRARY_LIST_SELECT_LIBRARY,
    LIBRARY_LIST_SELECT_LIBRARY_MENU,
    LIBRARY_LIST_SET_FILTER_TEXT
} from './actionTypes';


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

export const filterLibraries = (filterText, libraries) => {
    return libraries.filter(l => l.name.includes(filterText)); //2015 way
    //todo we need to handle the selected item. if it becomes invisible then
    //we need to select the next or whatever rule we use
}

export const selectLibrary = (libraryId) => {
    return { type: LIBRARY_LIST_SELECT_LIBRARY, libraryId };
}

export const selectLibraryMenu = (libraryId) => {
    return { type: LIBRARY_LIST_SELECT_LIBRARY_MENU, libraryId };
}

export const setFilterText = (filterText) => {
    return { type: LIBRARY_LIST_SET_FILTER_TEXT, filterText: filterText };
}
