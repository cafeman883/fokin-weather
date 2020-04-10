import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading.js";
import * as Location from 'expo-location';

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getLocation = async() => {
    try {
      //throw Error(); 임의로 에러 발생시켜 보기/
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();

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
 











