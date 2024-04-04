// Khai báo array rỗng
let arr = [];

// Khai báo array
let number = [];

// Gán giá trị cho các phần tử của array thông qua chỉ số
number[0] = 1;
number[1] = "Bùi Hiên";
number[2] = true;
number[10]= false;

console.log(number);
// Khai báo và khởi tạo giá trị cho array
const myArr = [1, 2, 3, 4, true, false, "Nguyễn Văn A"];

console.log(myArr);

myArr[0]=100;
console.log(myArr);

myArr.splice(4,1)
console.log(myArr);

let message= 'xin chao cac ban';
let word=message.split(" ");
console.log(word)

const numbers =[1,2,4,5,7];

const numbersMap= numbers.map(e=>e*2)
console.log(numbersMap)

// phần tiếp theo object

let user ={
    name: "thang",
    age: 23,
    address:{
        city:"hà nội",
        street:"ng"
    },
    sleep(hours){
        console.log(`adasd ${hours}`)
    }
}


console.log(user.address.city)


// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"

// 4. Tìm các sản phẩm có giá > 20000000

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

// 8. Sắp xếp giỏ hàng theo price tăng dần

// 9. Sắp xếp giỏ hàng theo count giảm dần

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng

// bài 4
console.log("Các sản phẩm có giá > 20000000:");
let expensiveProducts = products.filter((product) => product.price > 20000000);
expensiveProducts.forEach((products) => {
    console.log(
        `${products.name} - ${products.price} - ${products.brand} - ${products.count}`
    );
});

// bài 5
console.log('Các sản phẩm có chữ "pro" trong tên:');
let proProducts = products.filter((product) =>
    product.name.toLowerCase().includes("pro")
);
console.log(proProducts);

// bài 6
let newProduct = {
    name: "Google Pixel 6",
    price: 25000000,
    brand: "Google",
    count: 2,
};
products.push(newProduct);
console.log("Sản phẩm mới đã được thêm vào giỏ hàng:", newProduct);

// bài 7

products = products.filter((product) => product.brand !== "Samsung");
console.log("Các sản phẩm sau khi xóa thương hiệu Samsung:", products);

// bài 8
products.sort((a, b) => a.price - b.price);
console.log("Giỏ hàng sau khi sắp xếp theo price tăng dần:", products);

// bài 9
products.sort((a, b) => b.count - a.count);
console.log("Giỏ hàng sau khi sắp xếp theo count giảm dần:", products);

// bài 10
let randomProducts = products.slice(0, 2);
console.log("2 sản phẩm bất kỳ trong giỏ hàng:", randomProducts);
