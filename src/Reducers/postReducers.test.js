import { postBlog, deletePost } from '../actions/postActions';
import reducer from './postReducers';

describe('posts reducer', () => {
    it('handles POST action', () => {
        const state = [];
        const action = postBlog(
             'test title',
             'test post body'
        );

        const newState = reducer(state, action);

        expect(newState).toEqual([
            {
                title: 'test title',
                body: 'test post body'
            }
        ]);
    });
    it('handles the DELETE action', () => {
        const state = [
            {
                title: 'test title',
                body: 'test post body'
            }
        ];

        const action = deletePost(0);
        const newState = reducer(state, action);
        expect(newState).toEqual([]);
    });
});