import React, { Component } from "react";
import Input from "../../../Components/UI/Input/Input";
//import Spinner from '../../../Components/UI/Spinner/Spinner'
import Button from "../../../Components/UI/Button/Button";
import classes from "./UserData.module.css";
import UserAvatar from "../../../Components/UI/Avatar/UserAvatar";
import axios from "axios";
import { connect } from "react-redux";
//import {connect} from 'react-redux';
//import * as actions from '../../../store/actions/index';

class UserData extends Component {

  state = {
    controls: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "Name",
          placeholder: "Enter name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      usn: {
        elementType: "input",
        elementConfig: {
          type: "USN",
          placeholder: "Enter USN",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      gender: {
        elementType: "select",
        elementConfig: {
          type: "Gender",
          options: [
            { value: "male", displayValue: "Male" },
            { value: "female", displayValue: "Female" },
            { value: "notDisclosed", displayValue: "Prefer Not To Say" },
          ],
        },
        value: "Male",
        valid: true,
      },
      dob: {
        elementType: "input",
        elementConfig: {
          type: "Date of Birth",
          placeholder: "DD/MM/YYYY",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      tenthMarks: {
        elementType: "input",
        elementConfig: {
          type: "Tenth Percentage",
          placeholder: "%",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      twelfthMarks: {
        elementType: "input",
        elementConfig: {
          type: "12th Percentage",
          placeholder: "%",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      diplomaPercentage: {
        elementType: "input",
        elementConfig: {
          type: "Diploma Percentage",
          placeholder: "%(none if 12th)",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      branch: {
        elementType: "select",
        elementConfig: {
          type: "Department",
          options: [
            { value: "ISE", displayValue: "Information Science" },
            { value: "CSE", displayValue: "Computer Science" },
            { value: "EEE", displayValue: "Electrical and Electronics" },
            { value: "ECE", displayValue: "Electrical and Communication" },
            { value: "TCE", displayValue: "TeleCommunication" },
            { value: "CHE", displayValue: "Chemical" },
            { value: "MECH", displayValue: "Mechanical" },
          ],
        },
        value: "Male",
        valid: true,
      },
      semester: {
        elementType: "input",
        elementConfig: {
          type: "Semester",
          placeholder: "Enter Semester",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      cgpa: {
        elementType: "input",
        elementConfig: {
          type: "B.E cgpa",
          placeholder: "Enter cgpa",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      backlogs: {
        elementType: "input",
        elementConfig: {
          type: "Number of Active Backlogs",
          placeholder: "0",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      backlogsCleared: {
        elementType: "input",
        elementConfig: {
          type: "Number of Backlogs Cleared",
          placeholder: "0",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      address: {
        elementType: "textarea",
        elementConfig: {
          type: "Permanent Address",
          placeholder: "",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      phoneNo: {
        elementType: "input",
        elementConfig: {
          type: "Phone Number",
          placeholder: "",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      }
    },
               formIsValid:false,
               error:null
 }
  
   

  checkValidity(value, rules) {
    if (!rules) {
      return true;
    }
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
      const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      },
    };

    let formIsValid = true;

    for (let inputIdentifiers in updatedControls) {
      formIsValid = updatedControls[inputIdentifiers].valid && formIsValid;
    }

    this.setState({
      controls: updatedControls,
      formIsValid: formIsValid,
    });
  };

    fileChangedHandler = (event)=>
    {
        this.setState({ selectedFile: event.target.files[0] });
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
              </div>)

  }
}


const  mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  };
};

/*const mapDispatchToProps = dispatch=>
{
    return {
        onAuth: (email,password,login) =>{ dispatch(actions.auth(email,password,login))}

    }
}*/
export default connect(mapStateToProps)(UserData);
