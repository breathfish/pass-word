import React, {Component} from 'react'

import DetailInfo from '../../../components/DetailInfo'
import { getInfoData } from '../../../fetch/detail/detail'
class Info extends  Component{
    constructor(props, context){
        super(props,context)
        this.state = {
            info: false
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.info
                    ?<DetailInfo data={this.state.info} />
                    :''
                }
            </div>
        )
    }
    componentDidMount(){
        let id = this.props.id 
        console.log(id)
        let result = getInfoData(id)
        result.then( res =>{
            return res.json()
        }).then( json =>{
            console.log(json)
            this.setState({info: json})
        })
        console.log(this.state.info)
    }

}

export default Info
