import React, { Component } from 'react';
import { incrementFunction } from '../Redux/action.js'
import {connect } from 'react-redux';
import * as types from '../Redux/types.js'


class Home extends Component{

  increment = () => {
    const { dispatch, numObject } = this.props;
    dispatch({
      type: types.INCREMENT,
      pay: numObject.num + 1
    })
  }

  decrement = () => {
    const { dispatch, numObject } = this.props;
    dispatch({
      type: types.DECREMENT,
      pay: numObject.num - 1
    })
  }


  render() {

    console.log(this.props.numObject);
    return (
      <div>
        <h1>{this.props.numObject.num}</h1>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.decrement()}>-</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
      numObject: state.changeNum,
   }
}


export default connect(mapStateToProps)(Home)
