import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import LocalStore from '../../util/localStore'
import { CITYNAME } from '../../config/localStoreKey'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

class City extends Component {
    constructor(props,context) {
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="选择城市" />
                <CurrentCity cityName = {this.props.userinfo.cityName} />
                <CityList changeFn = {this.changeCity.bind(this)} />
            </div>
        )
    }
    componentDidMount(){
        
        console.log(CITYNAME)
    }
    changeCity(newCity){
        if(newCity == null){

        }
        console.log(newCity)
        //修改 redux
        const userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this.props.userInfoAction.update(userinfo)
        //修改localstorage
        LocalStore.setItem(CITYNAME,newCity)
        //跳转到首页
        hashHistory.push("/")
    }
    

}
function mapStateToProps(state){
    return {
        userinfo: state.userinfo
    }
}
function mapDispatchToProps(dispatch){
    return {
        userInfoAction: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}

export default connect( 
    mapStateToProps, 
    mapDispatchToProps
)(City)
