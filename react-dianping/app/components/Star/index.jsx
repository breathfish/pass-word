import React from 'react'

import './style.less'
class Star extends React.Component{
    constructor(props, context){
        super(props, context)
        this.state = {

        }
    }

    render(){
        let star = this.props.star || 0
        return(
            <span className="star-container">
                {
                    [1, 2, 3, 4, 5].map((item, index)=>{
                        const lightClass= star >=item ? ' light':''
                        return <i key={index} className={'icon-star'+lightClass}></i>
                    })
                }
            </span>
        )
    }
}
export default Star