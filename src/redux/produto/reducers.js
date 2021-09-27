import * as types from './types'

const produtosReducer = (state = {}, action) => {
    switch (action.type) {
        case types.BUSCAR_PRODUTOS:
            return {
                ...state,
                produtos: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default produtosReducer;