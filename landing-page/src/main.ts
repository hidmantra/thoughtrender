
//import { sayHello } from "./NiceDate";
import { NiceDate } from "./NiceDate";

let multi:HTMLElement = document.getElementById('multi');
let music:HTMLElement = document.getElementById('music');
let holder:HTMLElement = document.getElementById('holder');
let mainImage:HTMLElement = document.getElementById('mainimage');
let theDate:HTMLElement = document.getElementById('thedate');

document.addEventListener("DOMContentLoaded", function(event) 
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
			},3000);
		}
    },100);
});


function getTheDate(){
    let today:string;
    
    var d = new Date();
    let theDay = d.getDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    today = months[d.getMonth()];
    today = today + theDay.toString();
    console.log(today);
    return today 
}


window.addEventListener("mousemove", function(event){

    //
});

window.onresize = function(event) 
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


