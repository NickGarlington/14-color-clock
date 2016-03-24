(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

setInterval(function () {
  var time = new Date();
  console.log(time);

  var hours = padNumber(time.getHours());
  var minutes = padNumber(time.getMinutes());
  var seconds = padNumber(time.getSeconds());

  var percentMinute = time.getSeconds() / 60;
  var totalWidth = 73;
  console.log(percentMinute);

  document.querySelector("#timerBar").style.width = percentMinute * totalWidth + "px";

  document.querySelector("#clock").innerHTML = hours + " : " + minutes + " : " + seconds;
}, 1000);

function padNumber(num) {
  if (num < 10) {
    return "0" + String(num);
  } else {
    return String(num);
  }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxZQUFZLFlBQU07QUFDaEIsTUFBSSxPQUFPLElBQUksSUFBSixFQUFQLENBRFk7QUFFaEIsVUFBUSxHQUFSLENBQVksSUFBWixFQUZnQjs7QUFJaEIsTUFBSSxRQUFRLFVBQVUsS0FBSyxRQUFMLEVBQVYsQ0FBUixDQUpZO0FBS2hCLE1BQUksVUFBVSxVQUFVLEtBQUssVUFBTCxFQUFWLENBQVYsQ0FMWTtBQU1oQixNQUFJLFVBQVUsVUFBVSxLQUFLLFVBQUwsRUFBVixDQUFWLENBTlk7O0FBUWhCLE1BQUksZ0JBQWdCLEtBQUssVUFBTCxLQUFvQixFQUFwQixDQVJKO0FBU2hCLE1BQUksYUFBYSxFQUFiLENBVFk7QUFVaEIsVUFBUSxHQUFSLENBQVksYUFBWixFQVZnQjs7QUFZaEIsV0FBUyxhQUFULENBQXVCLFdBQXZCLEVBQW9DLEtBQXBDLENBQTBDLEtBQTFDLEdBQWtELGFBQUMsR0FBZ0IsVUFBaEIsR0FBOEIsSUFBL0IsQ0FabEM7O0FBY2hCLFdBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQyxTQUFqQyxHQUFnRCxnQkFBVyxrQkFBYSxPQUF4RSxDQWRnQjtDQUFOLEVBZ0JULElBaEJIOztBQWtCQSxTQUFTLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0I7QUFDdEIsTUFBSSxNQUFNLEVBQU4sRUFBVTtBQUNaLFdBQU8sTUFBTSxPQUFPLEdBQVAsQ0FBTixDQURLO0dBQWQsTUFHSztBQUNILFdBQU8sT0FBTyxHQUFQLENBQVAsQ0FERztHQUhMO0NBREYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwic2V0SW50ZXJ2YWwoKCkgPT4ge1xuICBsZXQgdGltZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnNvbGUubG9nKHRpbWUpO1xuXG4gIGxldCBob3VycyA9IHBhZE51bWJlcih0aW1lLmdldEhvdXJzKCkpO1xuICBsZXQgbWludXRlcyA9IHBhZE51bWJlcih0aW1lLmdldE1pbnV0ZXMoKSk7XG4gIGxldCBzZWNvbmRzID0gcGFkTnVtYmVyKHRpbWUuZ2V0U2Vjb25kcygpKTtcblxuICBsZXQgcGVyY2VudE1pbnV0ZSA9IHRpbWUuZ2V0U2Vjb25kcygpIC8gNjA7XG4gIGxldCB0b3RhbFdpZHRoID0gNzM7XG4gIGNvbnNvbGUubG9nKHBlcmNlbnRNaW51dGUpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZXJCYXJcIikuc3R5bGUud2lkdGggPSAocGVyY2VudE1pbnV0ZSAqIHRvdGFsV2lkdGgpICsgXCJweFwiO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvY2tcIikuaW5uZXJIVE1MID0gYCR7aG91cnN9IDogJHttaW51dGVzfSA6ICR7c2Vjb25kc31gO1xuXG59LCAxMDAwKVxuXG5mdW5jdGlvbiBwYWROdW1iZXIobnVtKSB7XG4gIGlmIChudW0gPCAxMCkge1xuICAgIHJldHVybiBcIjBcIiArIFN0cmluZyhudW0pO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBTdHJpbmcobnVtKTtcbiAgfVxufVxuIl19
