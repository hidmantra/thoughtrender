import { NiceDate } from "./NiceDate";

// Html Elements
let multi:HTMLElement = document.getElementById('multi');
let music:HTMLElement = document.getElementById('music');
let holder:HTMLElement = document.getElementById('holder');
let mainimage:HTMLElement = document.getElementById('mainimage');
let thedate:HTMLElement = document.getElementById('thedate');   

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
			},3000);
        }
    },100);
});

/**
 * Gets the date for display
 */
function getTheDate():string
{
    let today:string = niceDate.getMonth() + " " + niceDate.getOrdinalDate();
    
    return today 
};

/**
 * fires when window is resized
 * 
 * re-alignes buttons depending on screen width
 */
window.onresize = function(event):void 
{
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


