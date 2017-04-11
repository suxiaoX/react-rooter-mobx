import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import FormElement from './FormElement';

@inject('confStore') @observer
class Form extends Component {
  render() {
    const { conf, confStore } = this.props;
    const confData = confStore.getConfsByKey(conf.substr(1));
    return (
      <div>
        <form style={{width:'90%'}}>
          {confData.map((cd, idx) => (
              <FormElement el={cd} key={idx} />
          ))}
          <div className="form-group">
           <button className="btn btn-danger">立即提交</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
