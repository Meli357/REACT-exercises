import React from "react";

export class Login extends React.Component{
    state={
        username:'',
        password:'',
        remember: false
    }

    handleAllInputs= (event) =>{
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked
        this.setState({
            [name]:type === 'checkbox' ? checked : value,
        })
    }

    handleResetBtn = () => {
        this.setState({
            username : '',
            password : '',
            remember : false,
        })
    }

    render(){
        return (
            <div>
                <h3>Form:</h3>
                <input name="username" value={this.state.username} onChange={this.handleAllInputs} />
                <input name="password" value={this.state.password} type="password" onChange={this.handleAllInputs} />
                <input name="remember" checked={this.state.remember} type="checkbox" onChange={this.handleAllInputs} />
                <button onClick={this.handleResetBtn}>Reset</button>
            </div>
        )
    }
}