export const select = (nodeSelected) => {
    return{
        type: 'SELECT',
        nodeSelected
    }
}
export const unselect = (nodeSelected) => {
    return{
        type: 'UNSELECT',
        nodeSelected
    }
}