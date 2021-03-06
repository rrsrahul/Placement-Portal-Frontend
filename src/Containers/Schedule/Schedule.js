import React, { Component } from "react";
import { Chrono } from "react-chrono";
import { connect } from "react-redux";
import * as actions from '../../store/actions/company'

class Schedule extends Component {


  componentDidMount()
  {
    this.props.onGetComps();
  }


  render() {
    if(this.props.companies.length===0)
    {
      return (<div style={{width:'100%'}}>
        <h1 style={{margin:'auto', textAlign: 'center'}}>No companies hiring now</h1>
      </div>)
    }

    let comps = this.props.companies.map(company =>{
      let dateObj = new Date(company.date);
      let month = dateObj.getUTCMonth() + 1; //months from 1-12
       let day = dateObj.getUTCDate();
       let year = dateObj.getUTCFullYear();
       const newdate = day + "/" + month + "/" +year ;
      return {
        title:newdate,
        cardTitle:company.name,
        cardSubtitle:company.position,
        cardDetailedText:company.jd
      }
    })

    
    return (
      <div style={{ width: "700px", margin: "auto", paddingRight: 100}}>
        <Chrono
          items={comps}
          mode="VERTICAL"
          cardHeight="100"
          hideControls
          theme={{
            secondary: "#ffffff"
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    companies:state.comp.companies
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    onGetComps:()=>{ dispatch(actions.getCompanies())}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Schedule);
