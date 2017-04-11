import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import FormElementConf from './FormElementConf';

@inject('elementStore', 'confStore') @observer
class FormConf extends Component {
  // constructor(props) {
  //   super();
  //   this.props = props;
  // }

  render() {
    const { elementStore } = this.props;
    const els = elementStore.elements;
    return (
        <div className="form-conf">
          <ul>
          { els.map((el, idx) => (
              <FormElementConf el={el} key={idx} />
          ))}
          </ul>
        </div>
    );
  }
}

export default FormConf;
