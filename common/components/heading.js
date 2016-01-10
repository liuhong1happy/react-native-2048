/*
一、Flex Box
1.flexDirection:["row","column"],
row:水平划分
column:垂直划分
2.alignItems:['flex-start', 'flex-end', 'center', 'stretch']
水平布局
3.justifyContent:['flex-start', 'flex-end', 'center', 'space-between', 'space-around']
垂直布局
*/

var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    Dimensions
} = React;
    
var {height, width} = Dimensions.get('window');
var Heading = React.createClass({
    render:function(){
        return(<View style={styles.heading}>
                    <Text style={styles.headingTitle}>2048</Text>
                    <View style={styles.scores}>
                        <View style={styles.container}>
                            <Text style={styles.containerTitle}>SCORE</Text>
                            <Text style={styles.containerValue}>{this.props.score}</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.containerTitle}>BEST</Text>
                            <Text style={styles.containerValue}>{this.props.best}</Text>
                        </View>
                    </View>
                </View>)
    }
})

var styles = StyleSheet.create({
    heading:{
        height:80,
        marginTop:40,
        flexDirection: 'row'
    },
    headingTitle:{
        fontSize:48,
        color:"#776E65",
        fontWeight:"bold"
    },
    scores:{
        flex:1,
        flexDirection: 'row',
        justifyContent:"flex-end",
        flexWrap:"wrap",
        alignItems:"flex-start"
    },
    container:{
        backgroundColor:"#bbada0",
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
        borderRadius:3,
        marginLeft:5,
        flexDirection: 'column',
        alignItems:"center"
    },
    containerTitle:{
        color:"#eee4da",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:12
    },
    containerValue:{
        color:"#fff",
        textAlign:"center",
        fontSize:24,
        fontWeight:"bold"
    }
})

module.exports = Heading;