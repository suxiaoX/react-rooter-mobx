/**
 * Created by shunshun on 2017/4/7.
 */
import React,{Component} from 'react';
import '../slider.scss';

export default class SliderArrows extends Component{
  handleArrowClick(option) {
    this.props.turn(option);
  };
  render(){
    return(
      <div className="slider-arrows-wrap">
        <span
          className="slider-arrow slider-arrow-left"
          onClick={this.handleArrowClick.bind(this, -1)}>
          &lt;
        </span>
        <span
          className="slider-arrow slider-arrow-right"
          onClick={this.handleArrowClick.bind(this, 1)}>
          &gt;
        </span>
      </div>
    );

  }
}