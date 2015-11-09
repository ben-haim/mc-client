var Promise = require('bluebird');
var _mc

module.exports.init = function(mc){
  _mc = mc;
  console.log("initialized : " + _mc);
}

module.exports.getAssetBalances = function() {
  return new Promise(function(resolve, reject){
    _mc.getAssetBalances(function(err, result) {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};
