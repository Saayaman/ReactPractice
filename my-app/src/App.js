//いつも必要！
import React, {Component} from 'react';

//import from other files must be absolute path with .(dot)
//if you want to export more than 1 classes, use {}
import {App2, App3, App5, App6, App7} from './App2'
import Nav from './nav'
import './App.css'
import Button from './button'
import ReadApi from './Api'

//いつも必要2:: stateful component
class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  //must have a rendor method in stateful
  render() {
    const array = [23, 455, 124, 6446, 4]
    return (<div>
      <Nav/>
      <div style={styles.ali}>
        Hello
      </div>
       <ReadApi />

      {/* クラスとファンクションを同じように使っている */}
      <App2 title={"Practice"}/> {/* どちらでも良い <App2></App2> */}
      <App3 name={"Ali"}/>
      <App5 phonenumber={3453342455}/>
      <App6 boolean={false}/>
      <App6 boolean={true}/>

      <App7 array={array}/>

    <Button />

    </div>)
  }

}

const styles = {
  ali: {
    fontSize: 50,
    color: 'red'
  }
}

export default App
