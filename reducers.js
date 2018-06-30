'use strict';

import { combineReducers } from 'redux';

import { ACTION_INCREMENT, ACTION_DECREMENT, addOneAction, asyncAddOneAction } from './actions';


// 拆分 Reducer
var count = function(state =  0, action = {type}){
    switch(action.type){
      case ACTION_INCREMENT: // +1
        return action.count + 1;
      default:
        return state;
    }
};



// reducer 合成
export default combineReducers({
    count,
});


// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })

// 上面的写法和下面完全等价

// export default function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }
