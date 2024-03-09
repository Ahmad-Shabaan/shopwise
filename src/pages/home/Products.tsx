import { Component } from "react";
import { products } from "../../constant";
import Card from "../../components/shared/Card";
import { IProduct } from "../../types";
export default class Products extends Component {
  render() {
    return (
      <>
        <div className="headlineP">
          <h2>Exclusive Products</h2>
        </div>
        <div className="products">
          {products.map((product: IProduct, index: number) => {
            return <Card targetProduct={product} key={index} />;
          })}
        </div>
      </>
    );
  }
}
