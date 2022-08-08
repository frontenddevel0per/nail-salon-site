const initialState = {
    modalIsActive: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'MODAL_ACTIVE':
            return {
                ...state,
                modalIsActive: true
            }
        case 'MODAL_INACTIVE':
            return {
                ...state,
                modalIsActive: false
            }
        default: return state
    }
}

export default reducer;