(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MakeOrdinal {
    constructor() {
        console.log('MakeOrdinal instantiated');
    }
    getOrdinal(originalNumber) {
        let ordinal = "th";
        let tenthPlaceNumber;
        let lastPlaceNumber;
        let stringOriginalNumber = originalNumber.toString();
        if (originalNumber > 9) {
            tenthPlaceNumber = this.getTenthPlace(originalNumber);
            if (tenthPlaceNumber > 9 && tenthPlaceNumber < 21) {
                return originalNumber.toString() + ordinal;
            }
            else {
                lastPlaceNumber = this.getLastPlace(tenthPlaceNumber);
            }
        }
        else {
            lastPlaceNumber = originalNumber;
        }
        switch (lastPlaceNumber) {
            case 1:
                {
                    ordinal = "st";
                    break;
                }
            case 2:
                {
                    ordinal = "nd";
                    break;
                }
            case 3:
                {
                    ordinal = "rd";
                    break;
                }
            default:
                {
                    ordinal = "th";
                    break;
                }
        }
        return originalNumber.toString() + ordinal;
    }
    getTenthPlace(myNumber) {
        let stringNumber = myNumber.toString();
        let newNumber = Number(stringNumber.slice((stringNumber.length - 2), stringNumber.length));
        return newNumber;
    }
    getLastPlace(myNumber) {
        let newNumber;
        if (myNumber > 10) {
            let stringNumber = myNumber.toString();
            newNumber = Number(stringNumber.slice(1, 2));
        }
        else {
            newNumber = myNumber;
        }
        return newNumber;
    }
}
exports.MakeOrdinal = MakeOrdinal;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MakeOrdinal_1 = require("./MakeOrdinal");
let multi = document.getElementById('multi');
let music = document.getElementById('music');
let holder = document.getElementById('holder');
let mainImage = document.getElementById('mainimage');
let theDate = document.getElementById('thedate');
let makeOrdinal = new MakeOrdinal_1.MakeOrdinal();
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
                theDate.style.opacity = '1';
                theDate.innerHTML = getTheDate();
            }, 3000);
        }
    }, 100);
});
function getTheDate() {
    let today;
    var d = new Date();
    let theDay = d.getDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    today = months[d.getMonth()];
    today = today + theDay.toString();
    console.log(today);
    for (var _i = 0; _i < 130; _i++) {
        console.log(_i + " " + makeOrdinal.getOrdinal(_i));
    }
    //console.log(makeOrdinal.getOrdinal(3));
    return today;
}
;
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
        music.style.left = (holder.clientWidth - 220).toString() + "px";
    }
};

},{"./MakeOrdinal":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvTWFrZU9yZGluYWwudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7SUFHSTtRQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sVUFBVSxDQUFDLGNBQXNCO1FBRXBDLElBQUksT0FBTyxHQUFVLElBQUksQ0FBQztRQUMxQixJQUFJLGdCQUF1QixDQUFDO1FBQzVCLElBQUksZUFBc0IsQ0FBQztRQUMzQixJQUFJLG9CQUFvQixHQUFVLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU1RCxJQUFHLGNBQWMsR0FBRyxDQUFDLEVBQ3JCO1lBQ0ksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN0RCxJQUFHLGdCQUFnQixHQUFHLENBQUMsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLEVBQ2hEO2dCQUVJLE9BQU8sY0FBYyxDQUFDLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQzthQUM5QztpQkFFRDtnQkFDSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0o7YUFFRDtZQUNJLGVBQWUsR0FBRyxjQUFjLENBQUM7U0FDcEM7UUFFRCxRQUFPLGVBQWUsRUFDdEI7WUFDSSxLQUFLLENBQUM7Z0JBQ047b0JBQ0ksT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDZixNQUFNO2lCQUNUO1lBQ0QsS0FBSyxDQUFDO2dCQUNOO29CQUNJLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2YsTUFBTTtpQkFDVDtZQUNELEtBQUssQ0FBQztnQkFDTjtvQkFDSSxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNmLE1BQU07aUJBQ1Q7WUFDRDtnQkFDQTtvQkFDSSxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNmLE1BQU07aUJB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Q0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7S0FDbkU7QUFDTCxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgY2xhc3MgTWFrZU9yZGluYWxcbntcblxuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNYWtlT3JkaW5hbCBpbnN0YW50aWF0ZWQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0T3JkaW5hbChvcmlnaW5hbE51bWJlcjogbnVtYmVyKTpzdHJpbmdcbiAgICB7XG4gICAgICAgIGxldCBvcmRpbmFsOnN0cmluZyA9IFwidGhcIjtcbiAgICAgICAgbGV0IHRlbnRoUGxhY2VOdW1iZXI6bnVtYmVyO1xuICAgICAgICBsZXQgbGFzdFBsYWNlTnVtYmVyOm51bWJlcjtcbiAgICAgICAgbGV0IHN0cmluZ09yaWdpbmFsTnVtYmVyOnN0cmluZyA9IG9yaWdpbmFsTnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgIFxuICAgICAgICBpZihvcmlnaW5hbE51bWJlciA+IDkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRlbnRoUGxhY2VOdW1iZXIgPSB0aGlzLmdldFRlbnRoUGxhY2Uob3JpZ2luYWxOdW1iZXIpO1xuICAgICAgICAgICAgaWYodGVudGhQbGFjZU51bWJlciA+IDkgJiYgdGVudGhQbGFjZU51bWJlciA8IDIxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbE51bWJlci50b1N0cmluZygpICsgb3JkaW5hbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYXN0UGxhY2VOdW1iZXIgPSB0aGlzLmdldExhc3RQbGFjZSh0ZW50aFBsYWNlTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhc3RQbGFjZU51bWJlciA9IG9yaWdpbmFsTnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2gobGFzdFBsYWNlTnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3JkaW5hbCA9IFwic3RcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcmRpbmFsID0gXCJuZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9yZGluYWwgPSBcInJkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9yZGluYWwgPSBcInRoXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsTnVtYmVyLnRvU3RyaW5nKCkgKyBvcmRpbmFsO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VGVudGhQbGFjZShteU51bWJlcjpudW1iZXIpOm51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IHN0cmluZ051bWJlcjpzdHJpbmcgPSBteU51bWJlci50b1N0cmluZygpO1xuICAgICAgICBsZXQgbmV3TnVtYmVyOm51bWJlciA9IE51bWJlcihzdHJpbmdOdW1iZXIuc2xpY2UoKHN0cmluZ051bWJlci5sZW5ndGgtMiksIHN0cmluZ051bWJlci5sZW5ndGgpKTtcbiAgICAgICAgcmV0dXJuIG5ld051bWJlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldExhc3RQbGFjZShteU51bWJlcjpudW1iZXIpOm51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IG5ld051bWJlcjpudW1iZXI7XG4gICAgICAgIGlmKG15TnVtYmVyID4gMTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBzdHJpbmdOdW1iZXI6c3RyaW5nID0gbXlOdW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG5ld051bWJlciA9IE51bWJlcihzdHJpbmdOdW1iZXIuc2xpY2UoMSwyKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBuZXdOdW1iZXIgPSBteU51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld051bWJlcjtcbiAgICB9XG59IiwiXG4vL2ltcG9ydCB7IHNheUhlbGxvIH0gZnJvbSBcIi4vTmljZURhdGVcIjtcbmltcG9ydCB7IE5pY2VEYXRlIH0gZnJvbSBcIi4vTmljZURhdGVcIjtcbmltcG9ydCB7IE1ha2VPcmRpbmFsIH0gZnJvbSBcIi4vTWFrZU9yZGluYWxcIjtcblxubGV0IG11bHRpOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211bHRpJyk7XG5sZXQgbXVzaWM6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVzaWMnKTtcbmxldCBob2xkZXI6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9sZGVyJyk7XG5sZXQgbWFpbkltYWdlOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5pbWFnZScpO1xubGV0IHRoZURhdGU6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlZGF0ZScpO1xubGV0IG1ha2VPcmRpbmFsID0gbmV3IE1ha2VPcmRpbmFsKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSBcbnsgXG4gICAgY29uc29sZS5sb2coXCJsb2FkZWRcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBtYWluSW1hZ2Uuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPiA0ODEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aW1lb3VlIG1ldCcpXG4gICAgICAgICAgICAgICAgbXVsdGkuc3R5bGUubGVmdCA9ICcyMHB4Jztcblx0XHRcdFx0bXVsdGkuc3R5bGUub3BhY2l0eSA9ICcxJztcblx0XHRcdFx0bXVzaWMuc3R5bGUubGVmdCA9IChob2xkZXIuY2xpZW50V2lkdGggLSAyMjApLnRvU3RyaW5nKCkgK1wicHhcIjtcbiAgICAgICAgICAgICAgICBtdXNpYy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgICAgIHRoZURhdGUuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgICB0aGVEYXRlLmlubmVySFRNTCA9IGdldFRoZURhdGUoKTtcblx0XHRcdH0sMzAwMCk7XG5cdFx0fVxuICAgIH0sMTAwKTtcbn0pO1xuXG5cbmZ1bmN0aW9uIGdldFRoZURhdGUoKXtcbiAgICBsZXQgdG9kYXk6c3RyaW5nO1xuICAgIFxuICAgIHZhciBkID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdGhlRGF5ID0gZC5nZXREYXRlKCk7XG4gICAgdmFyIG1vbnRocyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdO1xuICAgIHRvZGF5ID0gbW9udGhzW2QuZ2V0TW9udGgoKV07XG4gICAgdG9kYXkgPSB0b2RheSArIHRoZURheS50b1N0cmluZygpO1xuICAgIGNvbnNvbGUubG9nKHRvZGF5KTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgMTMwOyBfaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCBfaSArIFwiIFwiICsgIG1ha2VPcmRpbmFsLmdldE9yZGluYWwoX2kpKTtcblxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKG1ha2VPcmRpbmFsLmdldE9yZGluYWwoMykpO1xuICAgIHJldHVybiB0b2RheSBcbn07XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24oZXZlbnQpe1xuXG4gICAgLy9cbn0pO1xuXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbihldmVudCkgXG57XG4gICAgY29uc29sZS5sb2coXCJ3aWR0aCA9IFwiICsgd2luZG93LmlubmVyV2lkdGggKyBcIiBoZWlnaHQgPSBcIiArIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCA0ODApXG4gICAge1xuICAgICAgICBtdWx0aS5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICBtdXNpYy5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBtdWx0aS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBtdXNpYy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBtdWx0aS5zdHlsZS5sZWZ0ID0gJzIwcHgnO1xuICAgICAgICBtdXNpYy5zdHlsZS5sZWZ0ID0gKGhvbGRlci5jbGllbnRXaWR0aCAtIDIyMCkudG9TdHJpbmcoKSArIFwicHhcIjtcbiAgICB9XG59O1xuXG5cbiJdfQ==
