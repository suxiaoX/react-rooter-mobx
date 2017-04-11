import { observable, autorun, computed } from 'mobx';

export default class ConfStore {
  @observable confs = [];

  constructor() {
    autorun(() => console.log(this.confs.length));
  }


  add(key, entry) {
    this.confs.push({
      key,
      ...entry
    });
  }

  // addImg(data){
  //   this.confsImg = [
  //     {
  //       url:data,
  //       id:this.confsImg.reduce( (maxId,item) => Math.max(item.id,maxId),-1) + 1
  //     },
  //     ...this.confsImg
  //   ];
  // }

  getConfsByKey(key) {
    return this.confs.filter(c => c.key === key);
  }

  removeEl(key, id) {
    const idx = this.confs.findIndex(c => c.id === id);
    this.confs.splice(idx, 1);
  }
}
