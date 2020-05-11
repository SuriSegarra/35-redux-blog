import { getPosts, getPostByIndex } from './postSelectors';

describe('posts selectors', () => {
    it('gets a list of posts', () => {
        const state = [
            {
                title: 'test post title',
                body: 'test body'
            }
        ];


        const posts = getPosts(state);

        expect(posts).toEqual([
            {
                title: 'test post title',
                body: 'test body' 
            }
        ]);
    });
});
