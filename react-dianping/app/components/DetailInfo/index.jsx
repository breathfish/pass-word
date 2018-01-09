import React,{Component} from 'react'
import Star from '../Star'
class DetailInfo extends Component{
    constructor(props,context){
        super(props, context)

    }
    render(){
        const data = this.props.data
        console.log(11111,data)
        return(
            <div>
                <div className="detail-product">
                    <div className="detail-pic">
                        <img src={data.img} />
                    </div>
                    <div className="detail-word">
                        <h1>{data.title}</h1>
                        <p>
                            <Star star={data.star} />
                        </p>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html:data.desc}}></div>
            </div>
        )
    }
}

export default DetailInfo