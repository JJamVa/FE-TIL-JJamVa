# rest parameter, destructuring

## rest parameter 타입 지정
- `rest parameter`는 함수 정의 시 parameter 중에서 **남은 인자들을 하나의 배열**로 처리

```ts
function func(a:number,b:number,...c: (number | string)[]):void{
    console.log(`나머지 원소는 ${c} 입니다.`);
}

func(1,2,3,4,5,'6',7,'8','9');
```

:::note

타입스크립트에서 rest parameter에 대해 타입을 정할 수 있다.<br/>
위와 같이 func함수의 `...c(number|string)[]`과 같이 parameter c에 대해 타입을 지정했다.<br/>
rest parameter은 parameter들 중 제일 뒤에 있어야 사용이 가능하다.

:::

## destructuring
- 구조 분해