import { postBlog, deletePost } from './postActions';

describe('post actions', () => {

    it('post a blog', () => {
        const actions = postBlog('test title', 'test body');

        expect(actions).toEqual({
            type: 'POST',
            payload: {
                title: 'test title',
                body: 'test body'
            }
        });
    });
    
    it('deletes a blog post', () => {
        const actions = deletePost('test deleted post');

        expect(actions).toEqual({
            type: 'DELETE',
            payload: 'test deleted post'
        })
    })
});
