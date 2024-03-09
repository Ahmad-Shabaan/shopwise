import { Component } from "react";
import { trendingProducts } from "../../constant";
import Card from "../../components/shared/Card";
import { IProduct } from "../../types";

export default class Trending extends Component {
  render() {
    return (
      <>
        <div className="headlineP">
          <h2>Trending Items</h2>
        </div>
        <div className="products">
          {trendingProducts.map((product: IProduct, index: number) => {
            return <Card targetProduct={product} key={index} />;
          })}
        </div>
      </>
    );
  }
}
