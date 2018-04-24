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
window.onresize = function (event) {
    console.log("width = " + window.innerWidth + " height = " + window.innerHeight);
    if (window.innerWidth < 480) {
        multi.style.left = '0';
        music.style.left = '0';
    }
    else {
        multi.style.opacity = '1';
        music.style.opacity = '1';
        multi.style.left = '20';
        music.style.left = (holder.clientWidth - 220).toString();
    }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0NBLElBQUksS0FBSyxHQUFlLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekQsSUFBSSxLQUFLLEdBQWUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6RCxJQUFJLE1BQU0sR0FBZSxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNELElBQUksU0FBUyxHQUFlLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFakUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQVMsS0FBSztJQUV4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLFVBQVUsQ0FBQztRQUVQLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUM5QixJQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUMxQjtZQUNJLFVBQVUsQ0FBQztnQkFFUCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2dCQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQ3RDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFFLElBQUksQ0FBQztnQkFDL0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQzNCLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztTQUNSO0lBQ0MsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDLENBQUM7QUFHSCxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVMsS0FBSztJQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEYsSUFBRyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFDMUI7UUFDSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDdkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0tBQzFCO1NBRUQ7UUFDSSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN4QixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDNUQ7QUFDTCxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcbmxldCBtdWx0aTpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdWx0aScpO1xubGV0IG11c2ljOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211c2ljJyk7XG5sZXQgaG9sZGVyOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbGRlcicpO1xubGV0IG1haW5JbWFnZTpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluaW1hZ2UnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIFxueyBcbiAgICBjb25zb2xlLmxvZyhcImxvYWRlZFwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIG1haW5JbWFnZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDQ4MSlcbiAgICAgICAge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVvdWUgbWV0JylcbiAgICAgICAgICAgICAgICBtdWx0aS5zdHlsZS5sZWZ0ID0gJzIwcHgnO1xuXHRcdFx0XHRtdWx0aS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuXHRcdFx0XHRtdXNpYy5zdHlsZS5sZWZ0ID0gKGhvbGRlci5jbGllbnRXaWR0aCAtIDIyMCkudG9TdHJpbmcoKSArXCJweFwiO1xuXHRcdFx0XHRtdXNpYy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuXHRcdFx0fSwzMDAwKTtcblx0XHR9XG4gICAgfSwxMDApO1xufSk7XG5cblxud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oZXZlbnQpIFxue1xuICAgIGNvbnNvbGUubG9nKFwid2lkdGggPSBcIiArIHdpbmRvdy5pbm5lcldpZHRoICsgXCIgaGVpZ2h0ID0gXCIgKyB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgNDgwKVxuICAgIHtcbiAgICAgICAgbXVsdGkuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgbXVzaWMuc3R5bGUubGVmdCA9ICcwJztcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgbXVsdGkuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgbXVzaWMuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgbXVsdGkuc3R5bGUubGVmdCA9ICcyMCc7XG4gICAgICAgIG11c2ljLnN0eWxlLmxlZnQgPSAoaG9sZGVyLmNsaWVudFdpZHRoIC0gMjIwKS50b1N0cmluZygpO1xuICAgIH1cbn07XG5cblxuIl19
