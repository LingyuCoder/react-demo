import React from 'react';

import Head from '../head';

export default class DemoRoute extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="rt-list">
				<Head height={100} title="React Components" back="//lingyucoder-demo.qiniudn.com/imgsliders_1.jpg"></Head>
				<ul className="list">
					<li>textarea</li>
				</ul>
      </div>
    );
  }
}
