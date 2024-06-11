export default function testReducer(state = null, data) {
    switch (data.type) {
        case 'MaterialGetPage':
            return Object.assign({}, state, { page: data.page });
        default:
            return state;
    }
}

export function getPage() {
    return dispatch => {
        dispatch({ type: 'MaterialGetPage', page: ['1', '2', '3'] });
    };
}