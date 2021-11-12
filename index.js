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
class TestCandidate {
    run() {
      for (let j = 0; j < hocsinh.length; j++) {
        if (
          Number(hocsinh[j].math) +
            Number(hocsinh[j].literature) +
            Number(hocsinh[j].english) >
          15
        ) {
          console.log(hocsinh[j]);
        }
      }
    }
  }
  let test = new TestCandidate();
  test.run();
