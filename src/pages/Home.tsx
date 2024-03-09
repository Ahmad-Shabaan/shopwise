import { Component } from "react";
import {
  Banner,
  Features,
  Logos,
  Products,
  Sale,
  Slider,
  Trending,
} from "./home/index";
export default class extends Component {
  render() {
    return (
      <>
        <Banner />
        <Features />
        <Products />
        <Sale />
        <Trending />
        <Slider />
        <Logos />
      </>
    );
  }
}
