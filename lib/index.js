exports.tap = (tapper = eventLogger) => {
  return next => (event, context, callback) => {
    tapper(event, context);

    next(event, context, callback);
  };
};

function eventLogger(event) {
  console.log(JSON.stringify(event));
}
