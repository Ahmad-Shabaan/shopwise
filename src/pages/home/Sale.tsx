import { Component } from "react";
import SaleCard from "../../components/shared/SaleCard";
import { sale } from "../../constant";

export default class Sale extends Component {
  render() {
    return (
      <div className="sale">
        <div className="partOne">
          <SaleCard targetSale={sale[0]} />
        </div>
        <div className="partTwo">
          <SaleCard targetSale={sale[1]} />
        </div>
      </div>
    );
  }
}
