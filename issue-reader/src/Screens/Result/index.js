import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

class Result extends Component{




componentWillMount(){
  if(!this.props.location.data) {
    this.props.history.push('/')
  }

}

render() {

  const {data} = this.props.location.data

  return (
    <div>
      {
        data.map(j => {
          return <div key={j.id}>{j.body}</div>
        })
      }

    </div>
  );
}

}

Result.propTypes = {
  data: PropTypes.object.isRequired
}

Result.defaultProps = {
  data: {}
}


export default withRouter(Result)
