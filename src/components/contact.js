import React, { Component } from 'react';
import styles from './styles/contact.module.css';

class ContactForm extends Component {
  render() {
    return (
      <section class={styles.contact_Form_container}>

        <div class={styles.left_space_div}></div>


        <div class={styles.contact_form}>
          <p>Looking for a specific car?</p>
          <p>Let us know what car you are looking for, and we'll be in touch!</p>

          <div class={styles.animated_Input_Container}>
            <input type="text" name="" id="" placeholder="" />
            <label for="">Your name *</label>
          </div>

          <div class={styles.animated_Input_Container}>
            <input type="text" name="" id="" placeholder="" />
            <label for="">Your email adress *</label>
          </div>

          <div class={styles.animated_Input_Container}>
            <input type="text" name="" id="" placeholder="" />
            <label for="">Your telephone/mobile *</label>
          </div>

          <div class={styles.animated_Input_Container}>
            <input type="text" name="" id="" placeholder="" />
            <label for="">What are you looking for *</label>
          </div>


          <p id="lastFromText">When do you want a car?</p>
          <select class={styles.Form_select} name="" id="">
            <option value="this" selected>This Month</option>
            <option value="three">Within 3 months</option>
            <option value="six">Within 6 months</option>
            <option value="six_plus">6 months +</option>
          </select>

          <a class="aBtn" id={styles.form_Btn}>Find my car</a>
        </div>
      </section>
    );
  }
}

export default ContactForm;