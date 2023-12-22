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
```

위와 같은 코드에서 변수생성시 일일이 변수의 타입을 설정해야하는 번거로움과 가독성 저하가 있다.<br/>
중복된 타입의 변수를 하나로 설정할 수 있는 `type`이 있다.<br/>

```ts
type T: string|boolean|number|undefined;

let value1:T = 12;
let value2:T = undefined;
let value3:T = "hello";
```

:::