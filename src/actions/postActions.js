export const postBlog = (title, body) => ({
    type: 'POST',
    payload: {
        title, 
        body
    }
});