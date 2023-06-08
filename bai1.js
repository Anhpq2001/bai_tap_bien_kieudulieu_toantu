// this fuction to average calculate
function tinhToan(){
    let toan_raw = document.getElementById("toan").value;
    let ly_raw = document.getElementById("ly").value;
    let hoa_raw = document.getElementById("hoa").value;
    let toan = parseInt(toan_raw);
    let ly = parseInt(ly_raw);
    let hoa = parseInt(hoa_raw);
    let ketQua = (toan + ly + hoa)/3;
    document.getElementById("hienThi").innerHTML = "Tổng điểm trung bình" + ketQua;
}