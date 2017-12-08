import React,{Component} from 'react'

class DetailInfo extends Component{
    constructor(props,context){
        super(props, context)

    }
    render(){
        const data = this.props.data
        console.log(11111,data)
        return(
            <div dangerouslySetInnerHTML={{__html:data.desc}}></div>
        )
    }
}

export default DetailInfo