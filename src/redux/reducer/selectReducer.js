const selectReducer = (state, action) => {
    switch(action.type){
        case 'SELECT':
            if(action.nodeSelected){
                state = {
                selected: true,
                data: action.nodeSelected
                }
            }
            return state;
        case 'UNSELECT':
            if(action.nodeSelected){
                state = {
                selected: false,
                data: action.nodeSelected
                }
            }
            return state;
        default:
            return false;
    }
}

export default selectReducer