import axios from 'axios';

//import { REQUEST_LIBRARY_LIST, RECEIVE_LIBRARY_LIST, REQUEST_CREATE_LIBRARY, RECEIVE_CREATE_LIBRARY } from '../constants/action-types';
export const FETCH_LIBRARIES = 'FETCH_LIBRARIES';
export const FETCH_LIBRARIES_SUCCESS = 'FETCH_LIBRARIES_SUCCESS';
export const FETCH_LIBRARIES_FAILURE = 'FETCH_LIBRARIES_FAILURE';

export const CREATE_LIBRARY = 'CREATE_LIBRARY';
export const CREATE_LIBRARY_SUCCESS = 'CREATE_LIBRARY_SUCCESS';
export const CREATE_LIBRARY_FAILURE = 'CREATE_LIBRARY_FAILURE';
export const CREATE_LIBRARY_CANCEL = 'CREATE_LIBRARY_CANCEL';

export const actionCreators = {

    requestLibraries: () => {
        return { type: FETCH_LIBRARIES };
    },

    requestLibrariesSucceded: (libraries) => {
        return { type: FETCH_LIBRARIES_SUCCESS, libVM: libraries };
    },

    fetchLibraries: () => {
        return (dispatch) => {
            dispatch(actionCreators.requestLibraries());
            //dispatch({ type: FETCH_LIBRARIES });
            return axios.get(`http://localhost:63315/api/Libraries`)
                .then(response => {
                    dispatch(actionCreators.requestLibrariesSucceded(response.data));
                })
                .catch(error => { throw (error) });
        }

    },

    createLibrary: (name, tags) => {
        return { type: CREATE_LIBRARY };
    },

    cancelCreateLibrary: () => {
        return { type: CREATE_LIBRARY_CANCEL };
    },

    requestCreateLibrary: (name, tags) => {
        return (dispatch) => {
            //dispatch(actionCreators.requestCreateLibrary(name, tags));
            //dispatch({ type: CREATE_LIBRARY });

            //const library = {
            //    name,
            //    tags
            //};

            //axios.post(`http://localhost:63315/api/Libraries`, { library })
            //    .then(res => {
            //        var libVM = res.library
            //        dispatch({ type: CREATE_LIBRARY_SUCCESS, libVM });
            //        //todo decide what to really do here
            //    })

        }
    }
};