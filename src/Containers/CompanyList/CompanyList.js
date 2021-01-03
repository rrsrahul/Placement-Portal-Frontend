import React, { Component } from 'react';
import CompanyCard from '../../Components/CompanyCard/CompanyCard';
import { connect } from 'react-redux'



class CompanyList extends Component
{
    
    onApplyHandler = (index)=>
    {
       
        console.log('Applied to '+ this.state.companies[index].name + ' ')
    }

    render()
    {
        let companies = this.props.companies.map( (company,index) =>{
            let date = new Date(company.date).toLocaleDateString('en-US');
            let key = company.name + company.date;
            return (<CompanyCard key = {key}
                    name={company.name}
                    date={date}
                    ctc={company.ctc}
                    clicked = {()=>{ this.onApplyHandler(index)}}
            />)
        })
        
        return (
            <div>
                Company List
                {companies}
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