import React from 'react';

import './index.less';

class ToTop extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={'cp-totop' + (this.props.show ? '' : ' hide')} onClick={this.props.onClick}>
        <span className="icon-totop"></span>
      </div>
    );
  }
}
ToTop.displayName = 'ToTop';
ToTop.propTypes = {
  onClick: React.PropTypes.func,
  show: React.PropTypes.bool
};
ToTop.defaultProps = {
  onClick: () => {},
  show: false
};
export default ToTop;
