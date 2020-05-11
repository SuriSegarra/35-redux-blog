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

    it('gets a post by index', () => {
        const state = [
    {
        title: 'test post title 1',
        body: 'test body 1'
      },
      {
        title: 'test post title 2',
        body: 'test body 2'
      },
      {
        title: 'test post title 3',
        body: 'test body 3'
      },
      {
        title: 'test post title 4',
        body: 'test body 4'
        }
      ];

      const post = getPostByIndex(state, 2);

      expect(post).toEqual({
        title: 'test post title 3',
        body: 'test body 3'
      });
    });
});
