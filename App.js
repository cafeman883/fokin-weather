import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading.js";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "14544b29e57fe161f6c020bfee3dbfca";
//const "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}"

export default class extends React.Component { 
  state = {
    isLoading: true
  } 

  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    )

    console.log(data);
  }

  getLocation = async() => {
    try {
      //throw Error(); 임의로 에러 발생시켜 보기/
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getLocation(latitude, longitude);
      this.setState({ isLoading: false});

      // Send to API and get weather!
    } catch (error) {
      Alert.alert("Can't find you.", "So Sad");
    }

    
  }
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  } 
}
 











