var React = require('react-native');

var {
    View,
    Text,
    Dimensions
} = React;

var {height, width} = Dimensions.get('window');

var GridRow = React.createClass({
    render:function(){
        return(<View style={styles.container}></View>)
    }
})
        
var styles = {
    container:{
        width:(width-40-50)/4,
        height:(width-40-50)/4,
        marginHorizontal:5,
        backgroundColor:"rgba(238, 228, 218, 0.35)",
        borderRadius:3
    }
}

module.exports = GridRow;