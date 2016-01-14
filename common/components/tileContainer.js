var React = require('react-native');
var Tile = require('./tile');
var {
    View,
    Text,
    Dimensions
} = React;

var {height, width} = Dimensions.get('window');

var TileContainer = React.createClass({
    render:function(){
        var children = this.props.tiles;
        return(<View style={styles.container}>
                        {
                            children.map(function(item){
                                return (<Tile x={item.x} y={item.y} value={item.value} key={item.prog}/>)
                            })
                        }
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