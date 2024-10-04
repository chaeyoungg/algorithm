//달팽이 문제
const n = 4;

const answer = Array.from({ length: n }, () => Array(n).fill(0));
// Array.form의 첫 번째 매개변수 : 길이 n인 배열을 생성하라는 의미
// Array.form의 두 번째 매개변수 : 하나의 배열마다 초기화한다는 의미 (Array로 n개 배열을 또 만들고 0으로 채움)

let direction = "right";
let x = 0;
let y = 0;

for (let i = 1; i <= n * n; i++) {
  // 2차원배열 인덱스 개수만큼!
  answer[x][y] = i;

  if (direction === "right") {
    if (y + 1 === n || answer[x][y + 1] !== 0) {
      direction = "down";
      x++;
    } else {
      y++; //아니면 y만 늘려서 옆으로 이동
    }
  } else if (direction === "down") {
    if (x + 1 === n || answer[x + 1][y] !== 0) {
      direction = "left";
      y--;
    } else {
      x++;
    }
  } else if (direction === "left") {
    if (y - 1 < 0 || answer[x][y - 1] !== 0) {
      direction = "up";
      x--;
    } else {
      y--;
    }
  } else if (direction === "up") {
    if (x - 1 < 0 || answer[x - 1][y] !== 0) {
      direction = "right";
      y++;
    } else {
      x--;
    }
  }
}

console.log(answer);

// const answer = Array.from({ length: n }, () => Array(n).fill(0)); // 0으로 2차원 배열 채우기
// let direction = "right";
// let x = 0;
// let y = 0;

// for (let i = 1; i <= n * n; i++) {
//   //n*n 까지 숫자 늘리기
//   answer[x][y] = i;
//   if (direction === "right") {
//     if (y + 1 === n || answer[x][y + 1] !== 0) {
//       direction = "down";
//       x++;
//     } else {
//       y++;
//     }
//   } else if (direction === "down") {
//     if (x + 1 === n || answer[x + 1][y] !== 0) {
//       direction = "left";
//       y--;
//     } else {
//       x++;
//     }
//   } else if (direction === "left") {
//     if (y - 1 < 0 || answer[x][y - 1] !== 0) {
//       direction = "up";
//       x--;
//     } else {
//       y--;
//     }
//   } else if (direction === "up") {
//     if (x - 1 < 0 || answer[x - 1][y] !== 0) {
//       direction = "right";
//       y++;
//     } else {
//       x--;
//     }
//   }
// }

// console.log(answer);
