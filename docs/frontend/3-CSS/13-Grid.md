# Grid

## Grid

- `display:grid`
- 자식 요소들이 컨테이너 안 공간을 맞추기 요소의 크기를 확대/축소 하는 방법
- 부모요소를 `grid-container` 자식요소를 `grid-item`
- Grid layout은 2차원(x,y) 레이아웃이다.

## grid-container에 사용하는 속성

### `grid-template-columns` & `grid-template-rows`

- `grid-template-columns`: 열방향 그리드 트랙의 사이즈 설정
- `grid-template-rows`: 행방향 그리드 트랙의 사이즈 설정

<details>
<summary>grid-template 실습</summary>
<div markdown="1">

:::note

```css
.grid-container {
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  /* 가로 방향으로 1:2의 비율로 삽입 */
  /* 6개의 박스를 전부 1:2의 비율로 가로로 배치하고 싶다면
  1fr 2fr 1fr 2fr 1fr 2fr로 작성하면된다 */
  /* fr뿐만이 아닌 px로도 단위가 사용가능하다. */
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/e9d752e0-b445-42dd-8c72-253b407b4cbd)

```css
.grid-container {
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-rows: 1fr 2fr;
  /* grid-template-rows 같은 경우 배치 방향은 위에서 아래로 다 같지만 비율을 적은 개수만큼만 크기를 변화 시킨다. */
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/0aacf516-bbc5-43d6-9e10-aab38434ad8c)

:::

:::tip
grid에서 사용되는 단위 `fr`<br/>

`fr`은 fraction의 약자로 grid 컨테이너 안에서 트랙의 비율을 지정해주는 유연한 길이 단위
:::

</div>
</details>

## grid에 사용되는 함수

### `repeat()`

- row/column 방향으로 사이즈 표현을 조금 더 쉽게 해주는 CSS 함수다.
- `repeat(반복횟수, 반복할 값)`: 첫 번째 값은 반복할 횟수를 의미. 두 번째 값은 비율(fr)이나 고정값(px,em,rem...)을 적어주면 된다.

<details>
<summary>grid-template repeat 실습</summary>
<div markdown="1">

:::note

```css
.grid-container {
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr 2fr);
  /* 가로 배치를 1fr 2fr 를 총 2번하겠다는 의미 */
  /* grid-template-columns: 1fr 2fr 1fr 2fr과 같은 코드 */
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/52ccff1d-115f-48e5-80f7-d0eb48db2cca)

:::

</div>
</details>

### `minmax()`

- grid에서 최소와 최대 사이의 범위를 설정하는 함수.
- `minmax(최소값, 최대값)` : min보다 크거나 같고, max보다 작거나 같은 범위

<details>
<summary>minmax() 실습</summary>
<div markdown="1">

:::note

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px minmax(50px, auto) 100px;
  /* grid item들의 크기를 100px / 최소 50px 이상 / 100px*/
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/e0d91516-c3f4-4655-909e-34ac89f805df)<br/>
화면을 줄였을 때, 최소 50px은 유지한다.

![image](https://github.com/JJamVa/JJamVa/assets/80045006/b77f1601-ece5-45c4-a6a9-c5f8a9453c2d)<br/>
화면을 최대로 하였을 때, 100px의 grid item들을 제외하고 남은 공간을 다가진다.
:::

</div>
</details>

### `auto-fill` & `auto-fit`

- `repeat()`을 사용할 때, 반복되는 카운트를 고정하지 않고 부모 컨테이너의 너비에 따라 최대한 배치를 할 수 있는 속성값이다.
- `auto-fill`: fill은 채우다의 의미로 컨테이너에 요소를 채우는 속성 값. 빈 공간이 생길 수도 있음.
- `auto-fit`: fit은 끼우다의 의미로 컨테이너 안에 요소를 채워 공간이 남을 경우 각각의 요소들이 공간을 차지한다.

<details>
<summary>auto-fill & auto-fit 실습</summary>
<div markdown="1">

:::note

- auto-fit

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/053c260e-7c6d-40f7-a1f1-bcf28948330e)
![image](https://github.com/JJamVa/JJamVa/assets/80045006/eac83cd9-08f6-409d-a962-41d6d8e52d41)

- auto-fill

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, auto));
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/053c260e-7c6d-40f7-a1f1-bcf28948330e)
![image](https://github.com/JJamVa/JJamVa/assets/80045006/70ceb610-32c2-4295-a3cc-f6797e27cc97)
:::

:::tip
auto-fill과 auto-fit의 차이점

`auto-fit`일 경우, 남은 공간을 grid-item으로 전부 채운다.<br/>
`auto-fill`일 경우, 남은 공간을 그대로 둔다.
:::

</div>
</details>

### `gap`

- 셀과 셀사이의 간격을 설정할 떄 사용하는 속성.
- 복잡한 레이아웃 안에 margin 대신에 편리하게 사용 가능.
- flex와 동일한 속성이다.

<details>
<summary>grid gap 실습</summary>
<div markdown="1">

:::note

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 30px;
  /* gap은 row-gap, column-gap의 함축 속성이다. */
  /* row-gap: 10px; */
  /* column-gap: 30px; */
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/8aa4ef22-f059-4284-af86-b4184a69cec7)

:::

</div>
</details>

### `align-content`

- grid 콘텐츠의 수직(열) 정렬
- grid 콘텐츠의 세로 높이가 grid 컨테이너보다 작아야함.
- `stretch(default 값)`, `center`, `start`, `end`, `space-around`, `space-between`, `space-evenly`

### `justify-content`

- grid 콘텐츠의 수평(행) 정렬
- grid 콘텐츠의 가로 너비가 grid 컨테이너보다 작아야함.
- `stretch(default 값)`, `center`, `start`, `end`, `space-around`, `space-between`, `space-evenly`

### `align-items`

- 직계 자식에 대한 수직(열) 동일하게 정렬
- `stretch`, `center`, `start`, `end`

### `justify-items`

- 직계 자식에 대한 수평(열) 동일하게 정렬
- `stretch`, `center`, `start`, `end`

## grid-item에 사용하는 속성

### `grid-area`

### `grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end`

<details>
<summary>grid-row & grid-column 실습</summary>
<div markdown="1">

:::note

```css
.grid-container {
  display: grid;
}
.box1 {
  background-color: #f8f9fc;
  grid-column-start: 1;
  /* 행기준(x축) 좌표 1부터 시작 */
  grid-column-end: 3;
  /* 행기준(x축) 좌표 3까지*/
  /* 즉, x축 1에서 3까지 영역을 표현 */
}
.box2 {
  background-color: #7b86aa;
  grid-column: 3/4;
  /* x축 3에서 4까지 영역을 표현 */
  /* grid-column-start, grid-column-end의 함축 속성 */
}
.box3 {
  background-color: #bfc8ea;
  grid-row-start: 2;
  /* 열기준(y축) 좌표 2부터 시작 */
  grid-row-end: 3;
  /* 열기준(y축) 좌표 3까지 */
  /* 즉, y축 2에서부터 3까지 영역을 표현 */
}
.box4 {
  background-color: #545051;
  grid-row: 2/4;
  /* grid-row-start, grid-row-end의 함축 속성 */
  grid-column: 3/4;
}
.box5 {
  background-color: #5b67a2;
  grid-row: 2 / span 2;
  /* 행기준(x축)의 2좌표에서부터 2칸(span 2)의 공간을 할당 받겠다 라는 의미 */
  /* grid-row 2/4와 같은 동작이다. */
}
.box6 {
  background-color: #6a5acd;
  grid-area: 4/1/5/4;
  /* grid-row, grid-column의 함축 속성 */
  /* grid-row-start(y축), grid-column-start(x축), grid-row-end(y축), grid-column-end(x축) 순서다. */
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/7d0df6ff-e260-4ac6-82f5-8f9b2b7dae80)

:::

</div>
</details>

### `grid-template-areas` , `grid-area`

<details>
<summary>grid-template-areas & grid-area 실습</summary>
<div markdown="1">

:::note

```css
.grid-container {
  display: grid;
  gap:10px;
  /* grid-template-areas에 같은 grid-area가 연결된 영역은 gap이 적용되지 않는다. */
  grid-template-areas:
    "box1 box1 box1 box2"
    "box3 owner owner box2"
    "box3 owner owner box2"
    "box4 box5 box5 box2";
    /* grid-template-areas 속성을 이용하여 셀들에 대한 위치 지정 */
    /* 만약 "box1 box2 box1 box2" 이런식으로 형태를 작성할 경우 제대로 동작하지 않는다.*/
}
.box1 {
  grid-area: box1;
  /* grid-area를 이용하여 grid-template-areas에 영역 부분을 적용시킨다. */
  background-color: #f8f9fc;
}
.box2 {
  grid-area: box2;
  background-color: #7b86aa;
}
.box3 {
  grid-area: box3;
  background-color: #bfc8ea;
}
.box4 {
  grid-area: box4;
  background-color: #545051;
}
.box5 {
  grid-area: box5;
  background-color: #5b67a2;
}
.box6 {
  grid-area: owner;
  /* 이름을 굳이 box6로 할 필요 없이 원하는 이름을 사용해야 된다. 
  대신 grid-template-areas에도 똑같이 작성해야한다. */
  background-color: #6a5acd;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/a6895b88-ecff-4f60-9aac-dd6e9b788581)

`grid-template-areas`와 `grid-area`로 grid를 구현하는 것이 가장 편하며 구현이 쉽다.

:::

</div>
</details>

### `z-index`

- `position`에 사용했던 z-index와 동일하다.
- 여러 개의 레이아웃이 겹쳐 있을 때, `z-index:상수값`을 통하여 레이아웃의 우선순위를 정할 수 있다.

### `align-self`

- 아이템 개별로 수직(열)정렬을 지정
- `stretch(default 값)`, `center`, `start`, `end`

### `justify-self`

- 아이템 개별로 수평(행) 정렬을 지정
- `stretch(default 값)`, `center`, `start`, `end`

### `place-self`

- ` align-self`,`justify-self`를 함께 사용하는 단축 속성

### `order`

- 아이템 배치 순서를 정함.

:::info
`content` vs `items` vs `self` (구분하는 것은 중요!)

- content는 말그대로 grid 컨텐츠 단위의 기준을 의미한다.
- items는 grid컨텐츠 안에 있는 직계 자식 기준을 의미한다.
- self는 아이템의 개별을 의미

:::

### `grid`

- `grid-template-rows`, `grid-template-columns`, `grid-template-areas`, `grid-auto-rows` `grid-auto-columns`, `grid-auto-flow` 의 단축속성이다.

```css
grid: auto-flow / 1fr 1fr 1fr;

grid: auto-flow dense / 40px 40px 1fr;
/* 대표 예시 */
```
