import React, {Component} from 'react';

class Footer extends Component {


  render() {
    return(
      <footer className="App-footer">
        <button className="App-footer-btn">Active</button>
        <button className="App-footer-btn active">All</button>
        <button className="App-footer-btn">Complited</button>
      </footer>
    );
  }
}

export default Footer;
