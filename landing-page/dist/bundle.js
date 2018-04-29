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
        city.style.left = String(cityNewLeft) + "px";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvTWFrZU9yZGluYWwudHMiLCJzcmMvTmljZURhdGUudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7O0dBS0c7QUFDSDtJQUdJO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksVUFBVSxDQUFDLGNBQXNCO1FBRXBDLElBQUksT0FBTyxHQUFVLElBQUksQ0FBQztRQUMxQixJQUFJLGVBQXNCLENBQUM7UUFDM0IsSUFBSSxlQUFzQixDQUFDO1FBRTNCLElBQUcsY0FBYyxHQUFHLENBQUMsRUFDckI7WUFDSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRCxJQUFHLGVBQWUsR0FBRyxDQUFDLElBQUksZUFBZSxHQUFHLEVBQUUsRUFDOUM7Z0JBRUksT0FBTyxjQUFjLENBQUMsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDO2FBQzlDO2lCQUVEO2dCQUNJLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3hEO1NBQ0o7YUFFRDtZQUNJLGVBQWUsR0FBRyxjQUFjLENBQUM7U0FDcEM7UUFFRCxRQUFPLGVBQWUsRUFDdEI7WUFDSSxLQUFLLENBQUM7Z0JBQ047b0JBQ0ksT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDZixNQUFNO2lCQUNUO1lBQ0QsS0FBSyxDQUFDO2dCQUNOO29CQUNJLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2YsTUFBTTtpQkFDVDtZQUNELEtBQUssQ0FBQztnQkFDTjtvQkFDSSxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNmLE1BQU07aUJBQ1Q7WUFDRDtnQkFDQTtvQkFDSSxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNmLE1BQU07aUJBQ1Q7U0FDSjtRQUNE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S0FBZ0I7SUFFNUQsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDdkIsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFFdkIsWUFBWSxFQUFFLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFHSDs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLFFBQVEsR0FBRyxVQUFTLEtBQUs7SUFFNUIsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDbEMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLE1BQU0sR0FBRyxZQUFZLENBQUMsQ0FBQztJQUV6RCxJQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUMxQjtRQUNJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN2QixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0tBQzVCO1NBRUQ7UUFDSSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO0tBQ25FO0lBQ0QsWUFBWSxFQUFFLENBQUM7QUFDbkIsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gY29udmVydCBhbnkgcG9zaXRpdmUgd2hvbGUgbnVtYmVyIGludG8gYW4gb3JkaW5hbCBudW1iZXJcbiAqIFxuICogQGF1dGhvciBEZXJpdiBEaWdnc1xuICogQHZlcnNpb24gMS4wXG4gKi9cbmV4cG9ydCBjbGFzcyBNYWtlT3JkaW5hbFxue1xuXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ01ha2VPcmRpbmFsIGluc3RhbnRpYXRlZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIG9yZGluYWwgdmFsdWUgb2YgYW55IHBvc2l2ZSB3aG9sZSBudW1iZXJcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gb3JpZ2luYWxOdW1iZXIgc2hvdWxkIGJlIHBvc2l0aXZlIHdob2xlIG51bWJlclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRPcmRpbmFsKG9yaWdpbmFsTnVtYmVyOiBudW1iZXIpOnN0cmluZ1xuICAgIHtcbiAgICAgICAgbGV0IG9yZGluYWw6c3RyaW5nID0gXCJ0aFwiO1xuICAgICAgICBsZXQgdGVuc1BsYWNlTnVtYmVyOm51bWJlcjtcbiAgICAgICAgbGV0IGxhc3RQbGFjZU51bWJlcjpudW1iZXI7XG4gICAgICAgIFxuICAgICAgICBpZihvcmlnaW5hbE51bWJlciA+IDkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRlbnNQbGFjZU51bWJlciA9IHRoaXMuZ2V0VGVuc1BsYWNlKG9yaWdpbmFsTnVtYmVyKTtcbiAgICAgICAgICAgIGlmKHRlbnNQbGFjZU51bWJlciA+IDkgJiYgdGVuc1BsYWNlTnVtYmVyIDwgMjEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsTnVtYmVyLnRvU3RyaW5nKCkgKyBvcmRpbmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhc3RQbGFjZU51bWJlciA9IHRoaXMuZ2V0T25lc1BsYWNlKHRlbnNQbGFjZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBsYXN0UGxhY2VOdW1iZXIgPSBvcmlnaW5hbE51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc3dpdGNoKGxhc3RQbGFjZU51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9yZGluYWwgPSBcInN0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3JkaW5hbCA9IFwibmRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcmRpbmFsID0gXCJyZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcmRpbmFsID0gXCJ0aFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcmlnaW5hbE51bWJlci50b1N0cmluZygpICsgb3JkaW5hbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHRoZSBvbmVzIGFuZCB0ZW5zIHBsYWNlIG9mIGFueSBudW1iZXJcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbXlOdW1iZXIgdGhlIGJhc2UgbnVtYmVyIFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0VGVuc1BsYWNlKG15TnVtYmVyOm51bWJlcik6bnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgc3RyaW5nTnVtYmVyOnN0cmluZyA9IG15TnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgIGxldCBuZXdOdW1iZXI6bnVtYmVyID0gTnVtYmVyKHN0cmluZ051bWJlci5zbGljZSgoc3RyaW5nTnVtYmVyLmxlbmd0aC0yKSwgc3RyaW5nTnVtYmVyLmxlbmd0aCkpO1xuICAgICAgICByZXR1cm4gbmV3TnVtYmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIG51bWJlciBpbiB0aGUgb25lcyBwbGFjZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSBteU51bWJlciB0aGUgYmFzZSBudW1iZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldE9uZXNQbGFjZShteU51bWJlcjpudW1iZXIpOm51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IG5ld051bWJlcjpudW1iZXI7XG4gICAgICAgIGlmKG15TnVtYmVyID4gMTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBzdHJpbmdOdW1iZXI6c3RyaW5nID0gbXlOdW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG5ld051bWJlciA9IE51bWJlcihzdHJpbmdOdW1iZXIuc2xpY2UoMSwyKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBuZXdOdW1iZXIgPSBteU51bWJlcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld051bWJlcjtcbiAgICB9XG59IiwiLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWQgdG8gZ2V0IGFkZGl0aW9uYWwgZm9ybXMgb2YgdGhlIGRhdGVcbiAqIFxuICogQGF1dGhvciBEZXJpdiBEaWdnc1xuICogQHZlcnNpb24gMS4wXG4gKi9cblxuaW1wb3J0IHsgTWFrZU9yZGluYWwgfSBmcm9tIFwiLi9NYWtlT3JkaW5hbFwiO1xuXG5leHBvcnQgY2xhc3MgTmljZURhdGUgXG57XG4gICAgZDpEYXRlO1xuICAgIHByaXZhdGUgb3JkaW5hbERhdGU6c3RyaW5nO1xuICAgIHByaXZhdGUgbW9udGg6c3RyaW5nO1xuXG4gICAgbWFrZU9yZGluYWw6TWFrZU9yZGluYWwgPSBuZXcgTWFrZU9yZGluYWwoKTtcblxuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHRoaXMuZCA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAvKipcbiAgICAqIHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgbW9udGhcbiAgICAqL1xuICAgIHB1YmxpYyBnZXRNb250aCgpOnN0cmluZ1xuICAgIHtcbiAgICAgICAgbGV0IG1vbnRoczpBcnJheTxzdHJpbmc+ID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG4gICAgICAgIHRoaXMubW9udGggPSBtb250aHNbdGhpcy5kLmdldE1vbnRoKCldO1xuICAgICAgICByZXR1cm4gdGhpcy5tb250aDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyB0aGUgY3VycmVudCBvcmRpbmFsIGRheVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRPcmRpbmFsRGF0ZSgpOnN0cmluZ1xuICAgIHtcbiAgICAgICAgbGV0IGRhdGU6c3RyaW5nID0gU3RyaW5nKHRoaXMuZC5nZXREYXRlKCkpO1xuICAgICAgICB0aGlzLm9yZGluYWxEYXRlID0gdGhpcy5tYWtlT3JkaW5hbC5nZXRPcmRpbmFsKE51bWJlcihkYXRlKSk7ICAgXG4gICAgICAgIHJldHVybiB0aGlzLm9yZGluYWxEYXRlO1xuICAgIH1cblxufSIsImltcG9ydCB7IE5pY2VEYXRlIH0gZnJvbSBcIi4vTmljZURhdGVcIjtcblxuLy8gSHRtbCBFbGVtZW50c1xubGV0IG11bHRpOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211bHRpJyk7XG5sZXQgbXVzaWM6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVzaWMnKTtcbmxldCBob2xkZXI6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9sZGVyJyk7XG5sZXQgbWFpbmltYWdlOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5pbWFnZScpO1xubGV0IHRoZWRhdGU6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlZGF0ZScpOyBcbmxldCBjaXR5OkhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTsgICBcblxubGV0IG5pY2VEYXRlOk5pY2VEYXRlID0gbmV3IE5pY2VEYXRlKCk7XG5cbmxldCBtb3ZlQktSZWFkeTpib29sZWFuID0gdHJ1ZTtcblxubGV0IHNjcmVlbkhlaWdodDpudW1iZXI7XG5sZXQgc2NyZWVuV2lkdGg6bnVtYmVyO1xubGV0IG1vdXNlWDpudW1iZXI7XG5sZXQgbW91c2VZOm51bWJlcjtcblxuXG5cblxuXG5cbi8qKlxuICogRmlyZXMgd2hlbiBldmVyeXRoaW5nIGlzIGxvYWRlZCBhbmQgcmVhZHkgdG8gR08hXG4gKi9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KTp2b2lkIFxueyBcbiAgICBjb25zb2xlLmxvZyhcImxvYWRlZFwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIG1haW5pbWFnZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDQ4MSlcbiAgICAgICAge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVvdWUgbWV0JylcbiAgICAgICAgICAgICAgICBtdWx0aS5zdHlsZS5sZWZ0ID0gJzIwcHgnO1xuICAgICAgICAgICAgICAgIG11bHRpLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgXG5cdFx0XHRcdG11c2ljLnN0eWxlLmxlZnQgPSAoaG9sZGVyLmNsaWVudFdpZHRoIC0gMjIwKS50b1N0cmluZygpICtcInB4XCI7XG4gICAgICAgICAgICAgICAgbXVzaWMuc3R5bGUub3BhY2l0eSA9ICcxJztcblxuICAgICAgICAgICAgICAgIHRoZWRhdGUuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgICB0aGVkYXRlLnN0eWxlLmxlZnQgPSAnMjBweCc7XG4gICAgICAgICAgICAgICAgdGhlZGF0ZS5pbm5lckhUTUwgPSBnZXRUaGVEYXRlKCk7XG5cdFx0XHR9LDMwMDApO1xuICAgICAgICB9XG4gICAgfSwxMDApO1xufSk7XG5cbi8qKlxuICogQWRqdXN0cyB0aGUgc2NyZWVuIHdoZW4gbW91c2UgbW92ZXMgb3Igc2NyZWVuIGlzIHJlc2l6ZWRcbiAqL1xuXG5mdW5jdGlvbiBhZGp1c3RTY3JlZW4oKTp2b2lkXG57XG4gICAgbGV0IGFkanVzdFg6bnVtYmVyID0gKCh3aW5kb3cuaW5uZXJXaWR0aC8yKSAtIG1vdXNlWCkgLyAxMDtcbiAgICBsZXQgYWRqdXN0WTpudW1iZXIgPSAoKHdpbmRvdy5pbm5lckhlaWdodC8yKSAtIG1vdXNlWSkgLyAxMDtcbiAgICBsZXQgY2l0eU5ld0xlZnQ6bnVtYmVyO1xuICAgIFxuXG4gICAgaWYoYWRqdXN0WCA+IC01ICYmIGFkanVzdFggPCA1KXsgbW92ZUJLUmVhZHkgPSB0cnVlOyB9O1xuXG4gICAgaWYobW92ZUJLUmVhZHkpXG4gICAge1xuICAgICAgICBjaXR5TmV3TGVmdCA9ICgoY2l0eS5jbGllbnRXaWR0aC8yIC0gY2l0eS5jbGllbnRXaWR0aC8yKSsgYWRqdXN0WCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaXR5IHg6ICcgKyBjaXR5TmV3TGVmdCApO1xuICAgICAgICBpZihjaXR5TmV3TGVmdCA8IC00MClcbiAgICAgICAge1xuICAgICAgICAgICAgY2l0eU5ld0xlZnQgPSAtNDA7XG4gICAgICAgIH1cbiAgICAgICAgY2l0eS5zdHlsZS5sZWZ0ID0gU3RyaW5nKGNpdHlOZXdMZWZ0KSsgXCJweFwiO1xuXG4gICAgICAgIGNpdHkuc3R5bGUudG9wID0gU3RyaW5nKCgoY2l0eS5jbGllbnRIZWlnaHQvMiAtIGNpdHkuY2xpZW50SGVpZ2h0LzIpKyBhZGp1c3RZKSkrIFwicHhcIjtcblxuICAgICAgICBjb25zb2xlLmxvZygnYWRqdXN0WDonICthZGp1c3RYKTtcbiAgICB9XG4gICAgLy9maXggYnVnIHRoYXQgY2xlYXIgJ2xlZnQnIHdoZW4gcmVzaXplZCB0byBtb2JpbGUgc2l6ZVxuICAgIHRoZWRhdGUuc3R5bGUubGVmdCA9ICcyMHB4JztcbiAgIFxufVxuXG4vKipcbiAqIEdldHMgdGhlIGRhdGUgZm9yIGRpc3BsYXlcbiAqL1xuZnVuY3Rpb24gZ2V0VGhlRGF0ZSgpOnN0cmluZ1xue1xuICAgIGxldCB0b2RheTpzdHJpbmcgPSBuaWNlRGF0ZS5nZXRNb250aCgpICsgXCIgXCIgKyBuaWNlRGF0ZS5nZXRPcmRpbmFsRGF0ZSgpO1xuICAgIFxuICAgIHJldHVybiB0b2RheSBcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24oZXZlbnQ6TW91c2VFdmVudClcbntcbiAgICBtb3VzZVggPSBldmVudC5jbGllbnRYO1xuICAgIG1vdXNlWSA9IGV2ZW50LmNsaWVudFk7XG5cbiAgICBhZGp1c3RTY3JlZW4oKTtcbn0pO1xuXG5cbi8qKlxuICogZmlyZXMgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxuICogXG4gKiByZS1hbGlnbmVzIGJ1dHRvbnMgZGVwZW5kaW5nIG9uIHNjcmVlbiB3aWR0aFxuICovXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbihldmVudCk6dm9pZCBcbntcbiAgICBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zb2xlLmxvZygndzogJyArIHNjcmVlbldpZHRoICsgJyBoOiAnICsgc2NyZWVuSGVpZ2h0KTtcblxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgNDgwKVxuICAgIHtcbiAgICAgICAgbXVsdGkuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgbXVzaWMuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgdGhlZGF0ZS5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBtdWx0aS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBtdXNpYy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICBtdWx0aS5zdHlsZS5sZWZ0ID0gJzIwcHgnO1xuICAgICAgICBtdXNpYy5zdHlsZS5sZWZ0ID0gKGhvbGRlci5jbGllbnRXaWR0aCAtIDIyMCkudG9TdHJpbmcoKSArIFwicHhcIjtcbiAgICB9XG4gICAgYWRqdXN0U2NyZWVuKCk7XG59O1xuXG5cbiJdfQ==
