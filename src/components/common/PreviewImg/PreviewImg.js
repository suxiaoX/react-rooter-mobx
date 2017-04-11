/**
 * Created by shunshun on 2017/4/7.
 */

import React,{Component} from 'react';
import './previewimg.scss';

// export const PreviewImg = ({item}) => {
//   console.log(item);
//   return <p>
//     <img src={item} alt=""/>
//   </p>
// }
import { observer, inject } from 'mobx-react';

@inject('confStore') @observer
export default class PreviewImg extends Component{
  deleteImg(){
    const { confStore,item } = this.props;
    confStore.removeEl('banner',item.id)
  };
  render(){
    const {item} = this.props;
    return(
      <div className="preview-wraper clearfix">
        <div className="imgbox fl">
          <img src={item.src} alt="" />
        </div>
        <div className="delete fr" onClick={this.deleteImg.bind(this)}>删除</div>
      </div>
    )
  }
}