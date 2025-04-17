# JQuery 속성

## html/text

- `.html()`: 요소의 html값
- `.text()`: 요소의 텍스트 값

```html
<p>반갑습니다.<em>JJamVa</em>입니다.</p>
```

```js
console.log($("p").text()); // 반갑습니다.JJamVa입니다.
console.log($("p").html()); // 반갑습니다.<em>JJamVa</em>입니다.
```

:::tip
`.text()` vs `.html()`

- `.text()`는 안에 요소를 가져오지만 태그를 가져오진않는다.
- `html()`은 HTML태그를 텍스트로 처리한다.

:::

## attr 속성

- `.attr()`: 요소의 속성값을 가져오거나 속성 설정
- `.val()`: 요소의 value 값을 가져온다.
- `.removeAttr()`: 요소의 속성값 삭제

## class 클래스

- `.addClass()`: 요소에 클래스 추가
- `.toggleClass()`: 요소에 클래스 추가/제거
- `.removeClass()`: 요소에 클래스 제거
- `.hasClass()`: 요소에 지정된 클래스가 있는지 확인(true,false)

## animation

- `.animate()`: 선택자 요소에 대한 애니메이션 효과를 생성

## css

- `.css()`: 선택한 요소에 대한 css 속성을 설정 혹은 변경
