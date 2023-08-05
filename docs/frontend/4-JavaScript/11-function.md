# 함수(Function)

- 함수는 입력, 출력, 기능을 하나로 묶어 재사용 할 수 있도록 만드는 것. 자바스크립트는 실행 코드들이 들어있는 독립 블록 단위의 객체인 함수를 사용.

```js
function 함수이름(parameter1, parameter2...){//함수의 선언
    //실행코드...
    return 반환값
}

함수이름(argument1, argument2...)//함수의 호출
```

## 함수의 장점

- 아키텍처 파악에 용이
- 코드 유지보수
- 재사용성에 좋다.

## 지역변수와 전역 변수

- 전역변수(Global variable) : 어느 위치에서든 호출하면 사용이 가능
- 지역변수(Local variable) : 특정구역({ }) 내에서 생성되어 그 구역에서만 사용

```js
let z = 100; //전역변수
function sum(x) {
  //x는 매개변수(parameter)이면서 지역변수(local val)
  let y = 50; //y는 지역변수
  z = z + y;
  return x + y;
}
```

## function parameter & argument

|   용어    |        번역        |               의미               |
| :-------: | :----------------: | :------------------------------: |
| Parameter |      매개변수      |  함수와 메서드에 입력 변수 이름  |
| Argument  | 전달인자,인자,인수 | 함수와 메서드에 실제 입력되는 값 |

### parameter 지정 값이 없을 경우

```js
function test(a, b, c) {
  return a + b + c;
}

test(10, 20); // a=10, b=20 , c = undefined
test(10, 20, 30, 40); // a = 10, b = 20, c = 30
// 넘치는 값은 무시한다.
```

### parameter 지정 값이 있을 경우

```js
function test(a = 10, b = 20, c = 30) {
  return a + b + c;
}

test(100,200)// a = 100, b = 200, c = 30
test()//a = 10, b = 20, c = 30
test(100, ,200) // error

```

### parameter 값이 객체 값일 경우

```js
function player({ scene, x = 10, y = 20, texture, animKey, initHp, dropRate }) {
  console.log(scene, x, y, texture, animKey, initHp, dropRate);
}

player({
  scene: "플레이신",
  y: 200,
  x: 100,
  texture: "슬라임",
  animKey: "슬라임_애니",
  initHp: 100,
  dropRate: 0.1,
});

player({
  scene: "플레이신",
  y: 200,
  initHp: 100,
});
// {"플레이신", 10, 200, undefined, undefined, 100, undefined}
// 선언 값이 없을 경우에 undefined라고 적혀 있다. 만약에 함수에서 parameter값이 지정되어 있을 경우, 그 값을 지정된다.
```
