import React, { Component } from 'react';
import Input from '../../../Components/UI/Input/Input';
//import Spinner from '../../../Components/UI/Spinner/Spinner'
import Button from '../../../Components/UI/Button/Button'
import classes from './UserData.module.css'
import UserAvatar from '../../../Components/UI/Avatar/UserAvatar';
import axios from 'axios';
import {connect} from 'react-redux'
//import {connect} from 'react-redux';
//import * as actions from '../../../store/actions/index';


class UserData extends Component {

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
            usn:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'USN'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
           gender:{
                elementType:'select',
                elementConfig:{
                    options:[
                        {value:'male',displayValue:'Male'},
                        {value:'female',displayValue:'Female'},
                        {value:'notDisclosed',displayValue:'Prefer Not To Say'}
                    ]
                },
                value:'Male',
                valid:true
            },
            dob:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Date of Birth'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
            tenthMarks:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Tenth Percentage'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
            twelfthMarks:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'12th Percentage'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
            diplomaPercentage:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Diploma Percentage(none if 12th)'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
            branch:{
                elementType:'select',
                elementConfig:{
                    options:[
                        {value:'ISE',displayValue:'Information Science'},
                        {value:'CSE',displayValue:'Computer Science'},
                        {value:'EEE',displayValue:'Electrical and Electronics'}
                    ]
                },
                value:'Male',
                valid:true
            },
           semester:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Semester'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
            cgpa:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'B.E cgpa'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
           backlogs:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Number of Active Backlogs'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
           backlogsCleared:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Number of Backlogs Cleared'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
            address:{
                elementType:'textarea',
                elementConfig:{
                    type:'text',
                    placeholder:'Permanent Address'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
           phoneNo:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Phone Number'
                },
                value:'',
                validation:
                {
                    required:true,
                },
                valid:false,
                touched:false
            },
            

            

        },
               formIsValid:false,
               error:null
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

        const userData = {
            name:this.state.controls.name.value,
              cgpa:this.state.controls.cgpa.value,
              branch:this.state.controls.branch.value,
              address:this.state.controls.address.value,
              phone:this.state.controls.phoneNo.value,
              tenthMarks:this.state.controls.tenthMarks.value,
              twelfthMarks:this.state.controls.twelfthMarks.value,
              dob:this.state.controls.dob.value,
              gender:this.state.controls.gender.value,
              diplomaPercentage:this.state.controls.diplomaPercentage.value,
              semester:this.state.controls.semester.value

        }

        axios.post('http://localhost:8080/students/'+this.props.userId,userData)
        .then( res =>
        {
           console.log(res.data);
            this.props.history.replace('/')

        })
        .catch(err =>{
            console.log(err)
        })

         /*axios.get('http://localhost:8080/students//'+this.props.userId)
        .then( res =>
        {
           console.log(res.data);
           // this.props.history.replace('/')

        })
        .catch(err =>{
            console.log(err)
        })*/

        
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
            <div className={classes.Auth} >
                <form onSubmit={(event)=>{this.submitHandler(event)}}>
                   <div style={{display: "flex", justifyContent:"center",alignItems:"center"}}> 
                    <UserAvatar  size="84" name="Rahul R S"/> 
                   </div>
                {form}
                <Button btnType='Success' className="btn btn-dark btn-lg btn-block" disabled={!this.state.formIsValid} > Submit</Button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = state =>
{
    return {
        userId:state.auth.userId

    }
}

/*const mapDispatchToProps = dispatch=>
{
    return {
        onAuth: (email,password,login) =>{ dispatch(actions.auth(email,password,login))}

    }
}*/
export  default connect(mapStateToProps)(UserData);