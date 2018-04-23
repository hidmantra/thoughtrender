(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return 'greet.ts / greet.js ' + name;
}
exports.sayHello = sayHello;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./greet");
function showHello(divName, name) {
    const elt = document.getElementById(divName);
    name = name + " two eighteen bullcrap";
    const stats_width = document.getElementById('stats_width');
    const stats_height = document.getElementById('stats_height');
    elt.innerText = greet_1.sayHello(name);
    stats_width.innerText = ("window width: " + window.innerWidth);
    stats_height.innerText = ("window height: " + window.innerHeight);
}
showHello("greeting", "TypeScript");

},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsa0JBQXlCLElBQVk7SUFDakMsT0FBTyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7QUFDekMsQ0FBQztBQUZELDRCQUVDOzs7OztBQ0ZELG1DQUFtQztBQUVuQyxtQkFBbUIsT0FBZSxFQUFFLElBQVk7SUFDNUMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxJQUFJLEdBQUcsSUFBSSxHQUFHLHdCQUF3QixDQUFDO0lBQ3ZDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0QsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM3RCxHQUFHLENBQUMsU0FBUyxHQUFHLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsV0FBVyxDQUFDLFNBQVMsR0FBRyxDQUFFLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRSxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUUsaUJBQWlCLEdBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXRFLENBQUM7QUFFRCxTQUFTLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKG5hbWU6IHN0cmluZyl7XG4gICAgcmV0dXJuICdncmVldC50cyAvIGdyZWV0LmpzICcgKyBuYW1lO1xufSIsImltcG9ydCB7IHNheUhlbGxvIH0gZnJvbSBcIi4vZ3JlZXRcIjtcblxuZnVuY3Rpb24gc2hvd0hlbGxvKGRpdk5hbWU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSk7XG4gICAgbmFtZSA9IG5hbWUgKyBcIiB0d28gZWlnaHRlZW4gYnVsbGNyYXBcIjtcbiAgICBjb25zdCBzdGF0c193aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0c193aWR0aCcpO1xuICAgIGNvbnN0IHN0YXRzX2hlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0c19oZWlnaHQnKTtcbiAgICBlbHQuaW5uZXJUZXh0ID0gc2F5SGVsbG8obmFtZSk7XG4gICAgc3RhdHNfd2lkdGguaW5uZXJUZXh0ID0gKCBcIndpbmRvdyB3aWR0aDogXCIgKyB3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgc3RhdHNfaGVpZ2h0LmlubmVyVGV4dCA9ICggXCJ3aW5kb3cgaGVpZ2h0OiBcIiArd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICBcbn1cblxuc2hvd0hlbGxvKFwiZ3JlZXRpbmdcIiwgXCJUeXBlU2NyaXB0XCIpOyAgICAiXX0=
