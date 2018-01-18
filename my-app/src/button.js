import React, {Component} from 'react'

//stateful
class Button extends Component {

  state = {
    number: 5,
    counter: 0,
  }

  addNum() {

    if (this.state.number < 8 && this.state.counter < 2) {
      this.setState({
        number: this.state.number + 1,
        counter: this.state.counter + 1
      })
    }

  }

  substractNum = () => {

    if(this.state.number > 0 ){
      this.setState({
        number: this.state.number - 1
      })

    }


  }




  render() {
    return (<div>
      <div>{this.state.number}</div>
      <button onClick={() => this.addNum()}>add</button>
    <button onClick={() => this.substractNum()}>subtract</button>

    </div>);
  }
}

export default Button
