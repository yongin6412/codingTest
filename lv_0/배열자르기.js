/**
 * 문제
 * 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
 */

const solution = (numbers, num1, num2) => {
  const result = [];
  for (let i = num1; i <= num2; i++) {
    result.push(numbers[i]);
  }
  return result;
};

console.log(solution([1, 3, 5], 1, 2));
