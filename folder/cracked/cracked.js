

var searchButtonEl = document.getElementById('search-button');
var searchBoxEl = document.getElementById('searchBox');

// searchButtonEl.addEventListener('click',function searchButton() {
//   console.log('searchButtonEl clicked');
//     displayBox('search-box');
// })

// function displayBox() {
//     console.log('display function executed');
//    	searchBox.classList.toggle('show-search');
// }

$("#search-button").click(function(){
    $("#searchBox").toggle();
});