//scroll to top
let mybutton = document.getElementById("btn-back-to-top");
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//Add to Cart
var itemList={
  "sp01":{   "name":"Acer Nitro Gaming AN515-45-R6EV R5 5600H", 
              "price":21499000, 
              "photo":"./assets/img/sanpham/acernitro5.png"}, 
  "sp02":{   "name":"Laptop Asus TUF Gaming FX506LH-HN188W i5 10300H", 
              "price":18990000, 
              "photo":"./assets/img/sanpham/tufgm.png"}, 
  "sp03":{   "name":"Laptop MSI Gaming GF63 Thin 10SC-481VN i7", 
              "price":20699000, 
              "photo":"./assets/img/sanpham/msi.png"}, 
  "sp04":{   "name":"Dell Vostro V3400 i5 1135G7/YX51W3/VO299", 
              "price":20890000, 
              "photo":"./assets/img/sanpham/dell-vostro.png"}, 
  "sp05":{   "name":"Laptop Lenovo Ideapad 5 Pro 14ACN6-82L700L7VN", 
              "price":22490000, 
              "photo":"./assets/img/sanpham/lenovo_5pro.png"}, 
  "sp06":{   "name":"Laptop Lenovo Yoga Slim 7 Carbon 14ACN6", 
              "price":31990000, 
              "photo":"./assets/img/sanpham/lenovo_yoga.png"}, 
  "sp07":{   "name":"Laptop Lenovo IdeaPad 3 15ITL6 82H800M4VN", 
              "price":12490000, 
              "photo":"./assets/img/sanpham/lenovo_3.png"}, 
  "sp08":{   "name":"Laptop Lenovo IdeaPad 5 15ITL05 82FG01H8VN", 
              "price":16990000, 
              "photo":"./assets/img/sanpham/lenovo_5.png"}, 
  "sp09":{   "name":"Laptop Lenovo IdeaPad 3 15ITL6 82H800M3VN", 
              "price":15990000, 
              "photo":"./assets/img/sanpham/lenovo_id3.png"},
  "sp10":{   "name":"Laptop Lenovo Ideapad Gaming 3 15IMH05", 
              "price":17490000, 
              "photo":"./assets/img/sanpham/lenovo_gm.png"}, 
  "sp11":{   "name":"Laptop Acer Predator Triton 300 PT315-53-7440", 
              "price":33390000, 
              "photo":"./assets/img/sanpham/acer_predator.png"}, 
  "sp12":{   "name":"Laptop ACER TravelMate P2 TMP214-53-5571 ", 
              "price":18490000, 
              "photo":"./assets/img/sanpham/acer_travelmate.png"}, 
  "sp13":{   "name":"Chuột gaming Logitech G102 Gen2 Lightsync", 
              "price":390000, 
              "photo":"./assets/img/sanpham/logitech_g102.png"}, 
  "sp14":{   "name":"Chuột máy tính gaming Logitech G Pro Hero", 
              "price":899000, 
              "photo":"./assets/img/sanpham/logitech_gprohero.png"}, 
  "sp15":{   "name":"Chuột máy tính gaming Logitech G402 Pro (Đen)", 
              "price":639000, 
              "photo":"./assets/img/sanpham/logitech_g402.png"}, 
  "sp16":{   "name":"Chuột gaming không dây Logitech G703", 
              "price":2290000, 
              "photo":"./assets/img/sanpham/logitech_g703.png"}, 
  "sp17":{   "name":"Chuột máy tính Dell MS3220", 
              "price":470000, 
              "photo":"./assets/img/sanpham/dell-ms3220.png"}, 
  "sp18":{   "name":"Chuột máy tính Genius DX110 USB", 
              "price":85000, 
              "photo":"./assets/img/sanpham/genius-dx110.png"},
  "sp19":{   "name":"Bàn phím cơ Corsair K70 RGB MK2 Red Switch", 
              "price":2990000, 
              "photo":"./assets/img/sanpham/corsair-K70.png"}, 
  "sp20":{   "name":"Bàn phím cơ Fuhlen M87s RGB Red switch", 
              "price":890000, 
              "photo":"./assets/img/sanpham/FuhlenD.png"}, 
  "sp21":{   "name":"Bàn phím cơ FL-Esports FL680SAM", 
              "price":2290000, 
              "photo":"./assets/img/sanpham/FL680SAM.png"},
  "sp22":{   "name":"Tai nghe MSI", 
              "price":450000, 
              "photo":"./assets/img/sanpham/hp-msi.png"}, 
  "sp23":{   "name":"Tai nghe Over-ear Zidli ZH7", 
              "price":450000, 
              "photo":"./assets/img/sanpham/hp-over-ear.png"}, 
  "sp24":{   "name":"Tai nghe Over-ear Rig", 
              "price":3999000, 
              "photo":"./assets/img/sanpham/hp-over-ear-plan"}, 
  "sp25":{   "name":"Tai nghe DareU EH722X", 
              "price":589000, 
              "photo":"./assets/img/sanpham/hp-dareu-eh.png"}, 
  "sp26":{   "name":"Tai nghe E-dra EH492", 
              "price":979000, 
              "photo":"./assets/img/sanpham/hp-e-dra-eh492.png"}, 
  "sp27":{   "name":"Tai nghe Soundmax AH713", 
              "price":660000, 
              "photo":"./assets/img/sanpham/hp-soundmax-ah713.png"}, 
  "sp28":{   "name":"Laptop ASUS Gaming ROG Strix G15 G513IH", 
              "price":20690000, 
              "photo":"./assets/img/trangchu/laptop-asus.webp"}  
}
function addCart(code){
  window.localStorage.clear;
  if(typeof localStorage[code] === "undefined"){
        window.localStorage.setItem(code,1);
  }
}
function clear(){
  var table = document.getElementById("table");
  var child = document.getElementById("donhang");
  table.removeChild(child);
  var tbody = document.createElement("tbody");
  tbody.id="donhang";
  table.appendChild(tbody);
}
function showCart(){
  clear();
  var TotalPreTax = 0;
  var Tong = document.getElementById("Tong");
  var Total = document.getElementById("Total");
  Tong.textContent= 0;
  Total.textContent= 0;
  for (var key in localStorage){
      var item = itemList[key];
      var element = document.getElementById("donhang");
      var tr = document.createElement("tr");
      var photo = item.photo;
      var photo_td = document.createElement("td");
      var img = document.createElement("img");
      img.src=photo;
      img.width=100;
      photo_td.appendChild(img);
      tr.appendChild(photo_td);
      photo_td.innerHTML;
      photo_td.style=" text-align:center";
      element.appendChild(tr);
      var name = item.name;
      var name_td = document.createElement("td");
      name_td.textContent = name;
      name_td.style="padding-top:20px; text-align:center";
      tr.appendChild(name_td);
      var price = item.price;
      var price_td = document.createElement("td");
      price_td.textContent = price.toLocaleString();
      price_td.style="padding-top:40px; text-align:center";
      tr.appendChild(price_td);
      var icon_td = document.createElement("td");
      var icon = document.createElement("i");
      icon_td.style="padding-top:40px; text-align:center";
      icon.className="fa-solid fa-trash-can";
      icon.name=key;
      icon.onclick = function() {removeCart(this)};
      icon_td.appendChild(icon);
      tr.appendChild(icon_td);
      TotalPreTax = TotalPreTax + (price);
      Tong.textContent= TotalPreTax.toLocaleString();
      Total.textContent= (TotalPreTax + 50000).toLocaleString();
  }
}
function removeCart(code){
  clear();
  window.localStorage.removeItem(code.name);
  showCart();
}
showCart();
//Swap sign-in and sign-up
function signUp() {
  let signUpForm = document.getElementById("sign-up-form");
  let signInForm = document.getElementById("sign-in-form");
  signUpForm.classList.remove("d-block");
  signUpForm.classList.add("d-none");
  signInForm.classList.add("d-block");
  signInForm.classList.remove("d-none");
}
function signIn() {
  let signUpForm = document.getElementById("sign-up-form");
  let signInForm = document.getElementById("sign-in-form");
  signInForm.classList.remove("d-block");
  signInForm.classList.add("d-none");
  signUpForm.classList.add("d-block");
  signUpForm.classList.remove("d-none");
}
function signUpForgot() {
  let forgotForm = document.getElementById("forgot-form");
  let signInForm = document.getElementById("sign-in-form");
  signInForm.classList.remove("d-block");
  signInForm.classList.add("d-none");
  forgotForm.classList.add("d-block");
  forgotForm.classList.remove("d-none");
}
function signInForgot() {
  let forgotForm = document.getElementById("forgot-form");
  let signInForm = document.getElementById("sign-in-form");
  forgotForm.classList.remove("d-block");
  forgotForm.classList.add("d-none");
  signInForm.classList.remove("d-none");
  signInForm.classList.add("d-block");
}