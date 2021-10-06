let buttons = document.getElementsByClassName("NavButton");
var locations = ["index","bestdestinations","tickets","contact"];

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function f() {
        console.log(buttons[i]);
        window.location = locations[i]+".html";
    });
}