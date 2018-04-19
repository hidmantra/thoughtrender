(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return 'hello from me using gulp ' + name;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsa0JBQXlCLElBQVk7SUFDakMsT0FBTywyQkFBMkIsR0FBRyxJQUFJLENBQUM7QUFDOUMsQ0FBQztBQUZELDRCQUVDOzs7OztBQ0ZELG1DQUFtQztBQUVuQyxtQkFBbUIsT0FBZSxFQUFFLElBQVk7SUFDNUMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxJQUFJLEdBQUcsSUFBSSxHQUFHLHdCQUF3QixDQUFDO0lBQ3ZDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0QsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM3RCxHQUFHLENBQUMsU0FBUyxHQUFHLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsV0FBVyxDQUFDLFNBQVMsR0FBRyxDQUFFLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRSxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUUsaUJBQWlCLEdBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXRFLENBQUM7QUFFRCxTQUFTLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKG5hbWU6IHN0cmluZyl7XG4gICAgcmV0dXJuICdoZWxsbyBmcm9tIG1lIHVzaW5nIGd1bHAgJyArIG5hbWU7XG59IiwiaW1wb3J0IHsgc2F5SGVsbG8gfSBmcm9tIFwiLi9ncmVldFwiO1xuXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZOYW1lKTtcbiAgICBuYW1lID0gbmFtZSArIFwiIHR3byBlaWdodGVlbiBidWxsY3JhcFwiO1xuICAgIGNvbnN0IHN0YXRzX3dpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRzX3dpZHRoJyk7XG4gICAgY29uc3Qgc3RhdHNfaGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRzX2hlaWdodCcpO1xuICAgIGVsdC5pbm5lclRleHQgPSBzYXlIZWxsbyhuYW1lKTtcbiAgICBzdGF0c193aWR0aC5pbm5lclRleHQgPSAoIFwid2luZG93IHdpZHRoOiBcIiArIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICBzdGF0c19oZWlnaHQuaW5uZXJUZXh0ID0gKCBcIndpbmRvdyBoZWlnaHQ6IFwiICt3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIFxufVxuXG5zaG93SGVsbG8oXCJncmVldGluZ1wiLCBcIlR5cGVTY3JpcHRcIik7ICAgICJdfQ==
