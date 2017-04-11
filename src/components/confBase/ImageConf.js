import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';


import InputFile from '../common/InputFile/InputFile';
import PreviewImg from '../common/PreviewImg/PreviewImg';
import ConfBase from './confBase';
import '../image/imageconf.scss';

@inject("confStore") @observer
class ImageConf extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { conf, confStore } = this.props;
    const imgData = confStore.getConfsByKey('banner');
    /*
    <div>
     <h2>{confStore.confs.length}</h2>
     <InputFile multiple={false} />
     </div>
     */
    return (

      <ConfBase>
        <div>
          <h2>{confStore.confs.length}</h2>
          {
            imgData.map( (item,key) => (
              <PreviewImg item={item} key={key} />
            ) )
          }
          <InputFile multiple={false} imagesData={imgData} />
        </div>
      </ConfBase>
    );
  }
}

export default ImageConf;
