// Version 1, using fetch -- DEPRECATED!
// Using fetch() has some problems regarding selecting elements to manipulate data later on
// Version 2 below uses jQuery instead

// const mainCover = document.querySelector('#main-cover');
// const bestSellers = document.querySelector('#best-sellers');
// const newProducts = document.querySelector('#new-products');
// const categories = document.querySelector('#categories');

// let sections = [mainCover, bestSellers, newProducts, categories];

// //Dynamic generate from the server.
// let secionLinks = [
//     './components/Index/Cover/cover.html',
//     './components/Index/BestSellers/best-sellers.html',
//     './components/Index/NewProducts/new-products.html',
//     './components/Index/Categories/categories.html'
// ]

// const fetchData = (source, target) => {
//     fetch(source)
//         .then(res => res.text())
//         .then(data => {
//             target.innerHTML = data;
//         })
//         .catch(e => console.log(e))
// }


// for (let i = 0; i < sections.length; ++i) {
//     fetchData(secionLinks[i], sections[i]);
// }

// $(function() {
//     console.log("From indexJS");
//     $("#blabla").on('click', function() {
//         console.log('click');
//     })
// })



// VERSION 2 -- USING JQUERY AJAX
$(function() {
    $('#main-cover').load("./components/Index/Cover/cover.html");
    $('#best-sellers').load("./components/Index/BestSellers/best-sellers.html");
    $('#new-products').load("./components/Index/NewProducts/new-products.html");
    $('#categories').load("./components/Index/Categories/categories.html");

    console.log('loaded successfully');
    
}) 

// const liLis = document.querySelectorAll('li');

// Array.from(liLis).forEach(li => {
//     li.addEventListener('click', ()=> {
        
//     })
// })


// $(function() {
//     $('li').click(function() {
//         console.log("CLICKKKKKED HAHAHAH");
//     })
// })

