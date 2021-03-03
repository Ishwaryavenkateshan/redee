import React, { Component } from 'react';
import { connect } from 'react-redux';
import {userGet,userGetFetch} from '../redux/actions/login.actions'


export class Login extends Component {
    constructor(props){
        super(props);
        
        this.state = {
          username : ''
        //   password : ''
        }
        
        //this.updateInput = this.updateInput.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        }
        
      updateInput(event){
        this.setState({
            username : event.target.value,
        })
        }
       
    
        handleSubmit=()=>{
          console.log(this.props.persons);
         this.props.userGet(this.state.username)
          this.props.userGetFetch(this.state.username)
        //   this.props.userGet(this.state.password)
          }


      render() {
        console.log(this.props);
        return (
          <div>
            {/* <h1>{this.props.geod.title || 'Hello World!'}</h1> */}
            <input type='text' name='name' value = {this.state.username} onChange={(event)=>{this.updateInput(event)}} />
            {/* <input type='text' name='name' value = {this.state.password} onChange={(event)=>{this.updateInputse(event)}} /> */}
            
              <button
                onClick={()=>this.handleSubmit()}
              >
                Click Me!
              </button>
              <div>{this.props.geod.username}</div>
              {/* <div>{this.props.geod.password}</div> */}
          </div>
        );
      }
    }
    const mapStateToProps = state => ({
        geod: state.geod,
      });
      
      const mapDispatchToProps = {
        userGet,
        userGetFetch
      
      };
      
      const AppContainer = connect(
        mapStateToProps,
        mapDispatchToProps
      )(Login);

export default AppContainer;
// export default Login;
