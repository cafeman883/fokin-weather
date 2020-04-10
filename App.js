import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        
      </View>
      <View style={styles.blueView}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 72
  },
  yellowView: {
    flex: 1, // flex�� ���̾ƿ� ��°� ��õ�Ѵ�. ������.
    backgroundColor: "yellow"
  },
  blueView: {
    flex: 2,
    backgroundColor: "blue"
  }
  
});
 











