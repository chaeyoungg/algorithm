// String.prototype.join()
// replace 메서드를 사용할 때 주의 점

function solution(my_string, overwrite_string, s) {
  let answer = "";
  let frontStr;
  let endStr;

  frontStr = my_string.slice(0, s);
  endStr = my_string.slice(s + overwrite_string.length);

  answer = frontStr + overwrite_string + endStr;
  return answer;
}

// replace 메서드를 사용할 때에는 아래 반례에 주의하자
// 입력값 〉 "aaaaaa", "bbb", 3
// 기댓값 〉 "aaabbb"
// aaa는 입력값 안에서 중복되고 있기 때문에 기대값을 충족하지 않을 수 있다.
