var React = require('react-native');
var Tile = require('./tile');
var {
    View,
    Text,
    Dimensions
} = React;

var {height, width} = Dimensions.get('window');

var TileContainer = React.createClass({
  getChildren: function() {
    var children = [];
    this.props.tiles.forEach(function(item) {
      children.push(<Tile x={item.x} y={item.y} value={item.value} key={item.prog}/>);
    });
    return children;
  },
    render:function(){
        return(<View style={styles.container}>
                        {this.getChildren()}
                </View>)
    }
})
        
var styles = {
    container:{
        width:width-40,
        height:width-40,
        position:"absolute",
        left:0,
        top:0,
        overflow:"hidden",
    }
}

module.exports = TileContainer;