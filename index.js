var mang = [];

function xuat() {
  var txtText = document.getElementById("txtText").value;
  mang.push(txtText);
  var txtNum = (document.getElementById("txtNum").innerHTML = [mang]);
}

//bai 1 tong cac so duong
var mang1 = [-1, -2, 1, 3, 2, 9, 6, 8, 4, 7];
function tong() {
  var sum = 0;
  for (var i = 0; i < mang1.length; i++) {
    if (mang1[i] >= 0) {
      sum += mang1[i];
    }
  }
  document.getElementById("txtNum1").innerHTML =
    "tổng các số dương là : " + sum;
}

//bai 2 : dem co bao nhieu so duong trong mang
function dem() {
  var dem = 0;
  for (var i = 0; i < mang1.length; i++) {
    if (mang1[i] >= 0) {
      dem++;
    }
  }
  document.getElementById("txtNum2").innerHTML =
    "có " + dem + " số dương trong mảng";
}

//bài 3:tìm số nhỏ nhất trong mảng
function timsoNN() {
  for (var i = 0; i < mang1.length; i++) {
    var temp1 = mang1[0];
    if (mang1[i] > mang1[i + 1]) {
      mang1[i] = mang1[i + 1];
    }
  }
  document.getElementById("txtNum3").innerHTML =
    "số nhỏ nhất trong mảng là : " + temp1;
}

//bai 4: tìm số dương nhỏ nhất trong mảng

function tim() {
  var temp = [];
  for (var i = 0; i < mang1.length; i++) {
    if (mang1[i] > 0) {
      temp.push(mang1[i]);
    }
  }
  for (var j = 1; j < temp.length; j++) {
    var tim = temp[0];
    if (temp[j] > temp[j + 1]) {
      temp[j] = temp[i + 1];
    }
  }
  document.getElementById("txtNum4").innerHTML =
    "số dương nhỏ nhất là : " + tim;
}

//bai 5:tìm số chẵn cuối cùng trong mảng.Nếu mảng không có giá trị chẵn thì trả về -1
function soChan() {
  var soChan = 0;
  for (var i = mang1.length; i--; ) {
    if (mang1[i] % 2 === 0) {
      soChan = mang1[i];
      break;
    }
  }
  document.getElementById("txtNum5").innerHTML =
    "số chẵn trong mảng là : " + soChan;
}

//bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (cho nhập vào 2 vị trí muốn đổi chỗ)
function doiCho() {
  var txtText1 = +document.getElementById("txtText1").value;
  var txtText2 = +document.getElementById("txtText2").value;
  var temp = mang1[txtText1];
  mang1[txtText1] = mang1[txtText2];
  mang1[txtText2] = temp;
  document.getElementById("txtNum6").innerHTML = mang1;
}

//bài 7:sắp xếp mảng theo thứ tự tăng dần
function sapXep() {
  // for (var i = 0; i < mang1.length; i++) {
  //   if (mang1[i] > mang1[i + 1]) {
  //     var temp = mang1[i];
  //     mang1[i] = mang1[i + 1];
  //     mang1[i + 1] = temp;
  //   }
  // }
  for (var j = 0; j < mang1.length; j++) {
    for (var i = 0; i < mang1.length; i++) {
      if (mang1[i] > mang1[i + 1]) {
        var temp = mang1[i];
        mang1[i] = mang1[i + 1];
        mang1[i + 1] = temp;
      }
    }
  }
  document.getElementById("txtNum7").innerHTML = mang1;
}

//bài 8 : tìm số nguyên tố đầu tiên trong mảng.Nếu mảng không có số nguyên trả về -1
function kiemTra(x) {
  var dem = 0;
  for (var i = 1; i <= x; i++) {
    if (x % i === 0) {
      dem += 1;
    }
  }
  if (dem !== 2) {
    return "";
  } else if (dem === 2) {
    return x;
  }
}

function soNguyenTo() {
  for (var i = 2; i < mang1.length; i++) {
    if (mang1[i] % kiemTra(i) === 0) {
      break;
    }
  }
  document.getElementById("txtNum8").innerHTML = mang1[i];
}

//bài 9:Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
// var mangNew = [0.5, 0.67, 0.75, 0.25, 0.8];
function mang() {
  var dem = 0;
  var txtText3 = document.getElementById("txtText3").value;
  for (var i = 0; i < mang1.length; i++) {
    if (mang1[i] == Math.floor(mang1[i])) {
      dem++;
    }
  }
  console.log(dem);
}

//bài 10:So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function soSanh() {
  demDuong = 0;
  demAm = 0;
  for (var i = 0; i < mang1.length; i++) {
    if (mang1[i] > 0) {
      demDuong++;
    } else if (mang1[i] < 0) {
      demAm++;
    }
  }
  if (demDuong < demAm) {
    document.getElementById("txtNum10").innerHTML = "so am nhieu hon " + demAm;
  } else {
    document.getElementById("txtNum10").innerHTML =
      "so duong nhieu hon " + demDuong;
  }
}
