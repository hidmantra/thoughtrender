import { NiceDate } from "./NiceDate";

// Html Elements
let multi:HTMLElement = document.getElementById('multi');
let music:HTMLElement = document.getElementById('music');
let holder:HTMLElement = document.getElementById('holder');
let mainimage:HTMLElement = document.getElementById('mainimage');
let thedate:HTMLElement = document.getElementById('thedate'); 
let city:HTMLElement = document.getElementById('city');   

let niceDate:NiceDate = new NiceDate();

let moveBKReady:boolean = true;

let screenHeight:number;
let screenWidth:number;
let mouseX:number;
let mouseY:number;






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
                thedate.style.left = '20px';
                thedate.innerHTML = getTheDate();
			},3000);
        }
    },100);
});

/**
 * Adjusts the screen when mouse moves or screen is resized
 */

function adjustScreen():void
{
    let adjustX:number = ((window.innerWidth/2) - mouseX) / 10;
    let adjustY:number = ((window.innerHeight/2) - mouseY) / 10;
    let cityNewLeft:number;
    

    if(adjustX > -5 && adjustX < 5){ moveBKReady = true; };

    if(moveBKReady)
    {
        cityNewLeft = ((city.clientWidth/2 - city.clientWidth/2)+ adjustX);
        console.log('city x: ' + cityNewLeft );
        if(cityNewLeft < -40)
        {
            cityNewLeft = -40;
        }
        
       // city.style.left = String(cityNewLeft)+ "px";

        city.style.top = String(((city.clientHeight/2 - city.clientHeight/2)+ adjustY))+ "px";

        console.log('adjustX:' +adjustX);
    }
    //fix bug that clear 'left' when resized to mobile size
    thedate.style.left = '20px';
   
}

/**
 * Gets the date for display
 */
function getTheDate():string
{
    let today:string = niceDate.getMonth() + " " + niceDate.getOrdinalDate();
    
    return today 
};

document.addEventListener("mousemove", function(event:MouseEvent)
{
    mouseX = event.clientX;
    mouseY = event.clientY;

    adjustScreen();
});


/**
 * fires when window is resized
 * 
 * re-alignes buttons depending on screen width
 */
window.onresize = function(event):void 
{
    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth;
    console.log('w: ' + screenWidth + ' h: ' + screenHeight);

    if(window.innerWidth < 480)
    {
        multi.style.left = '0';
        music.style.left = '0';
        thedate.style.left = '0';
    }
    else
    {
        multi.style.opacity = '1';
        music.style.opacity = '1';
        multi.style.left = '20px';
        music.style.left = (holder.clientWidth - 220).toString() + "px";
    }
    adjustScreen();
};


