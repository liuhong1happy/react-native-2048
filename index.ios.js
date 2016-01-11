'use strict';

var React = require('react-native');
var Container = require('./common/components/container');

var {
    AppRegistry
} = React;

var ReactNative2048 = React.createClass({
  render: function() {
    return (
      <Container startTiles={2} size={4}/>
    );
  }
});

AppRegistry.registerComponent('ReactNative2048', () => ReactNative2048);
