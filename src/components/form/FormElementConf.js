import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('confStore') @observer
class FormElementConf extends Component {

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const { confStore, el } = this.props;

    value ? confStore.add('form', el) : confStore.removeEl('form', el.id);
  }

  render() {
    const { el } = this.props;
    return (
      <li>
        <label>
        <input type="checkbox" onChange={this.handleInputChange.bind(this)} />
          { el.label }
        </label>
      </li>
    );
  }
}

export default FormElementConf;
