import React, {Component} from 'react';

class App2 extends Component {

  render() {
    return (
      <div>
        {/* send data dynamically */}
        {this.props.title}
      </div>
    )
  }

}

class App3 extends Component{
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}


function App5(props){
  return(<div>{props.phonenumber}</div>)
}

// 上と同じ
const App6 = (props) => {
  return(<div>{ props.boolean ? "ali" : "ayako"}</div>)
}

class App7 extends Component{
  render() {
    return (
      <div> {this.props.array.map(jj => <div key={jj}>{jj}</div>)}</div>
    );
  }
}


//take away 'default' when you want to export more than 1 class
export {App2, App3, App5, App6, App7}
