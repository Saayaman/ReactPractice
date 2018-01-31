import React, {Component} from 'react'
import {Input} from 'antd'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const Search = Input.Search;

const styles = {

  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    alignItems: 'center'
  },
  searchInput: {
    border: '1px solid blue',
    height: 40
  }
}

class SearchScreen extends Component {



  request(value){

    const {history} = this.props
    let array = value.split('/')
    let company = array[array.length-2]
    let repo = array[array.length-1]


    axios.get(`https://api.github.com/repos/${company}/${repo}/issues`)
      .then(function (response) {
        console.log(response.data);
        history.push({pathname: '/result', data: {data: response.data}})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {


    return (<div style={styles.container}>
      <Search size={'large'} placeholder="input search text" onSearch={value => this.request(value)} style={{
          width: 200
        }}/>
        {/* <input type="text" placeHolder="Search" style={styles.searchInput} /> */}
    </div>);
  }

}

export default withRouter(SearchScreen)
