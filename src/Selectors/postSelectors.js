export const getPosts = state => state;

export const getPostByIndex = (state, i) => {
    const getPostByIndex = getPosts(state).findIndex(post => post === state[i]);
    return state[getPostByIndex];
};