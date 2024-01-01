# Generic

## Generic이란?
- 타입이나 함수를 정의할 때 사용하는 매개변수화된 타입
- 타입이나 함수가 다양한 종류의 데이터를 다룰 수 있도록 확장
- 컬렉션(배열, 리스트, 맵 등)이나 함수에서 사용되며, 코드의 재사용성을 높이는 데 기여

```ts
function func<T>(x:T):void{
    console.log(`type은 ${typeof x}입니다.`)
}

func<number>(1);// type은 number입니다.
func<object>([1,2,3]);// type은 object입니다.

```

:::note

이전 타입스크립트의 타입 지정 시, 특정 위치에 `:타입`과 같이 작성하였다.<br/>
그럼 함수를 사용 시, 해당 타입만 사용해야하기 때문에 제한적이다.<br/>
generic을 이용할 경우, 다양한 상황에서 유연하게 사용할 수 있어서 코드의 재사용성을 높이고, 타입 안정성을 강화하는 데 큰 도움을 제공


:::


## Generic과 extends
- 특정 타입이 특정 조건을 충족하는 경우에만 동작하도록 제한
- generic으로 받은 타입에서 추가할 타입을 제한

```ts
function func<T>(x: T){
    return x - 1;
}

func<number>(10)// 에러 발생
```

:::note

위의 코드 같은 경우 generic으로 number의 타입을 전달하여, 동작이 잘 되는것처럼 보일수 있으나 에러가 발생한다.<br/>
이유는 generic이 number일 경우만 생각을 하였기 때문이다.<br/>
만약 string을 전달할 경우, 충분히 문제를 야기시킬 수 있다.<br/>
이는 타입스크립트에서 막아두었다.<br/>

이를 해결하기 위해 generic과 extends를 사용한다.<br/>

```ts
function func<T extends number>(x: T){
    return x - 1;
}

func<number>(10)// 9
```

extends를 통해 number라는 타입을 제한해 두었다.<br/>
이를 톻해 x - 1에 대한 연산이 가능하며, 함수의 안정성을 향상 시켰다<br/>


:::

## extends를 이용한 타입 속성 추가

- 배열, 객체에서 사용하는 속성을 extends를 통해 속성을 사용할 수 있도록 등록

```ts
function func<MyType>(x: MyType) {
    return x.length;
  }
  
func<number[]>([1,2,3,4])// 에러
```

:::note

위의 코드에서 에러가 발생할 것 같지는 않지만 `return x.length`에서 발생한다.<br/>
이유는 배열 혹은 문자열이 들어갈 경우, 코드 동작과정에서 문제는 없지만 number 혹은 이외의 타입이 들어갈 경우 에러가 발생<br/>
이를 해결하기 위해서는 generic에 사용할 해당 **속성과 타입을 extends로 제한**하면 된다.<br/>

```ts
function func<MyType extends {length: number}>(x: MyType) {
    return x.length;
  }
  
  func<number[]>([1,2,3,4])// 4
```

이를 통해 해당 코드에 해당 속성을 사용하지 못하는 타입을 제한하여 사전에 오류를 방지할 수 있다.<br/>


:::