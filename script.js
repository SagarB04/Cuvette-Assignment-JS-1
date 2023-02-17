
var h1 = document.querySelector("h1");

var minus = document.querySelector(".btn1");
var plus = document.querySelector(".btn2");
var rst = document.querySelector(".reset");

minus.addEventListener("click", function(){
    
    var newNum = h1.innerHTML - 1;
    h1.innerHTML = newNum;
});
plus.addEventListener("click", function(){
    var newNum = +h1.innerHTML + 1;
    h1.innerHTML = newNum;
});

rst.addEventListener("click", function(){
    var newNum = 0;
    h1.innerHTML = newNum;
});

