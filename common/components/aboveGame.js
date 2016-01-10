var React = require('react-native');

var {
    View,
    Text,
    StyleSheet
} = React;

var AboveGame = React.createClass({
    render:function(){
        return (<View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Join the numbers and get to the 
                            <Text style={styles.boldText}> 2048 tile!</Text> 
                        </Text>
                    </View>
                    <View style={styles.newGameContainer}>
                        <Text style={styles.newGame}>New Game</Text>
                    </View>
                </View>)
    }
});
        
var styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap:"nowrap",
        marginTop:5
    },
    textContainer:{
        flex:1,
        marginRight:10
    },
    text:{
        color:"#776E65",
        fontSize:16,
        lineHeight:26
    },
    boldText:{
       fontWeight:"bold"  
    },
    newGameContainer:{
        backgroundColor:"#8f7a66",
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:3
    },
    newGame:{
        color:"#fff",
        fontSize:18,
    }
})
        
module.exports = AboveGame;