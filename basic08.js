// [s, e, k] 라는 queries에서 s와 e의 인덱스 범위 안에 있는 수 중
// k보다 크면서 가장 작은 arr[i]의 값을 찾는 문제

let arr = [0, 1, 2, 4, 3];
let queries = [
  [0, 4, 2],
  [0, 3, 2],
  [0, 2, 2],
];
let newQueries;

newQueries = queries.map(
  ([s, e, k]) =>
    arr
      .slice(s, e + 1) // s와 e의 인덱스 범위를 slice로 추출
      .filter((n) => n > k) // filter을 통해 k값보다 작은 값들만 배열로 추출
      .sort((a, b) => a - b)[0] || -1 // sort를 통해 가장 작은 값만 추출하거나 -1을 리턴한다.
);

console.log(newQueries);
