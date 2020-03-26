import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Nirvik is God</Text>
//     </View>
//   );
// }

export default class Game extends Component {
  render () {
    return(
      <View style={styles.container}> 
        <Text>Guess my number</Text>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ff33ff',
    fontSize: 32
  }

});
