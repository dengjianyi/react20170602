import ListDemo from './components/list';
import MenuDemo from './components/menu';
import ReactDOM from 'react-dom';
import React, {Component} from 'react';


import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
// React component
class Counter extends React.Component {
  render(){
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    );
  }
}
// Action:
const increaseAction = {type: 'increase'};
// Reducer:
function counter(state={count: 0}, action) {
  let count = state.count;
  switch(action.type){
    case 'increase':
      return {count: count+1};
    default:
      return state;
  }
}
// Store:
let store = createStore(counter);
// Map Redux state to component props
function mapStateToProps(state)  {
  return {
    value: state.count
  };
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  };
}
// Connected Component:
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);





window.onload=function(){
  //uI渲染列表
  ReactDOM.render(
      //<ListDemo va='Name'/>,
      <ListDemo va='Url'/>,
    document.getElementById('container')
  );
  //uI渲染菜单
  ReactDOM.render(
      <MenuDemo></MenuDemo>,
    document.getElementById('menuid')
  );

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );



}
