import { Component } from "react";
import { IProduct, cardProps } from "../../types";

export default class Card extends Component<cardProps> {
  render() {
    const product:IProduct = this.props.targetProduct;
    return (
      <div className="product" key={product.name}>
        <div className="imgContainer">
          <img src={product.imgURL} alt="" />
          <div className="love">
            {product.loveIcons.map((icon:string) => {
              return (
                <div key={icon}>
                  <i className={icon}></i>
                </div>
              );
            })}
          </div>
        </div>
        <div className="productInfo">
          <div className="productName">{product.name}</div>
          <div className="price">
            ${product.price}
            <del>${product.oldPrice}</del>
          </div>
          <div className="rating">
            {product.ratingIcons.map((icon:string, index:number) => (
              <i key={index} className={icon}></i>
            ))}
            (<span className="users">{product.users}</span>)
          </div>
        </div>
        <div className="addToCart">
          <button>
            <i className="fa-solid fa-cart-plus"></i> Add To Cart
          </button>
        </div>
      </div>
    );
  }
}
