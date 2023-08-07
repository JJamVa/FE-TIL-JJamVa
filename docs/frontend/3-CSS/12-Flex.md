# Flex

## `display:flex`

- `display: flex`
- 자식 요소들이 컨테이너 안 공간을 맞추기 위해 크기를 줄이거나 키우거나 정렬하거나 등 설정하는 방법
- 부모 요소 `fix-container`, 자식요소 `flex-item`
- 1차원적 레이아웃(x,y)

## `flex-direction`

- 컨테이너 배치 설정
- `row(가로)`, `column(세로)` , `row-reverse`, `column-reverse`
- reverse는 위치도 반대지만, 요소 값도 반대 순서로 들어간다.

<details>
<summary>flex-direction 실습</summary>
<div markdown="1">

:::note

```css
.flex-box {
  display: flex;
  /* flex-direction: row; */
  /* 기본값이기 때문에 굳이 적지 않아도 된다. */
  /* 기본값은 가로 정렬이다. */
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/4f7d0e11-78a0-4734-85d8-4cce2e497d5a)

```css
.flex-box {
  display: flex;
  flex-direction: column;
  /* 세로로 정렬해준다. */
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/ed124fe0-58f3-482a-b7be-25a37293f4bf)

:::

</div>
</details>

## `jusitify-content`

- 주축을 기준으로 배열의 위치를 조절, 아이템 간의 간격 및 배치 설정
- `flex-start(시작점)`, `flex-end(도착점)`, `center(가운데)`, `space-between(양 끝점으로 부터 정렬)`, `space-around(양쪽 여백의 절반만큼 나눠갖게 정렬)`, `space-evenly(항목별로 동일한 여백)`

<details>
<summary>jusitify-content 실습</summary>
<div markdown="1">

:::note

```css
.flex-box {
  display: flex;
  justify-content: flex-start;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/57e2f324-e3c7-43b5-ac62-95037d26e746)

```css
.flex-box {
  display: flex;
  justify-content: center;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/db96cc97-b435-4934-a849-22f2b73ef2bf)

```css
.flex-box {
  display: flex;
  justify-content: flex-end;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/8e926267-bfd4-44e0-8d77-aaba1c60cc60)

```css
.flex-box {
  display: flex;
  justify-content: space-between;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/4174c6f8-da06-4618-9469-ed9eeaf6c29d)

```css
.flex-box {
  display: flex;
  justify-content: space-around;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/23bff8dc-d06a-4ba3-b30f-753217c6f8dc)

```css
.flex-box {
  display: flex;
  justify-content: space-evenly;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/f55e11f3-ec00-4ac1-9dcf-f8eb0d9943c8)
:::

</div>
</details>

## `align-items`, `align-content`

- `align-items`: 교차 축을 기준으로 정렬
  - `justify-content`의 수직 방향 정렬이라고 생각하면 좋다.
- `align-content`: 컨테이너의 교차 축의 아이템들이 여러 줄일 때 사용 가능
  - `flex-wrap:wrap`인 상태에서 사용가능

<details>
<summary>align-items 실습</summary>
<div markdown="1">

:::note

```css
.flex-box {
  height: 500px;
  /* flex-direction: row일 경우 따로 height 값을 주지않으면 동작하지 않는다. */
  display: flex;
  align-items: stretch;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/e1c89157-ec7c-431c-a197-5b8969f47d2d)

```css
.flex-box {
  height: 500px;
  display: flex;
  align-items: flex-start;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/9d21586a-d3d5-420d-9d5b-8f7283015d74)

```css
.flex-box {
  height: 500px;
  display: flex;
  align-items: center;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/184737a4-bb92-49d4-8a22-181be39a858f)

```css
.flex-box {
  height: 500px;
  display: flex;
  align-items: flex-end;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/c1e231a4-fa85-40fd-83f2-6dfebd17cef7)

```css
.flex-box {
  height: 500px;
  display: flex;
  align-items: baseline;
  /* 기준점을 확인하기 위해 1이라는 박스에 텍스트 크기를 100px로 설정 */
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/e1bf0ebb-39ad-41f3-a6a0-d1db7971254c)

:::

:::caution
stretch와 flex-start의 차이점

만약 각각의 자식 박스에 대하여 height값을 100px로 설정했으면 어떻게 동작을 할까?<br/>
`stretch`와 `flex-start`가 똑같이 동작을 한다.<br/>

반면, 자식 박스의 크기를 설정하지 않는다면
`stretch`는 부모 요소의 크기만큼 공간을 다 차지하고, <br/>`flex-start`는 박스가 필요한 만큼의 크기를 표현이 된다.
:::

</div>
</details>

<details>
<summary>align-content 실습</summary>
<div markdown="1">

:::note

```css
.flex-box {
  background-color: aliceblue;
  height: 500px;
  flex-wrap: wrap;
  display: flex;
  align-content: stretch;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/6bc5e152-4b2c-4e47-b8fb-b9ef289576a9)
![image](https://github.com/JJamVa/JJamVa/assets/80045006/8b108c1b-faec-456a-bb1e-7f5204692d1a)

```css
.flex-box {
  background-color: aliceblue;
  height: 500px;
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/73fbfffb-2072-4a09-af6b-431a44442824)
![image](https://github.com/JJamVa/JJamVa/assets/80045006/a59972d4-4a34-42a5-bac8-87c9d66668c2)

```css
.flex-box {
  background-color: aliceblue;
  height: 500px;
  flex-wrap: wrap;
  display: flex;
  align-content: center;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/2468d0e9-0eec-441c-9c92-be91b2df6145)
![image](https://github.com/JJamVa/JJamVa/assets/80045006/a4670c21-4aec-45d1-b2fa-64cb32eaf416)

```css
.flex-box {
  background-color: aliceblue;
  height: 500px;
  flex-wrap: wrap;
  display: flex;
  align-content: flex-end;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/9119208c-be04-44a7-9a1c-7d2994949c8d)
![image](https://github.com/JJamVa/JJamVa/assets/80045006/c5315e6c-f8be-4855-8332-45e4891fd34c)

```css
.flex-box {
  background-color: aliceblue;
  height: 500px;
  flex-wrap: wrap;
  display: flex;
  align-content: space-between;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/b2eaede7-6ce7-4576-a3a1-514674c88a6b)
![image](https://github.com/JJamVa/JJamVa/assets/80045006/e0a446d9-9c7e-48b2-922a-1f3ac9fc4f79)

```css
.flex-box {
  background-color: aliceblue;
  height: 500px;
  flex-wrap: wrap;
  display: flex;
  align-content: space-around;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/56d95c70-ff15-412c-9bd1-0773b2bc7aa0)
![image](https://github.com/JJamVa/JJamVa/assets/80045006/f7254b6f-f0d1-4d54-89c2-b2c8d9665567)

```css
.flex-box {
  background-color: aliceblue;
  height: 500px;
  flex-wrap: wrap;
  display: flex;
  align-content: space-evenly;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/fb2e29c5-5cc9-4be7-a7d5-56c541f6e173)
![image](https://github.com/JJamVa/JJamVa/assets/80045006/431a9477-f308-4386-8a8e-670d0063d676)

:::

</div>
</details>

## `gap`

- 아이템 사이의 간격을 설정할 때 사용할 수 있는 속성

## `flex-wrap`

- 한 줄에 배치되게 할 것인지, 가능한 영역내에서 여러 행으로 나눌지 표현을 결정

```css
flex: row wrap;
/* flex-direction, flex-wrap의 단축속성 */
```

## flexitem에 사용하는 속성

### `flex-basis`

- flex-item의 초기 크기 설정
- width,height와 다른점은 축의 방향에 따라 달라진다는 것과 내부 콘텐츠에 따라 유연한 크기를 가진다.
- flex-basis값이 적용되어있다면 row일 경우 width값 무시, column은 height값 무시
- px, em 단위 값을 사용하며, 0 이외에 다른 상수값을 사용 못함

<details>
<summary>flex-basis 실습</summary>
<div markdown="1">

:::note

```css
.flex-box {
  height: 100px;
  display: flex;
}
.box1 {
  background-color: red;
  flex-basis: 100px;
}
.box2 {
  background-color: slateblue;
  flex-basis: 50px;
}
.box3 {
  background-color: salmon;
  flex-basis: 300px;
}
.box4 {
  background-color: skyblue;
  flex-basis: 200px;
}
/* flex안에 들어있는 아이템의 기본 크기 설정을 한다고 보면된다. */
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/f44d2934-4a1a-47d4-b0a6-40606711744a)

:::

</div>
</details>

### `flex-grow`

- 아이템 컨테이너 내부에서 할당할 수 있는 공간의 정도를 지정
- 형제 요소인 아이템들이 모두 같은 `flex-grow`값을 가지면, 동일한 공간을 할당
- 값이 0일 경우 늘어나지 않는다.
- `flex-grow`
  - 1 : 자식 요소들이 모두 동일한 크기의 공간을 할당.
  - 2이상 : 특정한 하나의 자식에게 줄 경우 다른 자식요소보다 두배의 여백 공간을 할당. 만약 자식 요소들의 컨텐츠 크기가 존재한다면 그 컨텐츠 넓이에 따라 할당 받는 값이 달라진다.

<details>
<summary>flex-grow 실습</summary>
<div markdown="1">

:::note

```css
.flex-box {
  height: 200px;
  display: flex;
}
.box1 {
  background-color: red;
  flex-grow: 1;
}
.box2 {
  background-color: slateblue;
  flex-grow: 2;
}
.box3 {
  background-color: salmon;
  flex-grow: 3;
}
.box4 {
  background-color: skyblue;
  flex-grow: 1;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/b42c537c-ec55-4c8f-bea4-f6dbfa6c692c)
사진을 보면 `1:2:3:1`의 비율인 것을 확인할 수 있다.

만약 첫번째 박스에 lorem을 입력하게 될 경우
![image](https://github.com/JJamVa/JJamVa/assets/80045006/b615aed8-1746-498f-bbd0-fa0aa2d9c7e2)
첫 번째 박스는 flex-grow를 무시하게 되고 나머지 박스들만 남은 영역으로 flex-grow의 비율로 크기를 유지하게 된다.

어떻게 하면 flex-grow의 비율을 유지할 수 있을까??
![image](https://github.com/JJamVa/JJamVa/assets/80045006/1c2d7478-467d-416a-995e-c08e119bd858)
방법은 lorem을 작성한 박스 css에 **flex-basis: 0**을 작성하면 모든 박스의 flex-grow 비율을 유지할 수 있게 된다.
:::

</div>
</details>

### `flex-shrink`

- 아이템의 크기를 고정하거나 축소할 때 사용
- `flex-shrink:1` 기본값

<details>
<summary>flex-shrink 실습</summary>
<div markdown="1">

:::note

```css
.flex-box {
  background-color: aliceblue;
  height: 300px;
  display: flex;
}

.box1 {
  background-color: red;
  flex-basis: 250px;
  flex-shrink: 0;
}

.box2 {
  background-color: slateblue;
  flex-basis: 200px;
}

.box3 {
  background-color: salmon;
  flex-basis: 150px;
  flex-shrink: 0;
}

.box4 {
  background-color: skyblue;
  flex-basis: 200px;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/e7b4ef11-2b92-4107-b0d9-b8cbd83102c4)

![image](https://github.com/JJamVa/JJamVa/assets/80045006/b2b345b7-c160-43aa-8406-88e4a2e0b2f2)

위의 사진을 보면 전체화면에서 화면을 축소하였을 때, 1번 박스와 3번 박스는 원본 크기가 그대로 유지된 것을 볼 수 있다.<br/>
1번, 3번 박스안의 css 중 **flex-shrink:0**을 통해 flex-basis의 값을 유지할 수 있었다.


:::

</div>
</details>

### `align-self`

- 부모의 `align-items` 속성을 덮어 flex-item에게 개별적인 align-items 속성을 부여
- 기본값 `stretch`

<details>
<summary>align-self 실습</summary>
<div markdown="1">

:::note

```css
.flex-box {
  background-color: aliceblue;
  height: 300px;
  display: flex;
}
.flex-box div {
  width: 200px;
}
.box1 {
  background-color: red;
  align-self: center;
}
.box2 {
  background-color: slateblue;
  align-self: flex-start;
}
.box3 {
  background-color: salmon;
  align-self: flex-end;
}
.box4 {
  background-color: skyblue;
  align-self: stretch;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/a02963b1-21a1-4c7b-9f4d-9272bd315d4f)
`align-self`를 이용하여 flex에 포함된 개별의 아이템에 대하여 정렬 속성을 부여할 수 있다.

:::

</div>
</details>

### `order`

- flex-item들의 순서를 order 값에 따라 결정. 값이 작을수록 우선순위가 높다.

<details>
<summary>order 실습</summary>
<div markdown="1">

:::note

```css
.flex-box {
  height: 200px;
  display: flex;
}
.flex-box div {
  width: 200px;
}
.box1 {
  background-color: red;
  order: 10;
}
.box2 {
  background-color: slateblue;
  order: 99;
}
.box3 {
  background-color: salmon;
  order: 1;
}
.box4 {
  background-color: skyblue;
  order: 2;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/0faaeea4-0de7-4c0f-929b-d6b9f3505297)
order의 값이 작으면 작을 수록 우선순위가 높다.<br/>
만약 flex에 포함되어 있는 일부분의 아이템들에게만 order를 적용시키게 된다면<br/>
order를 작성하지 않은 아이템 순위가 최우선이며, 그 다음 order 값이 작은 순서대로 정렬이 된다.
:::

</div>
</details>

### `flex`

```css
flex: 1 1 100px;
/* flex-grow flex-shrink flex-basis의 단축 속성 */
```
