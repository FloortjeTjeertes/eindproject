let buttons = document.getElementsByClassName("NavButton");
let hamburger = document.getElementsByClassName("hamburger");
let navbuttons = document.getElementsByClassName("navbuttons");
var locations = ["index", "bestdestinations", "tickets", "contact"];
var active = false;

function hamburgerToggle() {
  console.log(active);
  if (active) {
    navbuttons[0].classList.add("hidden");
    active = false;
  } else if (!active) {
    navbuttons[0].classList.remove("hidden");
    active = true;
  }
}

hamburger[0].addEventListener("click", function () {
  hamburgerToggle();
});

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function f() {
    console.log(buttons[i]);
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }
    buttons[i].className = "active";
    window.location = locations[i] + ".html";
  });
}
