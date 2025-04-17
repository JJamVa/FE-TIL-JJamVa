# JQuery each와 this

## .each()

- 배열을 관리하고자 할 때 사용

## $(this)

- `this`는 DOM 오브젝트를 의미
- `$()`함수에 전달하면, 이벤트가 발생한 자기 자신을 가르킨다.

```html
<p>안녕하세요</p>
<p>반갑습니다</p>
<p>JJamVa</p>
```

```js
$("p").each(function () {
  const text = $(this).html();
  $(this).html(text + "!!");
});
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/daabb9ca-547f-4fb0-96a4-cbcc9bb3c40d)