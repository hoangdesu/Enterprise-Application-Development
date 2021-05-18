//----------------------------------------- Variables ------------------------------------//

// For images
var kerr1 = '../assets/kerr_1.jpeg';
var kerr2 = '../assets/kerr_2.jpeg';
var kerr3 = '../assets/kerr_3.png';
var kerr4 = '../assets/kerr_4.jpeg';
var kerr5 = '../assets/kerr_5.jpeg';

var mainPic = document.querySelector(".main-pic");
var small_1 = document.querySelector(".small-pic-1");
var small_2 = document.querySelector(".small-pic-2");
var small_3 = document.querySelector(".small-pic-3");
var small_4 = document.querySelector(".small-pic-4");
var small_5 = document.querySelector(".small-pic-5");

var smallPicArr = [
    [small_1, kerr1], 
    [small_2, kerr2],
    [small_3, kerr3], 
    [small_4, kerr4],
    [small_5, kerr5]
];

//----------------------------------------- Functions ------------------------------------//

//Reset grayscale and opacity of all small pics
function resetSmalls(params) {
    smallPicArr.forEach(element => {
        element[0].style.cssText = "opacity: 0.5; filter: grayscale(100%)";
    });
}

//Default state of main pic and relevant small pic    
small_1.style.cssText = "opacity: 1; filter: grayscale(0%)";


//Control the change of main pic when small pic is selected
smallPicArr.forEach(element => {
    element[0].addEventListener("click", function changeMainPic(params) {
        resetSmalls();
        mainPic.src = element[1];
        element[0].style.cssText = "opacity: 1; filter: grayscale(0%)";
    })
})

// Controller for choices
const colorChoiceList = document.querySelectorAll('.choice');

Array.from(colorChoiceList).forEach(colorChoice => {
    colorChoice.addEventListener('click', (e) =>{
        document.querySelector('.active').classList.remove('active');
        
        colorChoice.classList.add('active');
    })
})


// Test button
document.querySelector("button").addEventListener("click", function testButton(params) {
    alert("Button is clicked");
})


// Fetch product ID from url
const itemId = new URLSearchParams(window.location.search).get('id');
console.log(itemId);

