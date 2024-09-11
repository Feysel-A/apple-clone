import React, { Component } from "react";

class Section extends Component {
  render() {
    return (
      <>
        <section className={this.props.wrapperName}>
          <div className="container">
            <div className="new-alert">New</div>

            <div className="title-wraper bold black">{this.props.title}</div>
            {this.props.discription && (
              <>
                <div className="description-wrapper black">
                  {this.props.discription}
                </div>

                <div className="price-wrapper grey">{this.props.price}</div>
              </>
            )}

            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Order</a>
                </li>
              </ul>
            </div>

            {this.props.ipodCaption && (
              <div className="ipod-caption row">
                <div className="col-sm-12 col-md-6 text-md-right">
                  {this.props.ipodCaption}
                </div>
                <div className="col-sm-12 col-md-6 text-md-left">
                  {this.props.secondCaption}
                </div>
              </div>
            )}
          </div>
        </section>
      </>
    );
  }
}

export default Section;
