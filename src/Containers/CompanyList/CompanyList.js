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
        


    }

    onDeleteHandler = (company)=>{
        //console.log('ONDELETEHANDLER')
            this.props.onCompanyDelete(company)
    }

    render()
    {
        let errorMessage = null

        if(this.props.error)
        {
            errorMessage = (<div className={classes.error}>{this.props.error.data.message}</div>)
        }
        let companies = this.props.companies.map( (company,index) =>{
            let dateObj = new Date(company.date);
           let month = dateObj.getUTCMonth() + 1; //months from 1-12
            let day = dateObj.getUTCDate();
            let year = dateObj.getUTCFullYear();
            let isApplied=false;
            if(this.props.applied!==null)
            {
               this.props.applied.forEach(element => {
                   if(element.name === company.name && element.position === company.position)
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
                <div style={{marginLeft: "10%",maxWidth: "1000px", display: "flex", flexDirection: "row"}}>
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
                    <label style={{paddingTop: "30px",marginLeft:"100px", marginRight: "10px", fontSize:20}}>Search</label>
                    <Input
                        elementType={'input'} 
                        elementConfig={{
                            type:'',
                            placeholder:''
                        }} 
                        changed={ (event)=> { this.inputChangedHandler(event)} }
                     />
                </div>
                {errorMessage}
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
        applied: state.apply.applied,
        error:state.apply.err
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