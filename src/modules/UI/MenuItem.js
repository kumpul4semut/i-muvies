import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class MenuItem extends Component {
  state = {
    open: false
  };
  handleMouse = act => {
    this.setState({ open: act });
  };
  render() {
    let rendered = (
      <li>
        <Link to={this.props.href} className={this.props.className}>
          {this.props.title}
        </Link>
      </li>
    );
    if (this.props.children) {
      rendered = (
        <li onMouseLeave={() => this.handleMouse(false)}>
          <Link
            to={this.props.href}
            className={this.props.className}
            onMouseEnter={() => this.handleMouse(true)}
          >
            {this.props.title}
          </Link>
          <div
            className={`sub-container ${this.props.category}`}
            style={{ display: this.state.open ? 'block' : 'none' }}
          >
            {this.props.children}
            <div className="clearfix" />
          </div>
        </li>
      );
    }

    return rendered;
  }
}
export default MenuItem;
