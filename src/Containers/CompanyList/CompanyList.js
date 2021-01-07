import React, { Component } from 'react';
//import CompanyCard from '../../Components/CompanyCard/CompanyCard';
import { connect } from 'react-redux'
import Company from '../../Components/Company/Company';
import classes from './CompanyList.module.css'



class CompanyList extends Component
{
    
    onApplyHandler = (index)=>
    {
       
        console.log('Applied to '+ this.state.companies[index].name + ' ')
    }

    render()
    {
        let companies = this.props.companies.map( (company,index) =>{
            let dateObj = new Date(company.date);
           let month = dateObj.getUTCMonth() + 1; //months from 1-12
            let day = dateObj.getUTCDate();
            let year = dateObj.getUTCFullYear();
            
            const newdate = day + "/" + month + "/" +year ;
            console.log(company)
            return (<div className={classes.comp} key={company.name + company.jd}>
                <Company
                 Name={company.name}
                 ctc={company.ctc}
                 role={company.position}
                 date={newdate}
                clicked={()=>{console.log('Button')}}/>
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
        companies: state.comp.companies
    }
}
export default connect(mapStateToProps)(CompanyList)