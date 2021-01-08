import React, { Component } from "react";
import { Chrono } from "react-chrono";

class Schedule extends Component {
  render() {
    let items = [
      {
        title: "Jan 5th",
        cardTitle: "Dunkirk",
        cardSubtitle:
          "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
      },
      {
        title: "Jan 5th",
        cardTitle: "Dunkirk",
        cardSubtitle:
          "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
      },
      {
        title: "Jan 5th",
        cardTitle: "Dunkirk",
        cardSubtitle:
          "Men of the British Expeditionary Force (BEF) wade out to..",
      },
      {
        title: "Jan 5th",
        cardTitle: "Dunkirk",
        cardSubtitle:
          "Men of the British Expeditionary Force (BEF) wade out to..",
      },
      {
        title: "Jan 5th",
        cardTitle: "Dunkirk",
        cardSubtitle:
          "Men of the British Expeditionary Force (BEF) wade out to..",
      },
      {
        title: "Jan 5th",
        cardTitle: "Dunkirk",
        cardSubtitle:
          "Men of the British Expeditionary Force (BEF) wade out to..",
      },
      {
        title: "Jan 5th",
        cardTitle: "Dunkirk",
        cardSubtitle:
          "Men of the British Expeditionary Force (BEF) wade out to..",
      },
      {
        title: "Jan 5th",
        cardTitle: "Dunkirk",
        cardSubtitle:
          "Men of the British Expeditionary Force (BEF) wade out to..",
      },
    ];
    return (
      <div style={{ width: "1000px", margin: "auto" }}>
        <Chrono
          items={items}
          mode="VERTICAL"
          hideControls
          scrollable
          theme={{
            secondary: "#ffffff",
          }}
        />
      </div>
    );
  }
}

export default Schedule;
