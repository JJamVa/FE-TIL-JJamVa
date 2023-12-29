# Type import와 export, namespace

## Type import와 export
- `import`와 `export`는 변수, 함수, 클래스 등 가능하나 타입스크립트에서 type도 가능
- [React import와 export관련 내용](../9-React/2-React프로젝트.md)

### export, import 코드

```ts title="app1.ts"
export type Name? = string
export type Age = (x:number) => string;
```

```ts title="app2.ts"
import {Name, Age} from './app1.ts'

let myName: Name = "JJamVa";
let myAge: Age = (x) => x.toString() + "살";

console.log(myName, myAge)// JJamVa 27
```

:::note

위의 코드는 type을 export, import하는 코드이다.<br/>
기존의 export,import 방식과 동일하게 사용하면 된다.<br/>

:::

## namespace
- 코드를 구조화하고 모듈화하는 데 사용되는 기능
- 전역 스코프에서 충돌을 방지하고 코드를 구조화하기 위해 사용

```ts title="app1.ts"
namespace Space{
    export type Name = string;
    export type Age = (x:number) => string;
}
```

```ts title="app2.ts"
/// <reference path='./app1.ts>/>
// app1.js에 있는 정보를 import

let myName: Space.Name = "JJamVa";
let myAge: Space.Age = (x) => x.toString() + "살";

```

:::info

위와 같이 namespace를 이용하면 객체 형식으로 데이터를 접근하기 때문에 **변수명 중복 선언에 있어서 유용**하다.<br/>
최근에 namespace보다 `import * as 변수명 from 경로`를 더 많이 사용한다.<br/>


```ts title="app1.ts"
export type Name = string;
export type Age = (x:number) => string;
```


```ts title="app2.ts"
import * as T from './app1.ts';

let myName: T.Name = "JJamVa";
let myAge: T.Age = (x) => x.toString() + "살";
```

app1모듈에서 내보낸 모든 것을 T라는 네임스페이스를 더 간결하게 가져올 수 있다.<br/>

:::