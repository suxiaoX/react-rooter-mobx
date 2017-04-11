import { observable, autorun, computed } from 'mobx';

export default class ElementStore {
  @observable elements = [{
    id: 1,
    type: 'input',
    label: '姓名',
    name: 'name',
    placeholder: '请输入姓名',
    required: true
  }, {
    id: 2,
    type: 'input',
    label: '微信',
    name: 'name',
    placeholder: '请输入微信号',
    required: true
  }, {
    id: 3,
    type: 'input',
    label: '手机号码',
    name: 'name',
    placeholder: '请输入手机号',
    required: true
  }];

  constructor() {
    autorun(() => console.log(this.elements.length));
  }
};
