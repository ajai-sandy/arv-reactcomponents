import {
  windowRequestAnimationFrame,
  vendorRequestAnimationFrame,
} from "../constants";

let lastTime = 0;

const customFn = cB => {
  const currTime = new Date().getTime();
  const timeToCall = Math.max(0, 16 - (currTime - lastTime));
  const id = setTimeout(() => {
    cB(currTime + timeToCall);
  }, timeToCall);
  lastTime = currTime + timeToCall;
  return id;
};

function requestAnimationFrame(callback) {
  const rAF =
    windowRequestAnimationFrame || vendorRequestAnimationFrame || customFn;
  return rAF(callback);
}

export default requestAnimationFrame;
