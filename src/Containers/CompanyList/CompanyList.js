import React, { Component } from 'react';
//import CompanyCard from '../../Components/CompanyCard/CompanyCard';
import { connect } from 'react-redux'
import Company from '../../Components/Company/Company';
import classes from './CompanyList.module.css'
import Input from '../../Components/UI/Input/Input';
//import Logo from '../../Components/Logo/Logo'
import * as actions from '../../store/actions/index';


class CompanyList extends Component
{

    state = {
        value:'date'
    }
    onApplyHandler = (company)=>
    {
       
        const applyData ={
             compName: company.name,
            position: company.position,
            id:this.props.userId
        }
        this.props.onApply(applyData);
        
    }

    onLearnMoreHandler = (company)=>
    {
        this.props.history.push('/company?id='+company._id)
    }

    onWithdrawHandler = (company)=>
    {
        console.log('WithdrawHandler')
        console.log(company.name)
        const applyData ={
            compName: company.name,
           position: company.position,
           id:this.props.userId
       }
            this.props.onWithdraw(applyData)
    }


    inputChangedHandler = (event)=>{

        this.props.onInputChanged(event.target.value)
        this.setState({value:event.target.value})
        //console.log('Hello')


    }

    onDeleteHandler = (company)=>{
        console.log('ONDELETEHANDLER')
            this.props.onCompanyDelete(company)
    }

    render()
    {

        let companies = this.props.companies.map( (company,index) =>{
            let dateObj = new Date(company.date);
           let month = dateObj.getUTCMonth() + 1; //months from 1-12
            let day = dateObj.getUTCDate();
            let year = dateObj.getUTCFullYear();
            let isApplied=false;
            if(this.props.applied!==null)
            {
               this.props.applied.forEach(element => {
                   if(element.name === company.name)
                   {
                       isApplied=true
                   }
                   
               });            
            }
            
            const newdate = day + "/" + month + "/" +year ;
            return (<div className={classes.comp} key={company.name + company.jd}>
                <Company
                 Name={company.name}
                 ctc={company.ctc}
                 role={company.position}
                 date={newdate}
                 clicked={()=>{this.onApplyHandler(company)}}
                 isApplied={isApplied}
                 isDelete={()=>{this.onDeleteHandler(company)}}
                 isWithdraw={()=>{ this.onWithdrawHandler(company) }}
                 learnMore ={()=>{this.onLearnMoreHandler(company)}}
                />
            </div>)
            
        })

        return (
            <div >            
                <div style={{marginLeft: "10%",maxWidth: "350px", display: "flex", flexDirection: "row"}}>
                    <label style={{paddingTop: "30px", marginRight: "10px", fontSize:20}}>Sort by  </label>
                    <Input
                        elementType={'select'} 
                        elementConfig={{options:[
                            {value:'date',displayValue:'Date'},
                            {value:'eligibility',displayValue:'Eligibility'},
                            {value:'ctc',displayValue:'CTC'},
                        ]}} 
                        value={this.state.value}
                        changed={ (event)=> { this.inputChangedHandler(event)} }
                     />
                </div>
                <div className={classes.row}>
                    {companies}
                </div>                
            </div>
        )
    }
    
}



const mapStateToProps = state =>
{
    return {
        companies: state.comp.companies,
        userId: state.auth.userId,
        applied: state.apply.applied
    }
}

const mapDispatchToProps = dispatch=>
{
    return{
        onApply: (data)=>{ dispatch(actions.onApply(data))},
        onWithdraw: (data)=>{dispatch(actions.onWithdraw(data))},
        onInputChanged: (value) =>{dispatch(actions.sortCompanies(value))},
        onCompanyDelete: (value)=>{dispatch(actions.companyDelete(value))}
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(CompanyList)