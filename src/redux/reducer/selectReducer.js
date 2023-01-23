const selectReducer = (state, action) => {
    switch(action.type){
        case 'SELECT':
            state = true
            return state;
        case 'UNSELECT':
            state = false
            return state;
        default:
            return false;
    }
}

export default selectReducer