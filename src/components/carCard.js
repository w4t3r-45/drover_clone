import React,{Component} from 'react';
import styles from './styles/car_Card.module.css';

class CarCard extends Component{
  render(){
    return(
      <div className={styles.car_card}>
        <div id={styles.top_div}>
          <p className={styles.car_card_new_notif}>New 21-Plate!</p>
          <p><span>£{this.props.price}</span>/mo <br/>for 24 months</p>
        </div>
        <img src={this.props.image} alt=""/>
        <p className={styles.title_text}>{this.props.name}</p>
        <p>{this.props.description}</p>
        <hr/>
        <div>
          <p>{this.props.control}</p>
          <p> . </p>
          <span>{this.props.type}</span>
        </div>
      </div>
    );
  }
}


export default CarCard;