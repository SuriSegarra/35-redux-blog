import { postBlog } from './postActions';

describe('post actions', () => {

    it('post a blog', () => {
        const blogPost = postBlog('test title', 'test body');

        expect(blogPost).toEqual({
            type: 'POST',
            payload: {
                title: 'test title',
                body: 'test body'
            }
        });
    });
});
