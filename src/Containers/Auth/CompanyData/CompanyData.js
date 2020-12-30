import React, { Component } from 'react';
import Input from '../../../Components/UI/Input/Input';
//import Spinner from '../../../Components/UI/Spinner/Spinner'
import Button from '../../../Components/UI/Button/Button'
import classes from './CompanyData.module.css'
import  axios  from "axios";
//import {connect} from 'react-redux';
//import * as actions from '../../../store/actions/index';


class CompanyData extends Component {

    state={
        controls:{
               name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Name'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
            cutoff:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Eligibility Criteria(CGPA)'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
            ctc: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'CTC for Full Time Hiring'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false

            },
            internship:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Stipend for Internship'
                },
                value:'',
                validation:
                {
                    required:false,
                },
                valid:false,
                touched:false
            },
            position:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'The position for hiring students'
                },
                value:'',
                validation:
                {
                    required:false,
                },
                valid:false,
                touched:false
            },
            date:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Date of Placement Test'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
            jobLocation:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Job Location'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
            jobDescription:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Job Description'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
            additionalInfo:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Additional Information'
                },
                value:'',
                validation:
                {
                    required:false,
                },
                valid:false,
                touched:false
            }
    },
       
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

        let formIsValid = true;

        for(let inputIdentifiers in updatedControls)
        {
            formIsValid = updatedControls[inputIdentifiers].valid && formIsValid;
        }


        this.setState({
            controls:updatedControls,
            formIsValid:formIsValid
        })
    }

    submitHandler = (event)=>
    {
        event.preventDefault();
        const compData = {
            name:this.state.controls.name.value,
            eligibility:this.state.controls.cutoff.value,
            position:this.state.controls.position.value,
            ctc:this.state.controls.ctc.value,
            date:this.state.controls.date.value,
            jd:this.state.controls.jobDescription.value,
            internship:this.state.controls.internship.value,
            jobLocation:this.state.controls.jobLocation.value,
            additionalInformation:this.state.controls.additionalInfo.value
        }

        axios.post('http://localhost:8080/companies',compData)
        .then(res =>
        {
            console.log(res.data);
            this.props.history.replace('/')

        }).catch(err =>{
            console.log(err)

        })
        
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

        return (
            <div className={classes.Auth}>
                <form onSubmit={(event)=>{this.submitHandler(event)}}>
                {form}
                <Button btnType='Success' disabled={!this.state.formIsValid} > Submit</Button>
                </form>

            </div>
        )
    }
}

/*const mapStateToProps = state =>
{
    return {
        loading:state.auth.loading

    }
}

const mapDispatchToProps = dispatch=>
{
    return {
        onAuth: (email,password,login) =>{ dispatch(actions.auth(email,password,login))}

    }
}*/
export  default CompanyData;