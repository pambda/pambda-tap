exports.tap = (tapper = eventLogger) => {
  return next => (event, context, callback) => {
    tapper(event);

    next(event, context, callback);
  };
};

function eventLogger(event) {
  console.log(JSON.stringify(event));
}
