import React, { Component } from "react";

export class Mid extends Component {
  render() {
    return (
      <section className="row">
        <aside className="box_left col3 fl">
          <h1> Box Left</h1>
        </aside>
        <aside className="box_right col4 fr">
          <h1> Box Right</h1>
        </aside>
        <aside className="clr"></aside>
      </section>
    );
  }
}

export default Mid;
