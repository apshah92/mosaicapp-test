import  FETCH_NEWS from './actionTypes';

export default function(state = null, action) {
    //console.log('reducer:',action.payload);
    switch(action.type) {
        case FETCH_NEWS:
            return action.payload;
        default:
            return state;
    }
};