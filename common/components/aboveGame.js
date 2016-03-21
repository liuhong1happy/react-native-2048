import React from 'react-native'

const {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} = React
const {height, width} = Dimensions.get('window')
const isMinWin = width <= 320

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: 5,
    marginBottom: isMinWin ? 15 : 0,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  text:{
    color: '#776E65',
    fontSize: isMinWin ? 12 : 16,
    lineHeight: isMinWin ? 18 : 26,
  },
  boldText:{
   fontWeight: 'bold',
  },
  newGameContainer:{
    backgroundColor: '#8f7a66',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 3,
  },
  newGame:{
    color: '#fff',
    fontSize: isMinWin ? 14 : 18,
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
