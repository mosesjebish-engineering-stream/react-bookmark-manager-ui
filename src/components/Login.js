import React, {Component} from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";


export default class Login extends Component{
    constructor(props) {
        super(props);
        let loggedIn = false
        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
        e.preventDefault()
        const{username,password} = this.state
        //login Magic
    }

    render() {
        return(
            <div>
        <form onSubmit={this.submitForm}>
            <div>
                <div>
                    <div>
                        <InputLabel htmlFor="application-name">Login Id</InputLabel>
                        <Input id="application-name" type="text" aria-describedby="my-helper-text" value={this.state.username} onChange={this.onChange}/>
                        <FormHelperText id="my-helper-text">Enter your id.</FormHelperText>
                    </div>
                    <div>
                        <InputLabel htmlFor="application-url">Password</InputLabel>
                        <Input id="short-url" type="password" aria-describedby="my-helper-text" value={this.state.password} onChange={this.onChange} />
                        <FormHelperText id="my-helper-text">Enter your password.</FormHelperText>
                    </div>
                    <button
                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                        onClick={this.handleSubmit}
                    >
                        Save Changes
                    </button>

                </div>


            </div>
        </form>
            </div>
        )
    }

}