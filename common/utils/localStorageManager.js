import {
  AsyncStorage,
} from 'react-native'

var LocalStorageManager = function() {
  this.bestScoreKey = "bestScore"
  this.gameStateKey = "gameState"
  this.storage = AsyncStorage
}

LocalStorageManager.prototype.getItem = function(options){
      AsyncStorage.getItem(options.key,function(error,result){
          if(error){
              options.error(error);
          }else{
              options.success(result);
          }
      });
}
LocalStorageManager.prototype.setItem =function(options){
      AsyncStorage.setItem(options.key,options.value,function(error,result){
          if(error){
              options.error(error);
          }else{
              options.success(result);
          }
      });
}
LocalStorageManager.prototype.removeItem = function(options){
      AsyncStorage.removeItem(options.key,function(error,result){
          if(error){
              options.error(error);
          }else{
              options.success(result);
          }
      });
}

// Best score getters/setters
LocalStorageManager.prototype.getBestScore = function (callback) {
  var callback = callback?callback:function(){};
  this.getItem({
      key:this.bestScoreKey,
      success:function(result){
          callback(result && !isNaN(result)?parseInt(result):0);
      },
      error:function(error){
          console.log(error);
      }
  });
};
LocalStorageManager.prototype.setBestScore = function (score,callback) {
  var callback = callback?callback:function(){};
  this.setItem({
      key:this.bestScoreKey,
      value:score.toString(),
      success:callback,
      error:function(error){
          console.log(error);
      }
   });
};

// Game state getters/setters and clearing
LocalStorageManager.prototype.getGameState = function (callback) {
    return this.getItem({
        key:this.gameStateKey,
        success:function(result){
            var state = result?JSON.parse(result):null
            callback(state);
        },
        error:function(error){
          console.log(error);
        }
    })
};

LocalStorageManager.prototype.setGameState = function (gameState,callback) {
  var callback = callback?callback:function(){};
  var json = gameState?JSON.stringify(gameState):null;
  this.setItem({
      key:this.bestScoreKey,
      value:json,
      success:callback,
      error:function(error){
          console.log(error);
      }
   });
};
LocalStorageManager.prototype.clearGameState = function (callback) {
  var callback = callback?callback:function(){};
  this.removeItem({
      key:this.bestScoreKey,
      success:callback,
      error:function(error){
          console.log(error);
      }
  });
};

export default LocalStorageManager
