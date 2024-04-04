//  Sử dụng HTML-attribute
const sayHello=()=>{
    alert("xin chao 1")
}

//Sử dụng DOM property
const bt2 = document.getElementById("bt2")
bt2.onclick=()=>{
    alert("xin chao 2")
}

// Sử dụng addEventListener
const bt3 = document.getElementById("bt3")
bt3.addEventListener("click", ()=>{
    alert("xin chao 3")
})

//vd1

var changeContentButton = document.getElementById("btn-1");

// Lắng nghe sự kiện click trên button
changeContentButton.addEventListener("click", function() {
    // Lấy đối tượng p theo id
    var textElement = document.getElementById("text");
    // Gán nội dung quote mới
    textElement.innerText = "Nội dung quote mới";
});

//vd2
var changeColorButton = document.getElementById("btn-2");

// Lắng nghe sự kiện click trên button
changeColorButton.addEventListener("click", function() {
    // Lấy đối tượng p theo id
    var textElement = document.getElementById("text");
    // Gọi hàm để random màu HEX
    var randomColor = getRandomHexColor();
    // Thay đổi màu của thẻ p
    textElement.style.color = randomColor;
});

// Hàm để random màu HEX
function getRandomHexColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//vd3
var changeBackgroundButton = document.getElementById("btn-3");

// Lắng nghe sự kiện click trên button
changeBackgroundButton.addEventListener("click", function() {
    // Lấy đối tượng p theo id
    var textElement = document.getElementById("text");
    // Gọi hàm để random màu RGB
    var randomColor = getRandomRgbColor();
    // Thay đổi màu background-color của thẻ p
    textElement.style.backgroundColor = randomColor;
});

// Hàm để random màu RGB
function getRandomRgbColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}