# 자바스크립트

## JavaScript

:::note
JavaScript란?

자바스크립트는 1995년 넷스케이프사에서 브랜든 아이크 주도하에 만들어진 프로그래밍 언어

- HTML/CSS 프로그래밍적으로 제어
- 웹브라우저가 해석해서 실행할 수 있는 유일한 프로그래밍 언어
- 브라우저가 아닌 환경에서도 JS 실행이 가능하게 되면서 게임프로그래밍, 서버프로그래밍 다양한 분야에서 사용되고 있다.
:::

## JavaScript를 사용하는 방법

- HTML 파일 내부 삽입

```html
<button onclick="window.alert('hello world');">hello</button>
```

- script(`<body>`안에) 태그를 통한 삽입

```html
<body>
  <script>
    window.alert("hello world!");
  </script>
</body>
```

- HTML 파일 외부에 있는 스크립트 파일을 로드(외부 파일을 가져오기)

```html
<body>
  <script src="test.js"></script>
</body>
```

## 브라우저 콘솔창
- 주소창에 `about:blank`입력 후, 접속(빈 화면)
- 개발자 모드 -> 콘솔창 (`F12` 혹은 `Shift + Ctrl + i`)

![image](https://github.com/JJamVa/JJamVa/assets/80045006/7719e035-5213-43a1-b61d-a93dca24d327)