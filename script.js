// Contoh program menggunakan if, else, dan nested if
let x = 10;
let y = 20;
if (x > y) {
  console.log("x lebih besar dari y");
} else if (x < y) {
  console.log("x lebih kecil dari y");
} else {
  console.log("x sama dengan y");
}

// Contoh program menggunakan switch case
let day = 3;
switch (day) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
  case 7:
    console.log("Minggu");
    break;
  default:
    console.log("Hari tidak valid");
}

// Contoh program menggunakan for statement
let fruits = ["Apel", "Jeruk", "Mangga", "Pisang"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Contoh program menggunakan while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Contoh program menggunakan do while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// Contoh program menggunakan function
function tambah(a, b) {
  return a + b;
}
let hasil = tambah(5, 10);
console.log(hasil);