import React, { Component } from 'react';
import styles from './styles/Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={styles.footer_Content_Wrapper}>
          <div className={styles.topFooter}>
            <p>Ready to find your new car?</p>
            <a href="" className="aBtn" id="footer_Btn">Join Today</a>
          </div>

          <div className={styles.footer_Links}>
            <div className={styles.footer_Link_Wrapper}>
              <h1>Drover HQ</h1>
              <a href="" className={styles.footer_Link}>41 Chalton <br /> Street,<br />
                London, <br /> NW1 1JD</a>
            </div>
            <div className={styles.footer_Link_Wrapper}>
              <h1>Support</h1>
              <a href="" className={styles.footer_Link}>FAQs</a>
              <a href="" className={styles.footer_Link}>Online Support</a>
              <a href="" className={styles.footer_Link}>Phone support: 020 3848 <br /> 4000</a>
              <a href="" className={styles.footer_Link}>Phone hours: 9:00 - 16:00  <br /> Mon-Sun</a>
            </div>
            <div className={styles.footer_Link_Wrapper}>
              <h1>Quick Links</h1>
              <a href="" className={styles.footer_Link}>
                How it works</a>
              <a href="" className={styles.footer_Link}>Short and <br /> medium <br /> term</a>
              <a href="" className={styles.footer_Link}>Affordable <br /> driving</a>
              <a href="" className={styles.footer_Link}>Electric cars</a>
              <a href="" className={styles.footer_Link}>Latest deals</a>
              <a href="" className={styles.footer_Link}>Sell your old <br />car</a>
            </div>
            <div className={styles.footer_Link_Wrapper}>
              <h1>Resources</h1>
              <a href="" className={styles.footer_Link}>Terms & <br /> Conditions</a>
              <a href="" className={styles.footer_Link}>Cookie <br /> Policy</a>
              <a href="" className={styles.footer_Link}>Subsctiption <br /> Terms</a>
              <a href="" className={styles.footer_Link}>Fair Wear & <br /> Tear Policy</a>
              <a href="" className={styles.footer_Link}>Telematics <br />Policy</a>
              <a href="" className={styles.footer_Link}>Privacy <br />Policy</a>
            </div>
            <div className={styles.footer_Link_Wrapper}>
              <h1>Company</h1>
              <a href="" className={styles.footer_Link}>Careers</a>
              <a href="" className={styles.footer_Link}>Press</a>
            </div>
          </div>

          <div className={styles.footer_Icons}>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </div>
          <div className={styles.footer_text_wrapper}>
            <p>
              Drover Limited is authorised and regulated by the
                    Financial Conduct Authority <br /> for entering into regulated hire agreements
                     under firm reference number <br /> 773030. Joindrover.com is a trading name of Drover
                      Limited which is an <br /> Appointed Representative of Ambant Underwriting Services Limited
                      , a <br />company authorised and regulated by the Financial Conduct Authority under <br />firm reference number
                       597301 to carry on insurance distribution activities.<br /> Drover Limited is registered in England and Wales company number
                        09829742. <br />Registered office at 41 Chalton Street, London, NW1 1JD.
                </p>

          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;