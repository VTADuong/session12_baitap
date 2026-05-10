//bài 1
let a = +prompt("Nhập vàp số a");
let b = +prompt("Nhập vàp số b");
let result = a % b;

if (result === 0) {
    alert(a + " chia hết cho " + b);
} else if (b === 0) {
    alert("Không thể chia cho 0")
} else {
    alert(a + " không chia hết cho " + b);
}

//bài 2
let age = +prompt("Nhập vào số tuổi của bạn")

if (age < 15) {
    console.log("Không đủ điều kiện học lớp 10");
} else {
    console.log("Đủ điều kiện học lớp 10");
}

//bài 3
let soNguyen = parseInt(prompt("Nhập vào số nguyên bất kỳ"));
if(soNguyen < 0){
    document.write(soNguyen + " nhỏ hơn 0");
} else if(soNguyen === 0){
    document.write(soNguyen + " bằng 0");
} else{
    document.write(soNguyen + " lớn hơn 0");
}

//bài 4
let soNguyen1 = parseInt(prompt("Nhập số nguyên thứ nhất"));
let soNguyen2 = parseInt(prompt("Nhập số nguyên thứ hai"));
let soNguyen3 = parseInt(prompt("Nhập số nguyên thứ ba"));
let max = Math.max(soNguyen1, soNguyen2, soNguyen3);
console.log(`Số lớn nhất là: ${max}`);

//bài 5
let kiemTra = +prompt("Nhập điểm kểm tra");
let giuaKy = +prompt("Nhập điểm thi giữa kỳ");
let cuoiKy = +prompt("Nhập điểm thi cuối kỳ");
let average = (kiemTra + giuaKy +cuoiKy) / 3;
if(average === 10 && average >= 9.5){
    console.log("Điểm trung bình là: " + average + " Học sinh Xuất Sắc");
} else if(average < 9.5 && average > 8.5){
    console.log("Điểm trung bình là: " + average + " Học sinh Giỏi");
} else if(average < 8.5 && average > 7.5){
    console.log("Điểm trung bình là: " + average + " Học sinh Khá");
} else if(average < 7.5 && average > 5){
    console.log("Điểm trung bình là: " + average + " Học sinh Trung Bình");
} else{
    console.log("Điểm trung bình là: " + average + " Học sinh Yếu!!!");
}