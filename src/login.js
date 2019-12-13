import React from "react"
import axios from "axios";
import './login.css'
import loginimage from './assets/images/loginimage.svg'
class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {




        }
    }
    async handleFormSubmit(e) {
        const formData = new FormData();

        formData.append('data', JSON.stringify({ email: this.state.email, password: this.state.password }))
       
        axios.post("http://localhost:5000/api/login/create", { email: this.state.email, password: this.state.password }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                //on success
                this.setState({

                    userMsg: res.data


                });
            }).catch((error) => {
                //on error
                console.log(error)
                alert("There is an error in API call.");
            });
    }
    handleChange(e, field) {
        this.setState({ [field]: e.target.value })

    }
    render() {
        return (
            <div class="logincard container ">
                <form encType="multipart/for-data" onSubmit={e => { e.preventDefault(); this.handleFormSubmit(e) }} >
                <div class="logincardform">
                    <div class="logincardformheading">
                        <h1>sign in to GoDigit OKR</h1>
                        <label>please enter your credentials to proceed.</label>
                    </div>
                    <div class="login-wrapper">
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" class="form-control form-control"
                                name="email" value={this.state.email} onChange={e => this.handleChange(e, "email")} ></input>
                        </div>
                        <div class="form-group">

                            <label>password</label>

                            <input type="password" class="form-control form-control"
                                name="password" value={this.state.password} onChange={e => this.handleChange(e, "password")} ></input>


                        </div>
                        <div class="forgot-section">
                            <label>forgot password?</label>
                        </div>
                        <button type="submit" class="yellow-btn">sign in</button>
                    </div>
                </div></form>
                <div class="login-image">
                    <img src={loginimage} ></img>
                </div>
            </div>
        )
    }
}
export default login
