var React = require('react-native');
var GridCell = require('./gridCell');

var {
    View,
    Text,
    Dimensions
} = React;

var {height, width} = Dimensions.get('window');

var GridRow = React.createClass({
    render:function(){
        return(<View style={styles.container}>
                    <GridCell></GridCell>
                    <GridCell></GridCell>
                    <GridCell></GridCell>
                    <GridCell></GridCell>
                </View>)
    }
})
        
var styles = {
    container:{
        height:(width-40-50)/4,
        marginVertical:5,
        flexDirection:"row"
    }
}

module.exports = GridRow;