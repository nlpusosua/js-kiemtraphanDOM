const heading= document.getElementById("heading");
console.log(heading);

const headingCss = document.querySelector("#heading");
console.log(headingCss);

//thay doi css
heading.style.color="red";
heading.style.backgroundColor= "black";

// thay doi text
heading.innerHTML="<span>Xinchao</span>"
heading.innerText="<span> xin chao</span>"

// c1
const paraList = document.querySelectorAll("p");
console.log(paraList);

for (let i=0; i< paraList.length; i++){
    paraList[i].style.color="blue";
}

// c2 
Array.from(paraList).map(p=>p.style.color="black");

// thêm phần tử
const p4 = document.createElement("p");
p4.innerText="para 4";
console.log(p4);
//document.body.appendChild(p4); // thêm vòa cuối thằng cha
//document.body.prepend(p4); // thêm vào đâu thằng cha
const p2 = document.querySelector(".para");
document.body.insertBefore(p4, p2)// chèn vào giữa p2

// nhập cái menu này sang thẻ a bên html
const menu =[
    {
        label: "facebook",
        url: "f.com"
    },
    {
        label: "google",
        url: "gg.com"
    },
    {
        label: "youtobe",
        url: "y.com"
    }
]

menu.forEach( item=>{
    const link = document.createElement("a")
    link.innerText = item.label;
    link.href= item.url;
    document.body.appendChild(link);
}
)

// xóa
p1 = document.querySelector("p");
document.body.removeChild(p1);

// thay thế p2 thành button 






