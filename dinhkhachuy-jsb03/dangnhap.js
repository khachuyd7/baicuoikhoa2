const btn = document.getElementsByClassName("btn-login");
const acc = document.getElementById("account");
const pw = document.getElementById("password");


btn[0].addEventListener("click", function (e) {
  e.preventDefault();
  if (acc.value == "") {
    alert("Chưa nhập tài khoản!!!");
  } 

  else if (pw.value == "") {
    alert("Chưa nhập mật khẩu!!!");
  }

});
