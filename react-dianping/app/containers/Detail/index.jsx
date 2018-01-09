import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header'
import ListComponent from '../../components/List'
import Info from './subpage/Info'
import Comment from './subpage/Comment'
class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render() {
        const id= this.props.params.id
        return (
            <div>
                <Header title="商户详情"/>
                <Info id={id} />
                <Comment id={id} />
            </div>
        )
    }
    componentDidMount(){
        let id = this.props.params 
        console.log(id)
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Detail
module.exports = Detail