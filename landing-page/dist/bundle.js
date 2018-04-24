(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let multi = document.getElementById('multi');
let music = document.getElementById('music');
let holder = document.getElementById('holder');
let mainImage = document.getElementById('mainimage');
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("loaded");
    setTimeout(function () {
        mainImage.style.opacity = '1';
        if (window.innerWidth > 481) {
            setTimeout(function () {
                console.log('timeoue met');
                multi.style.left = '20px';
                multi.style.opacity = '1';
                music.style.left = (holder.clientWidth - 220).toString() + "px";
                music.style.opacity = '1';
            }, 3000);
        }
    }, 100);
});
window.addEventListener("mousemove", function (event) {
    //
});
window.onresize = function (event) {
    console.log("width = " + window.innerWidth + " height = " + window.innerHeight);
    if (window.innerWidth < 480) {
        multi.style.left = '0';
        music.style.left = '0';
    }
    else {
        multi.style.opacity = '1';
        music.style.opacity = '1';
        multi.style.left = '20px';
        music.style.left = (holder.clientWidth - 220).toString() + px;
    }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0NBLElBQUksS0FBSyxHQUFlLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekQsSUFBSSxLQUFLLEdBQWUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6RCxJQUFJLE1BQU0sR0FBZSxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNELElBQUksU0FBUyxHQUFlLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFakUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQVMsS0FBSztJQUV4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLFVBQVUsQ0FBQztRQUVQLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUM5QixJQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUMxQjtZQUNJLFVBQVUsQ0FBQztnQkFFUCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2dCQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQ3RDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFFLElBQUksQ0FBQztnQkFDL0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQzNCLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztTQUNSO0lBQ0MsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQVMsS0FBSztJQUUvQyxFQUFFO0FBQ04sQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVMsS0FBSztJQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEYsSUFBRyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFDMUI7UUFDSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDdkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0tBQzFCO1NBRUQ7UUFDSSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDO0tBQ2pFO0FBQ0wsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG5sZXQgbXVsdGk6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVsdGknKTtcbmxldCBtdXNpYzpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdXNpYycpO1xubGV0IGhvbGRlcjpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob2xkZXInKTtcbmxldCBtYWluSW1hZ2U6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbmltYWdlJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSBcbnsgXG4gICAgY29uc29sZS5sb2coXCJsb2FkZWRcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBtYWluSW1hZ2Uuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPiA0ODEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aW1lb3VlIG1ldCcpXG4gICAgICAgICAgICAgICAgbXVsdGkuc3R5bGUubGVmdCA9ICcyMHB4Jztcblx0XHRcdFx0bXVsdGkuc3R5bGUub3BhY2l0eSA9ICcxJztcblx0XHRcdFx0bXVzaWMuc3R5bGUubGVmdCA9IChob2xkZXIuY2xpZW50V2lkdGggLSAyMjApLnRvU3RyaW5nKCkgK1wicHhcIjtcblx0XHRcdFx0bXVzaWMuc3R5bGUub3BhY2l0eSA9ICcxJztcblx0XHRcdH0sMzAwMCk7XG5cdFx0fVxuICAgIH0sMTAwKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihldmVudCl7XG5cbiAgICAvL1xufSk7XG5cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKGV2ZW50KSBcbntcbiAgICBjb25zb2xlLmxvZyhcIndpZHRoID0gXCIgKyB3aW5kb3cuaW5uZXJXaWR0aCArIFwiIGhlaWdodCA9IFwiICsgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDQ4MClcbiAgICB7XG4gICAgICAgIG11bHRpLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIG11c2ljLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIG11bHRpLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIG11c2ljLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIG11bHRpLnN0eWxlLmxlZnQgPSAnMjBweCc7XG4gICAgICAgIG11c2ljLnN0eWxlLmxlZnQgPSAoaG9sZGVyLmNsaWVudFdpZHRoIC0gMjIwKS50b1N0cmluZygpICsgcHg7XG4gICAgfVxufTtcblxuXG4iXX0=
