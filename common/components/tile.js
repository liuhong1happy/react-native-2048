var React = require('react-native');
var {
    View,
    Text,
    Dimensions,
    StyleSheet
} = React;

var {height, width} = Dimensions.get('window');
var isMinWin = width <= 320;

var MARGIN_WIDTH = 5;
var ITEM_WIDTH = (width-40-MARGIN_WIDTH*10)/4;

var Tile = React.createClass({
    render:function(){
        var tileStyle = this.props.value<= 2048 ? styles['tile' + this.props.value] : styles["tilesuper"];
        var tilePositionStyle = {
            left:this.props.x*(ITEM_WIDTH+MARGIN_WIDTH*2)+MARGIN_WIDTH*2-2,
            top:this.props.y*(ITEM_WIDTH+MARGIN_WIDTH*2)+MARGIN_WIDTH*2-2,
            width:ITEM_WIDTH,
            height:ITEM_WIDTH
        }
        var tileTextStyle = this.props.value<= 2048 ? styles['tile' + this.props.value+"Text"] : styles["tilesuperText"];
        return (<View style={[ styles.tile,tileStyle,tilePositionStyle]}>
                        <Text style={[ styles.tileText,tileTextStyle]}>{ this.props.value }</Text>
            </View>)
    }
})
        
var styles = StyleSheet.create({
    "tile":{
        position:"absolute",
        borderRadius:3
    },
    "tileText":{
        fontSize: isMinWin?36:48,
        color:"#776E65",
        textAlign:"center",
        marginTop:5,
    },
    "tile2":{
        backgroundColor:"#eee4da",
    },
    "tile4":{
        backgroundColor:"#eee1c9",
    },
    "tile8":{
        backgroundColor:"#f3b27a",
    },
    "tile8Text":{
        color:"#f9f6f2",
        marginTop:8
    },
    "tile16":{
        backgroundColor:"#f69664",
    },
    "tile16Text":{
        color:"#f9f6f2",
        marginTop:8
    },
    "tile32":{
        backgroundColor:"#f77c5f",
    },
    "tile32Text":{
        color:"#f9f6f2",
        marginTop:8
    },
    "tile64":{
        backgroundColor:"#f75f3b",
    },
    "tile64Text":{
        color:"#f9f6f2",
        marginTop:8
    },
    "tile128":{
        backgroundColor:"#edd073",
    },
    "tile128Text":{
        color:"#f9f6f2",
        fontSize: isMinWin?27:36,
        marginTop:8
    },
    "tile256":{
        backgroundColor:"#edcc62",
    },
    "tile256Text":{
        color:"#f9f6f2",
        fontSize: isMinWin?27:36,
        marginTop:8
    },
    "tile512":{
        backgroundColor:"#edc950",
    },
    "tile512Text":{
        color:"#f9f6f2",
        fontSize: isMinWin?27:36,
        marginTop:8
    },
    "tile1024":{
        backgroundColor:"#edc53f",
    },
    "tile1024Text":{
        color:"#f9f6f2",
        fontSize: isMinWin?18:24,
        marginTop:14
    },
    "tile2048":{
        backgroundColor:"#edc22e",
    },
    "tile2048Text":{
        color:"#f9f6f2",
        fontSize:  isMinWin?18:24,
        marginTop:14
    },
    "tilesuper":{
        backgroundColor:"#3c3a33",
        fontSize: isMinWin?9:12,
        marginTop:24
    },
    "tilesuperText":{
        color:"#f9f6f2"
    }
})

module.exports = Tile;
