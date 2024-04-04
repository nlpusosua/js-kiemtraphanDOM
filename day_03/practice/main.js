a//Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
//Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
//Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
//Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”

//1
const heading= document.getElementById("heading");
heading.style.color="red"
heading.style.textTransform="uppercase"

//2 
var elements = document.getElementsByClassName("para");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color = "blue";
  elements[i].style.fontSize = "20px";
}

//3 
const div = document.createElement("div");
div.insertAdjacentHTML("beforebegin", "<a href='f.com'> facebook </a>")


//4
const head= document.getElementById("title");
head.innerText="day la the tieu de"

//Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
//Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
//Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
//Xóa thẻ có class=“para-1”

//5 
const elements = document.querySelector(".description");
elements.classList.add("text-bold");

const textBold = document.querySelector(".text-bold");
textBold.style.fontWeight=("bold")
