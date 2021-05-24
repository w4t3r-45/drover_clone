import React, { Component } from 'react';
import Aux from './Aux';
import styles from './styles/RangeFilter.module.css';

class RangeFilter extends Component {
  state = {
    value :this.props.init
  }
  changeHandler = (e)=>{
    this.setState({
      value: e.target.value
    });

    // execute props getValue Function to send back value to parent component
    this.props.getValue(e);
    
  }
  render() {
    return (
      <Aux>
        <p>{this.props.text_range}</p>
        <div class={styles.two_heads_slider}>
          <form action="">
            <input type="range" 
              onChange={this.changeHandler}
              class={styles.slider} step={this.props.step} 
              min={this.props.min}  max={this.props.max} 
              value={this.state.value} />
          </form>
        </div>
      </Aux>
    )
  }
}

export default RangeFilter;