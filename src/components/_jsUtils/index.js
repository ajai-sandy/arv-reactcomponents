import noop from "./noop";
import isMobile from "./isMobile";
import isTouch from "./isTouch";
import polyfill from "./polyfill";
import addInputBlurForIOS from "./addInputBlurForIOS";
import easeInOut from "./easingFunctions";
import scrollTo from "./scrollTo";
import getBoundClientRect from "./getBoundClientRect";
import scrollElemToView from "./scrollElemToView";
import scrollElemToTop from "./scrollElemToTop";
import { fixScroll, unFixScroll, isBodyFixed } from "./fixScroll";
import preventEventPropagation from "./preventEventPropagation";
import preventDefault from "./preventDefault";
import requestAnimationFrame from "./requestAnimationFrame";
import cancelAnimationFrame from "./cancelAnimationFrame";
import requestIdleCallback from "./requestIdleCallback";
import cancelIdleCallback from "./cancelIdleCallback";
import customPropTypes from "./customPropTypes";
import windowScroll from "./windowScroll";
import localStorage from "./localStorage";
import onElementScroll from "./onElementScroll";
import onElementResize from "./onElementResize";
import { getUrlParameter, setUrlParameter } from "./urlMethods";
import throttle from "./throttle";
import debounce from "./debounce";

const Utils = {
  noop,
  isMobile,
  isTouch,
  polyfill,
  addInputBlurForIOS,
  easeInOut,
  scrollTo,
  getBoundClientRect,
  scrollElemToView,
  scrollElemToTop,
  fixScroll,
  unFixScroll,
  isBodyFixed,
  preventEventPropagation,
  preventDefault,
  requestAnimationFrame,
  cancelAnimationFrame,
  requestIdleCallback,
  cancelIdleCallback,
  customPropTypes,
  windowScroll,
  localStorage,
  onElementScroll,
  onElementResize,
  getUrlParameter,
  setUrlParameter,
  throttle,
  debounce,
};

export default Utils;
