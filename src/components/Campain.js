import React, { Component } from "react";

export class Campain extends Component {
  render() {
    return (
      <section className="row col5">
        <aside className="camp fl">
          <img src="image/logo.jpg" className="camplogo" />
        </aside>
        <aside className="camp new">
          <img src="image/logo.jpg" className="camplogo" />
        </aside>
        <aside className="camp new">
          <img src="image/logo.jpg" className="camplogo" />
        </aside>
        <aside className="camp fr">
          <img src="image/logo.jpg" className="camplogo" />
        </aside>
        <aside className="clr"></aside>
      </section>
    );
  }
}

export default Campain;
