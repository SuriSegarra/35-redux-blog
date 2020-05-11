export const getPosts = state => state;

export const getPostByIndex = (state, i) => {
    const foundIndex = getPosts(state).findIndex(post => post === state[i]);
    return state[foundIndex];
};