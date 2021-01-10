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
        title: "Test Data",
        cardTitle:this.state.company.date,
      },
      {
        title: "Cost to Company",
        cardTitle: "Full time",
        cardSubtitle: "10 LPA",
      },
      {
        title: "Additional Infomation",
        cardTitle: this.state.company.additionalInformation,
      },
    ];

      console.log(itemsLeft)
    return (
      <div style={{paddingTop: 50}}>
        <h2 style={{textAlign: "center", margin: "auto", marginBottom: "50px"}}>{this.state.company.name}</h2>
        <a rel="noopener noreferrer" href="localhost:8080/apply/company?name=Amazon&position=SDET" target="_blank">Link Here</a>
       
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
companies:state.comp.companies
 }
}

export default connect(mapStateToProps)(CompanyInfo);
