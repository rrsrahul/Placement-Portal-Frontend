import React, { Component } from "react";
import { Chrono } from "react-chrono";
import qs from 'query-string'
import {connect} from 'react-redux';

class CompanyInfo extends Component {

  state = {
    company:{}
  }

  UNSAFE_componentWillMount()

  {
    const parsed = qs.parse(this.props.location.search)
    const id=parsed.id
    const comp = this.props.companies.find(company =>{
      return company._id===id
    })
    const newComp = {...comp}
    this.setState({company:newComp})

  }


  render() {
    let dateObj = new Date(this.state.company.date);
           let month = dateObj.getUTCMonth() + 1; //months from 1-12
            let day = dateObj.getUTCDate();
            let year = dateObj.getUTCFullYear();
    let dateString = day + "/" + month + "/" +year ;
    let itemsLeft = [
      {
        title: "Job Description",
        cardTitle: this.state.company.position,
        cardSubtitle: this.state.company.jd,
      },
      {
        title: "Job Location",
        cardTitle: this.state.company.jobLocation,
      },
      {
        title: "Cost to Company",
        cardTitle: "Full time",
        cardSubtitle: this.state.company.ctc,
      },
      {
        title: "Intenship Stipend",
        cardTitle: this.state.company.internship,
      },
    ];
    let itemsRight = [
      {
        title: "Eligibility Criteria",
        cardTitle: "CGPA",
        cardSubtitle: this.state.company.eligibility,
      },
      {
        title: "Test Date",
        cardTitle:dateString,
      },
      {
        title: "Summer internship",
        cardTitle:"5 days a week",
      },
      {
        title: "Additional Infomation",
        cardTitle: this.state.company.additionalInformation,
      },
    ];
    let downloadExcel=null;
      if(this.props.auth)
      {
          downloadExcel=(<a style={{display: "flex", justifyContent: "center", margin: "auto", marginBottom: "50px", maxWidth: "250px"}}
          className="btn btn-primary" rel="noopener noreferrer"
           href={"localhost:8080/apply/company?name="+this.state.company.name+"&position="+this.state.company.position }
           target="_blank">
           Download Applicants List
           </a>)
      }
    let getStudyMaterial = null;

    if(this.props.auth===false)
    {
      getStudyMaterial=(<a style={{display: "flex", justifyContent: "center", margin: "auto", marginBottom: "50px", maxWidth: "250px"}}
      className="btn btn-primary" rel="noopener noreferrer"
       href="https://drive.google.com/drive/folders/1bcuEsAnA6J7c6ktCwb9E6ZIEHZsfXJRr?usp=sharing_eip&ts=5efdd813"
       target="_blank">
         Get Study Material
       </a>)
    }
    return (
      <div style={{paddingTop: 50}}>
        <h2 style={{textAlign: "center", margin: "auto", marginBottom: "50px"}}>{this.state.company.name}</h2>
        {downloadExcel}
        {getStudyMaterial}
          
       
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "600px", margin: "auto", marginRight: 0}}>
            <Chrono
              items={itemsLeft}
              mode="VERTICAL"
              hideControls
              cardHeight="100"
              scrollable
              theme={{
                secondary: "#ffffff",
              }}
            />
          </div>
          <div style={{ width: "600px", margin: "auto", marginLeft: 0}}>
            <Chrono
              items={itemsRight}
              mode="VERTICAL"
              hideControls
              cardHeight="100"
              scrollable
              theme={{
                secondary: "#ffffff",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state =>{
 return {
companies:state.comp.companies,
auth:state.auth.isAdmin
 }
}

export default connect(mapStateToProps)(CompanyInfo);
