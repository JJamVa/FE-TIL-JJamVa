# type alias와 readonly

## type alias란?
- 새로운 타입의 이름을 정의하는데 사용
- 기존의 타입들을 조합하여 새로운 타입을 만들 수 있게 해주는 기능
- 반복되는 복잡한 타입의 정의를 간소화하여, 코드의 가독성을 향상
- `type`이라는 키워드를 사용

:::note


```ts
let value1: string | boolean | number | undefined = 12;
let value2: string | boolean | number | undefined = undefined;
let value3: string | boolean | number | undefined = "hello";

let obj1 : {name: string| undefined, age: number | undefined} = {name: "JJamVa", age: 27}
let obj2 : {name: string| undefined, age: number | undefined} = {name: "park", age: 15}
```

위와 같은 코드에서 변수생성시 일일이 변수의 타입을 설정해야하는 번거로움과 가독성 저하가 있다.<br/>
중복된 타입의 변수를 하나로 설정할 수 있는 `type`이 있다.<br/>

```ts
type T = string|boolean|number|undefined;

let value1:T = 12;
let value2:T = undefined;
let value3:T | null= "hello";

type O = {name: string|undefined, age: number | undefined}

let obj1 : O = {name: "JJamVa", age: 27}
let obj2 : O ={name: "park", age: 15}
```

type을 이용하여 중복으로 사용될 타입을 정의하여 코드의 가독성 향상 및 유지보수에 용이해졌다.<br/>

:::

:::tip

**type alias 합치기(&)**

```ts
type Name = {name: string}
type Age = {age: number}
type Info = Name & Age

let myInfo: Info = {name:"JJamVa", age: 27}
```

위의 코드에서 Info는 Name과 Age의 type alias를 `&` 연산자를 통해 두개의 타입을 합쳐 만들어진 타입이다.<br/>

:::

:::danger

type 키워드는 재정의가 불가능

```ts title="type 재정의 불가능 코드"
type T = string | number
type T = undefined
```
:::

## readonly

- 변수나 속성을 읽기 전용으로 만들 때 사용
- 불변성(Immutability)을 유지하고 코드의 안정성을 높이는 데 도움

:::caution

**그럼 JavaScript의 const를 사용해도 되지않나요??**

자바스크립트의 const도 변수의 할당을 막기위해 사용된다.<br/>

```ts title="JS에서 const 에러 발생"
// value변수 값 재할당 오류
const value = 10;
value = 20;
```

위의 코드와 같이 const를 통해 value의 값을 재할당하는 것에 대해 에러를 발생시킨다.<br/>
이유는 **primtive 타입** 때문이며, **값이 변경될 수 없는 특징**을 가지고 있기 때문이다.<br/>

```ts
//객체
const obj = {
    name: "hello",
    type: "object"
}
obj.name = "JJamVa"
console.log(obj) // {name:"JJamVa", type:"object"}

//배열
const array = [[1,2,3],[4,5,6]];
array[0][2] = 300;
console.log(array)// [[1,2,300],[4,5,6]]
```

분명 obj와 array도 const를 사용했지만 값의 변화를 주었을 때, 변화가 된다는 것을 확인할 수 있다.<br/>
이유는 자바스크립트의 객체의 **얕은 불변성** 때문에 발생한 문제이다.<br/>

이런 문제들을 해결하기 위해 타입스크립트에서 **readonly**를 사용

```ts
type T = {
    readonly    name?: string
    type?: string
}

const obj : T = {
    name: "hello",
    type: "object"
}
obj.name = "JJamVa"// 변경 불가능
obj.type = "Hi"// 변경 가능

```

type을 통해 name이라는 속성에 readonly를 사용하여 name속성을 변경불가능하게 만들었다.<br/>
하지만 type의 경우 readonly를 작성하지 않았기 때문에 type속성은 변경이 된다.<br/>


```ts
const array:ReadonlyArray<ReadonlyArray<number>> = [
    [1,2,3],
    [4,5,6]
];
array[0][2] = 300;//에러 발생
```
배열과 같은 경우 **ReadonlyArray**를 통해 재할당을 막을 수 있다.<br/>

:::

