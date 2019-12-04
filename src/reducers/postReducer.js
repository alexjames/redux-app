import { FETCH_POSTS, MODIFY_POSTS } from '../actions/types';

const initialState = {
    items: [],
    new_item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            console.log('reducer')
            return {
                ...state,
                items: action.payload
            }

        case MODIFY_POSTS:

        default:
            return state;
    }
}