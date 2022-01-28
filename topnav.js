//Inserts a navigation bar into every document linked to it
const topnav = document.getElementsByClassName("topnav")[0];

let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css";

let home = document.createElement("a");
home.href = "https://xorol.github.io";
home.innerText = "Home";

let esolangs = document.createElement("div");
esolangs.classList = ["dropdown"];
esolangs.innerHTML = "<button class=\"dropbtn\"><i class=\"fa fa-caret-down\"> Esolangs</i></button>";

let esolangsContents = document.createElement("div");
esolangsContents.classList = ["dropdown-content"];

let numbers = document.createElement("a");
numbers.href = "https://xorol.github.io/esolangs/numbers.html";
numbers.innerText = "Numbers";

let interpreters = document.createElement("a");
interpreters.href = "https://xorol.github.io/esolangs/interpreters/interpreters.html";
interpreters.innerText = "Interpreters";

let wips = document.createElement("a");
wips.href = "https://xorol.github.io/esolangs/wips.html";
wips.innerText = "WIPs";


let other = document.createElement("div");
other.classList = ["dropdown"];
other.innerHTML = "<button class=\"dropbtn\"><i class=\"fa fa-caret-down\"> Other things I made</i></button>";

let otherContents = document.createElement("div");
otherContents.classList = ["dropdown-content"];

let noise = document.createElement("a");
noise.href = "https://xorol.github.io/other/noise/noise.html";
noise.innerText = "Noise";

let wtd = document.createElement("a");
wtd.href = "https://xorol.github.io/other/wtd/wtd.html";
wtd.innerText = "What's the difference?";

let starcalc = document.createElement("a");
starcalc.href = "https://xorol.github.io/starcalc/starcalc.html";
starcalc.innerText = "Star calculator";


let tsevhu = document.createElement("a");
tsevhu.href = "https://xorol.github.io/tsevhu/tsevhu.html";
tsevhu.innerText = "Tsevhu"


switch (window.location.href) {
  case "https://xorol.github.io":
  case "https://xorol.github.io/index.html":
    home.classList = ["active"];
    break;
  case "https://xorol.github.io/esolangs/numbers.html":
    numbers.classList = ["active"];
    break;
  case "https://xorol.github.io/esolangs/interpreters/interpreters.html":
    interpreters.classList = ["active"];
    break;
  case "https://xorol.github.io/esolangs/wips.html":
    wips.classList = ["active"];
    break;
  case "https://xorol.github.io/other/wtd/wtd.html":
    wtd.classList = ["active"];
    break;
  case "https://xorol.github.io/other/starcalc/starcalc.html":
    starcalc.classList = ["active"];
    break;
  case "https://xorol.github.io/tsevhu/tsevhu.html":
    tsevhu.classList = ["active"];

}
esolangsContents.appendChild(numbers);
esolangsContents.appendChild(wips);
esolangsContents.appendChild(interpreters);
esolangs.appendChild(esolangsContents);

otherContents.appendChild(noise);
otherContents.appendChild(wtd);
otherContents.appendChild(starcalc);
other.appendChild(otherContents);

topnav.appendChild(link);
topnav.appendChild(home);
topnav.appendChild(esolangs);
topnav.appendChild(other);
topnav.appendChild(tsevhu);
