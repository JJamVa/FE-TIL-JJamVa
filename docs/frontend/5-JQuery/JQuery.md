# JQuery 기본 문법

## 기본 포멧
- `$(선택자).행위`
- 동작을 하려는 tag를 선택하여 어떤 행위를 할지에 대하여 작성한다.
- `code.jquery.com`에 들어가서 맞는 버전을 찾은 뒤 `minified`을 눌러 script를 `<body>`안에 넣으면 된다.

## 익명함수
- 함수를 생성하고 호출하는 방식이 아닌 매개변수에 함수를 작성하여 동작시키는 함수

```js
function hate(){
    console.log("Hello");
}

$("#love").click(hate());
// 함수와 JQuery를 별개로 사용

$("#love").click(function(){
    console.log("Hello");
})
// 익명함수로 사용
```

## JQuery Method
- `.fadeIn()`: 선택한 요소를 서서히 나타나게 한다.
    - 속성값: 숫자, `linear`, `slow` 등
- `.fadeOut()`:선택한 요소를 서서히 사라지게한다.
    - 속성값: 숫자, `linear`, `slow` 등
- `.animate()`: 애니메이션 효과를 만든다.
- `.css()`: 앞의 선택자에 대한 css 속성을 가져온다.
```js
$("#Hello").css("color","green");
// id가 Hello인 태그의 color속성을 속성값 green으로 변경한다.
```

- `.text()`: 선택한 요소 안의 내용을 가져오거나, 다른 내용으로 바꾼다.
- `.html()`: 선택한 요소 안의 내용을 가져오거나, 다른 내용으로 바꾼다.

:::caution
text() vs html()
- text()는 안에 요소를 가져오지만 태그를 가져오진않는다.
- 반면 html()은 HTML태그를 텍스트로 처리
:::

- `.hide()`: 선택한 요소를 사라지게 한다.
- `.show()`: 선택한 요소를 보여지게한다.
- `.val()`: 선택한 요소의 값을 지정하거나 가져온다.
- `.alert()`: 메시지를 지정할 수 있는 경고 대화 상자를 띄운다.
- `.attr()`: 요소(element)의 속성(attribute)의 값을 가져오거나 속성을 추가한다.
```js
$('div').attr('class', 'Hello');
// div태그에 class속성을 추가하고 값은 Hello으로 지정한다.
```