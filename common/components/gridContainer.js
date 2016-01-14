var React = require('react-native');
var GridRow = require('./gridRow');

var {
    View,
    Text,
    Dimensions
} = React;

var {height, width} = Dimensions.get('window');

var GridContainer = React.createClass({
    render:function(){
        return(<View style={styles.container}>
                    <GridRow></GridRow>
                    <GridRow></GridRow>
                    <GridRow></GridRow>
                    <GridRow></GridRow>
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
        paddingHorizontal:3,
        paddingVertical:3,
        flexDirection:"column"
    }
}

module.exports = GridContainer;