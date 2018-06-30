// import React from 'react';
// import ReactDom from 'react-dom';
// import { Provider } from 'react-redux';
// // createStore(reducer, [initialState])
// // applyMiddleware(...middlewares)
// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
//
// import App from './App';
// import rootReducer from './reducers';
//
//
// import 'antd/dist/antd.css';
//
//
//
// function configureStore(preloadedState) {
//     const store = createStore(
//         rootReducer,
//         preloadedState,
//         applyMiddleware(thunkMiddleware, createLogger())
//     )
//
//     if (module.hot) {
//         // Enable Webpack hot module replacement for reducers
//         module.hot.accept('./reducers', () => {
//             const nextRootReducer = require('./reducers').default
//             store.replaceReducer(nextRootReducer)
//         })
//     }
//
//     return store
// }
//
// const store = configureStore();
//
// // 使组件层级中的 connect() 方法都能够获得 Redux store
// ReactDom.render(<Provider store={store}>
//     <App />
// </Provider>, document.getElementById('root'));





/********************************************************/

import { createStore } from 'redux';
import React from 'react';
import ReactDom from 'react-dom';
import { Button  } from 'antd';
import 'antd/dist/antd.css';
import './index.less';
/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */

 function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
// 维持应用的 state；
// 提供 getState() 方法获取 state；
// 提供 dispatch(action) 方法更新 state；
// 通过 subscribe(listener) 注册监听器;
// 通过 subscribe(listener) 返回的函数注销监听器。
var store = createStore(counter);
// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() =>{
    console.log('count', store.getState());
  }
);

var App = React.createClass({
  getInitialState:function(){
    return {
      count: 0
    }
  },
  handleAdd: function(){
    // action
    store.dispatch({ type: 'INCREMENT' });
    this.setState({count: store.getState()})
  },
  render: function() {
    return (
      <div className="wrap">
        <div>计数器：<span>{this.state.count}</span></div>
        <Button type="primary" onClick={this.handleAdd}>+1</Button>
      </div>
    );
  }
});

ReactDom.render(<App/>, document.getElementById('root'));

/********************************************************/
