var React = require('react-native');

var {
    View,
    Text,
    Dimensions
} = React;

var {height, width} = Dimensions.get('window');

var GameMessage = React.createClass({
    render:function(){
        return(<View style={styles.container}>
                    <Text></Text>
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
        overflow:"hidden"
    }
}

module.exports = GameMessage;