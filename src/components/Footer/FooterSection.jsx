import React, { Component } from "react";

class Child extends Component {
  render() {
   
    return (
      <>
        {this.props.data.map((item, i) => {
          return (
            <div key={i}>
              <h3>{item.title}</h3>
              <ul>
                {item.lists.map((li, i) => {
                  return (
                    <li key={i}>
                      <a href={li.link}>
                        {li.list}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </>
    );
  }
}

export default Child;
