/*let students = [
  "bshhcbdh",
  "djsjcjudc",
  "jckjdsicj",
  "djcmidjd",
  "jasjcdj",
  "hdhucdd",
];
let sozlar = students.filter((soz) => soz.length > 5);
console.log(sozlar);*/
//1-masala//
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray1 = arr1.map((item, ind) => {
  return item * item;
});
console.log(newArray1);
//2-masala//
let arr2 = [1, -2, 3, -4, -5, 6, 7, 8, -9];
let newArray2 = arr2.filter((item) => {
  return item < 0;
});
console.log(newArray2);
//3-masala//
let arr3 = [1, 2, [3, 4], 5, [6, 7]];

let innerArrays = arr3.filter((item) => Array.isArray(item));

console.log(innerArrays);

//4-masala//
let arr4 = [1, 2, 3, 0, 4, 5, 6];

let qoshish0gacha = arr4.reduce((acc, item) => {
  if (item !== 0) {
    acc = acc + item;
  } else if (item == 0) {
    console.log(acc);
  }
  return acc;
}, 0);
//5-masala//
let arr5 = [1, 2, 3, 0, 4, 5, 6];

let qoshish0gacham = arr5.reduceRight((acc, item) => {
  if (item !== 0) {
    acc += item;
  } else if (item == 0) {
    console.log(acc);
    return acc;
  }
  return acc;
}, 0);
//6-masala//
let arr6 = [1, 2, 3, 4, 4, 5, 1, 6, 7, 8, 9];

let birxilmi = arr6.some((num, index) => num === arr6[index + 1]);

if (birxilmi) {
  console.log("ha");
} else {
  console.log("yo'q");
}
//7-masala//
let arr7 = [1, 2, 3, 4, 5, 1, 6, 7, 8, 8, 9];

let birxilbormi = arr7.some((num, index) => arr7.indexOf(num) !== index);

if (birxilbormi) {
  console.log("ha");
} else {
  console.log("yo'q");
}
//8-masala//
function arrayFill(qiymat, length) {
  return Array.from({ length: length }, () => qiymat);
}

let filledArray = arrayFill("A", 5);
console.log(filledArray);
//9-masala//
function fillPattern(length) {
  return Array.from({ length }, (_, index) => "x".repeat(index + 1));
}

let patArray = fillPattern(5);
console.log(patArray);
//10-masala//
function fillPattern(length) {
  return Array.from({ length }, (_, index) =>
    (index + 1).toString().repeat(index + 1)
  );
}

let pattArray = fillPattern(5);
console.log(pattArray);
