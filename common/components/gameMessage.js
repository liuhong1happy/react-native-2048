import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import React,{ 
	Component 
} from 'react';

const {height, width} = Dimensions.get('window')

const styles = {
  container:{
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'hidden',
    backgroundColor: 'rgba(238, 228, 218, 0.5)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    width:width-40,
    height:120,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  won:{
    fontSize:60,
    color: '#776E65',
    textAlign: 'center',
  },
  over:{
    fontSize:60,
    color: '#776E65',
    textAlign: 'center',
  },
  lower:{
    flex:1,
    height:120,
  },
  keepGoingContainer:{
    height:40,
    backgroundColor: '#8f7a66',
    borderRadius:3,
    paddingHorizontal:15,
  },
  keepGoing:{
    fontSize:24,
    color: '#f9f6f2',
    textAlign: 'center',
  },
  tryAgainContainer:{
    height: 40,
    backgroundColor: '#8f7a66',
    borderRadius: 3,
    paddingHorizontal: 15,
  },
  tryAgain:{
    fontSize: 24,
    color: '#f9f6f2',
    textAlign: 'center',
  }
}

class GameMessage extends Component{
  genMessage() {
    if(this.props.won){
        return (<View  style={styles.row}>
                        <Text style={styles.won}>You win!</Text>
                        <View style={styles.lower}>
                               <TouchableWithoutFeedback onPress={this.props.onKeepGoing}>
                                    <View style={styles.keepGoingContainer}>
                                        <Text style={styles.keepGoing}>Keep going</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                        </View>
                </View> )
    }
    if(this.props.over){
        return (<View style={styles.row}>
                        <Text style={styles.over}>Game over!</Text>
                        <View style={styles.lower}>
                            <TouchableWithoutFeedback onPress={this.props.onTryAagin}>
                                <View style={styles.tryAgainContainer}>
                                    <Text style={styles.tryAgain}>Try again</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                </View>)
    }
    return (<View></View>)
  }
				
  render() {
    const message = this.genMessage()
    const containerStyle = (this.props.won || this.props.over) ? {width:width-40,height:width-40} : {width:0,height:0}
    return (
      <View style={[styles.container,containerStyle]}>{message}</View>
    )
  }
}

export default GameMessage
