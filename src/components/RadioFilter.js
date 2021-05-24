import React , {Component} from 'react';
import styles from './styles/RadioFilter.module.css';


export default class RadioFilter extends Component{
  render(){
    return (
      <div className={styles.radio_box}>
      <form>
        <label>
          <input type="radio" name="radio_select" value="" onChange={this.props.onChange} defaultChecked={true}/>
          <div className={styles.circle}></div>
          <span>Any Duration</span>
        </label>
        <label>
          <input type="radio" name="radio_select" value="1 to 6 months"  onChange={this.props.onChange} />
          <div className={styles.circle}></div>
          <span>1 to 6 months</span>
        </label>
        <label>
          <input type="radio" name="radio_select" value="7 to 12 months"  onChange={this.props.onChange}/>
          <div className={styles.circle}></div>
          <span>7 to 12 months</span>
        </label>
        <label>
          <input type="radio" name="radio_select" value="13 to 18 months" onChange={this.props.onChange}/>
          <div className={styles.circle}></div>
          <span>13 to 18 months</span>
        </label>
        <label>
          <input type="radio" name="radio_select" value="19 to 24 months" onChange={this.props.onChange}/>
          <div className={styles.circle}></div>
          <span>19 to 24 months</span>
        </label>
      </form>
    </div>
    )
  }
}
