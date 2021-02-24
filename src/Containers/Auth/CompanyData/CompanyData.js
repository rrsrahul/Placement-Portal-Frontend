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
                    type:'Company Name',
                    placeholder:''
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false,
                errorMessage:'Name is required'
            },
            cutoff:{
                elementType:'input',
                elementConfig:{
                    type:'Eligibility Criteria(CGPA)',
                    placeholder:''
                },
                value:'',
                validation:
                {
                    required:true,
                    number: true
                },
                valid:false,
                touched:false,
                errorMessage:'Cutoff has to be number'
            },
            ctc: {
                elementType:'input',
                elementConfig:{
                    type:'CTC for Full Time Hiring',
                    placeholder:''
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false,
                errorMessage:'Enter a valid CTC value'

            },
            internship:{
                elementType:'input',
                elementConfig:{
                    type:'Stipend for Internship',
                    placeholder:''
                },
                value:'',
                validation:
                {
                    required:false,
                },
                valid:false,
                touched:false,
                errorMessage:'Please enter a valid value'
            },
            position:{
                elementType:'input',
                elementConfig:{
                    type:'The position for hiring students',
                    placeholder:''
                },
                value:'',
                validation:
                {
                    required:false,
                },
                valid:false,
                touched:false,
                errorMessage:'Please enter a valid value'
            },
            date:{
                elementType:'input',
                elementConfig:{
                    type:'Date of Placement Test',
                    placeholder:'DD/MM/YYYY'
                },
                value:'',
                validation:
                {
                    required:true,
                    date:true
                },
                valid:false,
                touched:false,
                errorMessage:'Please Enter a Valid Date in DD/MM/YYYY format'
            },
            jobLocation:{
                elementType:'input',
                elementConfig:{
                    type:'Job Location',
                    placeholder:''
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false,
                errorMessage:'Error'
            },
            jobDescription:{
                elementType:'input',
                elementConfig:{
                    type:'Job Description',
                    placeholder:''
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false,
                errorMessage:'Enter a valid Job Description'
            },
            additionalInfo:{
                elementType:'textarea',
                elementConfig:{
                    type:'Additional Information',
                    placeholder:''
                },
                value:'',
                validation:
                {
                    required:false,
                },
                valid:false,
                touched:false,
                errorMessage:'Error'
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
            if(rules.number)
            {
                if(parseFloat(value)>0 && parseFloat(value)<=9.5)
                {
                    isValid = true
                }
                else
                {
                    isValid=false;
                }
            }
            if(rules.date)
            {

                let date = value.split('/');
                //console.log(date,date.length)
                if(date.length!==3)
                {
                    isValid=false;
                }
                else
                {
                    let ans =new Date(date[2],date[1]-1,date[0]);
                    //console.log(ans)
                    if(isNaN(ans))
                    {
                        isValid=false
                    }
                    else
                    {
                        if(Date.now()>ans)
                        {
                            isValid=false
                        }else
                        {
                            isValid=true;
                        }
                    }
                }
        
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

        let date = (this.state.controls.date.value).split('/');
        let dateString = date[2]+ '-' + date[1] + '-'+date[0]
        //console.log(dateString)

        const compData = {
            name:this.state.controls.name.value,
            eligibility:this.state.controls.cutoff.value,
            position:this.state.controls.position.value,
            ctc:this.state.controls.ctc.value,
            date:dateString,
            jd:this.state.controls.jobDescription.value,
            internship:this.state.controls.internship.value,
            jobLocation:this.state.controls.jobLocation.value,
            additionalInformation:this.state.controls.additionalInfo.value
        }

        axios.post('https://placement-potal.herokuapp.com/companies',compData)
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
                    label={formElement.config.elementConfig.type}
                    invalid = {!formElement.config.valid}
                    shouldValidate = {formElement.config.validation}
                    touched={formElement.config.touched}
                    errorMessage = {formElement.config.errorMessage}
                    changed={ (event)=> { this.inputChangedHandler(event,formElement.id) } }
                     />
                     
                )
            })

        return (
            <div className={classes.Auth}>
                <form onSubmit={(event)=>{this.submitHandler(event)}}>
                {form}
                <Button btnType='Success' className="btn btn-dark btn-lg btn-block" disabled={!this.state.formIsValid} > Submit</Button>
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