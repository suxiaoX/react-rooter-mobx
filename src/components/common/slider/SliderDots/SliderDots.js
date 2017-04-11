/**
 * Created by shunshun on 2017/4/7.
 */
import React,{Component} from 'react';
import '../slider.scss';

export default class SliderDots extends Component{
  handleDotClick(i){
    var option = i - this.props.nowLocal;
    this.props.turn(option);
  };
  render(){
    let dotNodes = [];
    let { count, nowLocal } = this.props;
    for (let i = 0;i<count;i++){
      dotNodes[i] = (
        <span
          key={'dot' + i}
          className={"slider-dot" + (i === nowLocal?" slider-dot-selected":"")}
          onClick={this.handleDotClick.bind(this, i)}>
        </span>
      )
    };
    return (
      <div className="slider-dots-wrap">
        {dotNodes}
      </div>
    );
  }
};