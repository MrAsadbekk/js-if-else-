// Uyga vazifab 1-masala

// const mj = +prompt("John massani kiriting");
// const hj = +prompt("John balandligini kiriting metrda");

// const mb = +prompt("Bob massani kiriting");
// const hb = +prompt("Bob balandligini kiriting metrda");

// const JohnBMI = mj / hj ** 2;
// const BobBMI = mb / hb ** 2;

// if (JohnBMI > BobBMI && mj > 0 && hj > 0 && mb > 0 && hb > 0) {
//   console.log(
//     `John ning BMI si katta va u ${JohnBMI} ga teng Bobniki esa ${BobBMI}`
//   );
// } else if (JohnBMI === BobBMI && mj > 0 && hj > 0 && mb > 0 && hb > 0) {
//   console.log("ikkalasini BMI si teng");
// } else if (BobBMI > JohnBMI && mj > 0 && hj > 0 && mb > 0 && hb > 0) {
//   console.log(
//     `Bob ning BMI si katta va u ${BobBMI} ga teng John niki esa ${JohnBMI}`
//   );
// } else {
//   console.log("kattaliklar xato kiritildi");
// }

// Uyga vazifa 2-masala

// const age = +prompt("Yoshingizni kiriting");

// if (age > 60) {
//   console.log(`Siz nafaqa yoshidasiz uyda o'tiring`);
// } else if (age > 18 && age <= 60) {
//   console.log(`siz ishlashingiz kerak`);
// } else if (age < 0) {
//   console.log(`inson yoshi manfiy bulmaydi`);
// } else if (age === 0) {
//   console.log(`inson yoshi nol bulmaydi`);
// } else if (age <= 18) {
//   console.log(`siz o'qishingiz kerak`);
// } else {
//   console.log(`yoshni kiritishda xatolik mavjud`);
// }

//QUSHIMCHA VAZIFA

// 1-masala

// const x = +prompt("son kiriting");

// if (x > 0) {
//   console.log(`berilgan son ${x} va ${x} + 1 = ${x + 1}`);
// } else if (x <= 0) {
//   console.log(`berilgan son ${x}`);
// } else {
//   console.log(`siz son kiritmadingiz`);
// }

// const x = +prompt("son kiriting");

// if (x > 0) {
//   console.log(`berilgan son ${x} va ${x} + 1 = ${x + 1}`);
// } else if (x <= 0) {
//   console.log(`berilgan son ${x} va ${x} - 1 = ${x - 2}`);
// } else {
//   console.log(`siz son kiritmadingiz`);
// }

// qushimcha vazifaning 2-va 3- masalalari 1-masalaga uxshash bulgani uchun ishlamadim

// 4-masala

// const x = +prompt("1-sonni kiriting");
// const y = +prompt("2-sonni kiriting");
// const z = +prompt("3-sonni kiriting");

// if (x > 0 && y > 0 && z > 0) {
//   console.log(`kiritilgan sonlarni hammasi musbat`);
// } else if (x > 0 && y > 0 && z <= 0) {
//   console.log(`kiritilgan sonlardan ikkitasi ${x} va ${y} musbat`);
// } else if (x > 0 && y <= 0 && z > 0) {
//   console.log(`kiritilganlardan 2 tasi ${x} va ${z} musbat`);
// } else if (x > 0 && y <= 0 && z <= 0) {
//   console.log(`kiritilgan sonlardan bittasi ${x} musbat`);
// } else if (x <= 0 && y > 0 && z > 0) {
//   console.log(`kiritilgan sonlardan ikkitasi ${y} va ${z} musbat`);
// } else if (x <= 0 && y > 0 && z <= 0) {
//   console.log(`kiritilgan sonlardan bittasi ${y} musbat`);
// } else if (x <= 0 && y > 0 && z > 0) {
//   console.log(`kiritilgan sonlardan ikkitasi ${y} va ${z} musbat`);
// } else if (x <= 0 && y <= 0 && z > 0) {
//   console.log(`kiritilgan sonlardan bittasi ${z} musbat`);
// } else if (x <= 0 && y <= 0 && z <= 0) {
//   console.log(`kiritilgan sonlardan hech biri musbat emas`);
// } else {
//   console.log(`sonlarni kiritishda xatolik mavjud`);
// }

// 5-masala

const x = +prompt("1-sonni kiriting");
const y = +prompt("2-sonni kiriting");
const z = +prompt("3-sonni kiriting");

let a = 0;
let b = 0;
let c = 0;

if (x > 0) {
  a++;
} else if (x < 0) {
  b++;
} else if (x === 0) {
  c++;
} else {
  console.log(`1-son xato kiritildi`);
}

if (y > 0) {
  a++;
} else if (y < 0) {
  b++;
} else if (y === 0) {
  c++;
} else {
  console.log("2-son xato kiritildi");
}

if (z > 0) {
  a++;
} else if (z < 0) {
  b++;
} else if (z === 0) {
  c++;
} else {
  console.log("3-son xato kiritildi");
}

console.log(`musbat sonlar = ${a} ta`);
console.log(`manfiy sonlar = ${b} ta`);
console.log(`nollar soni =  ${c} ta`);

// 6-masala

// const x = +prompt("1-sonni kiriting");
// const y = +prompt("2-sonni kiriting");

// if (x > y) {
//   console.log(`${x} katta`);
// } else if (y < x) {
//   console.log(`${y} katta`);
// } else if (x === y) {
//   console.log(`ikkala son teng`);
// } else {
//   console.log(`sonlarni kiritishda xatolik mavjud`);
// }

// 7-masala

// const x = +prompt("1-sonni kiriting");
// const y = +prompt("2-sonni kiritng");

// if (x > y) {
//   console.log(`2-son kichik`);
// } else if (y > x) {
//   console.log(`1-son kichik`);
// } else if (x === y) {
//   console.log(`ikkala son teng`);
// } else {
//   console.log(`sonlarni kiritishda xatolik mavjud`);
// }
