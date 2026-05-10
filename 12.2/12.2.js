//bai 1 Chuyển từ độ C sang độ F.
let doC = +prompt("Hãy nhập độ C");
let doF = doC * 1.8 + 32;
console.log(doC + " độ C bằng " + doF + " độ F");

//bai 2 Chuyển từ mét sang feet
let met = +prompt("Hãy nhập số mét")
let feet = met * 3.28;
console.log(met + " mét bằng " + feet + " feet");

//bai 3 Tính diện tích hình vuông khi biết cạnh a.
let a = +prompt("Hãy nhập a (a ≠ 0 ở PT căn bậc 2)");
let b = +prompt("Hãy nhập b");
let sVuong = a ** 2;
console.log("Diện tích hình vuông có cạnh a = " + a + " là " + sVuong)

//bai 4 Tính diện tích hình chữ nhật khi biết 02 cạnh a, b.
let sChuNhat = a * b;
console.log("Diện tích hình chữ nhật có cạnh a = " + a + ", b = " + b + " là " + sChuNhat)

//bai 5 Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
let sTamGiacVuong = (a * b) / 2;
console.log("Diện tích hình tam giác vuông có 2 cạnh kề a = " + a + ", b = " + b + " là " + sTamGiacVuong)

//bai 6 Giải phương trình bậc 1.
if (a != 0) {
    let x = (-b) / a;
    console.log("PT bậc 1: " + a + "x" + " + " + b + " = 0 " + "có nghiệm duy nhất là " + x);
} else {
    if (b === 0) {
        console.log("PT bậc 1: " + a + "x" + " + " + b + " = 0 " + "có vô số nghiệm");
    }
    else {
        console.log("PT bậc 1: " + a + "x" + " + " + b + " = 0 " + " vô nghiệm");
    }
}

//bai 7 Giải phương trình bậc 2.
let c = +prompt("Hãy nhập c");
let delta = (b ** 2) - (4 * a * c);
if (a === 0) {
    let y = -b / (2 * a);
    console.log("Không đủ điều kiện cho PT căn bậc 2.");
} else {
    if (delta < 0) {
        console.log("PT bậc 2: " + a + "y^2" + " + " + b + "y" + " + " + c + " = 0" + " là PT vô nghiệm");
    } else if (delta = 0) {
        console.log(" là PT bậc 2: " + a + "y^2" + " + " + b + "y" + " + " + c + " = 0" + "là PT có nghiệm kép : y = " + y);
    } else {
        let y1 = (-b + Math.sqrt(delta)) / (2 * a);
        let y2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("PT bậc 2: " + a + "y^2" + " + " + b + "y" + " + " + c + " = 0" + " là PT có hai nghiệm phân biệt : " + y1 + " và " + y2)
    }
} 

//bai 8
let peopleAge = +prompt("Nhập 1 số bất kỳ")
if(peopleAge > 0 && peopleAge < 120){
    console.log(peopleAge + " là số tuổi của 1 người");
} else{
    console.log(peopleAge + " không phải là số tuổi của một người");
}