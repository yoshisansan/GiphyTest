const array1 = [0, 1, 2, 3, 4];

const newArray = array1.map((output, index) => {
  return `${index}番目は${output}`;
});

// console.log(newArray);

const array2 = ["tanaka", "hituchi", "pappy", "babaa"];

const newArray2 = array2.map((output, index) => {
  return `${index}番目は${output}`;
});

console.log(newArray2);
