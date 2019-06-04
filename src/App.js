import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';
import {MapWithAMarkerClusterer} from "./components/MapWithAMarkerClusterer";
import axios from 'axios'
import {ModalRestaurant} from "./components/ModalRestaurant"
import {Marker} from "react-google-maps";



class App extends React.Component {

    constructor(){
      super();
    }


    state = {
        restaurants: [],
        query: '',
        markers: []
    }

    componentDidMount() {
        axios.get(`/data/listRestaurant.json`).then(res => {
            this.setState({ restaurants : res.data })

        })
    }





    render() {
      return (
      <main>
        <div className="row">
          <div className="col-md-9">
              <MapWithAMarkerClusterer markers={this.state.restaurants} />
          </div>
          <div className="col-md-3" id="sidebar">
              {this.state.restaurants.map((restaurant,index) => (
                  <ModalRestaurant key={index} restaurant={restaurant}/>
              ))}


          </div>
        </div>


      </main>
    );
      }
  }









export default App;
