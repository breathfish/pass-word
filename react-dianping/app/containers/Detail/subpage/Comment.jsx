import React, {Component} from 'react'

class Comment extends Component{
    constructor(props,context){
        super(props,context)
        this.state = {

        }
    }
    render(){
        return (
            <div>{this.props.id}</div>
        )
    }

}

export default Comment

