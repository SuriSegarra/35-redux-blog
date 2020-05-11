import { postBlog, deletePost } from '../actions/postActions';

const initialState = [];

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case postBlog: 
        return [...state, action.payload];
        case deletePost:
            return state.filter((post, i) => i !== action.payload);
            default:
                return state;
    }
}