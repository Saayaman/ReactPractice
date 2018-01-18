import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'



class Result extends Component{
componentWillMount(){

  if(!this.props.location.data) {
    this.props.history.push('/')
  }

}

render() {
  return (
    <div>
      {this.props.location.data ?
        this.props.location.data.data.map(j => {
          return <div key={j.id}>{j.body}</div>
        }) :
        <div />
      }

    </div>
  );
}

}


export default withRouter(Result)
