import React, { Component } from 'react'
import Search from './Component/Search'
import List from './Component/List'




export default class App extends Component {

  state = {
    users:[],
    isFirst:true,
    isLoading:false,
     err:''}
  updateAppState = (stateObj) => {
    console.log(stateObj.users)
    this.setState(stateObj)
  }
  render(){
    return(
      <div>
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}  

