import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import IndexRoute from './route/index';
import DemoRoute from './route/demo';

import './index.less';

import Side from './side';
import Footer from './footer';
import ToTop from './totop';

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      showSide: false,
      showToTop: false
    };
  }
  calRotateDeg() {
    var width = document.body.clientWidth;
    return Math.acos((width - 300) / width) / (2 * Math.PI) * 360;
  }
  showSide(e) {
    this.setState({showSide: true});
    e.stopPropagation();
    e.preventDefault();
  }
  hideSide(e) {
    this.setState({showSide: false});
    e.stopPropagation();
    e.preventDefault();
  }
  scrollToTop() {
    ReactDOM.findDOMNode(this).querySelector('.main').scrollTop = 0;
  }
  componentDidMount() {
    var mainNode = ReactDOM.findDOMNode(this).querySelector('.main');
    mainNode.addEventListener('scroll', () => {
      let showToTop = this.state.showToTop;
      if (mainNode.scrollTop === 0)
        showToTop && this.setState({showToTop: false});
      else
        !showToTop && this.setState({showToTop: true});
      }
    );
  }
  render() {
    var deg = this.calRotateDeg.call(this);
    var sideStyle = {};
    var mainStyle = {};
    ['WebkitTransform', 'transform', 'MozTransform', 'MsTransform', 'oTransform'].forEach((name) => {
      sideStyle[name] = 'translateX(-300px) rotateY(' + (this.state.showSide
        ? 0
        : deg) + 'deg)';
      mainStyle[name] = 'rotateY(' + (this.state.showSide
        ? deg
        : 0) + 'deg)';
    });
    return (
      <div className={'blog' + (this.state.showSide
        ? ' onside'
        : '')}>
        <div className="mask" onClick={this.hideSide.bind(this)}/>
        <div className="side" style={sideStyle}>
          <Side/>
        </div>
        <div className="main" style={mainStyle}>
          {this.props.content}
          <Footer/>
        </div>
        <a href="#" className="toside" onClick={this.showSide.bind(this)}/>
        <Link to="/">
          <span className="tohome"/>
        </Link>
        <ToTop onClick={this.scrollToTop.bind(this)} show={this.state.showToTop}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/pages/index.html" component={Blog}>
      <Route path="index" components={{ content: IndexRoute }}></Route>
      <Route path="demo/:demo" components={{ content: DemoRoute }}></Route>
    </Route>
  </Router>
  , document.getElementById('page'));
