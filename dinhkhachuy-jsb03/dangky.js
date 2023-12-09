const btn = document.getElementsByClassName("btn-login");
const acc = document.getElementById("account");
const pw = document.getElementById("password");
const re_pw = document.getElementById("repassword");
const phone = document.getElementById("phone");

btn[0].addEventListener("click", function (e) {
  e.preventDefault();
  if (acc.value == "") {
    alert("Chưa nhập tài khoản");
    return false;
  }
 
  if (phone.value == "") {
    alert("Chưa nhập số điện thoại");
    return false;
  }
  if (pw.value == "") {
    alert("Chưa nhập mật khẩu");
    return false;
  }
  if (re_pw.value == "") {
    alert("Chưa nhập lại mật khẩu");
    return false;
  }
});
