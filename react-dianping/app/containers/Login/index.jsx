import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import LoginCom from '../../components/LoginCom'
import './style.less'
class Login extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            checking: true,
            name: '',
            password: ''
        }        
    }
    render(){
        return(
            <div>
                {
                    this.state.checking
                    ?<div>{/*waiting*/}</div>
                    :<LoginCom handleLogin = {this.handleLogin.bind(this)} />
                }           
            </div>
        )
    }
    handleLogin(username){
        console.log(username,111111)
        //保存用户名
        const actions = this.props.userInfoAction
        let userinfo = this.props.userinfo
        userinfo.username = username
        actions.update(userinfo)
        //跳转连接
        const params = this.props.params
        const router = params.router
        if(router){
            //条转到指定的页面
            hashHistory.push(router)
        }else{
            //跳转到默认界面
            this.goUserPage()
        }
    }

    componentDidMount(){
        this.doCheck()
    }
    doCheck(){
        const userinfo = this.props.userinfo
        if(userinfo.username){
            this.goUserPage()
        }else{
            this.setState({checking:false})
        }
    }
    goUserPage(){
        hashHistory.push('/User')
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
)(Login)
