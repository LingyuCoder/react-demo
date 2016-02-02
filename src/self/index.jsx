import React from 'react';

import './index.less';

class Self extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="pt-self">
        <img className="avatar" src="https://avatars1.githubusercontent.com/u/2663351?v=3&s=460"></img>
        <div className="name">天镶</div>
      </div>
    );
  }
}
Self.displayName = 'Self';
Self.propTypes = {};
Self.defaultProps = {};
module.exports = Self;
