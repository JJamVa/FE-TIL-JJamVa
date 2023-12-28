# Type import와 export, namespace

## Type import와 export
- `import`와 `export`는 변수, 함수, 클래스 등 가능하나 타입스크립트에서 type도 가능
- [React import와 export관련 내용](../9-React/2-React프로젝트.md)

### export, import 코드

```ts title="app1.js"
export let name = 'JJamVa';
export let age = 27;
```

```ts title="app2.js"
import {name,age} from './app1.js';

console.log(name, age)// JJamVa 27
```

:::note

위의 코드는 자바스크립트 또는 타입스크립트에서 export와 default 하는 방법이다.<br/>

:::

### type export, import 코드

