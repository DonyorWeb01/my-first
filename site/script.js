// 1-topshiriq: Rang almashtirish
// Oson

// h1 yarating va unga id="sarlavha" bering.
// - Qizil rang tugmasi bo'lsin.
// - Ko'k rang tugmasi bo'lsin.
// - Har bir tugma bosilganda sarlavha rangi o'zgarsin.

//   2-topshiriq: Katta va kichik
//   Oson

//   Bitta matn va 2 ta tugma yarating.
// - Kattalashtirish tugmasi 40px qilsin.
// - Kichiklashtirish tugmasi 15px qilsin.

//   3-topshiriq: Matn almashtirish
//   Oson

//   Ekranda Men o'quvchiman yozuvi tursin.
// - 1-button: Men dasturchiman yozuviga almashtirsin.
// - 2-button: Men kelajakda IT mutaxassis bo'laman yozuviga almashtirsin.

//   4-topshiriq: Rangli sahifa
//   O'rta

//   Saytda bitta katta div yarating.
// - Qizil fon tugmasi.
// - Yashil fon tugmasi.
// - Sariq fon tugmasi.
// Tugmalar bosilganda div ning orqa foni o'zgarsin.

// 5-topshiriq: Profil kartasi
// O'rta

// O'zingiz haqingizda profil kartasi yarating.
// - Ism yozuvi.
// - Kasb yozuvi.
// - Tugma bosilganda ism o'zgarsin.
// - Ikkinchi tugma bosilganda kasb o'zgarsin.






//   6-topshiriq: Dizayn o'zgartirish
//   Qiyinroq

//   Bitta div yarating.
// Button bosilganda:
// - Orqa fon qora bo'lsin.
// - Matn oq bo'lsin.
// - Matn hajmi 30px bo'lsin.
// - Div kengligi o'zgarsin.

//   7-topshiriq: META IT SCHOOL
//   Mini loyiha

//   Kichik boshqaruv paneli yarating.
// - META IT SCHOOL sarlavhasi.
// - Ism yozuvi.
// - Fon rangini o'zgartirish tugmalari.
// - Matnni almashtirish tugmasi.
// - Matnni kattalashtirish tugmasi.
// - Barcha tugmalar getElementById() orqali ishlasin.

// function ozgartir(){
//     // document.body.style.background = "red"
//     // document.body.style.color = "red"
//     document.getElementById("text1").style.color = "red";
//     document.getElementById("text1").innerText = "hello world!"
// }
let son1;
let son2;
let javob;

function son() {
  son1 = Number(prompt("sonni kiriting..."));
  son2 = Number(prompt("sonni kiriting..."));
}

function qoshish() {
  javob = son1 + son2;
  document.getElementById("javob").innerText = javob;
}
function ayrish() {
  javob = son1 - son2;
  document.getElementById("javob").innerText = javob;
}

function kopaytrish() {
  javob = son1 * son2;
  document.getElementById("javob").innerText = javob;
}

function bolish() {
  javob = son1 / son2;
  document.getElementById("javob").innerText = javob;
}
