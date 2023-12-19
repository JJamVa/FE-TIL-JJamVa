# Stack과 Queue

## Stack(스택)이란?

- 제한적으로 접근할 수 있는 나열구조
- 삽입,삭제는 목록 맨뒤에서 이루어짐
- LIFO

:::info
LIFO란?<br/>

- Last in First Out의 약어
- 영어 의미 그대로 `마지막에 넣은 것은 먼저 나온다.`라는 의미
- 한국어로 `후입선출` 자료구조라고 부름

:::

<details>
<summary>class를 이용하여 Stack 구현</summary>
<div markdown="1">

```js
class Stack {
  constructor() {
    this.arr = [];
  }
  push(data) {
    this.arr.push(data);
  }

  pop() {
    return this.arr.length !== 0 ? this.arr.pop() : this.arr;
  }

  isempty() {
    return this.arr.length === 0 ? true : false;
  }

  empty() {
    return (this.arr.length = 0);
  }

  length() {
    return this.arr.length;
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  bottom() {
    return this.arr[0];
  }
}

let stack = new Stack(); // []
stack.push(1); // [1]
stack.push(2); // [1,2]
stack.push(3); // [1,2,3]
stack.push(4); // [1,2,3,4]

stack.isempty(); // false
stack.top(); // 4
stack.bottom(); // 1
stack.pop(); //4, [1,2,3]
stack.length(); //3

stack.empty(); // []
```

</div>
</details>

## Queue(큐)란?

- 제한적으로 접근할 수 있는 나열구조
- 삽입은 맨뒤에서 ,삭제는 목록 맨앞에서 이루어짐
- FIFO

:::info
FIFO란?<br/>

- First In First Out의 약어
- 영어 의미 그대로 `먼저 들어간 것이 먼저 나온다.`라는 의미
- 한국어로 `선입선출` 자료구조라고 부름

:::

<details>
<summary>class를 이용하여 Queue 구현</summary>
<div markdown="1">

```js
class Queue {
  constructor() {
    this.arr = [];
  }
  push(data) {
    this.arr.push(data);
  }

  pop() {
    return this.arr.length !== 0 ? this.arr.shift() : this.arr;
  }

  isempty() {
    return this.arr.length === 0 ? true : false;
  }

  empty() {
    return (this.arr.length = 0);
  }

  length() {
    return this.arr.length;
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  bottom() {
    return this.arr[0];
  }
}

let queue = new Queue(); // []
queue.push(1); // [1]
queue.push(2); // [1,2]
queue.push(3); // [1,2,3]
queue.push(4); // [1,2,3,4]

queue.isempty(); // false
queue.top(); // 4
queue.bottom(); // 1
queue.pop(); //1, [2,3,4]
queue.length(); //3

queue.empty(); // []
```

</div>
</details>

:::tip
JS문법 중 push(). pop(). shift()라는 기능이 있다.<br/>

- push(): Array의 맨뒤에서 데이터 삽입
- pop(): Array의 맨뒤에 데이터를 빼기
- shift(): Array의 맨앞에 데이터를 빼기

즉, Stack, Queue에 대한 객체 생성없이 기존의 Array에서도 구현이 가능

:::
