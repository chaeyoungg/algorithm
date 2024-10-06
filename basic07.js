//code 에서 문자가 1이 나오면 mode 변경
//mode 는 0 or 1
//ret 만들기
// mode === 0 >> idx짝수일때만 ret뒤에 code[idx]추가 code[idx]가 1이면 mode를 0으로 바꿈
// mode === 1 >> idx홀수일때만 ret뒤에 code[idx]추가 code[idc]가 1이면 0으로 바꿈
// (idx + 2) %2

const code = "1aa11b";
let result = "";
let codeArr = code.split("");
let mode = false;

codeArr.forEach((item, idx) => {
  if (item === "1") {
    mode = !mode;
  } else {
    if (mode == 0) {
      if ((idx + 2) % 2 === 0) result += item;
    } else if (mode == 1) {
      if ((idx + 2) % 2 === 1) result += item;
    }
  }
});

console.log(result);
