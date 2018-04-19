import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    name = name + " two eighteen bullcrap";
    const stats_width = document.getElementById('stats_width');
    const stats_height = document.getElementById('stats_height');
    elt.innerText = sayHello(name);
    stats_width.innerText = ( "window width: " + window.innerWidth);
    stats_height.innerText = ( "window height: " +window.innerHeight);
    
}

showHello("greeting", "TypeScript");    