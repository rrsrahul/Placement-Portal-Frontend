import React, { Component } from "react";
import { Chrono } from "react-chrono";

class CompanyInfo extends Component {
  render() {
    let items = [
      {
        title: "Job Description",
        cardTitle: "Software Developer",
        cardSubtitle:"Description ......."
      },
      {
        title: "Eligibility Criteria",
        cardTitle: "CGPA",
        cardSubtitle:"8.5"
      },
      {
        title: "Cost to Company",
        cardTitle: "Full time",
        cardSubtitle:"10 LPA"
      },
      {
        title: "Intenship",
        cardTitle: "??",
        cardSubtitle:"???"
      },
      {
        title: "Location",
        cardTitle: "Bangalore",
        cardSubtitle:"?????"
      },
    ];
    return (
      <>
      <div style={{marginLeft: "85%", width: "600px" }}>
        <h2>COMPANY NAME</h2>
        <p>adklfrjdsakfljlke wr hrwskg.fjkjgvlkjfglkdfjlgu shjksfgy ahf kjdhfkj sahfd hsjkd hjhsfgjshdfhsdj hfjsdh fjhsdfjhrwjth jkfhs gjkfdhgk jh</p>
        
      </div>
      <div style={{ width: "600px", marginLeft: "75%" }}>
        <Chrono
          items={items}
          mode="VERTICAL"
          hideControls
          scrollable
          theme={{
            secondary: "#f0f0f0",
          }}
        />
      </div>
      </>
    );
  }
}

export default CompanyInfo;
