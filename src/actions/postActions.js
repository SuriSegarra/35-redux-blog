export const postBlog = (title, body) => ({
    type: 'POST',
    payload: {
        title, 
        body
    }
});

export const deletePost = (postBlog) => ({
    type: 'DELETE',
    payload: postBlog
});
