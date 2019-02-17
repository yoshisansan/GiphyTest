const array1 = [0, 1, 2, 3, 4, 5];

const newArray = array1.filter((output, index) => {
  return output > 3;
});

// console.log(newArray);

const array2 = ["tanaka", "hituchi", "pappy", "babaa"];

const newArray2 = array2.filter((output, index) => {
  return output === "tanaka";
});

// console.log(newArray2);

const array3 = ["tanakaminami", "hituchi", "pappy", "babaa"];

const newArray3 = array3.filter((output, index) => {
  return output.length > 7;
});

// ?console.log(newArray3);
