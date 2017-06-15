exports.tap = (logger = defaultLogger) => {
  return next => (event, context, callback) => {
    defaultLogger(event);

    next(event, context, callback);
  };
};

function defaultLogger(event) {
  console.log(JSON.stringify(event));
}
