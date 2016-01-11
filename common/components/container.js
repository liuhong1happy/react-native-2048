var React = require('react-native');
// Views
var Heading = require('./heading');
var AboveGame = require('./aboveGame');
var GameContainer = require('./gameContainer');
var {
  StyleSheet,
  View,
  Text,
  Dimensions,
  PanResponder,
    Alert
} = React;

// Dimensions
var {height, width} = Dimensions.get('window');

// Modules
//var TouchManager = require('../utils/touchManager');
var StorageManager = require('../utils/localStorageManager');
var Grid = require('../utils/grid');
var Tile = require('../utils/tile');

// StorageManager
var storageManager = new StorageManager();

var Container = React.createClass({
    componentWillMount: function() {
        this.setup();
        this._panResponder = PanResponder.create({
          onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
          onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
          onPanResponderGrant: this._handlePanResponderGrant,
          onPanResponderMove: this._handlePanResponderMove,
          onPanResponderRelease: this._handlePanResponderEnd,
//          onPanResponderTerminate: this._handlePanResponderEnd,
        });
        this.moving = false;
    },
   _handleStartShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    return true;
  },
   _handleMoveShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    return true;
  },
   _handlePanResponderGrant: function(e: Object, gestureState: Object) {
      if(this.moving==false){
          this.moving = true;
      }
  },
   _handlePanResponderMove: function(e: Object, gestureState: Object) {
      
  },
   _handlePanResponderEnd: function(e: Object, gestureState: Object) {
        if(this.moving){
            this.moving = false;
            
            var dx = gestureState.dx;
            var dy = gestureState.dy;
            var absDx = dx>0?dx:-dx;
            var absDy = dy>0?dy:-dy;
            var canMove = absDx>absDy?absDx-absDy>10:absDx-absDy<-10;
            if (canMove) {
                  // (right : left) : (down : up)
                  this.move(absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
            }
        }
  },
   render:function(){
        var tiles = this.state.tiles?this.state.tiles:[];
        return (<View {...this._panResponder.panHandlers} style={styles.container} >
                    <Heading score={ this.state.score} best={this.state.best}></Heading> 
                    <AboveGame onRestart={this.restart}></AboveGame>
                    <GameContainer size={this.props.size} tiles={this.state.tiles} won={this.state.won} over={this.state.over}
                            onKeepGoing={this.keepGoing} onTryAagin={this.restart}>
                    </GameContainer>
                </View>)
    },
   getRandomTiles: function() {
    var ret = [];
    for (var i = 0; i < this.props.startTiles; i++) {
      ret.push(this.getRandomTile())
    }
    return ret;
  },
   getRandomTile: function() {
    var value = Math.random() < 0.9 ? 2 : 4;
    var pos = this.grid.randomAvailableCell();
    var tile = new Tile(pos, value);
    this.grid.insertTile(tile);
    return {
      value: value,
      x: pos.x,
      y: pos.y,
      prog: tile.prog
    };
  },
   continueGame: function() {
    this.won = false;
    this.over = false;
    this.setState({won: this.won, over: this.over});
  },
   restart: function () {
        storageManager.clearGameState();
        this.continueGame(); // Clear the game won/lost message
        this.setup();
  },
   // Keep playing after winning (allows going over 2048)
   keepGoing: function () {
    this.keepPlaying = true;
    this.continueGame(); // Clear the game won/lost message
  },
   // Return true if the game is lost, or has won and the user hasn't kept playing
   isGameTerminated: function () {
    return this.over || (this.won && !this.keepPlaying);
  },
    // Set up the game
  setup: function () {
    var previousState = storageManager.getGameState();

    // Reload the game from a previous game if present
    if (previousState) {
      this.grid        = new Grid(previousState.grid.size, previousState.grid.cells); // Reload grid
      this.score       = parseInt(previousState.score);
      this.over        = (previousState.over== true ||　previousState.over=='true');
      this.won         = (previousState.won== true ||　previousState.won=='true');
      this.keepPlaying = (previousState.keepPlaying== true ||　previousState.keepPlaying=='true');
    } else {
      this.grid        = new Grid(this.props.size);
      this.score       = 0;
      this.over        = false;
      this.won         = false;
      this.keepPlaying = false;
    }
    this.setState({score: this.score, best: parseInt(storageManager.getBestScore()), tiles: this.getRandomTiles(), over: this.over, won: this.won});
  },
  // Set up the initial tiles to start the game with
  addStartTiles: function () {
    for (var i = 0; i < this.startTiles; i++) {
      this.addRandomTile();
    }
  },
  // Adds a tile in a random position
  addRandomTile: function () {
    var cellsAvailable = this.grid.cellsAvailable();
    
    if (cellsAvailable) {
      var value = Math.random() < 0.9 ? 2 : 4;
      var tile = new Tile(this.grid.randomAvailableCell(), value);

      this.grid.insertTile(tile);
    }
  },
  // Sends the updated grid to the actuator
  actuate: function () {
    // Clear the state when the game is over (game over only, not win)
    if (this.over) {
      storageManager.clearGameState();
    } else {
      storageManager.setGameState(this.serialize());
    }

    // this.actuator.actuate(this.grid, {
    //   score:      this.score,
    //   over:       this.over,
    //   won:        this.won,
    //   bestScore:  storageManager.getBestScore(),
    //   terminated: this.isGameTerminated()
    // });

    var tiles = [];
    this.grid.cells.forEach(function (column) {
      column.forEach(function (cell) {
        if (cell) {
          tiles.push({
            x: cell.x,
            y: cell.y,
            value: cell.value,
            prog: cell.prog
          });
        }
      });
    });
      
    var bestScore = parseInt(storageManager.getBestScore());
    if (bestScore < this.score) {
      storageManager.setBestScore(this.score);   
      this.setState({score: this.score, best: this.score, tiles: tiles, won: this.won, over:this.over});
    }
    else {
      this.setState({score: this.score, tiles: tiles, won: this.won, over:this.over});
    }
  },
  // Represent the current game as an object
  serialize: function () {
    return {
      grid:        this.grid.serialize(),
      score:       this.score,
      over:        this.over,
      won:         this.won,
      keepPlaying: this.keepPlaying
    };
  },
  // Save all tile positions and remove merger info
  prepareTiles: function () {
    this.grid.eachCell(function (x, y, tile) {
      if (tile) {
        tile.mergedFrom = null;
        tile.savePosition();
      }
    });
  },
  // Move a tile and its representation
  moveTile: function (tile, cell) {
    this.grid.cells[tile.x][tile.y] = null;
    this.grid.cells[cell.x][cell.y] = tile;
    tile.updatePosition(cell);
  },
  // Move tiles on the grid in the specified direction
  move: function (direction) {
    // 0: up, 1: right, 2: down, 3: left
    var self = this;
    if (this.isGameTerminated()) return; // Don't do anything if the game's over
    var cell, tile;
    var vector     = this.getVector(direction);
    var traversals = this.buildTraversals(vector);
    var moved      = false;
    // Save the current tile positions and remove merger information
    this.prepareTiles();
    // Traverse the grid in the right direction and move tiles
    traversals.x.forEach(function (x) {
      traversals.y.forEach(function (y) {
        cell = { x: x, y: y };
        tile = self.grid.cellContent(cell);

        if (tile) {
          var positions = self.findFarthestPosition(cell, vector);
          var next      = self.grid.cellContent(positions.next);

          // Only one merger per row traversal?
          if (next && next.value === tile.value && !next.mergedFrom) {
            var merged = new Tile(positions.next, tile.value * 2);
            merged.mergedFrom = [tile, next];

            self.grid.insertTile(merged);
            self.grid.removeTile(tile);

            // Converge the two tiles' positions
            tile.updatePosition(positions.next);

            // Update the score
            self.score += merged.value;

            // The mighty 2048 tile
            if (merged.value === 2048) self.won = true;
          } else {
            self.moveTile(tile, positions.farthest);
          }

          if (!self.positionsEqual(cell, tile)) {
            moved = true; // The tile moved from its original cell!
          }
        }
      });
    });
      
    if (moved) {
      this.addRandomTile();
      if (!this.movesAvailable()) {
        this.over = true; // Game over!
      }
      this.actuate();
    }
  },
  // Get the vector representing the chosen direction
  getVector: function (direction) {
    // Vectors representing tile movement
    var map = {
      0: { x: 0,  y: -1 }, // Up
      1: { x: 1,  y: 0 },  // Right
      2: { x: 0,  y: 1 },  // Down
      3: { x: -1, y: 0 }   // Left
    };

    return map[direction];
  },
  // Build a list of positions to traverse in the right order
  buildTraversals: function (vector) {
    var traversals = { x: [], y: [] };

    for (var pos = 0; pos < this.props.size; pos++) {
      traversals.x.push(pos);
      traversals.y.push(pos);
    }

    // Always traverse from the farthest cell in the chosen direction
    if (vector.x === 1) traversals.x = traversals.x.reverse();
    if (vector.y === 1) traversals.y = traversals.y.reverse();

    return traversals;
  },
  findFarthestPosition: function (cell, vector) {
    var previous;

    // Progress towards the vector direction until an obstacle is found
    do {
      previous = cell;
      cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
    } while (this.grid.withinBounds(cell) &&
             this.grid.cellAvailable(cell));

    return {
      farthest: previous,
      next: cell // Used to check if a merge is required
    };
  },
  movesAvailable: function () {
    return this.grid.cellsAvailable() || this.tileMatchesAvailable();
  },
  // Check for available matches between tiles (more expensive check)
  tileMatchesAvailable: function () {
    var self = this;

    var tile;

    for (var x = 0; x < this.props.size; x++) {
      for (var y = 0; y < this.props.size; y++) {
        tile = this.grid.cellContent({ x: x, y: y });

        if (tile) {
          for (var direction = 0; direction < 4; direction++) {
            var vector = self.getVector(direction);
            var cell   = { x: x + vector.x, y: y + vector.y };

            var other  = self.grid.cellContent(cell);

            if (other && other.value === tile.value) {
              return true; // These two tiles can be merged
            }
          }
        }
      }
    }

    return false;
  },
  positionsEqual: function (first, second) {
    return first.x === second.x && first.y === second.y;
  }
});
        
var styles = StyleSheet.create({
    container:{
        width: width,
        height: height,
        backgroundColor:"#faf8ef",
        paddingHorizontal:20
    }
});

module.exports = Container;
