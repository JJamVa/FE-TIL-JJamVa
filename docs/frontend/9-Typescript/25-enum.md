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

- enum안 멤버를 생성하게 되면, 자동으로 0부터 1씩 증가하여 타입에 값이 지정된다.
- enum안 멤버에 직접적으로 값을 지정할 수 있다. 인덱스 값이 음수도 가능.

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
console.log(Info["JJamVa"]); // error
```

위와 같이 value값이 동일한 경우가 발생할 수 있기 때문에 **문자 열거형은 역매핑을 지원하지 않는다**.<br/>
:::

### 이종 열거형 (Heterogeneous Enum)

- enum안 멤버의 값을 숫자, 문자열을 섞어 사용할 수 있다.
- 문자 열거형 + 숫자 열거형의 조합

```ts
enum Info {
  name = "JJamVa",
  age = 28,
  iq,
  favorite = "game",
}

console.log(Info.name); // JJamVa
console.log(Info.age); // 28
console.log(Info[28]); // age
console.log(Info.iq); // 29
console.log(Info.favorite); // game
```

:::note

**이종 열거형의 특징**

- 숫자 값은 자동 증가
  - 숫자 열거형에서 값을 명시하지 않은 멤버는 앞에 선언된 숫자 값 기준으로 +1 증가
  - **값을 명시하지 않은 멤버 앞에 값이 문자열일 경우, 에러 발생**
- 문자형 값은 반드시 명시
  - 앞의 멤버가 문자형 값이라면, 이후의 멤버는 자동으로 값을 할당받지 못하므로 명시적으로 값을 정의
- 문자형 값은 단방향 매핑만 지원
- 숫자 값은 양방향 매핑이 가능하다.

:::

:::danger

**주의 사항**

이종 열거형은 숫자 값과 문자열 값이 혼합되므로 코드의 일관성이 떨어지고, 관리가 어려워질 수 있다.<br/>
결론적으로, 이종 열거형은 관리가 복잡하므로 권장하지 않는다.

:::

### const enum

- enum의 한 종류
- const enum과 enum의 컴파일 결과가 다름
- 프로젝트 최적화를 사용하는 목적
- **Tree Shaking**을 지원하기 위한 최적화 방법 중 하나

:::tip

**Tree Shaking**이란?

사용되지 않는 코드를 제거하여 번들 크기를 줄이는 최적화 기법<br/>

:::

```js title="const enum 예시 코드"
// ts코드
const enum Info {
  name = "JJamVa",
  age = 28,
}

console.log(Info.age); // 28
// console.log(Info[28]); // error

// ts코드 컴파일 후, js코드
console.log(28 /* Info.age */);
// console.log(Info[28]); // ts에서 에러가 발생하기 때문에 주석처리 후, 실행

```

```js title="enum 예시 코드"
// ts코드
enum Info {
  name = "JJamVa",
  age = 28,
}

console.log(Info.age); // 28
console.log(Info[28]); // age

// ts코드 컴파일 후, js 코드
var Info;
(function (Info) {
    Info["name"] = "JJamVa";
    Info[Info["age"] = 28] = "age";
})(Info || (Info = {}));
console.log(Info.age);
console.log(Info[28]);
```

:::note

위의 `const enum`과 `enum`의 코드와 컴파일 후의 코드다.<br/>
시각적으로만 봤을 떄, `const enum`과 `enum`은 컴파일 후에 차이를 보인다.<br/>

- **컴파일 후의 결과 차이**
  - `enum`: 런타임에서 사용할 열거형 객체를 생성
  - `const enum`: 별도의 열거형 객체 없이, 열거형 값만 상수로 치환
- **접근 방식의 차이**:
  - `enum`: 양방향 매핑(값에서 키, 키에서 값 모두 접근 가능)을 지원
  - `const enum`: 단방향 매핑만 지원하며, 값으로 키를 참조 불가능

:::

:::caution

그럼 enum은 언제 사용하며, const enum은 왜 사용할까?<br/>
크게 객체의 존재를 생각하면 된다.<br/>

- `enum`: 런타임에 객체가 필요하며, 값을 동적으로 탐색하거나 양방향 매핑이 필요한 경우 사용

```ts title="동적으로 처리해야할 경우"
enum StatusCode {
  OK = 200,
  NotFound = 404,
  InternalError = 500,
}

const statusCode = 404;
console.log(Status[statusCode]); // Not Found
```

위의 코드와 같이 statusCode라는 값을 얻은 후, enum의 런타임 객체를 이용하여 해당 값에 대한 정보를 찾을 수 있다.<br/>

- `const enum`: 객체가 필요 없고, 상수 값만 사용하여 코드 크기를 줄이고 성능을 최적화하려는 경우 적합

```ts title="동적값이 필요없는 경우"
const enum Color {
  red = "Red",
  blue = "Blue",
}

console.log(Color.red); // Red
```

위와 같이 객체에 대한 정보가 필요없고 **상수값만 필요할 경우**, const enum을 통해 사용하면 된다.<br/>

:::

:::tip

**enum과 const enum 정리**

|        **특징**         |              **`enum`**              |              **`const enum`**               |
| :---------------------: | :----------------------------------: | :-----------------------------------------: |
|  **런타임 객체 생성**   |                 생성                 |                생성되지 않음                |
| **컴파일 후,코드 크기** |         `const enum`보다 큼          |               `enum`보다 작음               |
|  **양방향 매핑 지원**   |       지원 (키 ↔ 값 모두 가능)       |                지원하지 않음                |
|    **상수 값 치환**     |          값 대신 객체 참조           |              상수 값으로 치환               |
|      **동적 참조**      | 가능 (값 기반으로 키를 찾을 수 있음) |                   불가능                    |
|      **사용 목적**      |    런타임 객체가 필요한 경우 사용    | 상수 값만 필요할 때 성능 최적화를 위해 사용 |

:::
