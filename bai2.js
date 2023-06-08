let nhietDo_s = document.getElementById("nhietDo").value;
// thís function to translate from celsius to falreheit
function chuyenDoiNhietDo(){
    let nhietDo = parseFloat(nhietDo_s);
    let ketQua = nhietDo * 9 / 5 + 32;
    document.getElementById("ketQua").innerHTML = ketQua;
}
