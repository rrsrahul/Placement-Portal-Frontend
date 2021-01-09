import React, { Component } from 'react';
//import CompanyCard from '../../Components/CompanyCard/CompanyCard';
import { connect } from 'react-redux'
import Company from '../../Components/Company/Company';
import classes from './CompanyList.module.css'
//import Logo from '../../Components/Logo/Logo'

import * as actions from '../../store/actions/index';


class CompanyList extends Component
{

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
                 isWithdraw={()=>{ this.onWithdrawHandler(company) }}
                 learnMore ={()=>{this.onLearnMoreHandler(company)}}
                />
            </div>)
            
        })
        
        return (
            <div >

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
        onWithdraw: (data)=>{dispatch(actions.onWithdraw(data))}
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(CompanyList)