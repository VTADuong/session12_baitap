//Bài 1: In dãy Fibonacci. ví dụ chạy 30 lần để ko bị lag
// 1+0=1
// 0+1=1
// 1+1=2
// 1+2=3
// 2+3=5
// 3+5=8
// 5+8=13...
console.log("In dãy Fibonacci")
let a = 1;//số F1
let b = 1; // số F2
let count = 0;
while (count < 30) {
    console.log(a); // in F1
    let c = a + b; // tính F_next
    a = b; //đổi value F2 qua vtri F1
    b = c; //đổi value F_next qua vtri F2
    count++;
}

//Bài 2: Tính giai thừa của một số nguyên dương. Ví dụ: số 10!
let x = 10; // lần đếm
let y = 1; // số nhân tăng dần
let z = 1; // tổng tích giai thừa
while (y <= x) { // số nhân tăng đến 10
    z = z * y; // gọi biến là tích
    y++ //đủ điều kiện tăng dần số nhân
} console.log("Giai thừa của 10 là: " + z) // số cuối hiện ra sẽ là số nhân cuối với 10.

//Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau
//01
for (let d = 1; d <= 5; d++) {
    // d=1 chạy từ dòng có 1*; d<=5 chạy đến dòng có 5*; d++ sau mỗi dòng cộng thêm 1*
    let text1 = "";//trước khi thêm * cho dòng -> đổ hết *cũ đi -> trống túi rồi thêm * của điều kiện mới vào
    for (let e = 0; e < d; e++) {
        //vòng lặp bên trong chạy từ 0 đến d; nó cộng dông dấu * vào biến text cho đến khi đủ số lượng f đặt ra.
        text1 = text1 + "*";
    }
    console.log(text1);
}
//02
for (let f = 5; f >= 1; f--) {
    let text2 = "";
    for (let g = 0; g < f; g++) {
        text2 = text2 + "*";
    }
    console.log(text2);
}
//03
for (let h = 1; h <= 5; h++) {
    // vòng lặp CHA; xây 5 tầng từ 1->5
    let text3 = "";
    //mỗi lần xây tầng, cbi 1 khay rỗng; xếp " " và * vào.
    for (let i = 1; i <= 5 - h; i++) {
        // vòng lặp CON1; nhặt " " đẩy * sang phải
        text3 = text3 + " "
        //đặt " " vào khay
    }
    for (let j = 0; j < h; j++) {
        //vòng lặp CON2; nhặt *; mỗi tầng cần tăng 1* nên j < h
        text3 = text3 + "*"
    }
    console.log(text3)
}

//04
for (let k = 5; k >= 1; k--) {
    // 5 tầng từ 5->1
    let text4 = "";
    for (let l = 0; l < 5 - k; l++) {
        // l++ để khoảng trắng tăng dần
        text4 = text4 + " "
    }
    for (let m = 0; m < k; m++){
        text4 = text4 + "*"
    }
    console.log(text4)
} 

//Bài 4: In hình chữ nhật rỗng
for (let o = 1; o <= 5; o++){
    let text = ""
    for(let p = 1; p <= 15; p++){
        if( o == 1 || o == 5){
            text = text + "*"
        } else{
            if( p == 1 || p == 15){
                text = text + "*"
            } else{
                text = text + " "
            }
        }
    }
    console.log(text)
}

//Bài 5
// Khai báo các thông số ban đầu
let soTienGoc = 1000000; // 1 triệu đồng
let soThang = 12; // Gửi trong 1 năm
let laiSuat = 0.01; // 12%/năm

// để theo dõi số tiền thay đổi qua từng tháng
let tongTien = soTienGoc;

//Sử dụng vòng lặp for để tính tiền theo từng tháng
for (let thang = 1; thang <= soThang; thang++) {
    // Tính tiền lãi của tháng hiện tại
    let tienLaiThangNay = tongTien * laiSuat;
    // Cộng dồn tiền lãi vào tổng tiền (Lãi mẹ đẻ lãi con)
    tongTien = tongTien + tienLaiThangNay;
    // In ra để theo dõi sự tăng trưởng hàng tháng
    console.log("Tháng " + thang + ": Tiền trong tài khoản = " + tongTien)
}

//Kết quả cuối cùng
console.log("Sau " + soThang + " tháng, tổng số tiền nhận được là: " + tongTien);