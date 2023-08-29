# JQuery DOM 조작

## append()

- 선택한 요소의 자식 맨 뒤에 요소를 추가

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
$("ul").append("<li>4</li>");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/df709702-0a50-4836-8f8a-0aa1e204e83c)

## appendTo()

- 생성할 요소를 삽입해야할 요소의 마지막 자식으로 추가
- $('삽입할 요소').appendTo('삽입하고 싶은 요소')

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
$("<li>4</li>").css("color", "red").appendTo("ul");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/54978fbc-e4d7-43a0-9b50-a518c2f21bc6)

## prepend()

- 선택한 요소의 첫번째 자식으로 요소 추가

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
$("ul").prepend("<li>JJamVa</li>");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/d13d2427-139b-4a7d-b0be-b24882354713)

## prependTo()

- 생성할 요소를 삽입해야할 요소의 자식 맨앞에 추가

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
$("<li>JJamVa</li>").prependTo("ul");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/d9e5fef6-2ba6-46b5-9c89-59dcf73380e1)

## before()

- 선택한 요소의 앞에 형제요소로 추가

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
$("ul").before("<p>안녕하세요</p>");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/4cbc0432-74a8-4859-861c-ffdcf5d2c276)

![image](https://github.com/JJamVa/JJamVa/assets/80045006/cf124a80-61db-4b71-a1e0-25b33ca185cc)

## after()

- 선택한 요소의 뒤에 형제요소로 추가

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
$("ul").after("<p>안녕하세요</p>");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/272159d5-9b34-4657-b708-f5b8e0caf9cb)

![image](https://github.com/JJamVa/JJamVa/assets/80045006/2634cf66-975d-4c9a-9590-c2e3cb3d5b52)
