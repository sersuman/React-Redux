import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenwords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }){
    return function(next) {
        return function(action) {
            // enjoy
            if (action.type === ADD_ARTICLE) {
                const foundWord = forbiddenwords.filter(word => 
                    action.payload.title.includes(word)
                );

                if (foundWord.length) {
                    return dispatch({ type: "FOUND_BAD_WORD" });
                }
            }
            return next(action);
        };
    };
}
