import React from "react";

export class UncontrolledLogin extends React.Component{
    
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
    }
    
    handleFormSubmit = (event) =>{
        event.preventDefault()
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked
        console.log({
            username,
            password,
            remember
        })
    }

    componentDidMount() {
        this.nameInput.current.focus();
      }
    // componentDidMount(){
    //     this.nameInput.focus(); 
    // }
    
    render(){
        return(
            <div>
                <h3>Uncontrolled Form:</h3>
                <form  onSubmit={this.handleFormSubmit}>
                {/* <input name="username" ref={(input) => { this.nameInput = input; }} /> */}
                {/* <input name="username" autoFocus /> */}
                <input name="username" ref={this.nameInput} />
                <input name="password" type="password"/>
                <input name="remember" type="checkbox"/>
                <button type="submit">Login</button>
                <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}