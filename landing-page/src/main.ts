
//import { sayHello } from "./NiceDate";
import { NiceDate } from "./NiceDate";

// Html Elements
let multi:HTMLElement = document.getElementById('multi');
let music:HTMLElement = document.getElementById('music');
let holder:HTMLElement = document.getElementById('holder');
let mainimage:HTMLElement = document.getElementById('mainimage');
let thedate:HTMLElement = document.getElementById('thedate');   
let thebrowser:HTMLElement = document.getElementById('thebrowser');
let thewidth:HTMLElement = document.getElementById('thewidth');
let theheight:HTMLElement = document.getElementById('theheight');

let niceDate:NiceDate = new NiceDate();


/**
 * Fires when everything is loaded and ready to GO!
 */
document.addEventListener("DOMContentLoaded", function(event):void 
{ 
    console.log("loaded");
    setTimeout(function()
    {
        mainimage.style.opacity = '1';
        if(window.innerWidth > 481)
        {
            setTimeout(function()
            {
                console.log('timeoue met')
                multi.style.left = '20px';
                multi.style.opacity = '1';
                
				music.style.left = (holder.clientWidth - 220).toString() +"px";
                music.style.opacity = '1';

                thedate.style.opacity = '1';
                thedate.innerHTML = getTheDate();

                thewidth.style.opacity = '1';
                thewidth.innerHTML = "width: " + String(window.innerWidth);
                thewidth.style.top = '70px';

                theheight.style.opacity = '1';
                theheight.innerHTML = "height: " + String(window.innerHeight);
                theheight.style.top = '108px';
                //thebrowser.style.opacity = '1';
                //thebrowser.innerHTML = getTheBrowser();
			},3000);
		}
    },100);
});

/**
 * Gets the date for display
 */
function getTheDate():string{
    let today:string;
    
    var d = new Date();
    let theOrdinalDay = niceDate.getOrdinalDate();  
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    today = months[d.getMonth()];
    today = today + " " + theOrdinalDay;
    console.log(today);
    
    return today 
};

/**
 * maybe make
 */
function getTheBrowser():string
{

    return
}


window.addEventListener("mousemove", function(event){

    //
});

window.onresize = function(event):void 
{
    console.log("width = " + window.innerWidth + " height = " + window.innerHeight);
    thewidth.innerHTML = "width: " + String(window.innerWidth);
    theheight.innerHTML = "width: " + String(window.innerHeight);
    if(window.innerWidth < 480)
    {
        multi.style.left = '0';
        music.style.left = '0';
    }
    else
    {
        multi.style.opacity = '1';
        music.style.opacity = '1';
        multi.style.left = '20px';
        music.style.left = (holder.clientWidth - 220).toString() + "px";
    }
};


