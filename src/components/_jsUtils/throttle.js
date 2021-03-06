const throttle = (fn, delay) => {
  let flag = false;
  return function(...args) {
    const context = this;
    if (!flag) {
      setTimeout(() => {
        fn.apply(context, args);
        flag = false;
      }, delay);
      flag = true;
    }
  };
};

export default throttle;
