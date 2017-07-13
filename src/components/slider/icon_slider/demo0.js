import React from 'react';
import { Slider, Icon } from 'antd';

class IconSlider extends React.Component {
  constructor(props) {
    super(props);
    const { max, min } = props;
    const mid = ((max - min) / 2).toFixed(5);
    this.state = {
      preIconClass: this.props.value >= mid ? '' : 'anticon-highlight',
      nextIconClass: this.props.value >= mid ? 'anticon-highlight' : '',
      mid,
      sliderValue: this.props.value,
    };
  }
  handleChange = (v) => {
    this.setState({
      preIconClass: v >= this.state.mid ? '' : 'anticon-highlight',
      nextIconClass: v >= this.state.mid ? 'anticon-highlight' : '',
      sliderValue: v,
    });
  }
  render() {
    return (
      <div className="icon-wrapper">
        <Icon className={this.state.preIconClass} type={this.props.icon[0]} />
        <Slider {...this.props} onChange={this.handleChange} value={this.state.sliderValue} />
        <Icon className={this.state.nextIconClass} type={this.props.icon[1]} />
      </div>
    );
  }
}

export default function DemoComponent_slider_icon_slider() {
return(<IconSlider min={0} max={20} value={0} icon={['frown-o', 'smile-o']} />);
};

export const demo = <DemoComponent_slider_icon_slider key="DemoComponent_slider_icon_slider" />;
