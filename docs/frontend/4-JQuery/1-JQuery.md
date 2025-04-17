# JQuery

## JQuery란?
- JQuery는 라이브러리에 해당
- 선택자 및 요소를 효율적으로 제어할 수 있는 기능 제공

## JQuery 특징
- CSS Selector
- 크로스 브라우저 지원
- Ajax 지원
- 다양한 플러그인 지원

## JQuery CDN
- `code.jquery.com`에 들어가서 맞는 버전을 찾은 뒤 `minified`을 눌러 script를 `<body>`안에 넣으면 된다.
- HTML파일 내부에 밑의 코드를 통해 JQuery기능을 사용 가능

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
```

:::info
### CDN이란?

CDN은 `Content Delivery Network` 약어로 의미는 콘텐츠 전송 네트워크 이다.<br/>

- 웹 성능 및 속도를 향상
- 데이터 사용량이 많은 웹 페이지 로드 속도를 향상

:::

## 기본 형태
- `$(선택자).행위`
- 동작을 하려는 요소를 선택하여 어떤 행위를 할지에 대하여 작성

## 익명함수

- 함수를 생성하고 호출하는 방식이 아닌 매개변수에 함수를 작성하여 동작시키는 함수

```js
// 함수와 JQuery를 별개로 사용
function hate() {
  console.log("Hello");
}

$("#love").click(hate());
```

```js
$("#love").click(function () {
  console.log("Hello");
});
// 익명함수로 사용
```