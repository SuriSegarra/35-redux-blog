export const getPosts = state => state;

export const getPostByIndex = (state, i) => {
    const foundByIndex = getPosts(state).findIndex(post => post === state[i]);
    return state[foundByIndex];
};