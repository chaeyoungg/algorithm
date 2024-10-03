// String.prototype.endsWith()
// 접미사인지 확인하기

function solution(my_string, is_suffix) {
  var answer = my_string.endsWith(is_suffix) ? 1 : 0; // endWith 메서드를 사용하여 접미사인지 확인
  return answer;
}
