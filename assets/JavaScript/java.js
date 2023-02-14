const navigationHeight = document.querySelector("#nav").offsetHeight;

document.documentElement.style.setProperty("--scroll-padding", navigationHeight - 1 + "px");