import { fa } from "@faker-js/faker";
import { actionTypes } from "./actions";

const initialState = {
    posts: [],
    error: null,
    isLoading: false,
};

export const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.isLoading:
            return {...state, isLoading: true};
        case actionTypes.error:
            return {...state, error: action.payload, isLoading: false};
        case actionTypes.fetchPost:
            return {...state, posts: action.payload, isLoading: false, error: null};
        case actionTypes.addPost:
            return {...state, posts: [action.payload, ...state.posts], isLoading: false, error: null};
        case actionTypes.editPost:
            return {
                ...state,
                isLoading: false,
                error: null,
                posts: state.posts.map((post)=>{
                 if(post.id == action.payload){
                    return action.payload;
                 }
                 return post;
            }),
        };
        case actionTypes.deletePost:
            return {
                ...state,
                posts: state.posts.filter(post => post.id != action.payload),
            }
        default:
            return state;
    }
}