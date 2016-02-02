import React from 'react';

import blur from '../lib/blur';

class BlurImage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    let img = React.findDOMNode(this);
    let {
      radius,
      blurAlphaChannel
    } = this.props;
    radius = radius || 5;
    blurAlphaChannel = blurAlphaChannel || false;
    var blurFn = function() {
      img.removeEventListener('load', blurFn);
      blur(img, radius, blurAlphaChannel);
    };
    if (img.complete)
      blur(img, radius, blurAlphaChannel);
    else
      img.addEventListener('load', blurFn);
  }
  render() {
    return (
      <img crossOrigin="anonymous" className="cp-blur" src={this.props.src}></img>
    );
  }
}
BlurImage.displayName = 'BlurImage';
BlurImage.propTypes = {
  src: React.PropTypes.string
};
BlurImage.defaultProps = {};
module.exports = BlurImage;
