import noop from './noop';

function timeChunk(data, process, callback = noop) {
  let context = this || null;
  step();

  function step() {
    let now = Date.now();

    do {
      let task = data.shift();
      process.call(context, task);
    } while (data.length > 0 && Date.now() - now <= 50);

    if (data.length > 0) {
      setTimeout(step, 25);
    } else {
      callback();
    }
  }
}

export default timeChunk;
