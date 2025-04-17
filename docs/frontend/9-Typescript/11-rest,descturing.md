# rest parameter, destructuring

## rest parameter 타입 지정

- `rest parameter`는 함수 정의 시 parameter 중에서 **남은 인자들을 하나의 배열**로 처리

```ts
function func(a: number, b: number, ...c: (number | string)[]): void {
  console.log(`나머지 원소는 ${c} 입니다.`);
}

func(1, 2, 3, 4, 5, "6", 7, "8", "9");
```

:::note

타입스크립트에서 rest parameter에 대해 타입을 정할 수 있다.<br/>
위와 같이 func함수의 `...c(number|string)[]`과 같이 parameter c에 대해 타입을 지정했다.<br/>
rest parameter은 parameter들 중 제일 뒤에 있어야 사용이 가능하다.

:::

## destructuring

- 객체나 배열을 해체하여 그 안의 값을 개별 변수에 할당하는 문법
- 객체나 배열을 해체할 때, 타입스크립트는 변수의 타입을 추론하거나 명시

```ts title="배열 해제
const numbers = [1, 2, 3, 4, 5];

const [a, b] = [...numbers];

console.log(a); // 1
console.log(b); // 2

const [x, ...y]: number[] = [...numbers];

console.log(x); // 1
console.log(y); // [2,3,4,5]
```

:::caution

배열의 destructuring 시, [x,...y]에 대한 할당된 값이 배열이기 때문에 `number[]` 타입을 지정<br/>

위의 코드에서 `[...numbers]`는 numbers라는 변수의 괄호를 벗기는 spread 문법이며,<br/>
함수의 rest parameter 사용할 때의 `...`은 괄호를 생성해준다.<br/>

:::

```ts title="객체 해제"
type O = {
  name?: string;
  age: number;
  job: boolean;
};

let obj: O = {
  name: "JJamVa",
  age: 27,
  job: true,
};

// 객체 구조분해 할당
let { name, ...rest } = obj;

console.log(name); // "JJamVa"
console.log(rest); // {age: 27, job:true}

//함수 parameter 구조분해 할당
function info({ name, age, job }: O) {
  console.log(
    `내 이름은 ${name}이며, 나이는 ${age}세, 직업을 ${
      job ? "가지고 있다" : "없습니다."
    }`
  );
}

info(obj);
```

:::note

위와 같은 코드가 destructuring이다.<br/>
VSC와 같은 경우, ts파일을 컴파일하면 정상 실행은 되지만 에러표시가 발생한다.<br/>

```ts
let obj: O = {
  name: "JJamVa",
  age: 27,
  job: true,
};

let { name, ...rest } = obj;
```

TypeScript에서 name이라는 식별자가 키워드로 사용되고 있기 때문이다.<br/>
name은 JavaScript와 TypeScript에서 특별한 의미를 갖는 예약어로 사용되기 때문에 권장하지 않는다.

```ts
let obj: O = {
  name: "JJamVa",
  age: 27,
  job: true,
};

let { name: myName, ...rest } = obj;

console.log(myName); // "JJamVa"
console.log(rest); // {age:27, job:true}
```

위와같이 name에 대한 새로운 변수명을 생성하여 값을 할당받는 것도 하나의 방법이다.<br/>
결론적으로 어떻게 쓰던 동작과정에서 문제는 없다.

:::
