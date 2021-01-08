import React, { Component } from "react";
import { Chrono } from "react-chrono";


class CompanyInfo extends Component {
  render() {
    let itemsLeft = [
      {
        title: "Job Description",
        cardTitle: "Software Developer",
        cardSubtitle: "Description .......",
      },
      {
        title: "Job Location",
        cardTitle: "Bangalore",
      },
      {
        title: "Cost to Company",
        cardTitle: "Full time",
        cardSubtitle: "10 LPA",
      },
      {
        title: "Intenship Stipend",
        cardTitle: "15,000 per month",
      },
    ];
    let itemsRight = [
      {
        title: "Eligibility Criteria",
        cardTitle: "CGPA",
        cardSubtitle: "8.5",
      },
      {
        title: "Test Data",
        cardTitle: "22nd Jan 2020",
      },
      {
        title: "Cost to Company",
        cardTitle: "Full time",
        cardSubtitle: "10 LPA",
      },
      {
        title: "Additional Infomation",
        cardTitle: "????????????????????",
      },
    ];
    return (
      <div style={{paddingTop: 50}}>
        <h2 style={{textAlign: "center", margin: "auto", marginBottom: "50px"}}>COMPANY NAME</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "600px", margin: "auto", marginRight: 0}}>
            <Chrono
              items={itemsLeft}
              mode="VERTICAL"
              hideControls
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

export default CompanyInfo;
