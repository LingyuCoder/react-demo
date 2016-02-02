import React from 'react';

import Head from '../head';

export default class IndexRoute extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="rt-list">
				<Head height={window.innerHeight} title="React Components" back="//lingyucoder-demo.qiniudn.com/imgsliders_1.jpg"></Head>
				<ul className="list">
					<li>textarea</li>
				</ul>
      </div>
    );
  }
}
