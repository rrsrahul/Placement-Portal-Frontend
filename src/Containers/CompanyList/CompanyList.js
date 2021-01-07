import React, { Component } from 'react';
//import CompanyCard from '../../Components/CompanyCard/CompanyCard';
import { connect } from 'react-redux'
import Company from '../../Components/Company/Company';
import classes from './CompanyList.module.css'
import axios from 'axios'



class CompanyList extends Component
{
    
    onApplyHandler = (company)=>
    {
       
        const applyData ={
             compName: company.name,
            position: company.position,
            id:this.props.userId
        }

        axios.post('http://localhost:8080/apply',applyData)
        .then(res =>
            {
                console.log(res.data)
            })
            .catch(err=>
                {
                    console.log(err)
                }
                
            )

        
    }

    onLearnMoreHandler = (company)=>
    {
        
    }

    render()
    {
        let companies = this.props.companies.map( (company,index) =>{
            let dateObj = new Date(company.date);
           let month = dateObj.getUTCMonth() + 1; //months from 1-12
            let day = dateObj.getUTCDate();
            let year = dateObj.getUTCFullYear();
            
            const newdate = day + "/" + month + "/" +year ;
            return (<div className={classes.comp} key={company.name + company.jd}>
                <Company
                 Name={company.name}
                 ctc={company.ctc}
                 role={company.position}
                 date={newdate}
                 clicked={()=>{this.onApplyHandler(company)}}
                 learnMore ={(company)=>{this.onLearnMoreHandler(company)}}
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
        userId: state.auth.userId
    }
}
export default connect(mapStateToProps)(CompanyList)