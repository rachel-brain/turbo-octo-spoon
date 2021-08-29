module.exports = {
    // the helper method 'format_time' will take in a timestamp and return a string with ONLY the time?
    // need this to date the blogpost
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
  };