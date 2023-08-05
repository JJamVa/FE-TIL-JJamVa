# JQuery

## 기본 포멧

- `$(선택자).행위`
- 동작을 하려는 tag를 선택하여 어떤 행위를 할지에 대하여 작성한다.
- `code.jquery.com`에 들어가서 맞는 버전을 찾은 뒤 `minified`을 눌러 script를 `<body>`안에 넣으면 된다.

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