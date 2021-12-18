// Site header hider //

(function () {
  var doc = document.documentElement;
  var w = window;
  var curScroll;
  var prevScroll = w.scrollY || doc.scrollTop;
  var curDirection = 0;
  var prevDirection = 0;
  var header = document.getElementById("site-header");
  var toggled;
  var threshold = 200;

  var checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;
    curScroll > prevScroll ? (curDirection = 2) : (curDirection = 1);
    curDirection !== prevDirection ? (toggled = toggleHeader()) : null;
    prevScroll = curScroll;
    toggled ? (prevDirection = curDirection) : null;
  };

  var toggleHeader = function () {
    toggled = true;
    if (curDirection === 2 && curScroll > threshold) {
      header.classList.add("hide");
    } else if (curDirection === 1) {
      header.classList.remove("hide");
    } else {
      toggled = false;
    }
    return toggled;
  };

  window.addEventListener("scroll", checkScroll);
})();
