//Số nguyên tố là số lớn hơn 1, chỉ chia được cho 1 và chính nó
console.log("20 số nguyên tố đầu tiên là:");
let count = 0;
let n = 2;

while (count < 20) {
    let uoc = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            uoc++
        }
    } if (uoc === 2) {
        console.log(n);
        count++
    } n++;
}