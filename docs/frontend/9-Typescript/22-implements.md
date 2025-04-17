# implements

## implements란?

- 클래스가 특정 인터페이스를 구현하는 것을 나타내는 키워드
- class가 interface의 모든 멤버(속성 & 메서드)가 충족이 되는지 확인

```ts
interface Shape {
  len: number;
  area(): number;
}

class Square implements Shape {
  len: number;

  constructor(len: number) {
    this.len = len;
  }

  area(): number {
    return Math.pow(this.len, 2);
  }
}
```

:::note

Shape는 interface를 통해 속성을 정의했다.<br/>
Square라는 class를 통해 Shape를 implements를 했다.<br/>
즉, Shape에 정의된 속성이 Square에 잘 사용했는지 확인하는 작업이다.<br/>
속성 len과 메서드 area의 타입과 일치하기 때문에 오류가 발생하지 않고 정상적으로 동작한다.<br/>

:::

:::danger

- interface에서 정의된 멤버(속성 & 메소드)의 이름과 타입이 일치해야 하며, 일치하지 않을 경우 에러가 발생한다.
**타입을 지정하지 않고 class의 멤버로 정의할 경우, 타입은 any**가 되며 에러가 발생

:::

:::info
**extends와 implements의 차이점**

- extends

  - 상속의 개념을 가짐(확장성)
  - 하나의 클래스가 다른 클래스를 기반으로 확장되어 새로운 클래스를 만드는 것
  - 관계: 클래스 - 클래스, 인터페이스 - 인터페이스

- implements
  - 클래스의 속성 검사를 위한 용도
  - 클래스가 특정 인터페이스의 정의된 멤버(속성 & 메소드)로 구현
  - 관계: 인터페이스 - 클래스

:::
