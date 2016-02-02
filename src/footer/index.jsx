import React from 'react';

import './index.less';

class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="pt-footer">
        Copyrights © {new Date().getFullYear()} 天镶. All Rights Reserved.
      </div>
    );
  }
}
Footer.displayName = 'Footer';
Footer.propTypes = {};
Footer.defaultProps = {};
module.exports = Footer;
