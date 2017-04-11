import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Image from '../image';
import './index.scss';

class Partial extends Component {
  render() {
    const { type, conf } = this.props;
    const ChildComponent = type;
    return (
      <div className="partial">
        <Link className="btn-conf" to={this.props.conf}>编辑</Link>
        <ChildComponent conf={this.props.conf} />
      </div>
    );
  }
}

export default Partial;
