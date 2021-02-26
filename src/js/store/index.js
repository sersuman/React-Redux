import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenwordsMiddleware } from "../middleware";

const store = createStore(
    rootReducer,
    applyMiddleware(forbiddenwordsMiddleware)
);

export default store;