//Bai 1 Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i === 99) {
        alert("Đã hoàn thành");
    }
}

//Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.
let doF = +prompt("Hãy nhập nhiệt độ hiện tại")
if (doF > 100) {
    alert("Vui lòng giảm nhiệt độ");
} else if (doF < 20) {
    alert("Vui lòng tăng nhiệt độ");
} else {
    alert("Nhiệt độ bình thường");
}

//Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
//Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
//Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci
let fibonacci = 1;
let a = 1;
let count = 0;
let found = false;
let sum = 0;
console.log("20 số fibonacci đầu tiên là:")
while (count < 20) {
    sum = sum + fibonacci;
    if (fibonacci % 5 === 0 && found === false) {
        let c =
            console.log("Số fibonacci đầu tiên chia hết cho 5 là:" + fibonacci);
        ;
        found = true;
    }
    console.log(fibonacci);
    let b = fibonacci + a;
    fibonacci = a;
    a = b;
    count++
}
console.log("Tổng của 20 số trên là: " + sum);

//Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
let x = 0;
let count30 = 0;
let tong = 0;
while (count30 < 30) {
    if (x % 7 === 0) {
        tong = x + tong;
        count30++;
    } x++
}
console.log("Tổng của 30 số tự nhiên đầu tiên chia hết cho 7 là: " + tong);

//Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ “FizzBuzz”
let e = 1;
console.log("các số từ 1->100")
while(e <= 100){
    if(e % 3 === 0){
        console.log("Fizz")
    } else if(e % 5 ===0){
        console.log("Buzz")
    } else if( e % 3 === 0 && e % 5 === 0){
        console.log("FizzBuzz")
    } else{
        console.log(e)
    }
    e++
}