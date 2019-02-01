import {
    FETCH_LIBRARIES_REQUEST,
    FETCH_LIBRARIES_SUCCESS,
    CREATE_LIBRARY_DIALOG_OPEN,
    CREATE_LIBRARY_REQUEST,
    CREATE_LIBRARY_SUCCESS,
    CREATE_LIBRARY_DIALOG_SAVE,
    CREATE_LIBRARY_DIALOG_CANCEL
} from '../actions/Libraries';

const initialState = {
    libraries: [],
    isLoading: false,
    isListValid: false,
    isOpen: false,
    isCreatingLibrary: false,
    isRequestedCreateLibrary : false
};


export const reducer = (state, action) => {
    state = state || initialState;

    //console.debug('Library List reducer');


    if (action.type === FETCH_LIBRARIES_REQUEST) {
        return {
            ...state,
            libraries: [],
            isListValid: false,
            isLoading: true,
        };
    }

    if (action.type === FETCH_LIBRARIES_SUCCESS) {
        return {
            ...state,
            libraries: action.libVM.libraries, //todo fix this
            isListValid: true,
            isLoading: false,
        };

    };


    if (action.type === CREATE_LIBRARY_DIALOG_OPEN) {
        return {
            ...state,
            isCreatingLibrary: true,
            creatingLibrary: true,
        };
    };

    if (action.type === CREATE_LIBRARY_DIALOG_CANCEL) {
        return {
            ...state,
            isCreatingLibrary: false,
            creatingLibrary: false,
        };
    };

    if (action.type === CREATE_LIBRARY_DIALOG_SAVE) {
        return {
            ...state,
            isCreatingLibrary: false,
            creatingLibrary: false,
        };
    };

    if (action.type === CREATE_LIBRARY_REQUEST) {
        return {
            ...state,
            isRequestedCreateLibrary: true,
        };
    };

    if (action.type === CREATE_LIBRARY_SUCCESS) {
        return {
            ...state,
            isRequestedCreateLibrary: false,
            isCreatingLibrary: false,
            creatingLibrary: false,
        };
    };


    return state;
}
