import React, { Component } from 'react';
import Input from '../../Components/UI/Input/Input';
import Spinner from '../../Components/UI/Spinner/Spinner'
import Button from '../../Components/UI/Button/Button'
import classes from './Auth.module.css'
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Auth extends Component {

    state={
        controls:{
                email:{
                elementType:'input',
                elementConfig:{
                    type:'Email',
                    placeholder:'Email Address'
                },
                value:'',
                validation:
                {
                    required:true,
                    isEmail:true
                },
                valid:false,
                touched:false
            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'Password',
                    placeholder:'Password'
                },
                value:'',
                validation:
                {
                    required:true,
                    minLength:7
                },
                valid:false,
                touched:false
            },
        confirmPassword:{
            elementType:'input',
            elementConfig:{
                type:'Confrim Password',
                placeholder:'Confrim Password'
            },
            value:'',
            validation:
            {
                required:true,
                minLength:7
            },
            valid:false,
            touched:false
        }
    },
        Login: true
    }

    checkValidity(value,rules)
    {
        if(!rules)
        {
            return true;
        }
        let isValid = true;
        
            if(rules.required)
            {
                isValid = value.trim() !=='' && isValid;
            }
            if(rules.minLength)
            {
                isValid = value.length>= rules.minLength && isValid;
            }
            if(rules.maxLength)
            {
                isValid = value.length<=rules.maxLength && isValid;
            }
            if(rules.isEmail)
            {
                const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                isValid = pattern.test(value) && isValid;
            }
      
        return isValid
    }


    inputChangedHandler = (event,controlName) =>
    {
        const updatedControls = {
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                value:event.target.value,
                valid: this.checkValidity(event.target.value,this.state.controls[controlName].validation),
                touched:true
            }
        }

        this.setState({
            controls:updatedControls
        })
    }

    submitHandler = (event)=>
    {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.Login,this.props.history)
        console.log('Form Submitted')
    }

    switchLoginHandler = ()=>
    {
        this.setState(prevState=>{
            return ({Login:!prevState.Login})
        })
    }

    render()
    {
        const formElementsArray = [];

        for(let key in this.state.controls)
        {
            formElementsArray.push({
                id:key,
                config:this.state.controls[key]
            })

        }

        let form = formElementsArray.map(formElement =>
            {
                if(formElement.id==='confirmPassword')
                {
                    return null
                }
                return (
                    <Input
                    key={formElement.id}
                    label={formElement.config.elementConfig.type}
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig} 
                    value={formElement.config.value}
                    invalid = {!formElement.config.valid}
                    shouldValidate = {formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={ (event)=> { this.inputChangedHandler(event,formElement.id) } }
                     />
                     
                )
            })
        if(this.props.loading)
        {
            form=<Spinner/>
        }

        if(!this.state.Login)
        {
            form = formElementsArray.map(formElement =>
                {
                    
                    return (
                        <Input
                        key={formElement.id}
                        label={formElement.config.elementConfig.type}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig} 
                        value={formElement.config.value}
                        invalid = {!formElement.config.valid}
                        shouldValidate = {formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={ (event)=> { this.inputChangedHandler(event,formElement.id) } }
                         />
                         
                    )
                })
        }
        let errorMessage = null;

        if(this.props.loading)
        {
            form = <Spinner/>
        }

        return (
            <div className={classes.Auth}>
                <h3>{this.state.Login?'Log in':'Sign up'}</h3>
                {errorMessage}
                <form onSubmit={(event)=>{this.submitHandler(event)}}>
                {form}
                <Button btnType='Success' className="btn btn-dark btn-lg btn-block">{this.state.Login?'Sign in':'Sign up'}</Button>
                </form>
                {this.state.Login && <Button btnType='Danger' className="btn btn-dark btn-lg btn-block" clicked={this.switchLoginHandler}>Create an Account</Button>}
                {!this.state.Login && <p onClick={this.switchLoginHandler} className="forgot-password text-right">
                    Already registered <span style={{color:'blue',cursor: 'pointer'}}>log in?</span>
                </p>}

            </div>
        )
    }
}

const mapStateToProps = state =>
{
    return {
        loading:state.auth.loading,

    }
}

const mapDispatchToProps = dispatch=>
{
    return {
        onAuth: (email,password,login,history) =>{ dispatch(actions.auth(email,password,login,history))}

    }
}
export  default connect(mapStateToProps,mapDispatchToProps)(Auth);
