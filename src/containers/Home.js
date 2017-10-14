import React, { Component } from 'react';
import styles from './Home.css';

class Home extends Component {
  render() {
    console.log('styles:', styles);

    return (
      <div className={styles.root}>
        Home
      </div>
    );
  }
}

export default Home;
