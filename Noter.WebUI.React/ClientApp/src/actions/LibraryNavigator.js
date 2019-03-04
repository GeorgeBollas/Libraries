import axios from 'axios';

import {
    LIBRARY_LIST_SELECT_LIBRARY,
    LIBRARY_LIST_SELECT_LIBRARY_MENU,
    LIBRARY_LIST_SET_FILTER_TEXT,
    SET_CREATE_LIBRARY_DIALOG_OPEN_STATUS,
    CREATE_LIBRARY_DIALOG_CANCEL
} from './actionTypes';


export const filterLibraries = (filterText, libraries) => {
    return libraries.filter(l => l.name.includes(filterText)); //2015 way
    //todo we need to handle the selected item. if it becomes invisible then
    //we need to select the next or whatever rule we use
}

export const selectLibrary = (libraryId) => ({
    type: LIBRARY_LIST_SELECT_LIBRARY, libraryId
})

export const selectLibraryMenu = (libraryId) => ({
    type: LIBRARY_LIST_SELECT_LIBRARY_MENU, data: { libraryId }
})

export const setFilterText = (filterText) => ({
    type: LIBRARY_LIST_SET_FILTER_TEXT, data: { filterText }
})

export const createLibraryDialogOpen = (isOpen) => ({
    type: SET_CREATE_LIBRARY_DIALOG_OPEN_STATUS, data: { isOpen }
})

