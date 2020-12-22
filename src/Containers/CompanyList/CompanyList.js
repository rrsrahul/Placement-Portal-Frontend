import React, { Component } from 'react';
import CompanyCard from '../../Components/CompanyCard/CompanyCard';
import axiosI from 'axios';

const axios = axiosI.create({
    baseURL:'http://localhost:8080/'
})



class CompanyList extends Component
{
    state={
        companies:[]
    }

    componentDidMount()
    {
        axios.get('/companies')
        .then(res=>
            {
                console.log(res.data)
                this.setState({companies:res.data})
            } )
        .catch(err=>
                {
                    console.log(err)
                })
    }
    
    render()
    {
        let companies = this.state.companies.map( company =>{
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
    
}

export default CompanyList