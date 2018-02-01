import React, { Component } from 'react';
import { incrementFunction, decrementFunction } from '../Redux/action.js'
import { bindActionCreators } from  'redux';
import { connect } from 'react-redux';
import * as types from '../Redux/types.js'


class Home extends Component{

  render() {

    console.log(this.props.numObject);
    return (
      <div>
        <h1>{this.props.numObject.num}</h1>
        <button onClick={this.props.incrementFunction}>+</button>
        <button onClick={this.props.decrementFunction}>-</button>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
      numObject: state.changeNum,
   }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    incrementFunction: incrementFunction
  }, dispatch);
}




export default connect(mapStateToProps, mapDispatchToProps)(Home);
