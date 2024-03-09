import { Component } from "react";
import { features } from "../../constant";
import { IFeatures } from "../../types";

export default class Features extends Component {
  render() {
    return (
      <div className="features">
        <table>
          <tbody>
            <tr>
              {features.map((feature: IFeatures, index) => {
                return (
                  <td key={index}>
                    <div>
                      <i className={feature.icon}></i>
                    </div>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
