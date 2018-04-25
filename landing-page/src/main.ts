
//import { sayHello } from "./NiceDate";
import { NiceDate } from "./NiceDate";

// Html Elements
let multi:HTMLElement = document.getElementById('multi');
let music:HTMLElement = document.getElementById('music');
let holder:HTMLElement = document.getElementById('holder');
let mainImage:HTMLElement = document.getElementById('mainimage');
let theDate:HTMLElement = document.getElementById('thedate');   
let theBrowser:HTMLElement = document.getElementById('thebrowser');

let niceDate:NiceDate = new NiceDate();


/**
 * Fires when everything is loaded and ready to GO!
 */
document.addEventListener("DOMContentLoaded", function(event):void 
{ 
    console.log("loaded");
    setTimeout(function()
    {
        mainImage.style.opacity = '1';
        if(window.innerWidth > 481)
        {
            setTimeout(function()
            {
                console.log('timeoue met')
                multi.style.left = '20px';
				multi.style.opacity = '1';
				music.style.left = (holder.clientWidth - 220).toString() +"px";
                music.style.opacity = '1';
                theDate.style.opacity = '1';
                theDate.innerHTML = getTheDate();
                //theBrowser.style.opacity = '1';
                //theBrowser.innerHTML = getTheBrowser();
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


