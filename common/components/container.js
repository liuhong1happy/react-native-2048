var React = require('react-native');
var Heading = require('./heading');
var AboveGame = require('./aboveGame');
var GameContainer = require('./gameContainer');
var {
  StyleSheet,
  View,
  Text,
  Dimensions
} = React;

var {height, width} = Dimensions.get('window');

var Container = React.createClass({
    render:function(){
        return (<View style={styles.container}>
                    <Heading></Heading> 
                    <AboveGame></AboveGame>
                    <GameContainer></GameContainer>
                </View>)
    }
});
        
var styles = StyleSheet.create({
    container:{
        width: width,
        height: height,
        backgroundColor:"#faf8ef",
        paddingHorizontal:20
    }
});

module.exports = Container;