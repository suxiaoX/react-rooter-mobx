import React, { Component } from 'react';

class FormGroup extends Component {
  render() {
    const { el } = this.props;
    const Child = el.type;
    return (
      <div className="form-group row">
        <label className="col-3 col-form-label">{ el.label }</label>
        <Child className="form-control col-9" {...el}/>
      </div>
    );
  }
}

export default FormGroup;
