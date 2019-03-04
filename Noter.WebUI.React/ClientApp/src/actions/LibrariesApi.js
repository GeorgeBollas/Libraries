import axios from 'axios';
import uuid1 from 'uuid/v1';

import {
    FETCH_LIBRARIES_REQUEST,
    FETCH_LIBRARIES_SUCCESS,
    FETCH_LIBRARIES_FAILURE,

    FETCH_LIBRARY_REQUEST,
    FETCH_LIBRARY_SUCCESS,
    FETCH_LIBRARY_FAILURE,

    CREATE_LIBRARY_REQUEST,
    CREATE_LIBRARY_SUCCESS,
    CREATE_LIBRARY_FAILURE,

    UPDATE_LIBRARY_DETAILS_REQUEST,
    UPDATE_LIBRARY_DETAILS_SUCCESS,
    UPDATE_LIBRARY_DETAILS_FAILURE

} from './actionTypes';


// Fetch Libraries

const fetchLibrariesRequest = () => {
    return { type: FETCH_LIBRARIES_REQUEST };
}

const requestLibrariesSuccess = (libraries) => {
    return {
        type: FETCH_LIBRARIES_SUCCESS, data: { libraries }
    };
}

export const fetchLibraries = () => {
    return (dispatch) => {
        dispatch(fetchLibrariesRequest());

        //todo should the 'then' be moved to the component
        return axios.get(`http://localhost:63315/api/Libraries`)
            .then(response => {
                dispatch(requestLibrariesSuccess(response.data.libraries));
            })
            .catch(error => { throw (error) });
    }

}

// Fetch Library

const fetchLibraryRequest = (libraryId) => {
    return {
        type: FETCH_LIBRARY_REQUEST, data: { libraryId }
    };
}

const requestLibrarySuccess = (library) => {
    return {
        type: FETCH_LIBRARY_SUCCESS, data: { library }
    };
}

export const fetchLibrary = (id) => {
    return (dispatch) => {
        dispatch(fetchLibraryRequest());

        //todo should the 'then' be moved to the component
        return axios.get(`http://localhost:63315/api/Libraries/${id}`)
            .then(response => {
                dispatch(requestLibrarySuccess(response.data));
            })
            .catch(error => { throw (error) });
    }
}



// Create Library

export const createLibraryRequest = () => ({
    type: CREATE_LIBRARY_REQUEST
})


export const createLibraryRequestSuccess = (id) => {
    return { type: CREATE_LIBRARY_SUCCESS, data: { id } };
}

export const requestCreateLibrary = (name, tags) => {
    return (dispatch) => {
        dispatch(createLibraryRequest());

        //todo handle uuid better

        return axios.post('http://localhost:63315/api/Libraries',
            {
                requestGuid: uuid1(),
                name,
                tags: tags || []
            })
            .then(res => {
                var libVM = res.data;
                dispatch(createLibraryRequestSuccess(libVM.libraryId));
                dispatch(fetchLibraries()); //todo move from here?? should ui do this
                return res;
            });
    }
}


// Update Library

const updateLibraryDetailsRequest = (libraryId) => {
    return {
        type: UPDATE_LIBRARY_DETAILS_REQUEST, data: { libraryId }
    };
}

const updateLibraryDetailsSuccess = (libraryId) => {
    return {
        type: UPDATE_LIBRARY_DETAILS_SUCCESS, data: { libraryId }
    };
}

export const updateLibraryDetailsLibrary = (id, name, notes) => {
    return (dispatch) => {
        dispatch(updateLibraryDetailsRequest(id));

        //todo should the 'then' be moved to the component
        return axios.put(`http://localhost:63315/api/Libraries`,
            {
                name,
                notes
            })
            .then(response => {
                dispatch(updateLibraryDetailsSuccess(response.data));
            })
            .catch(error => { throw (error) });
    }
}