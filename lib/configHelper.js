exports.getConfig = function(context, callback) {
  var data = process.env.CONFIG;
  callback(null, JSON.parse(data));
}
