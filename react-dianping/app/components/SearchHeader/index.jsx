import React, { Component } from 'react'

import SearchInput from '../../components/SearchInput'
import './style.less'
class SearchHeader extends Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <div id="search-header" className="clear-fix">
                <div className="search-header-left float-left">
                    <i onClick = {this.backHandle.bind(this)} className="icon-chevron-left"></i>                    
                </div>
                
                <div className="search-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput keyword={this.props.keyword} value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)} />
                    </div>
                </div>
            </div>

        )
    }
    backHandle() {
        window.history.back()
    }
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default SearchHeader