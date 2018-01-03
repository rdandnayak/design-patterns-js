let channels = {};

function subscribe(channel, context, func) {
  if (!channels[channel]) {
    channels[channel] = [];
  }
  channels[channel].push({
    context,
    func
  });
}

function publish(channel) {
  if (!channels[channel]) return false;

  let args = Array.prototype.slice.call(arguments, 1);
  for (let i = 0; i < channels[channel].length; i++) {
    let sub = channels[channel][i];
    sub.func.apply(sub.context, args);
  }
}

module.exports = { channels, subscribe, publish };
