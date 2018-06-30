import React from 'react';
import ReactDom from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { addOneAction, asyncAddOneAction } from './actions';

import { Button  } from 'antd';
import './index.less';

var App = React.createClass({
  getInitialstate: function(){

  },
  componentWillMount: function(){

  },
  componentDidMount: function(){

  },
  componentWillUpdate: function(nextProps, nextState){

  },
  componentDidUpdate: function(prevProps, prevState){

  },
  componentWillUnmount: function(){

  },
  componentWillReceiveProps: function(nextProps){
    // 已加载组件收到新的参数时调用
  },
  shouldComponentUpdate: function(nextProps, nextState){
    // 组件判断是否重新渲染时调用
    console.log('nextProps', nextProps);
    if(nextProps.count >= 5 && nextProps.count <=7) return false;
    return true;
  },
  handleAdd: function(){
    this.props.dispatch(addOneAction(this.props.count))
  },
  handleAsyncAdd: function(){
    this.props.dispatch(asyncAddOneAction(this.props.count))
  },
  render: function() {
    return (
      <div className="wrap">
        <div>计数器：<span>{this.props.count}</span></div>
        <Button type="primary" onClick={this.handleAdd}>+1</Button>
        <div style={{margin: '20px'}}></div>
        <Button type="primary" onClick={this.handleAsyncAdd}>async-->+1</Button>
      </div>
    );
  }
});

function mapStateToProps(state){
    return state;
}

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// http://cn.redux.js.org/docs/react-redux/api.html
export default connect(mapStateToProps)(App);
