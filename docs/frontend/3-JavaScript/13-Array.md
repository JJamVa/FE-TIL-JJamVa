# Array

- Array는 배열이라 부르지만, typeof(Array)를 해보면 `object`. 객체 타입 중 하나인 Array(배열)

## Array생성 및 값 호출

- 배열은 대괄호를 이용해 여러 개의 값을 리스트 형태로 나열한 자료구조.
  - 배열의 요소(element)는 배열을 구성하는 각각의 값,
  - 배열에서 요소의 위치를 가리키는 숫자를 인덱스(index)

```js
let arr1 = [];
// arr1이라는 이름을 가진 빈 배열이다.
let arr1 = [1, , , 10];
// ,로 값을 지정하지 않고 배열 생성도 가능. ,사이에 빈값은 undefined이다.

let arr2 = [1, 2, 3]; //1차원 배열
// 1,2,3의 값을 가지고 있는 배열이다.

console.log(arr2[0]); //1
console.log(arr2[1]); //2

let arr3 = [
  [1, 2, 3],
  [4, 5, 6],
]; //2차원 배열
console.log(arr3[0]); //[1,2,3]
console.log(arr3[0][2]); //3
console.log(arr3[1][1]); //5

let arr4 = ["JJamVa", "World"]; //1차원 배열의 형태지만, string문자열로 구성되어있는 배열
console.log(arr4[0]); //"JJamVa"
console.log(arr4[0][2]); //"a"
console.log(arr4[1][4]); //"d"
// 2차원 배열처럼 이해하고 사용하면 편하게 이용가능하다.
```

:::caution

```js
let arr = [1];
arr[3] = 4;
// 이렇게하면 출력은 어떻게 될까?
```

출력을 해보면, `[1, undefined, undefined, 4]` 가 나온다.<br/>
값을 순차적으로 넣지 않고 원하는 인덱스에 값을 할당하게 되면, 그 사이에 비어있는데 인덱스 영역은 값을 할당받지 않기 때문에 `undefined`로 된다.
:::

## Array의 배열 길이(`length`)

- Array에 해당하는 원소의 개수를 반환하거나 지정한다.

```js
var arr1 = [1, 2, 3];

console.log(arr1.length); //3

var arr2 = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arr2.length); //2
console.log(arr2[0].length); //3
```

:::info

```js
var arr = [[1, 2, 3, 4], [9, 7, 3], [11]];
console.log(arr.length); //3
console.log(arr[0].length); //4
console.log(arr[1].length); //3
console.log(arr[2].length); //1
```

arr 제일 큰 배열에서 보면 원소가 `[1,2,3,4]`, `[9,7,3]`, `[11]`가 원소이기 때문에
arr.length를 사용하면 3이 나온다.

그럼 arr의 큰 배열에서 원소를 지목 후, 안의 원소를 확인하기 위해서는 arr[`index`].length를 사용하면 원소의 개수를 확인할 수 있다.<br/>
즉, arr[0].length를 하게되면 arr[0]은 `[1,2,3,4]`이고, arr[0].length를 사용하면 `1`,`2`,`3`,`4`가 arr[0]의 원소이므로 4개가 출력 되는 것을 볼 수 있다.
:::

:::tip
`length`를 통하여 배열의 크기를 정할 수 있다.<br/>
즉, 다시말해 `배열.length = 값`으로 배열의 공간을 조절할 수 있다.

```js
let arr = [1, 2];
console.log(arr.length); //2
arr.length = 4;
console.log(arr, arr.length); // [1,2,undefined,undefined], 4
arr.length = 0;
console.log(arr, arr.length); // [], 0
```

위의 결과를 보면 기존에 생성되었던 배열의 크기보다 큰 값을 length를 통하여 할당하였을 때, 추가적으로 생성된 배열의 값은 `undefined`가 된 것을 볼 수 있다.<br/>
반면 `length = 0`을 통하여 배열의 모든 값이 제거되었는 것을 확인할 수 있다.
:::
