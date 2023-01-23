export const select = (state) => {
    return{
        type: 'SELECT',
        state
    }
}
export const unselect = (state) => {
    return{
        type: 'UNSELECT',
        state
    }
}