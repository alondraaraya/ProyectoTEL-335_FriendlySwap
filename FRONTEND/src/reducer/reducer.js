/**
 * action:
 * {
 *  'type': 'ADD',
 *  'product': {...}
 * }
 * @param {*} previousState 
 * @param {*} action 
 */
function productosReducer (previousState = [], action) {
    switch (action.type) {
        case 'ADD':
            return [ ...previousState, action.product ]
        default:
            return previousState
    }
}

export default productosReducer