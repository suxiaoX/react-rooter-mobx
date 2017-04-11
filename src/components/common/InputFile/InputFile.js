/**
 * Created by shunshun on 2017/4/7.
 */
import React,{Component} from 'react';
import { observer, inject } from 'mobx-react';
import './inputfile.scss';


@inject("confStore") @observer
export default class InputFile extends Component{
  // constructor(props){
  //   super(props);
  // };
  fileChange(){
    return (e) => {
      e.preventDefault();
      // let data = [];
      // if (window.FormData !== undefined){
      //   data = new FormData();
      // };

      var target = e.target ? e.target : e.srcElement;
      var file = target.files[0];

      const size = file.size;
      const name = file.name.toLowerCase();
      //const count = this.props.multiple ? file.length : 1

      if (!/\.(jpg|png|jpeg)$/i.test(name) || size > 20000000) {
        console.log('请上传JPG,JPEG,PNG格式且不超过2M的图片');
        return;
      };
      this.previewImg(file);
    };

  };
  previewImg(file){
    const { confStore } = this.props;
    const imagesData = confStore.getConfsByKey('banner');
    var reader = new FileReader();
    var self = this;
    reader.readAsDataURL(file);
    reader.onload = function(e){
      confStore.add('banner',{src:this.result,id:imagesData.reduce( (maxId,item) => Math.max(item.id,maxId),-1) + 1});
      console.log(self.props.confStore.confs);
    }
  }
  render(){
    return(
      <div className="input-file">
        <input
          className="file"
          type='file'
          multiple={this.props.multiple}
          onChange={this.fileChange().bind(this)}
        />
        <span className="file-btn">点击上传</span>
    </div>
    )
  }

}