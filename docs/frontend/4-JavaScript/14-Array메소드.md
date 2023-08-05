# Array메소드

## flat()

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
const arr = [1,2,3]
const value = arr.push(5)
console.log(value, arr)// value: 4, arr=[1,2,3,5]
```

## 배열의 맨뒤 요소 제거(`pop()`)
- 배열 내에 존재하는 맨 마지막 요소를 제거후, 해당 요소를 반환한다. 만약 배열이 빈 값일 때, undefined를 반환
```js
const arr = ['h','e','l','l','o']
const value = arr.pop()
console.log(value, arr)//value: "o", arr: ["h","e","l","l"]
```