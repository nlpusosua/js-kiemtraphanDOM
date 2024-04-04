// console.log("hello world!");
//let name;
//name ="thang";
//let age = 20;
//let status = true;


//let message = 'xin chào tao là " + name + "';
//console.log(message);

//function sum(a,b){
//    return a+b;
//}
//console.log(sum(4,5));
// BTVN

// BÀI 1
function giaithua(n) {
    let giaiThua = 1;
    while (n > 0) {
        giaiThua *= n;
        n--;
    }
    return giaiThua;
}

console.log(giaithua(5));

// BAI 2

function daoChuoi(chuoi) {
    let chuoiDaoNguoc = "";
    for (let i = chuoi.length - 1; i >= 0; i--) {
        chuoiDaoNguoc += chuoi[i];
    }
    return chuoiDaoNguoc;
}

console.log(daoChuoi("Hello"));

// Bai 3

function trans(ma) {
    switch (ma) {
        case 'VN':
            
            console.log("Xin chào!");
            break;
        case 'EN':
            
            console.log("heloo");
            break
    }
}

trans('EN');

// bài 4 

function catchuoi(chuoi) {
    let thutu = '';
    for (let i = 0; i < chuoi.length && i < 10; i++) {
        thutu += chuoi[i];
    }
    thutu += '...';
    return thutu;
}

console.log(catchuoi('xinchaocacbandadenvoiTechmater'));