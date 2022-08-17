const plate = document.querySelector(".inveroom__container_cont_left_plate");
const platefoto = document.querySelector(".inveroom__container_cont_right_plate");
const plateb = document.querySelector(".inveroom__container_cont_left_plateb");
const platebfoto = document.querySelector(".inveroom__container_cont_right_plateb");
const platec = document.querySelector(".inveroom__container_cont_left_platec");
const platecfoto = document.querySelector(".inveroom__container_cont_right_platec");
const plated = document.querySelector(".inveroom__container_cont_left_plated");
const platedfoto = document.querySelector(".inveroom__container_cont_right_plated");

const a = document.querySelector(".faq__container_cont_accordeon_a");
const b = document.querySelector(".faq__container_cont_accordeon_b");
const c = document.querySelector(".faq__container_cont_accordeon_c");
const d = document.querySelector(".faq__container_cont_accordeon_d");
const ee = document.querySelector(".faq__container_cont_accordeon_e");
const f = document.querySelector(".faq__container_cont_accordeon_f");
const g = document.querySelector(".faq__container_cont_accordeon_g");
const h = document.querySelector(".faq__container_cont_accordeon_h");

const popup = document.querySelector(".popup");
const txt = document.querySelector(".faq__container_cont_under_a");
const cross = document.querySelector(".popup__cross");
const contact = document.querySelector(".header1__container_right_contact");

plate.addEventListener("click", function (e) {
  plate.classList.toggle("open");
  platefoto.classList.toggle("open");
  plateb.classList.remove("open")
  platebfoto.classList.remove("open");
  platec.classList.remove("open")
  platecfoto.classList.remove("open");
  plated.classList.remove("open")
  platedfoto.classList.remove("open");
});

plateb.addEventListener("click", function (e) {
  plateb.classList.toggle("open");
  platebfoto.classList.toggle("open");
  plate.classList.remove("open")
  platefoto.classList.remove("open");
  platec.classList.remove("open")
  platecfoto.classList.remove("open");
  plated.classList.remove("open")
  platedfoto.classList.remove("open");
});

platec.addEventListener("click", function (e) {
  platec.classList.toggle("open");
  platecfoto.classList.toggle("open");
  plate.classList.remove("open")
  platefoto.classList.remove("open");
  plateb.classList.remove("open")
  platebfoto.classList.remove("open");
  plated.classList.remove("open")
  platedfoto.classList.remove("open");
});

plated.addEventListener("click", function (e) {
  plated.classList.toggle("open");
  platedfoto.classList.toggle("open");
  plate.classList.remove("open")
  platefoto.classList.remove("open");
  plateb.classList.remove("open")
  platebfoto.classList.remove("open");
  platec.classList.remove("open")
  platecfoto.classList.remove("open");
});

a.addEventListener("click", function (e) {
  a.classList.toggle("open");
  b.classList.remove("open");
  c.classList.remove("open");
  d.classList.remove("open");
  ee.classList.remove("open");
  f.classList.remove("open");
  g.classList.remove("open");
  h.classList.remove("open");
});

b.addEventListener("click", function (e) {
  a.classList.remove("open");
  b.classList.toggle("open");
  c.classList.remove("open");
  d.classList.remove("open");
  ee.classList.remove("open");
  f.classList.remove("open");
  g.classList.remove("open");
  h.classList.remove("open");
});

c.addEventListener("click", function (e) {
  a.classList.remove("open");
  b.classList.remove("open");
  c.classList.toggle("open");
  d.classList.remove("open");
  ee.classList.remove("open");
  f.classList.remove("open");
  g.classList.remove("open");
  h.classList.remove("open");
});

d.addEventListener("click", function (e) {
  a.classList.remove("open");
  b.classList.remove("open");
  c.classList.remove("open");
  d.classList.toggle("open");
  ee.classList.remove("open");
  f.classList.remove("open");
  g.classList.remove("open");
  h.classList.remove("open");
});

ee.addEventListener("click", function (e) {
  a.classList.remove("open");
  b.classList.remove("open");
  c.classList.remove("open");
  d.classList.remove("open");
  ee.classList.toggle("open");
  f.classList.remove("open");
  g.classList.remove("open");
  h.classList.remove("open");
});

f.addEventListener("click", function (e) {
  a.classList.remove("open");
  b.classList.remove("open");
  c.classList.remove("open");
  d.classList.remove("open");
  ee.classList.remove("open");
  f.classList.toggle("open");
  g.classList.remove("open");
  h.classList.remove("open");
});

g.addEventListener("click", function (e) {
  a.classList.remove("open");
  b.classList.remove("open");
  c.classList.remove("open");
  d.classList.remove("open");
  ee.classList.remove("open");
  f.classList.remove("open");
  g.classList.toggle("open");
  h.classList.remove("open");
});

h.addEventListener("click", function (e) {
  a.classList.remove("open");
  b.classList.remove("open");
  c.classList.remove("open");
  d.classList.remove("open");
  ee.classList.remove("open");
  f.classList.remove("open");
  g.classList.remove("open");
  h.classList.toggle("open");
});

let header = document.querySelector(".header1");

document.onscroll = function () {
  let scroll = window.scrollY;

  if (scroll > 70){
    header.classList.add("open")
  } else {
    header.classList.remove("open")
  }
}


contact.addEventListener("click", function (e) {
  popup.classList.toggle("open");
});

txt.addEventListener("click", function (e) {
  popup.classList.toggle("open");
});

cross.addEventListener("click", function (e) {
  popup.classList.remove("open");
});



