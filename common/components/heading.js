import {
  View,
  Text,
  StyleSheet,
}  from 'react-native'
import React from 'react'
	
import Dimensions from '../utils/dimensions'
const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  heading:{
    height:Dimensions.size["20"],
    marginTop:Dimensions.size["12"],
    flexDirection: 'row',
  },
  headingTitle:{
    fontSize:Dimensions.size["12"],
    color: '#776E65',
    fontWeight: 'bold'
  },
  scores:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  container:{
    backgroundColor: '#bbada0',
    paddingLeft:Dimensions.size["5"],
    paddingRight:Dimensions.size["5"],
    paddingTop:Dimensions.size["2"],
    paddingBottom:Dimensions.size["2"],
    borderRadius:Dimensions.size["2"],
    marginLeft:Dimensions.size["2"],
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerTitle:{
    color: '#eee4da',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:Dimensions.size["3"]
  },
  containerValue:{
    color: '#fff',
    textAlign: 'center',
    fontSize:Dimensions.size["6"],
    fontWeight: 'bold',
  },
})

const Heading = (props) => {
  return (
    <View style={styles.heading}>
      <Text style={styles.headingTitle}>2048</Text>
      <View style={styles.scores}>
        <View style={styles.container}>
          <Text style={styles.containerTitle}>SCORE</Text>
          <Text style={styles.containerValue}>{props.score}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.containerTitle}>BEST</Text>
          <Text style={styles.containerValue}>{props.best}</Text>
        </View>
      </View>
    </View>
  )
}

export default Heading
