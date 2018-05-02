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
    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth;
    console.log("loaded");
    setTimeout(function () {
        mainimage.style.opacity = '1';
        setTimeout(function () {
            if (window.innerWidth > 481) {
                music.style.left = (holder.clientWidth - 220).toString() + "px";
                music.style.opacity = '1';
            }
            else {
                music.style.left = '20px';
                music.style.opacity = '1';
            }
            multi.style.left = '20px';
            multi.style.opacity = '1';
            thedate.style.opacity = '1';
            thedate.style.left = '20px';
            thedate.innerHTML = getTheDate();
        }, 2500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvTWFrZU9yZGluYWwudHMiLCJzcmMvTmljZURhdGUudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7O0dBS0c7QUFDSDtJQUdJO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksVUFBVSxDQUFDLGNBQXNCO1FBRXBDLElBQUksT0FBTyxHQUFVLElBQUksQ0FBQztRQUMxQixJQUFJLGVBQXNCLENBQUM7UUFDM0IsSUFBSSxlQUFzQixDQUFDO1FBRTNCLElBQUcsY0FBYyxHQUFHLENBQUMsRUFDckI7WUFDSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRCxJQUFHLGVBQWUsR0FBRyxDQUFDLElBQUksZUFBZSxHQUFHLEVBQUUsRUFDOUM7Z0JBRUksT0FBTyxjQUFjLENBQUMsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDO2FBQzlDO2lCQUVEO2dCQUNJLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3hEO1NBQ0o7YUFFRDtZQUNJLGVBQWUsR0FBRyxjQUFjLENBQUM7U0FDcEM7UUFFRCxRQUFPLGVBQWUsRUFDdEI7WUFDSSxLQUFLLENBQUM7Z0JBQ047b0JBQ0ksT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDZixNQUFNO2lCQUNUO1lBQ0QsS0FBSyxDQUFDO2dCQUNOO29CQUNJLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2YsTUFBTTtpQkFDVDtZQUNELEtBQUssQ0FBQztnQkFDTjtvQkFDSSxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNmLE1BQU07aUJBQ1Q7WUFDRDtnQkFDQTtvQkFDSSxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNmLE1BQU07aUJBQ1Q7U0FDSjtRQUNE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LENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlxuICogVGhpcyBjbGFzcyBpcyB1c2VkIHRvIGNvbnZlcnQgYW55IHBvc2l0aXZlIHdob2xlIG51bWJlciBpbnRvIGFuIG9yZGluYWwgbnVtYmVyXG4gKiBcbiAqIEBhdXRob3IgRGVyaXYgRGlnZ3NcbiAqIEB2ZXJzaW9uIDEuMFxuICovXG5leHBvcnQgY2xhc3MgTWFrZU9yZGluYWxcbntcblxuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNYWtlT3JkaW5hbCBpbnN0YW50aWF0ZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHRoZSBvcmRpbmFsIHZhbHVlIG9mIGFueSBwb3NpdmUgd2hvbGUgbnVtYmVyXG4gICAgICogXG4gICAgICogQHBhcmFtIG9yaWdpbmFsTnVtYmVyIHNob3VsZCBiZSBwb3NpdGl2ZSB3aG9sZSBudW1iZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0T3JkaW5hbChvcmlnaW5hbE51bWJlcjogbnVtYmVyKTpzdHJpbmdcbiAgICB7XG4gICAgICAgIGxldCBvcmRpbmFsOnN0cmluZyA9IFwidGhcIjtcbiAgICAgICAgbGV0IHRlbnNQbGFjZU51bWJlcjpudW1iZXI7XG4gICAgICAgIGxldCBsYXN0UGxhY2VOdW1iZXI6bnVtYmVyO1xuICAgICAgICBcbiAgICAgICAgaWYob3JpZ2luYWxOdW1iZXIgPiA5KVxuICAgICAgICB7XG4gICAgICAgICAgICB0ZW5zUGxhY2VOdW1iZXIgPSB0aGlzLmdldFRlbnNQbGFjZShvcmlnaW5hbE51bWJlcik7XG4gICAgICAgICAgICBpZih0ZW5zUGxhY2VOdW1iZXIgPiA5ICYmIHRlbnNQbGFjZU51bWJlciA8IDIxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbE51bWJlci50b1N0cmluZygpICsgb3JkaW5hbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYXN0UGxhY2VOdW1iZXIgPSB0aGlzLmdldE9uZXNQbGFjZSh0ZW5zUGxhY2VOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbGFzdFBsYWNlTnVtYmVyID0gb3JpZ2luYWxOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHN3aXRjaChsYXN0UGxhY2VOdW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcmRpbmFsID0gXCJzdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9yZGluYWwgPSBcIm5kXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3JkaW5hbCA9IFwicmRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3JkaW5hbCA9IFwidGhcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxOdW1iZXIudG9TdHJpbmcoKSArIG9yZGluYWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyB0aGUgb25lcyBhbmQgdGVucyBwbGFjZSBvZiBhbnkgbnVtYmVyXG4gICAgICogXG4gICAgICogQHBhcmFtIG15TnVtYmVyIHRoZSBiYXNlIG51bWJlciBcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFRlbnNQbGFjZShteU51bWJlcjpudW1iZXIpOm51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IHN0cmluZ051bWJlcjpzdHJpbmcgPSBteU51bWJlci50b1N0cmluZygpO1xuICAgICAgICBsZXQgbmV3TnVtYmVyOm51bWJlciA9IE51bWJlcihzdHJpbmdOdW1iZXIuc2xpY2UoKHN0cmluZ051bWJlci5sZW5ndGgtMiksIHN0cmluZ051bWJlci5sZW5ndGgpKTtcbiAgICAgICAgcmV0dXJuIG5ld051bWJlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHRoZSBudW1iZXIgaW4gdGhlIG9uZXMgcGxhY2VcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbXlOdW1iZXIgdGhlIGJhc2UgbnVtYmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRPbmVzUGxhY2UobXlOdW1iZXI6bnVtYmVyKTpudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCBuZXdOdW1iZXI6bnVtYmVyO1xuICAgICAgICBpZihteU51bWJlciA+IDEwKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgc3RyaW5nTnVtYmVyOnN0cmluZyA9IG15TnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBuZXdOdW1iZXIgPSBOdW1iZXIoc3RyaW5nTnVtYmVyLnNsaWNlKDEsMikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbmV3TnVtYmVyID0gbXlOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdOdW1iZXI7XG4gICAgfVxufSIsIi8qKlxuICogVGhpcyBjbGFzcyBpcyB1c2VkIHRvIGdldCBhZGRpdGlvbmFsIGZvcm1zIG9mIHRoZSBkYXRlXG4gKiBcbiAqIEBhdXRob3IgRGVyaXYgRGlnZ3NcbiAqIEB2ZXJzaW9uIDEuMFxuICovXG5cbmltcG9ydCB7IE1ha2VPcmRpbmFsIH0gZnJvbSBcIi4vTWFrZU9yZGluYWxcIjtcblxuZXhwb3J0IGNsYXNzIE5pY2VEYXRlIFxue1xuICAgIGQ6RGF0ZTtcbiAgICBwcml2YXRlIG9yZGluYWxEYXRlOnN0cmluZztcbiAgICBwcml2YXRlIG1vbnRoOnN0cmluZztcblxuICAgIG1ha2VPcmRpbmFsOk1ha2VPcmRpbmFsID0gbmV3IE1ha2VPcmRpbmFsKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLmQgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgLyoqXG4gICAgKiByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IG1vbnRoXG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0TW9udGgoKTpzdHJpbmdcbiAgICB7XG4gICAgICAgIGxldCBtb250aHM6QXJyYXk8c3RyaW5nPiA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdO1xuICAgICAgICB0aGlzLm1vbnRoID0gbW9udGhzW3RoaXMuZC5nZXRNb250aCgpXTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9udGg7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIGN1cnJlbnQgb3JkaW5hbCBkYXlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0T3JkaW5hbERhdGUoKTpzdHJpbmdcbiAgICB7XG4gICAgICAgIGxldCBkYXRlOnN0cmluZyA9IFN0cmluZyh0aGlzLmQuZ2V0RGF0ZSgpKTtcbiAgICAgICAgdGhpcy5vcmRpbmFsRGF0ZSA9IHRoaXMubWFrZU9yZGluYWwuZ2V0T3JkaW5hbChOdW1iZXIoZGF0ZSkpOyAgIFxuICAgICAgICByZXR1cm4gdGhpcy5vcmRpbmFsRGF0ZTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBOaWNlRGF0ZSB9IGZyb20gXCIuL05pY2VEYXRlXCI7XG5cbi8vIEh0bWwgRWxlbWVudHNcbmxldCBtdWx0aTpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdWx0aScpO1xubGV0IG11c2ljOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ211c2ljJyk7XG5sZXQgaG9sZGVyOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbGRlcicpO1xubGV0IG1haW5pbWFnZTpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluaW1hZ2UnKTtcbmxldCB0aGVkYXRlOkhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZWRhdGUnKTsgXG5sZXQgY2l0eTpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7ICAgXG5cbmxldCBuaWNlRGF0ZTpOaWNlRGF0ZSA9IG5ldyBOaWNlRGF0ZSgpO1xuXG5sZXQgbW92ZUJLUmVhZHk6Ym9vbGVhbiA9IHRydWU7XG5cbmxldCBzY3JlZW5IZWlnaHQ6bnVtYmVyO1xubGV0IHNjcmVlbldpZHRoOm51bWJlcjtcbmxldCBtb3VzZVg6bnVtYmVyO1xubGV0IG1vdXNlWTpudW1iZXI7XG5cblxuXG5cblxuXG4vKipcbiAqIEZpcmVzIHdoZW4gZXZlcnl0aGluZyBpcyBsb2FkZWQgYW5kIHJlYWR5IHRvIEdPIVxuICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihldmVudCk6dm9pZCBcbnsgXG4gICAgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc29sZS5sb2coXCJsb2FkZWRcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBtYWluaW1hZ2Uuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gNDgxKVxuICAgICAgICAgICAgeyAgIFxuICAgICAgICAgICAgICAgIG11c2ljLnN0eWxlLmxlZnQgPSAoaG9sZGVyLmNsaWVudFdpZHRoIC0gMjIwKS50b1N0cmluZygpICtcInB4XCI7XG4gICAgICAgICAgICAgICAgbXVzaWMuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHsgICBcbiAgICAgICAgICAgICAgICBtdXNpYy5zdHlsZS5sZWZ0ID0gJzIwcHgnO1xuICAgICAgICAgICAgICAgIG11c2ljLnN0eWxlLm9wYWNpdHkgPSAnMSc7ICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbXVsdGkuc3R5bGUubGVmdCA9ICcyMHB4JztcbiAgICAgICAgICAgIG11bHRpLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG5cbiAgICAgICAgICAgIHRoZWRhdGUuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgIHRoZWRhdGUuc3R5bGUubGVmdCA9ICcyMHB4JztcbiAgICAgICAgICAgIHRoZWRhdGUuaW5uZXJIVE1MID0gZ2V0VGhlRGF0ZSgpO1xuXG5cdFx0fSwyNTAwKTsgXG4gICAgfSwxMDApO1xufSk7XG5cbi8qKlxuICogQWRqdXN0cyB0aGUgc2NyZWVuIHdoZW4gbW91c2UgbW92ZXMgb3Igc2NyZWVuIGlzIHJlc2l6ZWRcbiAqL1xuXG5mdW5jdGlvbiBhZGp1c3RTY3JlZW4oKTp2b2lkXG57XG4gICAgbGV0IGFkanVzdFg6bnVtYmVyID0gKCh3aW5kb3cuaW5uZXJXaWR0aC8yKSAtIG1vdXNlWCkgLyAxMDtcbiAgICBsZXQgYWRqdXN0WTpudW1iZXIgPSAoKHdpbmRvdy5pbm5lckhlaWdodC8yKSAtIG1vdXNlWSkgLyAxMDtcbiAgICBsZXQgY2l0eU5ld0xlZnQ6bnVtYmVyO1xuICAgIFxuXG4gICAgaWYoYWRqdXN0WCA+IC01ICYmIGFkanVzdFggPCA1KXsgbW92ZUJLUmVhZHkgPSB0cnVlOyB9O1xuXG4gICAgaWYobW92ZUJLUmVhZHkpXG4gICAge1xuICAgICAgICBjaXR5TmV3TGVmdCA9ICgoY2l0eS5jbGllbnRXaWR0aC8yIC0gY2l0eS5jbGllbnRXaWR0aC8yKSsgYWRqdXN0WCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaXR5IHg6ICcgKyBjaXR5TmV3TGVmdCApO1xuICAgICAgICBpZihjaXR5TmV3TGVmdCA8IC00MClcbiAgICAgICAge1xuICAgICAgICAgICAgY2l0eU5ld0xlZnQgPSAtNDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNpdHkuc3R5bGUubGVmdCA9IFN0cmluZyhjaXR5TmV3TGVmdCkrIFwicHhcIjtcblxuICAgICAgICBjaXR5LnN0eWxlLnRvcCA9IFN0cmluZygoKGNpdHkuY2xpZW50SGVpZ2h0LzIgLSBjaXR5LmNsaWVudEhlaWdodC8yKSsgYWRqdXN0WSkpKyBcInB4XCI7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2FkanVzdFg6JyArYWRqdXN0WCk7XG4gICAgfVxuICAgIC8vZml4IGJ1ZyB0aGF0IGNsZWFyICdsZWZ0JyB3aGVuIHJlc2l6ZWQgdG8gbW9iaWxlIHNpemVcbiAgICB0aGVkYXRlLnN0eWxlLmxlZnQgPSAnMjBweCc7XG4gICBcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRlIGZvciBkaXNwbGF5XG4gKi9cbmZ1bmN0aW9uIGdldFRoZURhdGUoKTpzdHJpbmdcbntcbiAgICBsZXQgdG9kYXk6c3RyaW5nID0gbmljZURhdGUuZ2V0TW9udGgoKSArIFwiIFwiICsgbmljZURhdGUuZ2V0T3JkaW5hbERhdGUoKTtcbiAgICBcbiAgICByZXR1cm4gdG9kYXkgXG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKGV2ZW50Ok1vdXNlRXZlbnQpXG57XG4gICAgbW91c2VYID0gZXZlbnQuY2xpZW50WDtcbiAgICBtb3VzZVkgPSBldmVudC5jbGllbnRZO1xuXG4gICAgYWRqdXN0U2NyZWVuKCk7XG59KTtcblxuXG4vKipcbiAqIGZpcmVzIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcbiAqIFxuICogcmUtYWxpZ25lcyBidXR0b25zIGRlcGVuZGluZyBvbiBzY3JlZW4gd2lkdGhcbiAqL1xud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oZXZlbnQpOnZvaWQgXG57XG4gICAgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc29sZS5sb2coJ3c6ICcgKyBzY3JlZW5XaWR0aCArICcgaDogJyArIHNjcmVlbkhlaWdodCk7XG5cbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDQ4MClcbiAgICB7XG4gICAgICAgIG11bHRpLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIG11c2ljLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIHRoZWRhdGUuc3R5bGUubGVmdCA9ICcwJztcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgbXVsdGkuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgbXVzaWMuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgbXVsdGkuc3R5bGUubGVmdCA9ICcyMHB4JztcbiAgICAgICAgbXVzaWMuc3R5bGUubGVmdCA9IChob2xkZXIuY2xpZW50V2lkdGggLSAyMjApLnRvU3RyaW5nKCkgKyBcInB4XCI7XG4gICAgfVxuICAgIGFkanVzdFNjcmVlbigpO1xufTtcblxuXG4iXX0=
