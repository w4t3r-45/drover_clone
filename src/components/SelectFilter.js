import React,{Component} from 'react';
import Aux from './Aux';
import styles from './styles/SelectFilter.module.css';

class SelectFilter extends Component{
  // this  component will receive data as props from API / DB (real world)
  render(){
    return(
      <Aux>
        <p className="filter_title">Mark</p>
        <select name="" className={styles.Filter_select}>
          <option  name="any" value="any" selected>Any</option>
          <option name="any" value="any">Audi (2)</option>
          <option name="any" value="any">BMW (4)</option>
          <option name="any" value="any">FIAT (2)</option>
          <option name="any" value="any">Ford (11)</option>
          <option name="any" value="any">Honda (4)</option>
          <option name="any" value="any">Hyundai (2)</option>
        </select>


      <p className="filter_title">Model</p>
      <select name="" disabled className={styles.Filter_select}>
        <option name="any" value="any" selected>Any</option>
        <option name="any" value="any">Audi (2)</option>
        <option name="any" value="any">BMW (4)</option>
      </select>

      <p className="filter_title">Car Type</p>
      <select name="" className={styles.Filter_select}>
        <option name="any" value="any" selected>Any</option>
        <option name="any" value="any">Compact (2)</option>
        <option name="any" value="any">Premium (4)</option>
      </select>
      </Aux>
    )
  }
}

export default SelectFilter;