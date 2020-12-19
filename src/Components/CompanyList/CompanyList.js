import React from 'react';
import CompanyCard from '../CompanyCard/CompanyCard';


const companyList = (props)=>
{
    const companies = props.companies.map( company =>{
        return (<CompanyCard key = {company.name}
                name={company.name}
                date={company.date}
                ctc={company.ctc}
        />)
    })
    return (
        <div>
            {companies}
        </div>
    )
}

export default companyList