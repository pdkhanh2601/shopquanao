function kiemTra() {
    var arr = document.getElementsByTagName("input");
    var ho = arr[0].value;
    var ten = arr[1].value;
    var ngaysinh = arr[2].value;
    var ckgt1 = arr[3].checked;
    var ckgt2 = arr[4].checked;
    var sdt = arr[5].value;
  
    if (ho == "") {
        alert("Bạn Chưa Nhập Họ");
        return false;
    } else if (ten == "") {
        alert("Bạn Chưa Nhập tên");
        return false;
    } else if (ngaysinh == "") {
        alert("Chưa chọn ngày sinh");
        return false;
    } 
    if (ckgt1 || ckgt2) {

    } else {
        alert("chưa chọn giới tính");
        return false;
    }
    if (sdt == ""){
        alert("Chưa nhập sdt");
        return false;
    }
    else if (isNaN(sdt)) {
        alert("Bạn nhập không phải là số");
        return false;
    }
    else if(sdt.length < 10){
        alert("Số Điện Thoại Từ 10 đến 11 số");
        return false;
    }

    alert("NINETYPERCENT Chúc Mừng Bạn Đã Đăng Ký Thành Công ");
    

}
function hienThi(visible) {
    var stk = document.getElementById("stk");
    stk.style.display = visible ? "" : "none";
}