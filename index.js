var bitcoin_rpc = require('multichain');
var dotenv = require('dotenv');

dotenv.load();

var mc = module.exports = new bitcoin_rpc.Client({
  host: process.env.host,
  port: process.env.port,
  user: process.env.user,
  pass: process.env.pass 
});

var mcapi = require('./mcapi')
mcapi.init(mc);

mcapi.getAssetBalances().then(function(result){
  console.log(result);
}).catch(function(err){
  console.log("ERROR :" + err);
})

// mc.getAssetBalances(function(err, result) {
//   if (err) {
//     console.log(err);
//     return console.error("Error:", err);
//   }
//   console.log(result);
// });

// mc.getBalance('*', 6, function(err, balance, resHeaders) {
//   if (err) return console.log(err);
//   console.log('Balance:', balance);
// });

// mc.getNewAddress("", function(err, address) {
//   if (err) return console.log(err);
//   console.log('Address', address);
//
//   mc.dumpPrivKey(address, function(err, privkey){
//     if (err) return console.log(err);
//     console.log('Privkey', privkey);
//
//   })
//
// });

// mc.getInfo("",function(err, info) {
//     if(err)
//         return console.error("Error:", err);
//
//     console.log(info);
// });


// mc.getAddressesByAccount("", function(err, result) {
//   if (err) {
//     console.log(err);
//     return console.error("Error:", err);
//   }
//   console.log(result);
// });
