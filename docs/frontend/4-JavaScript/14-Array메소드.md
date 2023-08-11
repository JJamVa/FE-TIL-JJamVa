# Array메소드

## 배열의 차수 줄이기(`flat()`)

- 모든 하위 배열 요소를 지정한 깊이(value)까지 재귀적으로 이어붙인 새로운 배열을 생성

```js
let arr = [[1, 2], [[1], 4], [100, [3, [10, 11], 9]], 10];

console.log(arr.flat()); // [1,2,[1], 4, 100,[3,[10,11],9],10]
console.log(arr.flat(2)); // [1,2,1,4,100,3,[10,11],9,10]
console.log(arr.flat(3)); // [1,2,1,4,100,3,10,11,9,10]
console.log(arr.flat(Infinity)); // [1,2,1,4,100,3,10,11,9,10]
```

:::info
`flat()`은 개념을 보면 어렵게 보일 수 있다.<br/>
위의 코드를 보면 제일 큰 배열안에 원소들이 배열로 묶여 있다면 해제를 해준다고 생각하면 이해하기가 쉽다.<br/>

`flat(value)`에서 value는 몇 단계까지 묶인 배열을 해제하고 싶은지에 대하여 작성해주면된다.
:::

## 배열의 요소 추가(`push()`)

- 배열의 맨 끝에 1개 이상의 요소를 추가하고, 배열의 새로운 길이를 반환

```js
const arr = [1, 2, 3];
const value = arr.push(5);
console.log(value, arr); // value: 4, arr=[1,2,3,5]
```

## 배열의 맨뒤 요소 제거(`pop()`)

- 배열 내에 존재하는 맨 마지막 요소를 제거후, **해당 요소를 반환**한다.
- 배열의 크기가 0일 경우, undefined를 반환

```js
const arr = ["h", "e", "l", "l", "o"];
const value = arr.pop();
console.log(value, arr); //value: "o", arr: ["h","e","l","l"]
```

## 배열의 맨 앞에 요소를 추가(`unshift()`)

- 배열의 맨 앞에 1개 이상의 요소를 추가하고, **배열의 새로운 길이**를 반환

```js
const value = [8, 9, 10];
const count = value.unshift(7);

console.log(value, count);
// [7,8,9,10] , 4(배열의 크기)
```

## 배열의 맨 앞에 요소를 삭제(`shift()`)

- 배열의 0번째 인덱스에 오는 첫 번째 요소를 제거해 나머지 값의 위치를 한 칸씩 앞으로 당긴다.
- 매개변수가 없으며 제거된 첫 번째 요소를 반환.
- 빈 배열에서 사용하거나 배열의 length가 0일 경우 undefined를 반환.

```js
const value = [8, 9, 10];
const count = value.shift();

console.log(value, count);
// [9,10] , 8(제거된 요소의 값)
```

## 배열들의 요소들로 문자열로 변경(`join()`)

- 배열 내 원소들을 연결해 하나의 값(문자열)으로 만든다. 요소가 null 또는 undefined 일 경우 빈 문자열(`""`)로 반환된다.

```js
var arr = ["JJamva", "world"];
arr.join(""); //'JJamvaworld'
arr.join(" "); //'JJamva world'

var arr2 = ["JJamva", null];
arr2.join(" world"); //'JJamva world'
```

:::caution

```js
var arr3 = ["JJamva"];
arr3.join(" world"); //'JJamva'
```

문자가 한개만 존재한다면 join()안에 들어간 value는 무시하고 문자열로 변환된다.<br/>
즉, 요소가 한개이기 때문에 연결된 문자가 없어 join()에 들어간 value는 동작하지 않는다.
:::

:::danger

```js
var a = [010, 2222, 1111];
console.log(a.join(""));
```

출력의 결과는 '822221111'로 나온다.<br/>

010의 형태가 8진법의 형태라 8이라는 값이 나온다.<br/>
배열의 요소를 문자열로 변형 후, 처리하고 parseInt() 작업을 하면 원하는 값이 출력된다.

:::

## 특정한 인덱스에 요소를 위치(제거)시킬 때(`splice()`)

- 배열 내에 새로운 요소의 추가가 가능하며 원하는 인덱스에 위치가 가능.
- 기존에 존재하는 요소를 삭제하거나 변경
- `배열.splice(요소를 위치시키고자 하는 인덱스, 제거할 요소의 개수, 배열에 추가할 요소)`
  - 요소를 삽입하고 싶다면 `배열에 추가할 요소` 매개변수를 작성
  - 요소를 삭제하고 싶다면 `배열에 추가할 요소` 매개변수를 작성하지 않으면 된다.
- `splice()`를 이용하면 **원본의 데이터를 수정**.

```js
// splice를 이용하여 요소를 삽입
const cafe = ["coffee", "cake", "tea", "cookie"];
cafe.splice(1, 0, "bread");
console.log(cafe);
//['coffee', 'bread', 'cake', 'tea', 'cookie']

const cafe = ["coffee", "cake", "tea", "cookie"];
cafe.splice(-1, 2, "bread");
console.log(cafe);
//['coffee', 'cake', 'tea', 'bread']
// splice범위를 보면 -1의 인덱스에서 요소를 2개라고 지정하고 'bread'를 넣어달라는 문법이다.
// 즉, 그럼 cookie부터 2개의 요소를 지워야하지만 cookie가 마지막 인덱스 요소임으로 하나만 지우고 bread를 삽입했다.

// splice를 이용하여 요소를 삭제
const cafe = ["coffee", "cake", "tea", "cookie"];
cafe.splice(1, 1);
console.log(cafe);
//['coffee','tea','cookie']

const cafe = ["coffee", "cake", "tea", "cookie"];
cafe.splice(-2, 1);
console.log(cafe);
//['coffee','cake','cookie']
```

## 배열의 정렬(`sort()`)

- 배열 내 요소를 오름차순으로 정렬(default)하는데 이 과정에서 **요소를 문자열로 취급해 재정렬**.
- 배열이 반환되지만 복사본이 만들어지는 것이 아니라 배열 자체가 변경.



```js
let data = [1, 11, 2, 111, 22];
data.sort((a, b) => a - b); //오름차순 [1,2,11,22,111]
data.sort((a, b) => b - a); //내림차순 [111,22,11,2,1]

data.sort((a, b) => {
  return a - b;
});
// 오름차순 data.sort((a,b) => (a-b))와 같은 기능
```

:::note
배열.sort((a,b) => (a-b))는 콜백함수<br/>
`a - b`에서 0보다 작으면 a가 우선순위가 된다.<br/>
`a - b`가 0일 경우 변경되지 않는다.<br/>
`a - b`가 0보다 크면 b가 우선순위가 된다.

:::

<details>
<summary>parameter값이 없는 sort()</summary>
<div markdown="1">

```js
let alpha_data = ["a", "z", "b", "e", "ab"];
alpha_data.sort();
console.log(alpha_data);
//['a', 'ab', 'b', 'e', 'z']
let num_data = [1, 11, 2, 111, 22];
num_data.sort();
console.log(num_data);
//[1, 11, 111, 2, 22]
```

:::tip

상세한 정렬을 하지 않을 경우, 원소들 끼리의 크기 비교가 아닌 **사전 순서식**으로 정렬

:::

</div>
</details>

<details>
<summary>문자열 정렬</summary>
<div markdown="1">

:::note

```js
var a = ["c", "bbb", "aaaaa", "abc", "bca"];
a.sort((a, b) => a - b);
// ["c", "bbb", "aaaaa", "abc", "bca"]
```


문자열로 구성된 배열에서 `sort((a,b) => a - b)기능이 동작되지 않는다.<br/>
왜 동작이 되지 않을까?<br/>

이유는 숫자의 연산과 같은 경우 반환값이 `음수`, `양수`, `0`으로 사용.<br/>
문자열의 경우 연산의 결과가 숫자로 표현되지않기 때문에 정렬에 의미가 없다.

그럼 숫자 연산에 대한 반환값을 문자열에 일일이 적용하면 정렬이 가능할까? 라는 생각이 든다.

```js
var a = ["c", "bbb", "aaaaa", "abc", "bca"];
a.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
    //return true를 대신 사용해도 가능
    //true의 값은 1을 의미
  } else {
    return 0;
    //return false를 대신 사용해도 가능
    //false의 값은 0을 의미
  }
});
console.log(a)
// ['aaaaa', 'abc', 'bbb', 'bca', 'c']
```

출력보면 문자열에 대한 오름차순 정렬이 되었다.<br/>
내림차순을 정렬하려면 조건문의 부등호 방향만 바꿔주면 된다.

:::

:::tip
`localeCompare()` 메소드 사용
- 문자열을 비교하여 순서를 정할 때 사용하는 메소드

```js
var a = ["c", "bbb", "aaaaa", "abc", "bca"];
a.sort((a, b) => a.localeCompare(b));
console.log(a)
// ['aaaaa', 'abc', 'bbb', 'bca', 'c']

a.sort((a, b) => b.localeCompare(a));
console.log(a)
// ['c', 'bca', 'bbb', 'abc', 'aaaaa']
```

:::

</div>
</details>

## 각 요소를 사용하여 새로운 배열을 만들 때(`map()`)

- 배열 내에 있는 요소에 순차적으로 접근해서 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
- 기존의 값을 **재정의**할 수도 있지만 **새로운 형태의 값을 정의**하는 것 또한 가능
- 객체나 json 형태의 데이터를 탐색하는 용도로 사용할 수 있다.

```js
// Array형태
let arr = [1, 2, 3];
arr.map((e) => e ** 2);
console.log(arr);
//[1,4,9]

// 객체(Json)형태
const arr = [
  {
    name: "title1",
    contents: "contents1",
    dataNum: 1,
    data: [1, 2, 3],
  },
  {
    name: "title2",
    contents: "contents2",
    dataNum: 2,
    data: [1, 2, 3],
  },
];

arr.map((i) => {
  return i.name;
});
// 중괄호를 이용하여 표현이 가능하다.
console.log(arr)[
  // ['title1', 'title2']

  (1, 2, 3, 4)
].map(function (v) {
  return "hello" + v;
});
// 함수형태로도 표현이 가능하다.
// ['hello1','hello2','hello3','hello4']
```

## 배열 요소를 실행하고 싶을 때(`forEach()`)

- `배열.forEach((value,index,array) => {})`
- 배열의 각 요소에 콜백을 1회 씩 실행
- **희소 배열** 대해서는 실행하지 않는다.
- 콜백은 요소 값, 요소 인덱스, 순회 중인 배열과 같은 세 인수가 호출
- 배열을 직접적으로 변형하는 메소드는 아니지만 콜백이 변형할 수 있다는 특징이 있다.

:::note
희소 배열이란??<br/>

배열 내에 요소들 중 일부만이 실제로 존재하고 나머지 요소들은 비어있는 배열.<br/>
즉, 배열의 크기보다 실제로 저장된 요소의 개수가 적을 때 **희소 배열**이라고 부른다.

:::

```js
let arr = [1,2,3,4]
let sum = 0

arr.forEach((v,i) =>
    if(v % 2 === 1) sum += v
)
console.log(sum) //4

Array(10).fill(2).forEach((v,i) =>
    console.log(v,i);
)
// 요소가 전부 2인 10칸짜리 배열을 생성한 후
// 순차적으로 값과 인덱스를 출력한다.
// (2,0) (2,1) .... (2,9)

```

:::tip
`map()`과 `forEach()`의 차이<br/>

`map()`은 새로운 배열을 생성<br/>
`forEach()`는 순회만 하며, 반환값(return)이 없다.

:::

## 조건에 맞는 요소를 가져올 때(`filter()`)

- 배열에서 특정 **조건에 부합하는 값을 찾고** 그 값들로 이루어진 새로운 배열을 만든다.
- 특정 조건에 부합하지 못하면 빈 배열을 반환 해당
- 숫자, 문자열, boolean과 같은 원시값 뿐 아니라 json 같은 객체를 사용해서 true인 값을 판별

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.filter((e) => e % 3 === 0);
console.log(arr);
// 3,6,9

// filter는 배열의 조건문과 유사하다고 생각하면 된다.
```

## 요소를 누적해 실행하고 싶을 때(`reduce()`)

- 배열 내의 각 요소에 주어진 reducer 함수를 실행하고, 1개의 결과값을 반환.
- 4개의 매개변수를 갖는다. `누적값`, `현재값`, 현재 돌고 있는 요소의 index, array 전체
- 보통 `reduce()`를 사용할 때, 누적값, 현재값만 사용한다.

```js
const arr = [1, 2, 3, 4, 5];

arr.reduce((a, c) => a + c, 0);
// 15
// a는 누적값이며, 0으로 초기값이 0으로 되어있다.
// c는 현재값이다.

const arr = ["hi", "JJam", "Va"];
arr.reduce((a, c) => a + c, "");
// hiJJamVa
// 문자열도 가능하며, 문자열의 초기값에 맞게 설정하면 된다.
```

## 요소가 포함되어 있는지 확인(`includes()`)

- 배열이 특정 값이 포함되어 있는지 확인.
- 탐색하려는 요소가 문자열일 경우 **대소문자를 구분**
- 첫 번째 매개변수에는 **탐색하고자 하는 요소를 입력**.
- 두 번째 매개변수에는 탐색을 시작하고자 하는 인덱스를 입력. 값이 없는 경우에는 전체 요소를 대상으로 탐색

```js
const cafe = ["coffee", "cake", "tea"];
cafe.includes("bread"); //false
cafe.includes("coffee"); //true
cafe.includes("cake"); //true
```

## 요소의 순서를 뒤집을 때(`reverse()`)

- 배열 내 **요소의 순서를 거꾸로 뒤집고** 마지막 위치에 있는 인덱스의 요소가 0번째로 위치.
- **원본 배열을 변형**시키고 그 참조를 반환한다는 특징.

```js
const arr = [1, 2, 4, 5, 6, 1, 2];
arr.reserve();
console.log(arr); //[2,1,6,5,4,2,1]
```
