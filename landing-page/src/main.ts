
let multi:HTMLElement = document.getElementById('multi');
let music:HTMLElement = document.getElementById('music');
let holder:HTMLElement = document.getElementById('holder');
let mainImage:HTMLElement = document.getElementById('mainimage');

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
			},3000);
		}
    },100);
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
        multi.style.left = '20';
        music.style.left = (holder.clientWidth - 220).toString();
    }
};


