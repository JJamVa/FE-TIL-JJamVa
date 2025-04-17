# JQuery 탐색

## parent()

- 바로 직계 부모 요소 탐색

```html
<article>
  <span>Hello World!</span>
  <div>
    <p id="title">안녕하세요.</p>
    <ul>
      <li>1</li>
      <li class="this">2</li>
      <li>3</li>
    </ul>
    <button>클릭!</button>
  </div>
  <p><span>Bye~</span></p>
</article>
```

```js
$("#title").parent().css("border", "1px solid skyblue");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/32054827-08ac-459b-ae3b-30316fa28f04)

## parents()

- 부모, 조상 요소 전부 탐색

```html
<article>
  <span>Hello World!</span>
  <div>
    <p id="title">안녕하세요.</p>
    <ul>
      <li>1</li>
      <li class="this">2</li>
      <li>3</li>
    </ul>
    <button>클릭!</button>
  </div>
  <p><span>Bye~</span></p>
</article>
```

```js
$("li").parents().css("border", "1px solid red");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/1a3d1a4a-6a2d-4a15-8b38-df5772b73ce0)

## closest()

- 가장 가까운 조상 요소 탐색

```html
<article>
  <span>Hello World!</span>
  <div>
    <p id="title">안녕하세요.</p>
    <ul>
      <li>1</li>
      <li class="this">2</li>
      <li>3</li>
    </ul>
    <button>클릭!</button>
  </div>
  <p>
    <span><em>Bye~</em></span>
  </p>
</article>
```

```js
$("p").closest("div").css("background-color", "slateblue");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/811caaee-d1f2-4eb9-a55a-ae857fe4b9b0)

## children()

- 직계 자식 요소 탐색

```html
<article>
  <span>Hello World!</span>
  <div>
    <p id="title">안녕하세요.</p>
    <ul>
      <li>1</li>
      <li class="this">2</li>
      <li>3</li>
    </ul>
    <button>클릭!</button>
  </div>
  <p>
    <span><em>Bye~</em></span>
  </p>
</article>
```

```js
$("div").children().css("border", "1px solid blue");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/c5b8083d-f907-4f3a-8820-70c6e15e6916)

## first() / last()

- `first()`: 첫번째 요소를 지목
- `last()`: 마지막 요소를 지목

```html
<article>
  <span>Hello World!</span>
  <div>
    <p id="title">안녕하세요.</p>
    <ul>
      <li>1</li>
      <li class="this">2</li>
      <li>3</li>
    </ul>
    <button>클릭!</button>
  </div>
  <p>
    <span><em>Bye~</em></span>
  </p>
</article>
```

```js
$("article").children().first().css("border", "1px solid pink");
$("article").children().last().css("border", "1px solid red");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/8e72e4f7-66a8-464c-aa23-92f81c4d12f9)

## find()

- 모든 하위 요소 탐색

```html
<article>
  <span>Hello World!</span>
  <div>
    <p id="title">안녕하세요.</p>
    <ul>
      <li>1</li>
      <li class="this">2</li>
      <li>3</li>
    </ul>
    <button class="this">클릭!</button>
  </div>
  <p>
    <span><em>Bye~</em></span>
  </p>
</article>
```

```js
$("article").find(".this").css("border", "1px dashed gray");
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/eaf18ff6-c8a0-4a88-ac68-7023783a4596)