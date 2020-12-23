import React, { Component } from 'react';
import Input from '../../Components/UI/Input/Input';
import Spinner from '../../Components/UI/Spinner/Spinner'
import Button from '../../Components/UI/Button/Button'
import classes from './Auth.module.css'

class Auth extends Component {

    state={
        controls:{
                email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
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
                    type:'password',
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
            }
        },
        isSignUp: true
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
        console.log('Form Submitted')
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
                return (
                    <Input
                    key={formElement.id}
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

        let errorMessage = null;

        return (
            <div className={classes.Auth}>
                {errorMessage}
                <form onSubmit={(event)=>{this.submitHandler(event)}}>
                {form}
                <Button btnType='Success'> Submit</Button>
                </form>

            </div>
        )
    }
}

export  default Auth;
