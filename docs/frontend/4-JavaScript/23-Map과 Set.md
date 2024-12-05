# Map과 Set

## Map

- key-value 형태를 가지고 있는 객체 자료형

```js
let map = new Map(); //Map 생성
```

:::info

### Map과 Object의 차이점

1. Object의 key는 **문자열 타입**으로만 지정, Map의 key는 **객체, 배열, 문자열 혹은 유효한 식별자(Number, Boolean 등)** 가능
2. Object는 크기를 Object의 메소드(`Object.keys()`,`Object.values()`, `Object.entries`)를 이용하여 직접 배열을 크기를 구해야한다.
3. Map은 size 메소드를 이용하여 크기 알 수 있다.
4. Map은 데이터 추가, 삭제 작업이 Object보다 성능이 더 낫다.

:::

## Map 메소드

### Map 요소 삽입(`set()`)

- set(key,value)형태로 데이터를 삽입

```js
let map = new Map();
map.set("1", 1);
map.set(2, "2");
map.set(true, true);
map.set(true, true);

console.log(map);
// {'1' => 1, 2 => '2', true => true}
```

:::caution
Map은 중복된 key값이 사용가능한가?

```js
let map = new Map();
map.set("1", 1);
map.set(2, "2");
map.set(true, true);
map.set(true, 333);

console.log(map);
// {'1' => 1, 2 => '2', true => 333}
```

중복된 key값은 허용하지 않는다.<br/>
중복된 key값을 넣을 경우 **맨 뒤의 중복된 key값의 value값으로 할당**된다.

:::

### Map안에 있는 value값 가져오기(`get()`)

- key값을 이용하여 value값을 반환

```js
let map = new Map([
  ["1", 1],
  ["3", 4],
  ["hello", "world"],
]); // Map안에 2차원 배열로 넣어 생성하는 방식
console.log(map); // {'1' => 1, '3' => 4, 'hello' => 'world'}

map.get("1"); // 1
map.get("hello"); // "world"
map.get("world"); // undefined
```

### Map안에 key가 존재하는지 확인(`has()`)

- `true`, `false`로 값을 반환

```js
let map = new Map([
  ["안녕", "하세요"],
  ["1", 1],
]);

map.has("안녕"); // true
map.has("하세요"); //false
map.has("1"); //true
```

### Map 요소를 삭제(`delete()`)

- Map의 key를 이용하여 요소를 삭제하며, 반환값은 `true`, `false`이다.

```js
let map = new Map([
  ["JJam", "Va"],
  ["Grid", "Flex"],
]);

map.delete("JJam"); //true
console.log(map); // {'Grid' => 'Flex'}
map.delete("Flex"); //false
console.log(map); // {'Grid' => 'Flex'}
```

### Map안에 요소의 개수를 확인(`size`)

- Map의 요소 개수를 반환
- 다른 메소드와 다르게 size는 `( )`를 사용하지 않는다.

```js
let map = new Map([
  ["1", 1],
  ["2", 2],
  ["3", 3],
  ["10", 4],
]);

console.log(map.size); // 4
```

### Map의 모든 요소를 삭제(`clear()`)

- Map에 들어있는 모든 요소를 삭제

```js
let map = new Map([
  ["1", 1],
  ["2", 2],
]);

map.clear();
console.log(map); // {}
```

### Map의 모든 Key, Value값을 반환(`keys()`)

- `keys()`: Map에 있는 모든 key값을 Object로 반환
- `values()`: Map에 있는 모든 value값을 Object로 반환
- `entries()`: Map에 있는 모든 key와 value값을 Object로 반환

```js
let map = new Map([
  [true, false],
  [false, true],
  [{ 1: 2 }, "1,2"],
]);

console.log(map.keys()); // {true, false, {"1":2}}
console.log(map.values()); // {false, true, '1,2'}
console.log(map.entries()); // {true => false, false => true, {"1",2} => '1,2'}
```

## Set

- 모든 타입의 값을 저장하는 객체 자료형
- 객체 안의 값은 중복을 허용하지 않는다.

```js
let set = new Set(); //Set 생성
```

## Set 메소드

### Set 요소 삽입(`add()`)

- Set에 원소를 넣는다. 단 기존 Set에 같은 원소가 존재한다면 동작은 되지만 배열에 삽입되지 않는다.

```js
let set = new Set();

set.add("a");
set.add("1");
set.add(123);

console.log(set); // {'a', '1', 123}
```

### Set 요소를 삭제(`delete()`)

- Set안에 있는 요소를 삭제. 반환값은 `true`,`false`

```js
let set = new Set([1, 2, 3, 1, 2, 3, 4]);
console.log(set); // {1,2,3,4}

set.delete(1); // true
set.delete(4); // true
set.delete(10); // false

console.log(set); // {2,3}
```

### Set안에 요소가 있는지 확인(`has()`)

- Set안에 요소가 존재 하는지 확인. 반환 값은 `true`, `false`

```js
let set = new Set("12312344");
console.log(set); // {'1','2','3','4'}

set.has("1"); //true
set.has("2"); //true
set.has(3); //false => 문자열이 아니기 때문
```

### Set의 모든 요소 삭제(`clear()`)

- Set안에 존재하는 모든 요소를 삭제.

```js
let set = new Set("Hello");
console.log(set); // {'H', 'e', 'l', 'o'}

set.clear();
console.log(set); //{}
```

### Set안에 요소의 개수를 확인(`size`)

- Set안의 요소의 개수를 반환

```js
let set = new Set("11223344");
console.log(set); // {'1','2','3','4'}

console.log(set.size); //4
```

### Set의 모든 Key, Value값을 반환(`keys()`, `values()`, `entries()`)

- `keys()`: Set에 있는 모든 key값을 Object로 반환
- `values()`: Set에 있는 모든 value값을 Object로 반환
- `entries()`: Set에 있는 모든 key와 value값을 Object로 반환

```js
let set = new Set("123");

console.log(set.keys()); // {'1', '2', '3'}
console.log(set.values()); // {'1', '2', '3'}
console.log(set.entries()); // {'1' => '1', '2' => '2', '3' => '3'}
```

:::caution
Set을 출력해보면 객체 형태의 값만 반환한다.<br/>
하지만 `keys()`, `value()`는 똑같이 출력이 되었다.<br/>
Set의 특성상 객체의 값만 저장되기 때문에 `keys()`, `values()`가 Set의 요소만 출력된다.<br/>
그럼 `entries()` 또한 key와 value값이 Set 요소로 할당되기 때문에 (key,value)형태로 출력된다.

:::

:::tip

### Set을 이용한 집합 연산

```js
let a = new Set("abcd");
// {'a','b','c','d'}
let b = new Set("cdfe");
// {'c','d','f','e'}

// 교집합
let result = [...a].filter((e) => b.has(e));
console.log(result); // {'c','d'}

// 합집합
let result = new Set([...a].concat([...b]));
console.log(result); // {'a', 'b', 'c', 'd', 'f', 'e'}

// 차집합
let result = [...a].filter((v) => !b.has(v));
console.log(result); // {'a', 'b'}
```

:::

## 구조분해를 통한 Map, Set의 크기 구하기

```js
let map = new Map([
  [1, 2],
  [3, 4],
]);

let { size } = map;
console.log(size); // 2

let set = new Set([1, 2, 3, 4]);

let { size } = set;
console.log(size); //4
```

:::tip
Map과 Set은 `size`를 이용하여 요소의 개수를 반환한다.<br/>
반면 구조분해(Destructuring)을 통하여 개수도 확인이 가능하다.<br/>

**Map의 구조**<br/>
![image](https://github.com/JJamVa/JJamVa/assets/80045006/06ed3ad6-7de2-4443-908b-077f46e6c951)

**Set의 구조**<br/>
![image](https://github.com/JJamVa/JJamVa/assets/80045006/8b1568a1-c49d-4e85-b60e-59ec4b83e052)

내부 구조를 보면 Map과 Set은 `size`라는 속성을 가지고 있다.<br/>
`size`의 속성을 구조분해를 통하여 값을 할당받으면 요소의 개수를 가져올 수 있다.

:::
