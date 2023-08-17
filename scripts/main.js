const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/brave-logo.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};

function setHelloWorld() {
  const x = "hello world!";
  myHeading.textContent = x;
}

function setBackPreviousHeading() {
  if (localStorage.getItem("name")) {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
}

function setBravePage() {
  myHeading.textContent = "Is Brave even cooler?";
  let body = document.querySelector("body");
  body.style.backgroundColor = "white";
  myImage.setAttribute("src", "images/brave-logo.png");
}

function setPreviousPage() {
  let myName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${myName}`;
  let body = document.querySelector("body");
  body.style.backgroundColor = "#ff9500";
  myImage.setAttribute("src", "images/firefox-icon.png");
}

myHeading.addEventListener("mouseover", function () {
  setHelloWorld();
});

myHeading.addEventListener("mouseleave", function () {
  setBackPreviousHeading();
});

myImage.addEventListener("mouseover", function () {
  setBravePage();
});

myImage.addEventListener("mouseleave", function () {
  setPreviousPage();
});
