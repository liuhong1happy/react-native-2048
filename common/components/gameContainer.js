var React = require('react-native');
var GameMessage  =require('./gameMessage');
var GridContainer = require('./gridContainer');
var TileContainer = require('./tileContainer');

var {
    View,
    Dimensions
} = React;

var {height, width} = Dimensions.get('window');

var GameContainer = React.createClass({
    render:function(){
        return(<View style={styles.container}>
                        <GameMessage won={this.props.won} over={this.props.over}> </GameMessage>
                        <GridContainer></GridContainer>
                        <TileContainer tiles={this.props.tiles}></TileContainer>
               </View>)
    }
})
        
var styles = {
    container:{
        width:width-40,
        height:width-40,
        backgroundColor:"#bbada0",
        borderRadius:6,
        marginTop:25
    }
}

module.exports = GameContainer;