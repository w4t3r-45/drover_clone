import React , {Component} from 'react';
import CarCard from './carCard';



class CarsList extends Component{
  state = {
    data:this.props.data
  }
  

  componentWillReceiveProps(nextProps){
    this.setState({
      data:nextProps.data
    })
}
  
  render(){
    return(
      this.state.data.map((car,index)=> {
        return <CarCard 
            name={car.name}
            price={car.price}
            control={car.control}
            type={car.type}
            image={car.img}/>
    })
    )
  }
}

export default CarsList;