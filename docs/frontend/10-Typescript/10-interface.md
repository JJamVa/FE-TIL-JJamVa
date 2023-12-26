# interface

## interface란?
- 코드에서 사용할 새로운 타입을 정의하는 데 사용되는 문법적인 구조
- 객체의 형태를 정의하고, 해당 형태를 따르는 객체를 생성

```ts
interface Dot = {
    x: number;
    y: number;
}

let locate: Dot = {
    x: 10,
    y: 10
} 
```

:::tip

`type`또는 `interface`에 객체 속성에 대한 타입 입력 시, `;`나 `,`를 사용해도 상관없다.<br/>

```ts
// ; 사용
interface Dot = {
    x: number;
    y: number;
}

// , 사용
interface Dot = {
    x: number,
    y: number
}
```

:::

:::info

**type과 interface의 공통점과 차이점**

- 공통점
    - `유니온(|)`과 `인터섹션(&)`을 사용하여 타입을 결합 및 확장 가능

- 차이점
  - 문법적 차이
    - `type`: 유니온(|), 인터섹션(&), 리터럴 등을 활용한 복잡한 타입을 정의할 때 사용
    - `interface`: 객체의 형태를 묘사하는데 사용
  - 확장 가능성
    - `type`: 유니온(|), 인터섹션(&)과 같은 기능을 사용하여 타입을 결합하거나 확장
    - `interface`: 기본적으로 확장이 가능하며, `extends`를 사용하여 다른 인터페이스를 확장
  - 선언 병합
    - `type`: 같은 이름의 `type`은 중복 선언이 불가능
    - `interface`: 같은 이름의 `interface`는 중복 선언이 가능(병합)
  - Implements
    - `type`: 클래스나 객체 등을 직접 구현이 불가능
    - `interface`: 클래스나 객체 등을 직접 구현가능, `implements` 키워드를 사용하여 클래스에서 해당 인터페이스를 구현

:::

## interface와 extends
- interface는 `extends`를 이용하여 타입 확장이 가능

```ts
interface Human{
    iq: number,
    eq: number
}

interface MyInfo extends Human{
    name: string,
    age: number
}

let info: MyInfo = {
    name: "JJamVa",
    age: 27,
    iq: 100,
    eq: 100
}

```

:::caution

**interface 사용시 주의 사항**

1. 중복 선언 가능

```ts
interface Info{
    name:string;
    age: number;
}

interface Info{
    married:boolean;
}

let my: Info = {
    name:"JJamVa",
    age:27,
    married:false
}
```

위의 코드와 같이 `2가지의 Info`가 존재한다.<br/>
첫번째에 대한 Info나 두번째에 대한 Info의 객체 타입으로 따로 생성이 불가능하다.<br/>
생성 시, 꼭 동일한 interface의 **속성 전부를 호출**해야지 사용이 가능하다.<br/>
**자기 자신에게 extends**한다고 생각하면 좋을 것 같다.<br/>

2. 동일 interface 속성명과 타입일치

```ts
interface Info{
    name:string;
    age: number;
}

interface Info{
    // name: undefined | string; //불가능
    name: string; // 가능
}

let my: Info = {
    name:"JJamVa",
    age:27
}
```
또한 똑같은 interface안 같은 속성 사용 시, 같은 타입으로 지정을 해야 에러가 발생하지 않는다.<br/>

3. extends와 &의 차이점

기능적으로 똑같은 동작을 하지만 차이점이 존재한다.<br/>

```ts
interface Name{
    name:string;
}

interface Job{
    job:string;
}

interface Info extends Name, Job{
    age: number
}

//extends를 이용한 객체 생성
let my1: Info = {
    name: "JJamVa",
    age:27,
    job:"FE"
}

//&를 이용한 객체 생성
let my2: Name & Job & {age: number} = {
    name: "JJamVa",
    age:27,
    job:"FE"
}

```

위의 코드에서 interface와 &로 객체를 생성하는 코드를 작성하였다.<br/>
기능적인 부분에 있어 동일하지만, 차이점이 존재한다.<br/>
interface와 extends를 사용할 경우, 객체에 대한 정보 타입을 생성하여 저장하기 때문에 필요따라 쉽게 생성이 가능하다.<br/>
반면 &를 이용해서 생성할 경우, 필요한 속성을 가진 객체를 선택적으로 사용해서 가능하다<br/>

interface와 & 중 같은 객체 타입의 속성을 반복적으로 작업해야할 경우<br/> 
interface를 사용하는 것이 **코드 재사용** 방면에에서 좋으며<br/>
매번 **새로운 타입의 객체를 생성**할 경우 &가 좋을 수 있다.<br/>

:::