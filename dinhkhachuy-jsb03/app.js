const diemtuyensinh = document.getElementById("diemtuyensinh");
const diemtuyensinh1 = document.getElementById("diemtuyensinh1");
console.log(diemtuyensinh);

diemtuyensinh1.addEventListener("click", function () {
  if (diemtuyensinh.style.display == "none") {
    diemtuyensinh.style.display = "block";
   
  } else {
    diemtuyensinh.style.display = "none";
    
  }
  console.log("clicked");
});

// const cosovatchat=document.getElementsById('cosovatchat');
// const cosovatchat1=document.getElementById('cosovatchat1');
// console.log(cosovatchat);
// cosovatchat1.addEventListener('click',function(){
//   if (cosovatchat.style.display == "none"){
//     cosovatchat.style.display = "block";
  
//   }
//   else {
//     cosovatchat.style.display = "none" ;
//   }
//   console.log("clicked");
// })



