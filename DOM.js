let mangSoNguyen = [];

// Thêm số vào mảng
const btnThemSo = document.getElementById("btnThemSo");

btnThemSo.onclick = function () {
  const input = document.getElementById("inputSoNguyen");
  const so = Number(input.value);

  if (input.value.trim() === "" || !Number.isInteger(so)) {
    alert("Vui lòng nhập số nguyên hợp lệ!");
    return;
  }

  mangSoNguyen.push(so);

  document.getElementById("resultMang").innerText =
    "👉 " + mangSoNguyen.join(", ");

  input.value = "";
};

// Tổng số dương
const btnTongSoDuong = document.getElementById("btnTongSoDuong");

btnTongSoDuong.onclick = function () {
  let tong = 0;

  for (let i = 0; i < mangSoNguyen.length; i++) {
    if (mangSoNguyen[i] > 0) {
      tong += mangSoNguyen[i];
    }
  }

  document.getElementById("resultTongSoDuong").innerText =
    "👉 Tổng số dương: " + tong;
};

// Đếm số dương
const btnDemSoDuong = document.getElementById("btnDemSoDuong");

btnDemSoDuong.onclick = function () {
  let dem = 0;

  for (let i = 0; i < mangSoNguyen.length; i++) {
    if (mangSoNguyen[i] > 0) {
      dem++;
    }
  }

  document.getElementById("resultDemSoDuong").innerText =
    "👉 Số lượng số dương: " + dem;
};

// 3. Tìm số nhỏ nhất trong mảng
const btnTimSoNhoNhat = document.getElementById("btnTimSoNhoNhat");

btnTimSoNhoNhat.onclick = function () {
  if (mangSoNguyen.length === 0) {
    alert("Mảng chưa có dữ liệu!");
    return;
  }

  let min = mangSoNguyen[0];

  for (let i = 1; i < mangSoNguyen.length; i++) {
    if (mangSoNguyen[i] < min) {
      min = mangSoNguyen[i];
    }
  }

  document.getElementById("resultSoNhoNhat").innerText = "Số nhỏ nhất: " + min;
};

// 4. Tìm số dương nhỏ nhất
const btnTimSoDuongNhoNhat = document.getElementById("btnTimSoDuongNhoNhat");

btnTimSoDuongNhoNhat.onclick = function () {
  let min = null;

  for (let i = 0; i < mangSoNguyen.length; i++) {
    if (mangSoNguyen[i] > 0 && (min === null || mangSoNguyen[i] < min)) {
      min = mangSoNguyen[i];
    }
  }

  document.getElementById("resultSoDuongNhoNhat").innerText =
    min === null
      ? "Không có số dương trong mảng!"
      : "Số dương nhỏ nhất: " + min;
};

// 5. Tìm số chẵn cuối cùng
const btnTimSoChanCuoi = document.getElementById("btnTimSoChanCuoi");

btnTimSoChanCuoi.onclick = function () {
  let soChanCuoi = -1;

  for (let i = mangSoNguyen.length - 1; i >= 0; i--) {
    if (mangSoNguyen[i] % 2 === 0) {
      soChanCuoi = mangSoNguyen[i];
      break;
    }
  }

  document.getElementById("resultSoChanCuoi").innerText =
    "Số chẵn cuối cùng: " + soChanCuoi;
};

// 6. Đổi chỗ hai giá trị trong mảng
const btnDoiCho = document.getElementById("btnDoiCho");

btnDoiCho.onclick = function () {
  const viTri1 = Number(document.getElementById("viTri1").value);
  const viTri2 = Number(document.getElementById("viTri2").value);

  if (
    document.getElementById("viTri1").value === "" ||
    document.getElementById("viTri2").value === "" ||
    !Number.isInteger(viTri1) ||
    !Number.isInteger(viTri2) ||
    viTri1 < 0 ||
    viTri2 < 0 ||
    viTri1 >= mangSoNguyen.length ||
    viTri2 >= mangSoNguyen.length
  ) {
    alert("Vui lòng nhập vị trí hợp lệ!");
    return;
  }

  // Hoán đổi hai phần tử
  let temp = mangSoNguyen[viTri1];
  mangSoNguyen[viTri1] = mangSoNguyen[viTri2];
  mangSoNguyen[viTri2] = temp;

  document.getElementById("resultMang").innerText =
    "👉 " + mangSoNguyen.join(", ");

  document.getElementById("resultDoiCho").innerText =
    "Đã đổi chỗ vị trí " + viTri1 + " và " + viTri2;
};

// 7. Sắp xếp mảng tăng dần
const btnSapXepTangDan = document.getElementById("btnSapXepTangDan");

btnSapXepTangDan.onclick = function () {
  mangSoNguyen.sort(function (a, b) {
    return a - b;
  });

  document.getElementById("resultMang").innerText =
    "👉 " + mangSoNguyen.join(", ");

  document.getElementById("resultSapXep").innerText =
    "Mảng sau khi sắp xếp: " + mangSoNguyen.join(", ");
};

// 8. Tìm số nguyên tố đầu tiên
const btnTimSoNguyenTo = document.getElementById("btnTimSoNguyenTo");

btnTimSoNguyenTo.onclick = function () {
  let soNguyenTo = -1;

  for (let i = 0; i < mangSoNguyen.length; i++) {
    let laSoNguyenTo = mangSoNguyen[i] >= 2;

    for (let j = 2; j <= Math.sqrt(mangSoNguyen[i]); j++) {
      if (mangSoNguyen[i] % j === 0) {
        laSoNguyenTo = false;
        break;
      }
    }

    if (laSoNguyenTo) {
      soNguyenTo = mangSoNguyen[i];
      break;
    }
  }

  document.getElementById("resultSoNguyenTo").innerText =
    "Số nguyên tố đầu tiên: " + soNguyenTo;
};

// 9. Nhập mảng số thực và đếm số nguyên
let mangSoThuc = [];

const btnThemSoThuc = document.getElementById("btnThemSoThuc");

btnThemSoThuc.onclick = function () {
  const input = document.getElementById("inputSoThuc");

  if (input.value.trim() === "" || !Number.isFinite(Number(input.value))) {
    alert("Vui lòng nhập số thực hợp lệ!");
    return;
  }

  mangSoThuc.push(Number(input.value));

  document.getElementById("resultMangSoThuc").innerText = mangSoThuc.join(", ");

  input.value = "";
};

const btnDemSoNguyen = document.getElementById("btnDemSoNguyen");

btnDemSoNguyen.onclick = function () {
  let dem = 0;

  for (let i = 0; i < mangSoThuc.length; i++) {
    if (Number.isInteger(mangSoThuc[i])) {
      dem++;
    }
  }

  document.getElementById("resultDemSoNguyen").innerText =
    "Số lượng số nguyên: " + dem;
};

// 10. So sánh số lượng số dương và số âm
const btnSoSanhSoLuong = document.getElementById("btnSoSanhSoLuong");

btnSoSanhSoLuong.onclick = function () {
  let demDuong = 0;
  let demAm = 0;

  for (let i = 0; i < mangSoNguyen.length; i++) {
    if (mangSoNguyen[i] > 0) {
      demDuong++;
    } else if (mangSoNguyen[i] < 0) {
      demAm++;
    }
  }

  let ketQua = "";

  if (demDuong > demAm) {
    ketQua = "Số dương nhiều hơn số âm.";
  } else if (demAm > demDuong) {
    ketQua = "Số âm nhiều hơn số dương.";
  } else {
    ketQua = "Số lượng số dương và số âm bằng nhau.";
  }

  document.getElementById("resultSoSanhSoLuong").innerText =
    "Số dương: " + demDuong + " | Số âm: " + demAm + " | " + ketQua;
};
