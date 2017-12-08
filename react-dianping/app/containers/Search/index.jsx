import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <SearchHeader keyword={this.props.params.keyword}  />
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.params)
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Search
module.exports = Search