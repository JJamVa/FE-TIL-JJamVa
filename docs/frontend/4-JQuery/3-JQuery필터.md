# JQuery 필터

## eq

- equal(=)의 의미
- 배열처럼 0번째부터 시작

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
$("li").eq(2).css("color", "red");
//$("li:eq(2)").css("color", "red");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/ec3ddeee-badc-4541-9875-fab29c24fe0c)

## not

- 부정(제외, 아닐 경우)을 의미

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
$("li").not(":eq(2)").css("color", "red");
//$("li:not(:eq(2))").css("color", "red");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/968576f8-3db0-42a0-b40f-80bd0d6f52df)

## lt

- less than의 약어(미만, ~ 보다작다)

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
$("li:lt(2)").css("color", "red");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/968576f8-3db0-42a0-b40f-80bd0d6f52df)

## gt

- great than의 약어(초과, ~ 보다크다)

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
$("li:gt(0)").css("color", "red");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/803fab20-5e65-4638-9ceb-d6e7d5304f4e)

## even

- 짝수번째에 해당하는 요소

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
$("li").even().css("color", "red");
// $("li:even").css("color", "red");
//0번째,2번째가 짝수번째 인덱스이기 때문에 1,3이 빨강
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/db7e260e-3b52-4966-aca0-ee56f3cf60c5)

## odd

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
$("li").odd().css("color", "red");
// $("li:odd").css("color", "red");
// 1번째 인덱스가 홀수번째 인덱스이기 때문에 2가 빨강
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/0a41aad5-c8ac-423f-a148-0cc2d8de1349)

## first / first-child

- 첫번째 요소를 지목

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
$("li").first().css("color", "red");
// $("li:first").css("color", "red");
// $("li:first-child").css("color","red");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/b766481f-88ec-4ece-bc6c-f933a0d038b3)

## last / last-child

- 마지막 요소를 지목

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
$("li").last().css("color", "red");
// $("li:last").css("color", "red");
// $("li:last-child").css("color","red");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/b5d828f7-3377-4172-95e0-67b766586d3b)

## nth-child()

- 몇번째 순서에 있는 요소를 지목
- 요소 시작 순서는 1

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
$("li:nth-child(2)").css("color", "red");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/d319e7de-e29e-4a69-acc6-2c6ca3fb950f)

## 속성 필터`[]`

- `[]`안에 들어간 **속성**이 있는 요소들을 지목

```html
<div>
  <p>1</p>
  <p class="this">2</p>
  <p>3</p>
  <button class="this">클릭1</button>
  <button>클릭2</button>
  <button class="this">클릭3</button>
</div>
```

```js
$("[class]").css("color", "red");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/1fcdf873-1e80-45b8-ad84-aded7ebc0b08)

## contains()

- 해당 텍스트가 해당될 경우 요소들을 지목

```html
<div>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <button>클릭1</button>
  <button>클릭2</button>
  <button>클릭3</button>
</div>
```

```js
$("div :contains('클릭')").css("color", "red");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/ad961057-382c-426d-a335-d80aa46d93d1)

## empty

- 해당 요소안에 텍스트 값이 없는 요소들을 지목

```html
<div>
  <p>1</p>
  <p></p>
  <p></p>
  <button>클릭1</button>
  <button>클릭2</button>
  <button></button>
</div>
```

```js
$("div :empty").text("Hello!");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/738cb397-d2a2-4872-8725-8bc4035783ca)

:::danger
`$("div :empty")`와 `$("div *").empty()`는 다르다.<br/>

- `$("div :empty")`: 요소안의 텍스트가 비어있는지 탐색을 하는 것
- `$("div *").empty()`: 요소안의 내용을 전부 비우는 것

```html
<div>
  <p>1</p>
  <p></p>
  <p></p>
  <button>클릭1</button>
  <button>클릭2</button>
  <button></button>
</div>
```

```js
$("div *").empty().text("Hello!");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/31084b6f-cc58-4086-bc70-a26045c37403)

:::

## has

- 지목되고 있는 태그의 직계자식 혹은 자손들 중 해당 요소를 최소 하나이상 가지고 있으면 지목

```html
<div>
  <p>1</p>
  <p>2</p>
  <p><em>3</em></p>
  <button>클릭1</button>
  <button>클릭2</button>
  <button>클릭3</button>
</div>
```

```js
$("div:has('em')").css("background-color", "slateblue");
//$("div").has('em').css("background-color", "slateblue");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/be0df56f-393f-412c-b2d0-a5209d5f7531)

## hidden / visible

- `hidden`: 숨겨진 요소가 있다면 그 요소를 선택
- `visible`: 표시되고 있는 요소가 있다면 그 요소를 선택

```html
<div>
  <p style="display: none;">1</p>
  <p>2</p>
  <p>3</p>
  <button style="display: none;">클릭1</button>
  <button>클릭2</button>
  <button>클릭3</button>
</div>
```

```js title=":hidden을 show()했을 경우"
$("ul :hidden").show();
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/f2a231f0-1578-45e4-a11e-8d00e2b50c7f)

```js title=":visible을 hide()했을 경우"
$("ul :visible").hide();
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/42c023f5-1902-4dc9-9600-739fd0994fb8)
