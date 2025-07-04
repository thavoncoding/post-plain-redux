import axios from "axios";
import { faker } from "@faker-js/faker";

export const actionTypes = {
    fetchPost: "FETCH_POST",
    addPost: "ADD_POST",
    editPost: "EDIT_POST",
    deletePost: "DELETE_POST",
    isLoading: "IS_LOADING",
    error: "ERROR"
};

export const fetchPost = () => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.isLoading })

        try{
            const response = await axios.get("http://localhost:3004/posts");

            dispatch({
            type: actionTypes.fetchPost,
            payload: response.data
            });
        }catch(error){
            dispatch({ type: actionTypes.error, payload: error});
        }     

       
    };
};

export const addPost = () => {
    return async (dispatch) => {
        const response = await axios.post("http://localhost:3004/posts",{
            title: faker.word.words({ count: { min:3, max:6 }}),
            body: faker.lorem.lines({ min: 1, max: 3}),
    });

    dispatch({
            type: actionTypes.addPost,
            payload: response.data
        });
        
    };
};

export const editPost = (id) => {
    return async (dispatch) => {
        const response = await axios.put(`http://localhost:3004/posts/${id}`, {
            title: faker.word.words({ count: { min:3, max:6 }}),
            body: faker.lorem.lines({ min: 1, max: 3}),
        });

        dispatch({
            type: actionTypes.editPost,
            payload: response.data
        });
    };
};

export const deletePost = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(`http://localhost:3004/posts/${id}`);

        dispatch({
            type: actionTypes.deletePost,
            payload: response.data
        });
    };
};