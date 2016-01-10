var React = require('react-native');

var {
    View,
    Text,
    Dimensions
} = React;

var {height, width} = Dimensions.get('window');

var TileContainer = React.createClass({
    render:function(){
        return(<View style={styles.container}>
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