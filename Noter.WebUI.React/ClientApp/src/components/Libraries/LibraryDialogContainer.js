import { connect } from 'react-redux';

import LibraryDetails from '../components/LibraryDetails.js';
import { fetchLibrary, fetchLibrarySuccess, fetchLibraryFailure, resetActiveLibrary, resetDeletedLibrary } from '../actions/Librarys';



function mapStateToProps(globalState, ownProps) {
    return {
        activeLibrary: globalState.Librarys.activeLibrary,
        LibraryId: ownProps.id
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLibrary: (id) => {
            dispatch(fetchLibrary(id))
                .then((result) => {
                    // Note: Error's "data" is in result.payload.response.data (inside "response")
                    // success's "data" is in result.payload.data
                    if (result.payload.response && result.payload.response.status !== 200) {
                        dispatch(fetchLibraryFailure(result.payload.response.data));
                    } else {
                        dispatch(fetchLibrarySuccess(result.payload.data))
                    }
                })
        },
        resetMe: () => {
            //clean up both activeLibrary(currrently open) and deletedLibrary(open and being deleted) states
            dispatch(resetActiveLibrary());
            dispatch(resetDeletedLibrary());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LibraryDetails);
