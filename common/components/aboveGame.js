import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'
import React from 'react'
	
import Dimensions from '../utils/dimensions'
const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: Dimensions.size["5"],
    marginBottom: Dimensions.size["5"],
  },
  textContainer: {
    flex: 1,
    marginRight: Dimensions.size["4"],
  },
  text:{
    color: '#776E65',
    fontSize: Dimensions.size["6"],
    lineHeight: Dimensions.size["8"],
  },
  boldText:{
   fontWeight: 'bold',
  },
  newGameContainer:{
    backgroundColor: '#8f7a66',
    paddingHorizontal: Dimensions.size["4"],
    paddingVertical: Dimensions.size["4"],
    borderRadius: Dimensions.size["2"],
  },
  newGame:{
    color: '#fff',
    fontSize: Dimensions.size["6"],
	lineHeight: Dimensions.size["8"]
  }
})

const AboveGame = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Join the numbers and get to the
          <Text style={styles.boldText}> 2048 tile!</Text>
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={props.onRestart}>
        <View style={styles.newGameContainer}>
          <Text style={styles.newGame}>New Game</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default AboveGame
