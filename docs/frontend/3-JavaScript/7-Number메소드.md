# Number 메소드

## 정수로 변환(`parseInt()`, `parseFloat()`)

- `parseInt(값,진수)`: 값을 Int타입(정수)으로 변환.
  - `진수`값을 입력하였다면, 진수로 변환 후에 정수 값을 반환한다.
- `parseFloat(값)`: 값을 Float타입(부동소수점)으로 변환

```js
parseInt("123"); // 123
parseInt("123.123"); // 123
parseInt("123px"); // 123, 뒤에 문자는 없애버린다.
parseInt("px123"); // NaN, 시작이 문자열이기 때문에 NaN으로 인식한다.
parseInt("     10"); // 10, 공백을 무시한다.
parseFloat("123.123"); // 123.123
parseFloat("123.123px"); // 123.123
parseFloat("px123.123"); // NaN
parseInt("11", 2); // 3, 2진수의 11은 2+1이다.
parseInt("11", 10); // 11
```

## 숫자가 아닌지 판별(`isNaN()`)

- `isNaN()`: Number인지 판별하기 위한 메소드. Not a Number에 의문문이라고 보면된다.
  - 결과값은 `true`,`false`로 반환한다.

```js
isNaN(NaN); //true
isNaN(10); //false
isNaN("10"); //false, 문자열로 된 값은 정수로 변환 후, 결과값으로 변환된다.
isNaN("10px"); //true, 문자열이 포함되어있어서 true
isNaN([]); //false
isNaN({}); //true
```

## Math 메소드

|           선언            |                     결과                      |
| :-----------------------: | :-------------------------------------------: |
|          Math.PI          |                 3.141592....                  |
|      Math.round(값)       |   소수점으로 이루어진 값을 반올림 처리한다.   |
|       Math.abs(값)        | 절대값으로 치환한다.(+,-값을 +값으로 바꾼다.) |
|     Math.pow(값1,값2)     |     값1을 값2만큼 제곱한다(값1 \*\* 값2)      |
|       Math.sqrt(값)       |             값을 제곱근 처리한다.             |
|       Math.random()       |          0~1사이의 랜덤 난수를 생성           |
|       Math.ceil(값)       |       소수점을 가진 값을 올림처리한다.        |
|      Math.floor(값)       |       소수점을 가진 값을 버림처리한다.        |
|   Math.max(값1,값2,값3)   |       값들 중에서 제일 큰 값을 뽑는다.        |
| Math.min(값1,값2,값3,값4) |      값들 중에서 제일 작은 값을 뽑는다.       |
