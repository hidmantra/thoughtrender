(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class is used to convert any positive whole number into an ordinal number
 *
 * @author Deriv Diggs
 * @version 1.0
 */
class MakeOrdinal {
    constructor() {
        console.log('MakeOrdinal instantiated');
    }
    /**
     * returns the ordinal value of any posive whole number
     *
     * @param originalNumber should be positive whole number
     */
    getOrdinal(originalNumber) {
        let ordinal = "th";
        let tensPlaceNumber;
        let lastPlaceNumber;
        if (originalNumber > 9) {
            tensPlaceNumber = this.getTensPlace(originalNumber);
            if (tensPlaceNumber > 9 && tensPlaceNumber < 21) {
                return originalNumber.toString() + ordinal;
            }
            else {
                lastPlaceNumber = this.getOnesPlace(tensPlaceNumber);
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
    /**
     * returns the ones and tens place of any number
     *
     * @param myNumber the base number
     */
    getTensPlace(myNumber) {
        let stringNumber = myNumber.toString();
        let newNumber = Number(stringNumber.slice((stringNumber.length - 2), stringNumber.length));
        return newNumber;
    }
    /**
     * returns the number in the ones place
     *
     * @param myNumber the base number
     */
    getOnesPlace(myNumber) {
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
/**
 * This class is used to get additional forms of the date
 *
 * @author Deriv Diggs
 * @version 1.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const MakeOrdinal_1 = require("./MakeOrdinal");
class NiceDate {
    constructor() {
        this.makeOrdinal = new MakeOrdinal_1.MakeOrdinal();
        this.d = new Date();
    }
    /**
     * returns the name of the current month
     */
    getMonth() {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.month = months[this.d.getMonth()];
        return this.month;
    }
    ;
    /**
     * returns the current ordinal day
     */
    getOrdinalDate() {
        let date = String(this.d.getDate());
        this.ordinalDate = this.makeOrdinal.getOrdinal(Number(date));
        return this.ordinalDate;
    }
}
exports.NiceDate = NiceDate;

},{"./MakeOrdinal":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NiceDate_1 = require("./NiceDate");
// Html Elements
let multi = document.getElementById('multi');
let music = document.getElementById('music');
let holder = document.getElementById('holder');
let mainimage = document.getElementById('mainimage');
let thedate = document.getElementById('thedate');
let city = document.getElementById('city');
let niceDate = new NiceDate_1.NiceDate();
let moveBKReady = true;
let screenHeight;
let screenWidth;
let mouseX;
let mouseY;
/**
 * Fires when everything is loaded and ready to GO!
 */
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("loaded");
    setTimeout(function () {
        mainimage.style.opacity = '1';
        if (window.innerWidth > 481) {
            setTimeout(function () {
                console.log('timeoue met');
                multi.style.left = '20px';
                multi.style.opacity = '1';
                music.style.left = (holder.clientWidth - 220).toString() + "px";
                music.style.opacity = '1';
                thedate.style.opacity = '1';
                thedate.style.left = '20px';
                thedate.innerHTML = getTheDate();
            }, 3000);
        }
    }, 100);
});
/**
 * Adjusts the screen when mouse moves or screen is resized
 */
function adjustScreen() {
    let adjustX = ((window.innerWidth / 2) - mouseX) / 10;
    let adjustY = ((window.innerHeight / 2) - mouseY) / 10;
    let cityNewLeft;
    if (adjustX > -5 && adjustX < 5) {
        moveBKReady = true;
    }
    ;
    if (moveBKReady) {
        cityNewLeft = ((city.clientWidth / 2 - city.clientWidth / 2) + adjustX);
        console.log('city x: ' + cityNewLeft);
        if (cityNewLeft < -40) {
            cityNewLeft = -40;
        }
        // city.style.left = String(cityNewLeft)+ "px";
        city.style.top = String(((city.clientHeight / 2 - city.clientHeight / 2) + adjustY)) + "px";
        console.log('adjustX:' + adjustX);
    }
    //fix bug that clear 'left' when resized to mobile size
    thedate.style.left = '20px';
}
/**
 * Gets the date for display
 */
function getTheDate() {
    let today = niceDate.getMonth() + " " + niceDate.getOrdinalDate();
    return today;
}
;
document.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    adjustScreen();
});
/**
 * fires when window is resized
 *
 * re-alignes buttons depending on screen width
 */
window.onresize = function (event) {
    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth;
    console.log('w: ' + screenWidth + ' h: ' + screenHeight);
    if (window.innerWidth < 480) {
        multi.style.left = '0';
        music.style.left = '0';
        thedate.style.left = '0';
    }
    else {
        multi.style.opacity = '1';
        music.style.opacity = '1';
        multi.style.left = '20px';
        music.style.left = (holder.clientWidth - 220).toString() + "px";
    }
    adjustScreen();
};

},{"./NiceDate":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvTWFrZU9yZGluYWwudHMiLCJzcmMvTmljZURhdGUudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7O0dBS0c7QUFDSDtJQUdJO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksVUFBVSxDQUFDLGNBQXNCO1FBRXBDLElBQUksT0FBTyxHQUFVLElBQUksQ0FBQztRQUMxQixJQUFJLGVBQXNCLENBQUM7UUFDM0IsSUFBSSxlQUFzQixDQUFDO1FBRTNCLElBQUcsY0FBYyxHQUFHLENBQUMsRUFDckI7WUFDSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRCxJQUFHLGVBQWUsR0FBRyxDQUFDLElBQUksZUFBZSxHQUFHLEVBQUUsRUFDOUM7Z0JBRUksT0FBTyxjQUFjLENBQUMsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDO2FBQzlDO2lCQUVEO2dCQUNJLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3hEO1NBQ0o7YUFFRDtZQUNJLGVBQWUsR0FBRyxjQUFjLENBQUM7U0FDcEM7UUFFRCxRQUFPLGVBQWUsRUFDdEI7WUFDSSxLQUFLLENBQUM7Z0JBQ047b0JBQ0ksT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDZixNQUFNO2lCQUNUO1lBQ0QsS0FBSyxDQUFDO2dCQUNOO29CQUNJLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2YsTUFBTTtpQkFDVDtZQUNELEtBQUssQ0FBQztnQkFDTjtvQkFDSSxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNmLE1BQU07aUJBQ1Q7WUFDRDtnQkFDQTtvQkFDSSxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNmLE1BQU07aUJBQ1Q7U0FDSjtRQUNE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S0FBSyxDQUFDLE9BQU8sQ0FBQztJQUV2QixZQUFZLEVBQUUsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUdIOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVMsS0FBSztJQUU1QixZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNsQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsTUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDO0lBRXpELElBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQzFCO1FBQ0ksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN2QixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7S0FDNUI7U0FFRDtRQUNJLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7S0FDbkU7SUFDRCxZQUFZLEVBQUUsQ0FBQztBQUNuQixDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBjb252ZXJ0IGFueSBwb3NpdGl2ZSB3aG9sZSBudW1iZXIgaW50byBhbiBvcmRpbmFsIG51bWJlclxuICogXG4gKiBAYXV0aG9yIERlcml2IERpZ2dzXG4gKiBAdmVyc2lvbiAxLjBcbiAqL1xuZXhwb3J0IGNsYXNzIE1ha2VPcmRpbmFsXG57XG5cbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnTWFrZU9yZGluYWwgaW5zdGFudGlhdGVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyB0aGUgb3JkaW5hbCB2YWx1ZSBvZiBhbnkgcG9zaXZlIHdob2xlIG51bWJlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSBvcmlnaW5hbE51bWJlciBzaG91bGQgYmUgcG9zaXRpdmUgd2hvbGUgbnVtYmVyXG4gICAgICovXG4gICAgcHVibGljIGdldE9yZGluYWwob3JpZ2luYWxOdW1iZXI6IG51bWJlcik6c3RyaW5nXG4gICAge1xuICAgICAgICBsZXQgb3JkaW5hbDpzdHJpbmcgPSBcInRoXCI7XG4gICAgICAgIGxldCB0ZW5zUGxhY2VOdW1iZXI6bnVtYmVyO1xuICAgICAgICBsZXQgbGFzdFBsYWNlTnVtYmVyOm51bWJlcjtcbiAgICAgICAgXG4gICAgICAgIGlmKG9yaWdpbmFsTnVtYmVyID4gOSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGVuc1BsYWNlTnVtYmVyID0gdGhpcy5nZXRUZW5zUGxhY2Uob3JpZ2luYWxOdW1iZXIpO1xuICAgICAgICAgICAgaWYodGVuc1BsYWNlTnVtYmVyID4gOSAmJiB0ZW5zUGxhY2VOdW1iZXIgPCAyMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxOdW1iZXIudG9TdHJpbmcoKSArIG9yZGluYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFzdFBsYWNlTnVtYmVyID0gdGhpcy5nZXRPbmVzUGxhY2UodGVuc1BsYWNlTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhc3RQbGFjZU51bWJlciA9IG9yaWdpbmFsTnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2gobGFzdFBsYWNlTnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3JkaW5hbCA9IFwic3RcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcmRpbmFsID0gXCJuZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9yZGluYWwgPSBcInJkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9yZGluYWwgPSBcInRoXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsTnVtYmVyLnRvU3RyaW5nKCkgKyBvcmRpbmFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIG9uZXMgYW5kIHRlbnMgcGxhY2Ugb2YgYW55IG51bWJlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSBteU51bWJlciB0aGUgYmFzZSBudW1iZXIgXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRUZW5zUGxhY2UobXlOdW1iZXI6bnVtYmVyKTpudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCBzdHJpbmdOdW1iZXI6c3RyaW5nID0gbXlOdW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IG5ld051bWJlcjpudW1iZXIgPSBOdW1iZXIoc3RyaW5nTnVtYmVyLnNsaWNlKChzdHJpbmdOdW1iZXIubGVuZ3RoLTIpLCBzdHJpbmdOdW1iZXIubGVuZ3RoKSk7XG4gICAgICAgIHJldHVybiBuZXdOdW1iZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyB0aGUgbnVtYmVyIGluIHRoZSBvbmVzIHBsYWNlXG4gICAgICogXG4gICAgICogQHBhcmFtIG15TnVtYmVyIHRoZSBiYXNlIG51bWJlclxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0T25lc1BsYWNlKG15TnVtYmVyOm51bWJlcik6bnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgbmV3TnVtYmVyOm51bWJlcjtcbiAgICAgICAgaWYobXlOdW1iZXIgPiAxMClcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHN0cmluZ051bWJlcjpzdHJpbmcgPSBteU51bWJlci50b1N0cmluZygpO1xuICAgICAgICAgICAgbmV3TnVtYmVyID0gTnVtYmVyKHN0cmluZ051bWJlci5zbGljZSgxLDIpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5ld051bWJlciA9IG15TnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3TnVtYmVyO1xuICAgIH1cbn0iLCIvKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBnZXQgYWRkaXRpb25hbCBmb3JtcyBvZiB0aGUgZGF0ZVxuICogXG4gKiBAYXV0aG9yIERlcml2IERpZ2dzXG4gKiBAdmVyc2lvbiAxLjBcbiAqL1xuXG5pbXBvcnQgeyBNYWtlT3JkaW5hbCB9IGZyb20gXCIuL01ha2VPcmRpbmFsXCI7XG5cbmV4cG9ydCBjbGFzcyBOaWNlRGF0ZSBcbntcbiAgICBkOkRhdGU7XG4gICAgcHJpdmF0ZSBvcmRpbmFsRGF0ZTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBtb250aDpzdHJpbmc7XG5cbiAgICBtYWtlT3JkaW5hbDpNYWtlT3JkaW5hbCA9IG5ldyBNYWtlT3JkaW5hbCgpO1xuXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5kID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgIC8qKlxuICAgICogcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBtb250aFxuICAgICovXG4gICAgcHVibGljIGdldE1vbnRoKCk6c3RyaW5nXG4gICAge1xuICAgICAgICBsZXQgbW9udGhzOkFycmF5PHN0cmluZz4gPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcbiAgICAgICAgdGhpcy5tb250aCA9IG1vbnRoc1t0aGlzLmQuZ2V0TW9udGgoKV07XG4gICAgICAgIHJldHVybiB0aGlzLm1vbnRoO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHRoZSBjdXJyZW50IG9yZGluYWwgZGF5XG4gICAgICovXG4gICAgcHVibGljIGdldE9yZGluYWxEYXRlKCk6c3RyaW5nXG4gICAge1xuICAgICAgICBsZXQgZGF0ZTpzdHJpbmcgPSBTdHJpbmcodGhpcy5kLmdldERhdGUoKSk7XG4gICAgICAgIHRoaXMub3JkaW5hbERhdGUgPSB0aGlzLm1ha2VPcmRpbmFsLmdldE9yZGluYWwoTnVtYmVyKGRhdGUpKTsgICBcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkaW5hbERhdGU7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgTmljZURhdGUgfSBmcm9tIFwiLi9OaWNlRGF0ZVwiO1xuXG4vLyBIdG1sIEVsZW1lbnRzXG5sZXQgbXVsdGk6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVsdGknKTtcbmxldCBtdXNpYzpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdXNpYycpO1xubGV0IGhvbGRlcjpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob2xkZXInKTtcbmxldCBtYWluaW1hZ2U6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbmltYWdlJyk7XG5sZXQgdGhlZGF0ZTpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVkYXRlJyk7IFxubGV0IGNpdHk6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpOyAgIFxuXG5sZXQgbmljZURhdGU6TmljZURhdGUgPSBuZXcgTmljZURhdGUoKTtcblxubGV0IG1vdmVCS1JlYWR5OmJvb2xlYW4gPSB0cnVlO1xuXG5sZXQgc2NyZWVuSGVpZ2h0Om51bWJlcjtcbmxldCBzY3JlZW5XaWR0aDpudW1iZXI7XG5sZXQgbW91c2VYOm51bWJlcjtcbmxldCBtb3VzZVk6bnVtYmVyO1xuXG5cblxuXG5cblxuLyoqXG4gKiBGaXJlcyB3aGVuIGV2ZXJ5dGhpbmcgaXMgbG9hZGVkIGFuZCByZWFkeSB0byBHTyFcbiAqL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpOnZvaWQgXG57IFxuICAgIGNvbnNvbGUubG9nKFwibG9hZGVkXCIpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgbWFpbmltYWdlLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gNDgxKVxuICAgICAgICB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZW91ZSBtZXQnKVxuICAgICAgICAgICAgICAgIG11bHRpLnN0eWxlLmxlZnQgPSAnMjBweCc7XG4gICAgICAgICAgICAgICAgbXVsdGkuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgICBcblx0XHRcdFx0bXVzaWMuc3R5bGUubGVmdCA9IChob2xkZXIuY2xpZW50V2lkdGggLSAyMjApLnRvU3RyaW5nKCkgK1wicHhcIjtcbiAgICAgICAgICAgICAgICBtdXNpYy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuXG4gICAgICAgICAgICAgICAgdGhlZGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgICAgIHRoZWRhdGUuc3R5bGUubGVmdCA9ICcyMHB4JztcbiAgICAgICAgICAgICAgICB0aGVkYXRlLmlubmVySFRNTCA9IGdldFRoZURhdGUoKTtcblx0XHRcdH0sMzAwMCk7XG4gICAgICAgIH1cbiAgICB9LDEwMCk7XG59KTtcblxuLyoqXG4gKiBBZGp1c3RzIHRoZSBzY3JlZW4gd2hlbiBtb3VzZSBtb3ZlcyBvciBzY3JlZW4gaXMgcmVzaXplZFxuICovXG5cbmZ1bmN0aW9uIGFkanVzdFNjcmVlbigpOnZvaWRcbntcbiAgICBsZXQgYWRqdXN0WDpudW1iZXIgPSAoKHdpbmRvdy5pbm5lcldpZHRoLzIpIC0gbW91c2VYKSAvIDEwO1xuICAgIGxldCBhZGp1c3RZOm51bWJlciA9ICgod2luZG93LmlubmVySGVpZ2h0LzIpIC0gbW91c2VZKSAvIDEwO1xuICAgIGxldCBjaXR5TmV3TGVmdDpudW1iZXI7XG4gICAgXG5cbiAgICBpZihhZGp1c3RYID4gLTUgJiYgYWRqdXN0WCA8IDUpeyBtb3ZlQktSZWFkeSA9IHRydWU7IH07XG5cbiAgICBpZihtb3ZlQktSZWFkeSlcbiAgICB7XG4gICAgICAgIGNpdHlOZXdMZWZ0ID0gKChjaXR5LmNsaWVudFdpZHRoLzIgLSBjaXR5LmNsaWVudFdpZHRoLzIpKyBhZGp1c3RYKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NpdHkgeDogJyArIGNpdHlOZXdMZWZ0ICk7XG4gICAgICAgIGlmKGNpdHlOZXdMZWZ0IDwgLTQwKVxuICAgICAgICB7XG4gICAgICAgICAgICBjaXR5TmV3TGVmdCA9IC00MDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAvLyBjaXR5LnN0eWxlLmxlZnQgPSBTdHJpbmcoY2l0eU5ld0xlZnQpKyBcInB4XCI7XG5cbiAgICAgICAgY2l0eS5zdHlsZS50b3AgPSBTdHJpbmcoKChjaXR5LmNsaWVudEhlaWdodC8yIC0gY2l0eS5jbGllbnRIZWlnaHQvMikrIGFkanVzdFkpKSsgXCJweFwiO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGp1c3RYOicgK2FkanVzdFgpO1xuICAgIH1cbiAgICAvL2ZpeCBidWcgdGhhdCBjbGVhciAnbGVmdCcgd2hlbiByZXNpemVkIHRvIG1vYmlsZSBzaXplXG4gICAgdGhlZGF0ZS5zdHlsZS5sZWZ0ID0gJzIwcHgnO1xuICAgXG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0ZSBmb3IgZGlzcGxheVxuICovXG5mdW5jdGlvbiBnZXRUaGVEYXRlKCk6c3RyaW5nXG57XG4gICAgbGV0IHRvZGF5OnN0cmluZyA9IG5pY2VEYXRlLmdldE1vbnRoKCkgKyBcIiBcIiArIG5pY2VEYXRlLmdldE9yZGluYWxEYXRlKCk7XG4gICAgXG4gICAgcmV0dXJuIHRvZGF5IFxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihldmVudDpNb3VzZUV2ZW50KVxue1xuICAgIG1vdXNlWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgbW91c2VZID0gZXZlbnQuY2xpZW50WTtcblxuICAgIGFkanVzdFNjcmVlbigpO1xufSk7XG5cblxuLyoqXG4gKiBmaXJlcyB3aGVuIHdpbmRvdyBpcyByZXNpemVkXG4gKiBcbiAqIHJlLWFsaWduZXMgYnV0dG9ucyBkZXBlbmRpbmcgb24gc2NyZWVuIHdpZHRoXG4gKi9cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKGV2ZW50KTp2b2lkIFxue1xuICAgIHNjcmVlbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnNvbGUubG9nKCd3OiAnICsgc2NyZWVuV2lkdGggKyAnIGg6ICcgKyBzY3JlZW5IZWlnaHQpO1xuXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCA0ODApXG4gICAge1xuICAgICAgICBtdWx0aS5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICBtdXNpYy5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICB0aGVkYXRlLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIG11bHRpLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIG11c2ljLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIG11bHRpLnN0eWxlLmxlZnQgPSAnMjBweCc7XG4gICAgICAgIG11c2ljLnN0eWxlLmxlZnQgPSAoaG9sZGVyLmNsaWVudFdpZHRoIC0gMjIwKS50b1N0cmluZygpICsgXCJweFwiO1xuICAgIH1cbiAgICBhZGp1c3RTY3JlZW4oKTtcbn07XG5cblxuIl19
