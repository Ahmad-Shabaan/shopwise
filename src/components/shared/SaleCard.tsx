import { Component } from "react";
import { ISale, saleProps } from "../../types";
export default class SaleCard extends Component<saleProps> {
  render() {
    const sale:ISale = this.props.targetSale;
    return (
      <>
        <img src={sale.imgURL} alt={sale.title} />
        <div className="superSale">
          <h2>{sale.title}</h2>
          <h4>{sale.description}</h4>
          <button>Shop Now</button>
        </div>
      </>
    );
  }
}
