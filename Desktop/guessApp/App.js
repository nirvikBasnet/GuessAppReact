import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Nirvik is God</Text>
//     </View>
//   );
// }

export default class Game extends Component {
  //set initial state
  state = {
    secret : 0,
    input : '',
    feedback : ''
  }


  //function to pick a random number
  //math.random() generates random number
  generateRandom(){
    return Math.round(Math.random() *100) //to round to neareset whole number
   }

   //function to initiate the game
   init() {
      const secretNumber = this.generateRandom() 

      this.setState({secret : secretNumber }) //changing the secret inside the state
   }

   //lifecycle component 
   componentDidMount(){

    this.init()
   }

   //update input state

   updateInput = (value) => {this.setState({input: value})} //call the function in input using onChangeText

   
   //checking the user entry with the random generated number
   checkGuess = () => {
     const userGuess = parseInt(this.state.input);
     const secretNumber = this.state.secret;
     if (userGuess == secretNumber) {
       this.setState({ feedback: 'You guessed right, the number is ' + secretNumber})
       //restart the game 
       this.init()
       
       return 
     }
     if(userGuess < secretNumber){
       this.setState({feedback: 'The number is larger than '+ userGuess})
       return
     }
     if(userGuess > secretNumber){
      this.setState({feedback: 'The number is smaller than' + userGuess})
      return
    }

   }


  render () {
    return(
      <View style={styles.container}> 

        <Text>Guess my number now!</Text>

        <TextInput style={styles.input} keyboardType='number-pad' onChangeText={this.updateInput}>  

        </TextInput> 

        <TouchableHighlight style={styles.button} underlayColor='white' onPress={this.checkGuess}> 
          <Text>Submit Guess</Text> 
        </TouchableHighlight>

       <Text>{this.state.feedback}</Text>

      </View>
    )
  }


}

const styles = StyleSheet.create({
  button:{
    width: 200,
    padding:10,
    marginTop:20,
    backgroundColor:'lightblue',
    alignItems:'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ff33ff',
    fontSize: 32
  },
  input: {
    backgroundColor: '#ffffff',
    width: 100,
    marginTop : 10,
    height: 50,
    

  }

});
