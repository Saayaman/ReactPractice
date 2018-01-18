import React, {Component} from 'react'
import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/posts"

class ReadApi extends Component {

  state = {
    data: []
  }

  fetchdata() {

    axios.get(url)
    .then(response => {

      this.setState({data: response.data})
    })
    .catch(error => {
      console.log(error);
    });

  }

  render() {
    return (<div>


      <div>{this.state.data.map(item => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
            <p>{item.body}</p>
            </div>
          )
        })}</div>
      <button onClick={() => this.fetchdata()}>Fetch Data</button>

    </div>);
  }

}

export default ReadApi
