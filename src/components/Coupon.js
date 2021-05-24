import React, { Component } from 'react';
import styles from './styles/Coupon.module.css';

class Coupon extends Component {
  render() {
    return (
      <section className={styles.Coupon_div}>
          <p>Save £249 with code 'SAVE249'</p>
      </section>
    );
  }
}

export default Coupon;