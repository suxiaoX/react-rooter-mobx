import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Slider from '../common/slider/Slider';


@inject("confStore") @observer
class Image extends Component {
  render() {
    const { src, alt,confStore } = this.props;
    const imagesData = confStore.getConfsByKey('banner');
    return (
    <div className="slider-wrapper">
      {
        imagesData.length>0?
          <Slider
            items={imagesData}
            speed={1.0}
            delay={2.1}
            pause={true}
            autoplay={true}
            dots={true}
            arrows={true}
          /> :  <img src={src} alt={ alt || '占位图'} />
      }
    </div>

    );
  }
}

export default Image;
