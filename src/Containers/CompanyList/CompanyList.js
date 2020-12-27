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
    
    onApplyHandler = (index)=>
    {
       
        console.log('Applied to '+ this.state.companies[index].name + ' ')
    }

    render()
    {
        let companies = this.state.companies.map( (company,index) =>{
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

export default CompanyList