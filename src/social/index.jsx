import React from 'react';

import './index.less';

class Social extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul className="pt-social">
        <li className="social-item">
          <a href="http://weibo.com/lingyucoder/home" className="weibo"></a>
        </li>
        <li className="social-item">
          <a href="https://github.com/LingyuCoder" className="github"></a>
        </li>
        <li className="social-item">
          <a href="mailto:lingyucoder@gmail.com" className="email"></a>
        </li>
      </ul>
    );
  }
}
Social.displayName = 'Social';
Social.propTypes = {};
Social.defaultProps = {};
module.exports = Social;
