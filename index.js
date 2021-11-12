// Bài 1:

// Thiết lập lớp PhanSo để biểu diễn khái niệm phân số với hai thành phần dữ liệu tử số, mẫu số và các hàm thành phần cộng, trừ, nhân, chia hai phân số, các hàm thành phần xuất, nhập, định giá trị cho phân số. Viết chương trình cho phép nhập vào hai phân số, in ra kết quả các phép toán cộng, trừ, nhân, chia hai phân số kể trên.


// Bài 2:

// Xây dựng lớp Candidate (Thí sinh) gồm các thuộc tính: mã, tên, ngày tháng năm sinh, điểm thi Toán, Văn, Anh và các phương thức cần thiết.

// Xây dựng lớp TestCandidate để kiểm tra lớp trên:

// – Nhập vào n thí sinh (n do người dùng nhập)

// – In ra thông tin về các thí sinh có tổng điểm lớn hơn 15


// *Bài 3:
// Ngân hàng ABC muốn lưu trữ thông tin của mỗi tài khoản như sau:

// Mỗi tài khoản chứa các thông tin:

// Số tài khoản 
// Tên tài khoản 
// Số tiền trong tài khoản 
// Thiết kế lớp Account để lưu trữ các thông tin, lớp bao gồm các phương thức sau:

// Constructor
// Các phương thức get, set cho từng thuộc tính
// Phương thức toString để trả về chuỗi chứa toàn bộ thông tin tài khoản, yêu cầu định dạng tiền tệ.
// Thêm các thông tin sau vào lớp Account:

// Hằng số lãi suất có giá trị khởi tạo 0.035
// Constructor có 2 đối số: số tài khoản, tên tài khoản. Constructor này sẽ khởi tạo số tiền mặc định là 50
// Phương thức nạp tiền vào tài khoản: Lấy số tiền hiện tại trong tài khoản + số tiền nạp vào
// Phương thức rút tiền: Lấy số tiền hiện tại trong tài khoản – (số tiền muốn rút+phí rúttiền)
// Phương thức đáo hạn: Mỗi lần đến kỳ đáo hạn thì số tiền trong tài khoản = số tiền trong tài khoản + số tiền trong tài khoản * LAISUAT
// Phương thức chuyển khoản từ tài khoản này sang tài khoản khác
// Chú ý: Mỗi thao tác phải kiểm tra số tiền nạp, rút, chuyển có hợp lệ hay không? (VD: tiền nhập vào <0, tiền rút nhiều hơn tiền trong tài khoản thì thông báo không hợp lệ và yêu cầu nhập lại)

// Viết 1 lớp Human có các thuộc tính name ,age, gender. Có các phương thức ăn, ngủ, đi học, nói


// Tạo ra 1 lớp 
class Human { 
    // Khởi tạo các thuộc tính của đối tượng
    constructor(name,age,gender) { // Giá trị người dùng nhập vào 
        // Gán các giá trị người dùng nhập vào thuộc tính của đối tượng
        this.name = name
        this.age = age
        this.gender = gender
    }

    // Phương thức
    say() {
        console.log(this)
        console.log("Hello, my name is" + this.name)
    }
    talk(name) {

    }
}

// Tạo 1 lớp sinh viên có thêm các thuộc tính mssv,dtb. Có phương thức nói : (Tôi là sinh viên)

class SinhVien extends Human {
    constructor(name,age,gender,mssv,dtb) {
        super(name,age,gender)
        this.mssv = mssv
        this.dtb = dtb 
    }

    // Override - Ghi đè 
    say() {
        super.say()
        console.log("Tôi là sinh viên")
    }

    // Overload - Nạp chồng phương thức 
    talk(name,age) {

    }
}



// Khởi tạo đối tượng của lớp đó 
let human1 = new Human("Long",21,"Nam")
let student1 = new SinhVien("Long",21,"Nam",7255,10)


// human1.say()
student1.say()

// Bài 1:

// Thiết lập lớp PhanSo để biểu diễn khái niệm phân số với hai thành phần dữ liệu tử số, mẫu số và các hàm thành phần cộng, trừ, nhân, chia hai phân số, các hàm thành phần xuất, nhập, định giá trị cho phân số. Viết chương trình cho phép nhập vào hai phân số, in ra kết quả các phép toán cộng, trừ, nhân, chia hai phân số kể trên.
class PhanSo {
    constructor(tu,mau){
        this.tu = tu
        this.mau = mau
    }
add(phanSo2) {
    return new PhanSo(this.tu*phanSo2.mau + phanSo2.tu*this.mau,this.mau*phanSo2.mau)
}

mul() {
    return new PhanSo(this.tu*phanSo2.mau - phanSo2.tu*this.mau,this.mau*phanSo2.mau)
}

sub() {
    return new PhanSo(this.tu*phanSo2.tu,this.mau*phanSo2.mau)
}

div() {
    return new PhanSo(this.tu*phanSo2.mau,this.mau*phanSo2.tu)
}

show() {
    console.log($(this.tu)/$(this.mau))
}

}

// Bài 2:

// Xây dựng lớp Candidate (Thí sinh) gồm các thuộc tính: mã, tên, ngày tháng năm sinh, điểm thi Toán, Văn, Anh và các phương thức cần thiết.

// Xây dựng lớp TestCandidate để kiểm tra lớp trên:

// – Nhập vào n thí sinh (n do người dùng nhập)

// – In ra thông tin về các thí sinh có tổng điểm lớn hơn 15
const a = prompt("nhập học sinh: ")
class Candidate {
    constructor(id,name,dob,math,literature,english){
        this.id = id
        this.name = name
        this.dob = dob
        this.math = math
        this.literature = literature
        this.english = english
    }
}
//tạo mảng để còn chứa những cái thỏa mãn điều kiện để push ehehehe
const hocsinh = []
for ( let i = 0; i <= Number(a); i++) {
    const student = new Candidate(prompt("id: "),prompt("name: "),prompt("dob: "),prompt("math: "),prompt("literature: "),prompt("english: "));
    hocsinh.push(student);
}
// for ( let j = 0; j <= hocsinh.length; i++) {
//     return this.math + this.literature + this.english >= 15
// }
// console.log(hocsinh)

// *Bài 3:
// Ngân hàng ABC muốn lưu trữ thông tin của mỗi tài khoản như sau:

// Mỗi tài khoản chứa các thông tin:

// Số tài khoản 
// Tên tài khoản 
// Số tiền trong tài khoản 
// Thiết kế lớp Account để lưu trữ các thông tin, lớp bao gồm các phương thức sau:

// Constructor
// Các phương thức get, set cho từng thuộc tính
// Phương thức toString để trả về chuỗi chứa toàn bộ thông tin tài khoản, yêu cầu định dạng tiền tệ.
// Thêm các thông tin sau vào lớp Account:

// Hằng số lãi suất có giá trị khởi tạo 0.035
// Constructor có 2 đối số: số tài khoản, tên tài khoản. Constructor này sẽ khởi tạo số tiền mặc định là 50
// Phương thức nạp tiền vào tài khoản: Lấy số tiền hiện tại trong tài khoản + số tiền nạp vào
// Phương thức rút tiền: Lấy số tiền hiện tại trong tài khoản – (số tiền muốn rút+phí rúttiền)
// Phương thức đáo hạn: Mỗi lần đến kỳ đáo hạn thì số tiền trong tài khoản = số tiền trong tài khoản + số tiền trong tài khoản * LAISUAT
// Phương thức chuyển khoản từ tài khoản này sang tài khoản khác
// Chú ý: Mỗi thao tác phải kiểm tra số tiền nạp, rút, chuyển có hợp lệ hay không? (VD: tiền nhập vào <0, tiền rút nhiều hơn tiền trong tài khoản thì thông báo không hợp lệ và yêu cầu nhập lại)