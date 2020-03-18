import React, { Component } from 'react';
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class AwesomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true
        };
      }
    
      render() {
        return (
          <div className="sweet-loading">
            <BounceLoader
              css={override}
              size={150}
              color={"#123abc"}
              loading={this.state.loading}
            />
            <div>BE PATIENT!</div>
          </div>
        );
      }
}
