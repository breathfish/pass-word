import React from 'react'

class LoginCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            password: ''
        }
        this.handleActionName=this.handleActionName.bind(this)
        this.handleActionPassword=this.handleActionPassword.bind(this)
    }
    render(){
        console.log(this.props.handleLogin)
        return(
            <div className="wrapper">
                <form className="login" onSubmit={this.handleSubmit.bind(this)}>
                    <p><span>用户名:</span><input type="text" value={this.state.name} onChange={this.handleActionName} /></p>
                    <p><span>密码:</span><input type="password" value={this.state.password} onChange={this.handleActionPassword} /></p>
                    <button className="btn">提交</button>
                </form>
            </div>
        )
    }

    handleActionName(e){
        this.setState({name: e.target.value})
    }
    handleActionPassword(e){
        this.setState({password: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(e)
        const event = {name:this.state.name,password:this.state.password}
        this.props.handleLogin(event)
    }
} 

export default LoginCom