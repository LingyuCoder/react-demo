import React from 'react';
import {
	Link
} from 'react-router';
import Self from '../self';
import Social from '../social';
import './index.less';

class Side extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="pt-side">
				<Self />
				<Social />
				<ul className="arc-list">
					<li className="arc-item">
						<span className="cp-archive">
							<Link to="demo/textarea">
								Textarea
							</Link>
						</span>
					</li>
				</ul>
			</div>
		);
	}
}
Side.displayName = 'Side';
Side.propTypes = {};
Side.defaultProps = {};
module.exports = Side;
