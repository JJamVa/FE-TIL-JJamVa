# Ajax

## Ajax란?

- Asynchronous JavaScript and XML의 약어
- 빠르게 동작하는 동적인 웹 페이지를 만들기 위해 쓰는 기법

## 동기와 비동기

- 동기(Synchronous):
  - 프로세스를 순차적으로 실행
  - 프로세스 하나가 완료되기전 다른 프로세스를 실행하지 않는다.
  - 비동기에 비해 느리게 결과 값이 나온다.
- 비동기(Asynchronous):
  - 여러가지 프로세스가 동시에 처리
  - 결과값이 빠르게 도출된다.
  - 프로세스가 많거나 연산 작업이 오래걸리는 경우에 사용이 적합

## 비동기와 관련 콜백 함수

### setTimeout

- `setTimeout(함수,지연 시간(ms))`형태의 비동기 콜백 함수
- 일정 시간(ms)후, 콜백 함수가 동작

### setInterval

- `setInterval(함수,반복 간격 시간(ms))`형태의 비동기 콜백 함수
- 반복 간격 시간(ms)후, 콜백 함수를 반복적으로 실행

:::note

```js title="동기(Synchronous)"
console.log(1);
console.log(2);
[3, 4, 5].forEach((e) => console.log(e));
console.log(6);
// 출력: 1 2 3 4 5 6
```

```js title="비동기(Asynchronous)"
console.log(1);
setTimeout(() => console.log(2), 100);
[3, 4, 5].forEach((e) => console.log(e));
console.log(6);
// 출력: 1 3 4 5 6 2
```

동기(Synchronous)코드를 보면 출력 결과가 순차적으로 나온다.<br/>
반면 비동기(Asynchronous)코드에서 보면 2의 값은 맨뒤에 출력이 되어나온다.<br/>

즉, 비동기(Asynchronous)코드에서 순차적으로 코드를 실행 후<br/>
100ms가 지난 시점에 setTimeout함수가 동작했다는 것을 확인할 수 있다.

:::

## XMLHttpRequest와 관련 메소드

### `XMLHttpRequest`

- 서버와 비동기 통신을 지원하는 여러 기능을 가진 객체
- 객체임으로 사용시 앞에 new연산자를 붙여야함

### `.open()`

- 요청을 설정 및 초기화하는 메소드
- `open(통신방법, 요청할 주소)`의 형태
- 통신 방법에는 "GET", "POST"

### `.onreadystateChange()`

- 요청을 한 Client의 상태가 변하면 실행되는 메소드

### `.readyState`

- 요청을 하려는 서버와의 통신상태

|  readyState의 숫자  |                              의미                               |
| :-----------------: | :-------------------------------------------------------------: |
|      0(UNSENT)      | XHLHttpRequest의 객체가 생성완료되었지만 초기화는 되지않은 상태 |
|      1(OPENED)      |              `open()`함수가 호출되어 요청이 초기화              |
| 2(HEADERS_RECEIVED) |                  모든 요청에 대한 응답이 도착                   |
|     3(LOADING)      |                       데이터를 처리 상태                        |
|       4(DONE)       |              데이터 처리 완료 후, 응답할 준비 완료              |

### `.status`

- 요청한 서버의 문서 존재 여부를 나타냄

| readyState의 숫자 |            의미             |
| :---------------: | :-------------------------: |
|        200        |     서버에 문서가 존재      |
|        404        | 서버에 문서가 존재하지 않음 |

### `.responseText`

- 요청한 서버에서 응답을 받아 데이터를 문자열로 반환

### `.send()`

- 서버에게 요청을 보냄

<details>
<summary>서버와의 비동기 통신 구현</summary>
<div markdown="1">

```txt title="Hello.txt"
Hello World!!!!
```

```js title="비동기 통신"
let received_data = "";

function request() {
  const requestObj = new XMLHttpRequest(); //통신 객체 생성
  requestObj.open("GET", "Hello.txt"); // GET방식, Hello.txt주소
  requestObj.onreadystatechange = () => {
    // 상태 변화 감지
    if (requestObj.readyState === 4) {
      // 데이터 전송 준비가 완료 되었을 경우
      if (requestObj.status === 200) {
        // 서버의 데이터 존재여부 확인
        received_data = requestObj.responseText; // 데이터를 받아옴
        console.log(received); // "Hello World!!!!"
      }
    }
  };
  requestObj.send(); // 서버에게 데이터 전송
}

request();
console.log(received_data); // ""
```

코드를 실행해보면 빈 문자열이 출력된다.<br/>
이유는 **비동기 처리** 때문이다.<br/>
즉, request()함수는 console.log(received_data)가 출력된 이후 동작을 하기 때문에 빈 문자열을 출력한 것이다.

</div>
</details>

## Callback 지옥

- 이전 `서버와의 비동기 통신 구현`에서 **비동기식 코드**와 **동기식 코드**를 함께 작성하게 되면 코드 순서의 문제가 발생
- 이를 해결하고자 콜백 함수의 콜백 함수를 통하여 원하는 값을 출력

<details>
<summary>Callback 지옥을 이용한 비동기 구현</summary>
<div markdown="1">

```json title="users.json"
{
  "user": [
    {
      "userName": "JJamVa",
      "password": "1234"
    },
    {
      "userName": "Hello",
      "password": "World"
    }
  ]
}
```

```json title="greetings.json"
{
  "greetings": [
    {
      "userName": "JJamVa",
      "greetings": "안녕하세요!"
    }
  ]
}
```

```js title="Callback 지옥"
"use strict";
class UserStorage {
  searchUser(userName, password, onSuccess, onError) {
    // 유저 조회
    const requestObj = new XMLHttpRequest();
    requestObj.open("GET", "users.json"); //users.json에게 접근 설정
    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4 && requestObj.status === 200) {
        const result = JSON.parse(requestObj.responseText).user.find(
          (item) => item.userName === userName && item.password === password
        );
        result ? onSuccess(userName) : onError(new Error("not found user"));
      }
    };
    requestObj.send();
  }

  userGreeting(user, onSuccess, onError) {
    // 인사 실행 함수
    const requestObj = new XMLHttpRequest();
    requestObj.open("GET", "greetings.json"); //greeting.json에 접근 설정
    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4 && requestObj.status === 200) {
        const result = JSON.parse(requestObj.responseText).greetings.find(
          (item) => item.userName === user
        );
        result ? onSuccess(result) : onError(new Error("no greetings"));
      }
    };
    requestObj.send();
  }
}

const userStorage = new UserStorage();

const userName = "JJamVa";
const userPassword = "1234";

userStorage.searchUser(
  userName,
  userPassword,
  (name) => {
    userStorage.userGreeting(
      name,
      (result) => {
        console.log(`${result.userName}님 ${result.greetings}`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
```

:::note

XMLHttpRequest을 통해 데이터를 정상적으로 호출된 JSON의 파일 형태를 객체로 변환하여<br/>
값이 JSON파일에 있을 경우 user의 이름과 인사말을 출력하는 코드이다.<br/>

왜 계속 callback함수를 사용하였을까?<br/>
결론적으로 비동기 작업을 통해 필요한 데이터를 기다려 받기 위해 callback 함수를 지속적으로 사용한 것이다.<br/>
동기 + 비동기 코드에서는 동기코드가 끝난 후, 비동기 작업이 반환하기 때문에 값을 정상적으로 받아오지 못한다.<br/>
반면, 연속적인 비동기 코드에서는 우선적으로 비동기 코드가 실행되고 내부의 비동기 코드가 있을 경우<br/>
내부 비동기 코드의 작업이 마무리 되기 전까지 다음 코드를 실행하지 않는다.

즉, 코드에서 보면 `userStorage.searchUser`에 Argument값을 넣어 실행 한다.<br/>

```js
(name) => {
  userStorage.userGreeting(
    name,
    (result) => {
      console.log(`${result.userName}님 ${result.greetings}`);
    },
    (error) => {
      console.log(error);
    }
  );
};
```

3번째 인자를 보면 Argument값이 userGreeting이라는 callback함수로 동작을 시켰다.<br/>
다시 말해 searchUser함수를 실행시킨 후, onSuccess 혹은 onError에 값이 할당되어<br/>
userGreeting함수에게 전달하며 콜백함수로 실행시킨다.<br/>

:::

</div>
</details>

## fetch API

```js
let result = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);
console.log(result);
setTimeout(() => console.log(result), 100);
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/400cc7a9-cf73-4de5-b41c-32cfa0e08d70)

| Promise 상태 |                      의미                       |
| :----------: | :---------------------------------------------: |
|   Pending    |      비동기 작업이 아직 완료되지 않은 상태      |
|  Fulfilled   | 비동기 작업이 성공적으로 완료된 상태. 값을 반환 |
|   Rejected   |     비동기 작업이 실패한 상태. 오류를 반환      |

### Promise

- 약속이란 의미
- 비동기 작업이 완료될 때 어떤 값 또는 오류를 반환하는데 사용
- `new Promise(성공,실패)`의 형태로 객체를 생성
  - 성공: 비동기 작업이 성공하면 이 함수가 호출되며, 작업 결과를 이 함수를 통해 반환
  - 실패: 비동기 작업이 오류를 발생시키면 이 함수가 호출되며, 오류에 대한 처리를 이 함수 내에서 수행

### Promise의 메소드

- `then`: Promise가 **이행(resolve)** 상태일 때 실행. 여러 개의 비동기 작업을 순차적으로 실행 가능
- `catch`: Promise가 **거부(reject)** 상태일 때 실행
- `finally`: Promise가 이행되든 거부되든 상관없이 항상 실행

![image](https://github.com/JJamVa/JJamVa/assets/80045006/ae1b28cd-4206-4b90-bfc2-586556f3e3d4)

<details>
<summary>Promise를 이용한 비동기 구현</summary>
<div markdown="1">

```txt title="Hello.txt"
Hello World!!!!
```

```js title="Promise"
const answer = new Promise((resolve, reject) => {
  const requestObj = new XMLHttpRequest();
  requestObj.open("GET", "Hello.txt");
  requestObj.onreadystatechange = () => {
    if (requestObj.readyState === 4) {
      requestObj.status === 200
        ? resolve(requestObj.responseText)
        : reject(new Error(`상태: ${requestObj.status} Error`));
    }
  };
  requestObj.send();
});

answer
  .then((data) => {
    console.log(data); // Hello World!!!!
  })
  .catch((error) => {
    console.error("에러");
  })
  .finally(() => {
    console.log("실행완료");
  });
```

:::note
Promise객체를 이용해 XMLHttpRequest객체의 데이터를 받아오는 코드이다.<br/>
Promise 생성자 함수를 호출하고, 생성자 함수 내부에 resolve와 reject 콜백함수를 전달하여 Promise를 생성<br/>

answer에 Promise가 성공(resolve) 혹은 실패(reject) 상태가 결정되어 Promise객체 값이 지정된다.<br/>
이후 Promise에 정보가 담긴 객체를 이용하여 then, catch, finally를 이용하여 Promise의 상태에 따라 출력을 한다.

:::

</div>
</details>

### fetch

- 네트워크 요청을 만들어 응답을 처리하는 기능을 제공
- XMLHttpRequest의 상위 버전

:::info

#### XMLHttpRequest와 fetch의 차이점

- `XMLHttpRequest`: 통신의 기능을 수행하는 XMLHttpRequest 객체를 반환
- `fetch`: 인스턴스를 생성하지않고 Promise를 반환

:::

<details>
<summary>fetch API를 이용하여 데이터 가져오기</summary>
<div markdown="1">

```txt title="Hello.txt"
Hello World!!!!
```

```js title="fetch API"
fetch("./Hello.txt")
  .then((response) => {
    console.log(response); //Response 객체를 출력
    if (!response.ok) throw new Error(`ERROR!! ${response.status}`);
    return response.text();
  })
  .then((data) => {
    console.log(data); // Hello World!!!!
    return data;
  })
  .catch((error) => {
    console.error("Error");
  })
  .finally(() => console.log("실행완료"));
```

:::note
fetch()를 통해 서버의 주소에 데이터를 가져오도록 설정<br/>
처음 then을 만났을 때, Response의 객체값을 반환 받는다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/b13052e3-1fef-4c66-972d-ad4bb24ac93f)

Response객체의 메소드 중 `ok`라는 속성이 있으며, **status(200-299)일 경우 true 아닐 경우에 false**를 가진다.<br/>
만약 ok의 메소드가 false일 경우 `throw new Error`를 통해 에러 메세지를 출력 후 콜백함수를 중단 시킨다.<br/>
return을 이용하여 서버에서 받은 데이터 파싱(Response의 메소드)하여 다음 then 콜백함수에 전달을 한다.<br/>
두번째 then에서는 첫번째 then이 반환한 response.text() 데이터의 값을 가지고 출력 한다.<br/>

```js title="fetch API no return"
fetch("./Hello.txt")
  .then((response) => {
    console.log(response); //Response 객체를 출력
    if (!response.ok) throw new Error(`ERROR!! ${response.status}`);
  })
  .then((data) => {
    console.log(data); // undefined
  })
  .catch((error) => {
    console.error("Error");
  })
  .finally(() => console.log("실행완료"));
```

then을 중첩해서 사용가능 하지만 return이 없을 경우 위와 같이 두번째 then에서는 undefined가 출력된다.<br/>
꼭 then을 중첩해서 사용할 때는 return을 사용하여 다음 then에게 데이터를 전달하는 것을 권장<br/>

:::

:::danger
fetch('주소')에서 로컬 파일의 정보를 가져오려고 할 경우, 해당 경로 파일 위치를 정확하게 작성해야한다.<br/>
ex) './Hello.txt', './user/vscode/Hello.txt'
:::

</div>
</details>

## async, await

- `async` : **비동기 함수**라는 것을 알리며, 함수내에 await을 사용 가능.
- `await` : async가 사용된 함수에서만 사용 가능하며, Promise가 해결될 때까지 코드의 실행을 중지

```js title="async await을 이용한 비동기 처리"
async function message() {
  // await을 쓰기 위해서 async작성
  const name = await new Promise((resolve) => {
    // 데이터를 다받기 위해 await을 통해 다음 블록을 넘어가지 않음
    setTimeout(() => {
      resolve("JJamVa");
    }, 500);
  });

  const greeting = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, 500);
  });

  console.log(greeting + " " + name);
}

message(); //Hello JJamVa
```

## Promise.all

- 여러 개의 Promise를 병렬로 실행하고, 모든 Promise가 완료될 때까지 기다렸다가 그 결과를 배열로 반환

```js title="promise.all을 이용한 비동기 처리"
async function message() {
  //디스트럭쳐링을 통해 값을 할당
  const [name, greeting] = await Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("JJamVa");
      }, 100);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello");
      }, 100);
    }),
  ]);
  console.log(greeting + " " + name);
}
message(); // Hello JJamVa
```

:::danger
Promise.all을 이용시 만약 하나의 Promise가 실패가 될 경우, **전체가 실패**
:::

## try catch를 이용한 비동기 처리

- 오류 처리 및 예외 처리를 위해 사용되는 키워드
- `try`: 예외가 발생할 수 있는 코드
- `catch`: 예외 처리 코드를 포함하는 코드

<details>
<summary>try catch를 이용한 비동기 처리 코드</summary>
<div markdown="1">

```json title="users.json"
{
  "user": [
    {
      "userName": "JJamVa",
      "password": "1234"
    },
    {
      "userName": "Hello",
      "password": "World"
    }
  ]
}
```

```json title="greetings.json"
{
  "greetings": [
    {
      "userName": "JJamVa",
      "greetings": "안녕하세요!"
    }
  ]
}
```

```js title="try catch를 이용한 비동기 처리 코드"
"use strict";
class UserStorage {
  async userInfo(userName, password) {
    try {
      let response_data = await fetch("users.json");
      if (!response_data.ok)
        throw new Error("HTTP Status Error :", response.status);
      let data = await response_data.json();
      const result = await data.user.find(
        (item) => item.userName === userName && item.password === password
      );
      if (!result) throw new Error("유저가 존재하지 않습니다.");
      return result.userName;
    } catch (error) {
      console.error("User Not Found " + error);
      throw error;
    }
  }

  async greeting(user) {
    try {
      let response_data = await fetch("greetings.json");
      if (!response_data.ok)
        throw new Error("HTTP Status ERROR :", response_data.status);
      let data = await response_data.json();
      const result = await data.greetings.find(
        (item) => item.userName === user
      );
      if (!result) throw new Error("유저의 인사말이 없습니다.");
      return result.greetings;
    } catch (error) {
      console.error("User's Greeting Not Found ", error);
      throw error;
    }
  }
}

const userStorage = new UserStorage();

const userName = "Hello";
const password = "World";

async function userGreeting() {
  try {
    let user = await userStorage.userInfo(userName, password);
    let greetings = await userStorage.greeting(user);
    alert(`${user}님 ${greetings}`);
  } catch (error) {
    console.error("Error", error);
  }
}
userGreeting();
```

:::note
Promise를 이용하여 then, catch 작업한 코드에서 try catch로 수정한 코드이다.<br/>
UserStorage Class에서 내부 함수들을 async를 이용하여 비동기 함수로 선언하였다.<br/>
각 비동기 함수에서 fetch를 이용하여 데이터를 받아와야되기 때문이다.<br/>

try안에 작성된 코드는 Promise의 객체안에 있는 속성 중 then의 역할하는 코드를 작성하였다.<br/>
catch 영역에서는 try영역에서 코드에러가 발생하는 경우 혹은 `throw new Error`를 만났을 때 실행이 된다.<br/>

각 변수 선언 후, `await`을 통해 코드를 순차적으로 안전하게 데이터를 받아오기 위해 사용하였다.<br/>
이후 userGreeting라는 비동기 함수에서 UserStorage Class내부 비동기 함수의 반환 값을 await을 통하여 받아오고 출력한다.<br/>

:::

</div>
</details>
