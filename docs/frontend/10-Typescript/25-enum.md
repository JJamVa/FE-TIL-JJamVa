# enum

## enum이란?

- 열거형 타입
- 관련된 상수 값들을 하나의 그룹으로 묶어 이름을 붙일 수 있는 기능
- 숫자 또는 문자열 값의 집합을 정의할 때 유용

## enum의 특징

- `숫자 및 문자열 값 지원`
- `자동 값 할당`
  - 숫자 열거형에서는 값을 자동으로 증가
- `key-value 형태의 양방향 매핑`
- 런타임 객체

## enum의 종류

### 숫자 열거형(Numeric Enum)

- enum안 타입을 지정하게 되면, 자동으로 0부터 1씩 증가하여 타입에 값이 지정된다.
- enum안에 타입에 직접적으로 값을 지정할 수 있다. 인덱스 값이 음수도 가능.

```ts title="멤버에 인덱스를 지정하지 않을 경우"
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // 0
console.log(Direction[0]); // Up

console.log(Direction.Left); // 2
console.log(Direction[2]); // Left
```

```ts title="멤버에 인덱스를 지정할 경우"
enum Direction {
  Up = 1,
  Down,
  Left = 10,
  Right,
}

// 인덱스를 지정한 것

console.log(Direction.Up);// 1
console.log(Direction[1]);// Up

console.log(Direction.Left);// 10
console.log(Direction.[10]);// Left

// 인덱스를 지정하지 않았은 것

console.log(Direction.Down);// 2
console.log(Direction[2]);// Down

console.log(Direction.Right);// 11
console.log(Direction.[11]);// Right
```

:::tip

위의 인덱스를 지정할 경우의 코드를 보면, 일부분의 멤버에 대해 인덱스를 지정했다.<br/>
명시적으로 값을 **지정하지 않은 멤버는 앞에 선언된 멤버의 값 기준으로 +1을 적용**한다.<br/>

:::

### 문자 열거형(String Enum)

- 문자열 열거형에서는 **모든 멤버에 명시적으로 문자열 값을 할당**
- 숫자 열거형과 달리, 문자열 열거형에서는 **값이 자동으로 할당되지 않는다**.

```ts
enum Info {
  name = "JJamVa",
  age = "28",
}

console.log(Info.name); // JJamVa
console.log(Info["JJamVa"]); // undefined(error)

console.log(Info.age); // 28
```

:::danger

문자 열거형은 **단방향 매핑**이다.<br/>
위에서 `Info["JJamVa"]`와 같이 error가 발생하는 이유는 enum안에 문자형 value가 고유하지 않기 때문이다.<br/>
즉, 열거형의 여러 멤버가 같은 값을 가질 수 있으므로 값에서 key를 역매핑하는 것이 불가능하다.<br/>

```ts
enum Info {
  name1 = "JJamVa",
  name2 = "JJamVa",
}

console.log(Info.name1); // JJamVa
console.log(Info.name2); // JJamVa
```

위와 같이 value값이 동일한 경우가 발생할 수 있기 때문에 **문자 열거형은 역매핑을 지원하지 않는다**.<br/>
:::
