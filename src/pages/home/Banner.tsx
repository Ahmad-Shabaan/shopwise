import { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="bannerInfo">
          <p>Taking your Viewing Experience to Next Level</p>
          <h2>Living Room Collection</h2>
          <button>SHOP NOW</button>
        </div>
        <div className="circles">
          <div className="circle">
            <div></div>
          </div>
          <div className="circle">
            <div></div>
          </div>
          <div className="circle">
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
