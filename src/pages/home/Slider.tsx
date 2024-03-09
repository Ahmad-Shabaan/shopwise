import { Component } from "react";
import { slider } from "../../constant";

export default class Slider extends Component {
  render() {
    return (
      <>
        <div className="slider">
          <div className="insta">
            <h2>instagram</h2>
            <p>@shoppingzone</p>
            <i className="fa-brands fa-instagram"></i>
          </div>
          {slider.map((ele , index) => {
            return (
              <div className="cart" key={index}>
                <img src={ele.imgURL} alt={ele.title} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
