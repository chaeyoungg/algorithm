// js 배열에서 중복 값 제거하고 값 추출하기

let arr = [1, 1, 3];
let obj = {};
let resunt;

arr.forEach(
  (item) => (obj[item] = (obj[item] || 0) + 1) //obj값을 가져오고, 없는 경우에는 0을 할당한다.
);

// console.log(Object.keys(obj)); // { '1': 2, '3': 1 }

result = Object.keys(obj).find((item) => obj[item] === 1); //키값을 배열로 가져와서 find

console.log(result); // 3이라는 값이 나오게 된다.
