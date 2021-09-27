import { combineReducers } from "redux";
import produtosReducer from "./produto/reducers";

export default combineReducers({
    produtos: produtosReducer
});