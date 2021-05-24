import React, { useState, useEffect } from 'react';
import './App.css';
import Aux from './components/Aux';
import Header from './components/Header';
import Footer from './components/Footer';
import RangeFilter from './components/RangeFilter';
import Location from './components/Location';
import RadioFilter from './components/RadioFilter';
import ContactForm from './components/contact';
import SelectFilter from './components/SelectFilter';
import CarsList from './components/carsList';
import data from './SERVER_SIMULATION/data';
import FilterBoxes from './components/FilterBoxes';
import FilterTag from './components/FilterTag';

// QUESTION : conditional render vs display:none

export default function App() {

  // initialize state 
  const [filteredData, setFilteredData] = useState(data.cars);
  const [search, setSearch] = useState("");

  const [isShowFilters, setIsShowFilters] = useState(true); //i will set it to false
  const [FilterTagsList, setFilterTagsList] = useState([]);
  let boxes = [];




  // getting input value onchange then put it in search state (real time)
  const SearchHandeler = (event) => {
    setSearch(event.target.value);
  }



  // each time search changes we change our data state
  useEffect(() => {
    setFilteredData(
      data.cars.filter(car => {
        return car.name.toLowerCase().includes(search.toLowerCase());
      })
    )
  }, [search]);

  const priceOderHandler = (event) => {
    //cloning filtered data array because sort will affect our main array
    let sortingFilteredData = [...filteredData];
    const val = event.target.value;
    //all htl lth 
    setFilteredData(
      sortingFilteredData.sort((a, b) => {
        if (val === "lth") {
          if (a.price < b.price) {
            return -1
          }
          if (a.price > b.price) {
            return 1
          }
          return 0;

        }
        else if (val === "htl") {
          if (a.price < b.price) {
            return 1
          }
          if (a.price > b.price) {
            return -1
          }
          return 0;
        }
        else if (val === "all") {
          return;
        }
      })
    )
  }

  // delete Filter Tag Handler (PROBLEM !!!)

  const DeleteHandler = (id) => {
    console.log(id);
    let tmp = FilterTagsList.filter(cpnt => cpnt.props.id != id);
    console.log( tmp);
    // setFilterTagsList(tmp);
  }

  // declaring value change handler for filters

  const ValueChangeHandler = (e) => {
    /*
      Bring all boxes
      if there is item with that key Update it 
      else insert it
    */

    /**
     * we can avoid that extra work in case we haven't that item 
     * with key duration by using if else i see it will enhace performance
     * in case of long things
     */
    boxes = [...FilterTagsList];
    let tmp = boxes.filter(cpnt => cpnt.key != "duration");
    boxes = [...tmp];
    boxes.push(<FilterTag
      id="duration_months"
      value={e.target.value}
      key="duration"
      onDelete={DeleteHandler}
    />);
    // }



    // Update State
    setFilterTagsList(boxes);
  }


  // declaring valueGetter function for components which has onChange taken

  const getValue = (e) => {
    boxes = [...FilterTagsList];
    boxes.push(<FilterTag
      id={e.target.value}
      key={e.target.value}
      value={e.target.value}
      // key="hoho"
      onDelete={DeleteHandler}
    />);
    setFilterTagsList(boxes);
    console.log(boxes)
  }




  return (
    <Aux> {/* i can use Fragment or just <></> */}
      <Header />

      <main className="main_content">

        <section className="filter_section">
          <Location />

          <p className="filter_title">Booking Duration</p>

          <RadioFilter
            onChange={ValueChangeHandler}
          />

          <p className="filter_title">Monthly Bugdet</p>

          <RangeFilter
            text_range="£150 - £1500"
            min="150"
            max="1500"
            step="50"
            init="1"
            getValue={getValue}
          />

          <p className="filter_title">Number of Seats</p>

          <RangeFilter
            text_range="1 - 9 Seats"
            min="1"
            max="9"
            step="1"
            init="1"
            getValue={getValue}
          />

          <SelectFilter
            onChange={ValueChangeHandler}
          />
        </section>

        <div className="main_Wrapper">
          <div className="main_Wrapper_top_Filters">
            <p>{filteredData.length} Models Available</p>
            <input type="text" placeholder="Search" onChange={SearchHandeler} />
            <div>
              <i className="fa fa-sort" aria-hidden="true"></i>
              <select name="" onChange={priceOderHandler}>
                <option value="all">All Prices</option>
                <option value="lth">Low to High</option>
                <option value="htl">High to Low</option>
              </select>
            </div>
          </div>

          {FilterTagsList != [] ? <FilterBoxes items={FilterTagsList} /> : null}


          <section className="list_section">
            <CarsList
              data={filteredData}
            />
          </section>

        </div>


      </main>
      <ContactForm />

      <Footer />
    </Aux>



  );
}


