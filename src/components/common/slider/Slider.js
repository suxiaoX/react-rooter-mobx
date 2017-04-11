/**
 * Created by shunshun on 2017/4/7.
 */
import React,{Component} from 'react';
import { observer, inject } from 'mobx-react';

import SliderItem from './SliderItem/SliderItem';
import SliderDots from './SliderDots/SliderDots';
import SliderArrows from './SliderArrows/SliderArrows';

import './slider.scss';

@inject("confStore") @observer
export default class Slider extends Component{
  constructor(props){
    super(props);
    this.state={
      nowLocal: 0
    };
    this.speed = this.props.speed;
  };
  //移动
  turn(n) {
    const { confStore } = this.props;
    const imgData = confStore.getConfsByKey('banner');
    const count = imgData.length + 1;
    if (count <= 2){
      return;
    };
    var _n = this.state.nowLocal + n;
    if(_n < 0) {
      _n = count - 1;
    };
    if(_n == count) {
      // 最后一张时关闭动画，跳转到第一页
      this.speed = 0;
    }else{
      this.speed = this.props.speed;
    }
    // 恢复动画
    if (_n>=count){
      _n = _n - count;
    }
    // if (_n > 0 && !this.speed) {
    //
    //   this.speed = this.props.speed;
    // };
    this.setState({nowLocal: _n});
  };
  // 开始自动轮播
  goPlay() {
    if(this.props.autoplay) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1);
      }, this.props.delay * 1000);
    }
  };
  // 暂停自动轮播
  pausePlay() {
    clearInterval(this.autoPlayFlag);
  };
  //组件加载完毕启动自动播放
  componentDidMount() {
    this.goPlay();
  };
  render(){
    let bannerItems = this.props.items;
    let count;
    if (bannerItems.length>1){
      let more_first = bannerItems[0];
      // let more_last = bannerItems[count-1];
      bannerItems = [...bannerItems,more_first];
      count = this.props.items.length + 1;
    }else{
      bannerItems = this.props.items;
      count = 1;
    };
    let itemNodes = bannerItems.map((item, idx) => {
      return <SliderItem item={item} count={count} key={'item' + idx} />;
    });
    let arrowsNode = <SliderArrows turn={this.turn.bind(this)}/>;
    let dotsNode = <SliderDots turn={this.turn.bind(this)} count={count-1} nowLocal={(this.state.nowLocal === count - 1) ? 0 : this.state.nowLocal} />;
    return (
      <div className="slider" onMouseOver={this.props.pause?this.pausePlay.bind(this):null} onMouseOut={this.props.pause?this.goPlay.bind(this):null}>
        <ul style={{
          left: -100 * this.state.nowLocal + "%",
          transitionDuration:this.speed + 's',
          width: count * 100 + "%"
        }}>
          {itemNodes}
        </ul>
        {(this.props.arrows && count>2) ? arrowsNode:null}
        {(this.props.dots && count>2) ? dotsNode:null}
      </div>
    );
  }
};
Slider.defaultProps = {
  speed: 1,
  delay: 2,
  pause: true,
  autoplay: true,
  dots: true,
  arrows: true,
  items: [],
};
Slider.autoPlayFlag = null;