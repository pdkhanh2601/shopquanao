$(document).ready(function() {
    $("#dangnhap").click(function(e) {
        e.preventDefault();
        var user = $("#user").val();
        var pass = $("#pass").val();
        if (user == "") {
            alert("Chưa nhập tên đăng nhập!");
           
        } else if (pass =="") alert("Chưa nhập mật khẩu!");
        else{
        
            if (user == "admin" && pass =="ninetypercent") {
            alert("Đăng nhập thành công!");
            window.location = "Index.html";
          }
            else {
            alert("Sai Tên đang nhập hoặc Mật khẩu! Đăng nhập thất bại...");
            location.reload();
        }
    }
    });

});