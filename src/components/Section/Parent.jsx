import React, { Component } from "react";
import Section from "./Section";
import Second from "./Second";

class Parent extends Component {
  render() {
    const Data = [
      {
        wrapperName: "first-hightlight-wrapper",
        title: "iPad Pro",
        ipodCaption: "iPad Pro available starting 3.25",
        secondCaption: "Magic Keyboard coming in May",
      },
      {
        wrapperName: "second-hightlight-wrapper",
        title: "MacBook Air",
        discription: "Twice the speed. Twice the storage.",
        price: "From $999.",
      },
    ];

    return (
      <>
        {Data.map((item, i) => {
          return <Section {...item} key={i} />;
        })}
        <Second />
      </>
    );
  }
}

export default Parent;
