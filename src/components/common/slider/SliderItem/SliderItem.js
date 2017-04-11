/**
 * Created by shunshun on 2017/4/7.
 */
import React,{Component} from 'react';
import '../slider.scss';

// export const SliderItem = ({item,count,...rest}) =>{
//   const width = 100 / count + '%';
//   return (
//       <li className="slider-item" style={{width:width}}>
//         <img src={item.src} alt={item.alt} />
//         <div className="img_name"> {item.alt} </div>
//       </li>
//     )
// };

export default class SliderItem extends Component{
  render(){
    const {item,count} = this.props;
    const width = 100 / count + '%';
    return(
      <li className="slider-item" style={{width:width}}>
        <img src={item.src} alt={item.alt} />
        <div className="img_name"> {item.alt} </div>
      </li>
    )
  }
}