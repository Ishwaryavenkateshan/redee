import React from 'react';
import { connect } from 'react-redux';
import {userGetFetch} from '../redux/actions/login.actions';

class Logins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fields: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.email] = e.target.value;
    const emailvalue = e.target.value;
    this.setState({ email: emailvalue });
  }
  handleClick(e) {
    let fields = this.state.fields;
    fields[e.target.password] = e.target.value;
    const passwordvalue = e.target.value1;
    this.setState({ password: passwordvalue });
  }
  

  submitForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      this.setState({ fields: fields });
    }
  }

  validateForm() {
    let formIsValid = true;
    this.setState({});

    return formIsValid;
  }
  render() {
    // const user = {
    //   email: this.state.email,
    //   password: this.state.password,
    // };
    console.log("login",this.props);
    return (
        <div id="register">
            <label>Email :</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.email}</div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleClick}
            />
            <div className="errorMsg">{this.state.errors.password}</div>
            <button
              onClick={() => {
                this.props.userGetFetch()
              }}
            >
             click me
            </button>
            <div>this.props.userGetFetch()</div>
        </div>
    );
  }
}

//AppContainer.js
const mapStateToProps = (state) => ({
  get: state,
});

const mapDispatchToProps = {
  userGetFetch,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Logins);

export default AppContainer;