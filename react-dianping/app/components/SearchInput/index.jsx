import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import './style.less'
class SearchInput extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            value: ''
        }
    }
    render(){
        return(
            <input 
                type="text" 
                className='search-input'
                placeholder="请输入关键字"
                onChange={this.changeHandle.bind(this)} 
                value={this.state.value}
                onKeyUp ={this.keyUpHandle.bind(this)}
                 />
        )
    }
    componentDidMount(){
        this.setState({
            value: this.props.value || ''
        })
    }
    changeHandle(e){
        this.setState({value:e.target.value})
    }
    keyUpHandle(e){
        if(e.keyCode !== 13){
            return
        }
        this.props.enterHandle(this.state.value)
    }
}
export default SearchInput