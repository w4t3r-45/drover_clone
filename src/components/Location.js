import react,{Component} from 'react';
import styles from './styles/Location.module.css';
class Location extends Component{
  render(){
    return(
      <div class={styles.loction_picker}>
        <p>Your Location</p>
        <div class={styles.location_picker_input_wrpr}>
          <input type="text" name="" id="" placeholder="Enter your postcode"/>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </div>
        <p>See cars that can be delivered to you.</p>
      </div> 
    )
  }
}

export default Location;



