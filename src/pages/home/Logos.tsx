import { Component } from "react";
import { logos } from "../../constant";
import { ILogo } from "../../types";
export default class Logos extends Component {
  render() {
    return (
      <div className="logos">
        {logos.map((logo:ILogo, index:number) => {
          return (
            <div className="cart" key={index}>
              <img src={logo.imgURL} alt={logo.title} />
            </div>
          );
        })}
      </div>
    );
  }
}
