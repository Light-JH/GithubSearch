import React, {Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search = () => {
        //const {value} = this.keyWordElement 
        // acquire cilent input
        const {keyWordElement:{value:keyWord}} = this
        // Update App state before request sent
        this.props.updateAppState({isFirst:false, isLoading:true})
        // send network requst 
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                const users = response.data.items
                this.props.updateAppState({isLoading:false, users:users})
                console.log(users)
        },
            error => this.props.updateAppState({isLoading:false, err:error.message})
        )
    }
    render(){
        return(
            <section className="jumbotron">
                <h3 className='jumbotron-heading'>Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type='text' placeholder='Type the keyword'/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
 
}