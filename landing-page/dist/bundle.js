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
let niceDate = new NiceDate_1.NiceDate();
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
                thedate.innerHTML = getTheDate();
            }, 3000);
        }
    }, 100);
});
/**
 * Gets the date for display
 */
function getTheDate() {
    let today = niceDate.getMonth() + " " + niceDate.getOrdinalDate();
    return today;
}
;
/**
 * fires when window is resized
 *
 * re-alignes buttons depending on screen width
 */
window.onresize = function (event) {
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

},{"./NiceDate":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvTWFrZU9yZGluYWwudHMiLCJzcmMvTmljZURhdGUudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7O0dBS0c7QUFDSDtJQUdJO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksVUFBVSxDQUFDLGNBQXNCO1FBRXBDLElBQUksT0FBTyxHQUFVLElBQUksQ0FBQztRQUMxQixJQUFJLGVBQXNCLENBQUM7UUFDM0IsSUFBSSxlQUFzQixDQUFDO1FBRTNCLElBQUcsY0FBYyxHQUFHLENBQUMsRUFDckI7WUFDSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRCxJQUFHLGVBQWUsR0FBRyxDQUFDLElBQUksZUFBZSxHQUFHLEVBQUUsRUFDOUM7Z0JBRUksT0FBTyxjQUFjLENBQUMsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDO2FBQzlDO2lCQUVEO2dCQUNJLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3hEO1NBQ0o7YUFFRDtZQUNJLGVBQWUsR0FBRyxjQUFjLENBQUM7U0FDcEM7UUFFRCxRQUFPLGVBQWUsRUFDdEI7WUFDSSxLQUFLLENBQUM7Z0JBQ047b0JBQ0ksT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDZixNQUFNO2lCQUNUO1lBQ0QsS0FBSyxDQUFDO2dCQUNOO29CQUNJLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2YsTUFBTTtpQkFDVDtZQUNELEtBQUssQ0FBQztnQkFDTjtvQkFDSSxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNmLE1BQU07aUJBQ1Q7WUFDRDtnQkFDQTtvQkFDSSxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNmLE1BQU07aUJBQ1Q7U0FDSjtRQUNE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QUFHLENBQUM7UUFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7S0FDbkU7QUFDTCxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBjb252ZXJ0IGFueSBwb3NpdGl2ZSB3aG9sZSBudW1iZXIgaW50byBhbiBvcmRpbmFsIG51bWJlclxuICogXG4gKiBAYXV0aG9yIERlcml2IERpZ2dzXG4gKiBAdmVyc2lvbiAxLjBcbiAqL1xuZXhwb3J0IGNsYXNzIE1ha2VPcmRpbmFsXG57XG5cbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnTWFrZU9yZGluYWwgaW5zdGFudGlhdGVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyB0aGUgb3JkaW5hbCB2YWx1ZSBvZiBhbnkgcG9zaXZlIHdob2xlIG51bWJlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSBvcmlnaW5hbE51bWJlciBzaG91bGQgYmUgcG9zaXRpdmUgd2hvbGUgbnVtYmVyXG4gICAgICovXG4gICAgcHVibGljIGdldE9yZGluYWwob3JpZ2luYWxOdW1iZXI6IG51bWJlcik6c3RyaW5nXG4gICAge1xuICAgICAgICBsZXQgb3JkaW5hbDpzdHJpbmcgPSBcInRoXCI7XG4gICAgICAgIGxldCB0ZW5zUGxhY2VOdW1iZXI6bnVtYmVyO1xuICAgICAgICBsZXQgbGFzdFBsYWNlTnVtYmVyOm51bWJlcjtcbiAgICAgICAgXG4gICAgICAgIGlmKG9yaWdpbmFsTnVtYmVyID4gOSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGVuc1BsYWNlTnVtYmVyID0gdGhpcy5nZXRUZW5zUGxhY2Uob3JpZ2luYWxOdW1iZXIpO1xuICAgICAgICAgICAgaWYodGVuc1BsYWNlTnVtYmVyID4gOSAmJiB0ZW5zUGxhY2VOdW1iZXIgPCAyMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxOdW1iZXIudG9TdHJpbmcoKSArIG9yZGluYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFzdFBsYWNlTnVtYmVyID0gdGhpcy5nZXRPbmVzUGxhY2UodGVuc1BsYWNlTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhc3RQbGFjZU51bWJlciA9IG9yaWdpbmFsTnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2gobGFzdFBsYWNlTnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3JkaW5hbCA9IFwic3RcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcmRpbmFsID0gXCJuZFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9yZGluYWwgPSBcInJkXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9yZGluYWwgPSBcInRoXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsTnVtYmVyLnRvU3RyaW5nKCkgKyBvcmRpbmFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgdGhlIG9uZXMgYW5kIHRlbnMgcGxhY2Ugb2YgYW55IG51bWJlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSBteU51bWJlciB0aGUgYmFzZSBudW1iZXIgXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRUZW5zUGxhY2UobXlOdW1iZXI6bnVtYmVyKTpudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCBzdHJpbmdOdW1iZXI6c3RyaW5nID0gbXlOdW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IG5ld051bWJlcjpudW1iZXIgPSBOdW1iZXIoc3RyaW5nTnVtYmVyLnNsaWNlKChzdHJpbmdOdW1iZXIubGVuZ3RoLTIpLCBzdHJpbmdOdW1iZXIubGVuZ3RoKSk7XG4gICAgICAgIHJldHVybiBuZXdOdW1iZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyB0aGUgbnVtYmVyIGluIHRoZSBvbmVzIHBsYWNlXG4gICAgICogXG4gICAgICogQHBhcmFtIG15TnVtYmVyIHRoZSBiYXNlIG51bWJlclxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0T25lc1BsYWNlKG15TnVtYmVyOm51bWJlcik6bnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgbmV3TnVtYmVyOm51bWJlcjtcbiAgICAgICAgaWYobXlOdW1iZXIgPiAxMClcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHN0cmluZ051bWJlcjpzdHJpbmcgPSBteU51bWJlci50b1N0cmluZygpO1xuICAgICAgICAgICAgbmV3TnVtYmVyID0gTnVtYmVyKHN0cmluZ051bWJlci5zbGljZSgxLDIpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5ld051bWJlciA9IG15TnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3TnVtYmVyO1xuICAgIH1cbn0iLCIvKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBnZXQgYWRkaXRpb25hbCBmb3JtcyBvZiB0aGUgZGF0ZVxuICogXG4gKiBAYXV0aG9yIERlcml2IERpZ2dzXG4gKiBAdmVyc2lvbiAxLjBcbiAqL1xuXG5pbXBvcnQgeyBNYWtlT3JkaW5hbCB9IGZyb20gXCIuL01ha2VPcmRpbmFsXCI7XG5cbmV4cG9ydCBjbGFzcyBOaWNlRGF0ZSBcbntcbiAgICBkOkRhdGU7XG4gICAgcHJpdmF0ZSBvcmRpbmFsRGF0ZTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBtb250aDpzdHJpbmc7XG5cbiAgICBtYWtlT3JkaW5hbDpNYWtlT3JkaW5hbCA9IG5ldyBNYWtlT3JkaW5hbCgpO1xuXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5kID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgIC8qKlxuICAgICogcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBtb250aFxuICAgICovXG4gICAgcHVibGljIGdldE1vbnRoKCk6c3RyaW5nXG4gICAge1xuICAgICAgICBsZXQgbW9udGhzOkFycmF5PHN0cmluZz4gPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcbiAgICAgICAgdGhpcy5tb250aCA9IG1vbnRoc1t0aGlzLmQuZ2V0TW9udGgoKV07XG4gICAgICAgIHJldHVybiB0aGlzLm1vbnRoO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHRoZSBjdXJyZW50IG9yZGluYWwgZGF5XG4gICAgICovXG4gICAgcHVibGljIGdldE9yZGluYWxEYXRlKCk6c3RyaW5nXG4gICAge1xuICAgICAgICBsZXQgZGF0ZTpzdHJpbmcgPSBTdHJpbmcodGhpcy5kLmdldERhdGUoKSk7XG4gICAgICAgIHRoaXMub3JkaW5hbERhdGUgPSB0aGlzLm1ha2VPcmRpbmFsLmdldE9yZGluYWwoTnVtYmVyKGRhdGUpKTsgICBcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkaW5hbERhdGU7XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgTmljZURhdGUgfSBmcm9tIFwiLi9OaWNlRGF0ZVwiO1xuXG4vLyBIdG1sIEVsZW1lbnRzXG5sZXQgbXVsdGk6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXVsdGknKTtcbmxldCBtdXNpYzpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdXNpYycpO1xubGV0IGhvbGRlcjpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob2xkZXInKTtcbmxldCBtYWluaW1hZ2U6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbmltYWdlJyk7XG5sZXQgdGhlZGF0ZTpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVkYXRlJyk7ICAgXG5cbmxldCBuaWNlRGF0ZTpOaWNlRGF0ZSA9IG5ldyBOaWNlRGF0ZSgpO1xuXG4vKipcbiAqIEZpcmVzIHdoZW4gZXZlcnl0aGluZyBpcyBsb2FkZWQgYW5kIHJlYWR5IHRvIEdPIVxuICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihldmVudCk6dm9pZCBcbnsgXG4gICAgY29uc29sZS5sb2coXCJsb2FkZWRcIik7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBtYWluaW1hZ2Uuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPiA0ODEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aW1lb3VlIG1ldCcpXG4gICAgICAgICAgICAgICAgbXVsdGkuc3R5bGUubGVmdCA9ICcyMHB4JztcbiAgICAgICAgICAgICAgICBtdWx0aS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgICAgIFxuXHRcdFx0XHRtdXNpYy5zdHlsZS5sZWZ0ID0gKGhvbGRlci5jbGllbnRXaWR0aCAtIDIyMCkudG9TdHJpbmcoKSArXCJweFwiO1xuICAgICAgICAgICAgICAgIG11c2ljLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG5cbiAgICAgICAgICAgICAgICB0aGVkYXRlLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgdGhlZGF0ZS5pbm5lckhUTUwgPSBnZXRUaGVEYXRlKCk7XG5cdFx0XHR9LDMwMDApO1xuICAgICAgICB9XG4gICAgfSwxMDApO1xufSk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0ZSBmb3IgZGlzcGxheVxuICovXG5mdW5jdGlvbiBnZXRUaGVEYXRlKCk6c3RyaW5nXG57XG4gICAgbGV0IHRvZGF5OnN0cmluZyA9IG5pY2VEYXRlLmdldE1vbnRoKCkgKyBcIiBcIiArIG5pY2VEYXRlLmdldE9yZGluYWxEYXRlKCk7XG4gICAgXG4gICAgcmV0dXJuIHRvZGF5IFxufTtcblxuLyoqXG4gKiBmaXJlcyB3aGVuIHdpbmRvdyBpcyByZXNpemVkXG4gKiBcbiAqIHJlLWFsaWduZXMgYnV0dG9ucyBkZXBlbmRpbmcgb24gc2NyZWVuIHdpZHRoXG4gKi9cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKGV2ZW50KTp2b2lkIFxue1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgNDgwKVxuICAgIHtcbiAgICAgICAgbXVsdGkuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgbXVzaWMuc3R5bGUubGVmdCA9ICcwJztcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgbXVsdGkuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgbXVzaWMuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgbXVsdGkuc3R5bGUubGVmdCA9ICcyMHB4JztcbiAgICAgICAgbXVzaWMuc3R5bGUubGVmdCA9IChob2xkZXIuY2xpZW50V2lkdGggLSAyMjApLnRvU3RyaW5nKCkgKyBcInB4XCI7XG4gICAgfVxufTtcblxuXG4iXX0=
