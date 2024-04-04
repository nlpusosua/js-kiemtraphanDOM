// API là gì ? Application Programming Interface, là 1 tập hợp các quy tắc, cơ chế mà theo đó, 1 úng dụng hay 1 thành phần sẽ tương tác với 1 úng dụng hay 1 thành phần khác
// 


const btn = document.getElementById("btn");
const image = document.getElementById("image");

// Lắng nghe sự kiện khi bấm vào nút "random"
btn.addEventListener("click", function () {
    getRandomImage()
})

// Gọi API để lấy dữ liệu và hiển thị
async function getRandomImage() {
    try {
        // Gọi API lấy ảnh random của dog
        let res = await axios.get("https://dog.ceo/api/breeds/image/random")

        // Gán URL cho thẻ image
        image.src = res.data.message
    } catch (error) {
        console.log(error);
    }
}
