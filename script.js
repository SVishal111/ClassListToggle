console.log("Hello, World!");


var main1 = document.getElementById("main");
var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn");
var heroSection1 = document.getElementById("heroSection");

btn.addEventListener("click", function() {
    main1.classList.toggle("main2");
    btn1.classList.toggle("btn2");
    heroSection1.classList.toggle("heroSection2");
});