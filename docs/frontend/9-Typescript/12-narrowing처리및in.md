# Type narrowing 처리 및 in, instanceof

## Type narrowing 예외처리

### && 연산자

- Type narrowing시, null 혹은 undefined에 대해 상세예외 처리를 해주는 경우 코드가 길어짐
- 조건부에 `&&`를 이용하여 코드의 간결성 개선

:::note

```ts
function greeting(x?: string): void {
  if (typeof x === "string") console.log(`${x}님 안녕하세요!`);
  else if (typeof x === "undefined")
    console.log(`잘못된 값을 입력하였습니다. ${x}`);
  else console.log(`잘못된 값을 입력하였습니다. ${x}`);
}

greeting("짬바"); // 짬바님 안녕하세요!
greeting(undefined); // 잘못된 값을 입력하였습니다. undefined
greeting(); // 잘못된 값을 입력하였습니다. undefined
```

위의 코드를 보면 type이 `string`, `undefined`, `그 외`의 경우 총 3가지로 코드를 구성하였다.<br/>
이렇게 구현할 경우, 코드가 매우 직관적이며, 해석하기는 좋다.<br/>
하지만 &&에 대한 개념을 이해하고 있다면 코드의 길이가 간소화된다.<br/>

```js
let a = 1 && 2 && 3 && 4 && null; // a = null
let b = 10 && true && undefined && false; // b = undefined
let c = false && null && undefined; // c = false
```

&& 연산자를 통해 **제일 먼저 falsy가 나오는 값**이 할당되는 것을 발견할 수 있다.<br/>

```ts
function greeting(x?: string): void {
  if (x && typeof x === "string") console.log(`${x}님 안녕하세요!`);
  console.log(`잘못된 값을 입력하였습니다. ${x}`);
}

greeting("짬바"); // 짬바님 안녕하세요!
greeting(undefined); // 잘못된 값을 입력하였습니다. undefined
greeting(); // 잘못된 값을 입력하였습니다. undefined
```

조금 더 간결하게 코드를 작성할 수 있다.<br/>
더구나 `null`, `undefined`인 경우 둘다 필터링이 가능하다.<br/>
하지만 직관적인 코드가 필요할 경우, 일일이 조건문을 걸어두는 것이 더 좋은 방법이라 생각한다.<br/>

:::

### in 연산자

- 객체를 typeof로 확인 시, `object`라 출력됨으로 내부의 속성 확인 불가능
- in연산자를 통해 객체가 특정 속성을 가지고 있는지 여부를 확인

```ts
interface Info {
  name?: string;
}

interface Age extends Info {
  age: number;
}

interface Job extends Info {
  job?: string;
}

let myAge: Age = {
  name: "JJamVa",
  age: 27,
};

let myJob: Job = {
  name: "Hong",
  job: "FE",
};

function func(x: Age | Job): void {
  if ("name" in x) console.log(`${x.name}은 내이름이야!`);
  if ("age" in x) console.log(`${x.age}살은 내 나이야!`);
  if ("job" in x) console.log(`${x.job}은 내직업이야!`);
}

func(myAge);
// JJamVa는 내이름이야!
// 27살은 내 나이야!

func(myJob);
// Hong는 내이름이야!
// FE는 내직업이야!
```

:::note

위의 코드를 통해 `in연산자`를 통해 Type narrowing이 가능하다.<br/>
코드의 유연성을 높여 객체의 속성에 따라 동작부여가 가능하며, 중복 코드를 줄일수 있다.<br/>

:::

## instanceof 연산자

- 객체가 특정 클래스나 생성자 함수의 인스턴스인지를 확인하는 데 사용

```ts
class Human {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Info extends Human {
  greeting(): void {
    console.log("안녕하세요");
  }
}

let x = new Human("Hong");
let y = new Info("JJamVa");

console.log(x instanceof Human); //true
console.log(x instanceof Info); //false
console.log(y instanceof Info); //true
console.log(y instanceof Human); //true
```

:::note

instanceof를 통해 인스턴스가 **어느 class에 상속되었는지 확인**할 수 있다.<br/>
class의 인스턴스를 Type narrowing 해야할 경우, **instanceof를 사용**하면 간단하다.<br/>

:::
