let buttons = document.getElementsByClassName("NavButton");
var locations = ["index","bestdestinations","tickets","contact"];

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function f() {
        console.log(buttons[i]);
        for(var j =0;j<buttons.length;j++){
        buttons[j].classList.remove("active");
        }
        buttons[i].className="active";
        window.location = locations[i]+".html";

    });
}