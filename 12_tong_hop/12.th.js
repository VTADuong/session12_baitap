let choice = 1;
let name = "";
let age = "";

while (true) {
    console.log("1. Nhập tên");
    console.log("2. Nhập tuổi");
    console.log("3. In tên & tuổi");
    console.log("4. In bảng cửu chương");
    console.log("5. Kiểm tra số nhập chẵn - lẻ");
    console.log("6. Tính tổng các số từ 1 -> N người dùng đã nhập");
    console.log("7. In các số trong 1 dãy người dùng nhập");
    console.log("8. Kiểm tra số nhập có phải số nguyên tố không");
    console.log("9. In chuỗi đảo ngược của 1 chuỗi mà người dùng nhập");
    console.log("10. Thoát khỏi chương trình");
    choice = +prompt("Mời bạn nhập lựa chọn (1->10): ")
    if (choice === 10) {
        console.log("Đã thoát khỏi chương trình")
        break;
    }
    switch (choice) {
        case 1:
            name = prompt("Nhập tên của bạn");
            break;
        case 2:
            age = +prompt("Nhập tuổi của bạn");
            break;
        case 3:
            console.log("Tên: " + name + " & Tuổi: " + age);
            break;
        case 4:
            let bangCuuChuong = +prompt("Nhập số muốn in bảng cửu chương")
            for (let i = 1; i <= 10; i++) {
                console.log(bangCuuChuong + " x " + i + " = " + (bangCuuChuong * i));
            }
            break;
        case 5:
            let soChanLe = +prompt("Nhập số cần kiểm tra Chẵn - Lẻ")
            if (soChanLe % 2 === 0) {
                console.log(soChanLe + " là số Chẵn");
            } else {
                console.log(soChanLe + " là số Lẻ");
            }
            break;
        case 6:
            let tong = 0;
            let soTinhTong = +prompt("Nhập số cần tính tổng từ 1");
            for (let i = 1; i <= soTinhTong; i++) {
                tong = tong + i;
            }
            console.log("Tổng từ 1 đến " + soTinhTong + " là: " + tong)
            break;
        case 7:
            let daySo = prompt("Hãy nhập dãy số bất kỳ");
            for (let s = 0; s < daySo.length; s++){
                console.log(daySo[s]);
            }
            break;
        case 8:
            let soNguyenTo = +prompt
                ("Nhập số cần kiểm tra số Nguyên Tố");
            let uoc = 0;
            for (let j = 1; j <= soNguyenTo; j++) {
                if (soNguyenTo % j === 0) {
                    uoc++;
                }
            } if (uoc === 2) {
                console.log(soNguyenTo + " là số Nguyên Tố.");
            } else {
                console.log(soNguyenTo + " không phải là số Nguyên Tố.");
            }
            break;
        case 9:
            let chuoi = prompt("Nhập chuỗi muốn đảo ngược");
            let daoNguoc = "";
            for (let k = chuoi.length - 1; k >= 0; k--) {
                daoNguoc = daoNguoc + chuoi[k]; // lấy chữ k trong chuỗi
            } console.log("Chuỗi đảo ngược: " + daoNguoc);
            break;
        default:
            console.log("Số chưa được menu hỗ trợ.")
            break;
    }
} 