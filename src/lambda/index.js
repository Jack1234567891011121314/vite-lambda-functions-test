exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "This is an index!",
  });
};