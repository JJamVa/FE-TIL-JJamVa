# Position

## position property values

### static

- default값
- 변화에 움직이지 않는다.
- html 작성 순으로 위치가 지정된다.

### relative

- 자신이 있어야하는 위치에 상대적이다.(초기 요소가 생성된 위치는 변하지 않음.)
- 다른 콘텐츠들에게 위치에 대한 영향을 미치지 않는다.

<details>
<summary>position: relative 실습</summary>
<div markdown="1">

```css
.wrapper {
  /* 벗어난 영역을 보여주기 위해 margin 값을 부여 */
  margin-left: 100px;
  margin-top: 100px;
  width: 500px;
  height: 500px;
  background-color: rgb(61, 77, 77);
}
.wrapper div {
  width: 200px;
  height: 100px;
}
.A {
  background-color: blueviolet;
  position: relative;
  bottom: 30px;
}
.B {
  background-color: aqua;
  position: relative;
  top: 50px;
  left: 50px;
}
.C {
  background-color: cadetblue;
  position: relative;
  left: -100px;
}
.D {
  background-color: blue;
  position: relative;
  top: 100px;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/b211b1fb-a1c9-49b6-82df-a24a5f687726)

:::note
각 div태그에 대하여 `position: relative`를 속성을 주었다.<br/>
각 item의 원본 시작점의 위치에서 `top`,`bottom`,`left`,`right` 속성 값에 따라 위치가 변화는 것을 확인했다.<br/>
item별로 겹치는 부분에 대해서 **HTML 작성 순서**에 따라 뒤에 있는 item이 더 앞으로 나오는 것을 볼 수 있다.<br/>

:::

</div>
</details>

### absolute

- 조상의 위치(static을 제외한 position 속성값을 가진 가장 가까운 조상)기준으로 자리를 잡는다.
- 일반적인 문서 흐름에서 자신의 요소를 제거하고 자리를 잡는다.

<details>
<summary>position: absolute 실습</summary>
<div markdown="1">

```css
.wrapper {
  /* 벗어난 영역을 보여주기 위해 margin 값을 부여 */
  margin-left: 100px;
  margin-top: 100px;
  width: 500px;
  height: 500px;
  background-color: rgb(61, 77, 77);
}
.wrapper div {
  width: 200px;
  height: 100px;
}
.A {
  background-color: blueviolet;
  position: absolute;
  bottom: 10px;
}
.B {
  background-color: aqua;
  position: absolute;
  right: 10px;
}
.C {
  background-color: cadetblue;
  position: absolute;
  top: 50px;
}
.D {
  background-color: blue;
  position: absolute;
  left: 0;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/93f411fd-6c7a-4886-b0e4-33bbb8f67f61)

:::note
결과를 보면 .wrapper영역의 내부에 대해 속성값이 적용된 것이 아닌 `<body>`영역의 기준 item들의 위치가 적용된 것을 볼 수 있다.<br/>
그럼 .wrapper영역 내부에서 item들을 배치하고 싶다면 어떻게 하면 될까?<br/>

```css
.wrapper {
  /* 벗어난 영역을 보여주기 위해 margin 값을 부여 */
  position: relative;
}
```

.wrapper(item들의 부모 영역) 부분에 `position: relative`를 작성하면 된다.

![image](https://github.com/JJamVa/JJamVa/assets/80045006/6bc8548f-8ef6-434c-92cf-a4ae46b23c83)

위와 같이 .wrapper 영역을 기준으로 화면이 표현되는 것을 볼 수 있다.<br/>
특히, `B item`과 같은 경우 `right: 10px`의 속성은 부모의 기준 제일 오른쪽에서 10px 만큼 왼쪽으로 밀어낸다는 의미이다.
:::

</div>
</details>

### fixed

- Viewport 기준으로 위치를 지정
- `transform`, `perspective`, `filter` 속성 중 어느 하나라도 `none`이 아니면 Viewport 대신 그 조상을 컨테이닝 블록으로 삼는다.
- 일반적인 문서 흐름에서 자기 자신의 요소를 제거하고 자리를 잡는다.
- 스크롤을 올리고 내려도 자리는 변하지 않는다.(완전 고정)
- 대개적으로 header나 하단 top 버튼에 사용

<details>
<summary>position: fixed 실습</summary>
<div markdown="1">

```css
.wrapper {
  /* 벗어난 영역을 보여주기 위해 margin 값을 부여 */
  margin-left: 100px;
  margin-top: 100px;
  width: 500px;
  height: 2000px;
  /* fixed의 특징을 보여주기 위해 높이를 2000px로 변경 */
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  /* fixed의 성질을 확인하기 위해 배경을 그라데이션으로 주었음 */
}

.wrapper div {
  width: 200px;
  height: 100px;
}

.A {
  background-color: blueviolet;
  position: fixed;
  right: 10px;
}

.B {
  background-color: aqua;
  position: fixed;
  bottom: 50px;
}

.C {
  background-color: cadetblue;
  position: fixed;
  top: 0px;
}

.D {
  background-color: blue;
  position: fixed;
  left: 150px;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/846757a5-6911-4179-bc1b-2f4ecaaf06b4)

:::note
`position: fixed`만 주었을 때, .wrapper 기준에서 하나의 item으로 뭉쳐있다.<br/>
.wrapper에 `margin-top`, `margin-left`로 인해 item들이 .wrapper안에 배치된 것처럼 보인다.<br/>
하지만 각 요소에게 `top`,`bottom`,`left`,`right` 속성을 부여하게 된다면 제일 최상단에 있는 `<body>` 기준점으로 item들이 배치된다.<br/>
:::

![image](https://github.com/JJamVa/JJamVa/assets/80045006/49f910db-d598-4ad9-a4bf-19e8e074d729)

:::note
Viewport 기준보다 큰 height값을 주면서 화면 스크롤을 내려보면 각 item들의 위치는 그대로인 것을 볼 수 있다.<br/>
즉, position: fixed를 통해 **Viewport 기준으로 item을 고정**시켰다고 보면된다.
:::

</div>
</details>

### sticky

- 조상의 위치(static을 제외한 position속성값을 가진 가장 가까운 조상)를 기준으로 자리를 잡는다.

<details>
<summary>position: sticky 실습</summary>
<div markdown="1">

```css
.wrapper {
  /* 벗어난 영역을 보여주기 위해 margin 값을 부여 */
  margin-left: 100px;
  margin-top: 100px;
  width: 500px;
  height: 2000px;
  /* sticky의 특징을 보여주기 위해 높이를 2000px로 변경 */
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  /* sticky의 성질을 확인하기 위해 배경을 그라데이션으로 주었음 */
}

.wrapper div {
  width: 200px;
  height: 100px;
}

.A {
  background-color: blueviolet;
  position: sticky;
  top: 0px;
}

.B {
  background-color: aqua;
  position: sticky;
  top: 300px;
}

.C {
  background-color: cadetblue;
  position: sticky;
  top: 100px;
}

.D {
  background-color: blue;
  position: sticky;
  top: 200px;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/1435af4d-2f1f-4924-ab79-1798f4e2e7dc)

:::note
.wrapper 기준으로 각각에 top 속성값을 부여했다.<br/>
위의 사진의 형태만 봐도 position: relative와 유사해보인다.
:::

![image](https://github.com/JJamVa/JJamVa/assets/80045006/50dd5e0b-7e35-4720-be27-701ec5dec6f6)

:::note
Viewport보다 큰 height 값으로 인해 스크롤을 내리게 된다면 위와 같이 형태가 바뀐다.<br/>
원본의 형태는 자기 부모의 기준점으로 item들을 **relative형식으로 배치**하지만<br/>
부모의 기준점이 화면에서 보이지 않게 된다면 **Viewport기준으로 fixed처럼 동작**한다.<br/>
그래서 위와 같이 순서의 item들을 확인할 수 있다.
:::

</div>
</details>

## z-index

- `position`의 속성값이 `static` 이외의 값을 가진 박스가 z축의 위치를 지정
- `z-index`에 값이 클수록 박스는 더 앞으로 나온다.
- 부모가 `z-index`를 높여 자식보다 앞으로 나올 수 없다.
- 자식은 `z-index`를 음수의 값으로 두어 부모 뒤로 갈 수 있다.

<details>
<summary>z-index 실습</summary>
<div markdown="1">

```css
.wrapper {
  margin-left: 100px;
  margin-top: 100px;
  width: 500px;
  height: 500px;
  background-color: rgb(61, 77, 77);
}

.wrapper div {
  width: 200px;
  height: 100px;
}

.A {
  background-color: blueviolet;
  position: relative;
  z-index: 1;
}

.B {
  background-color: aqua;
  position: relative;
  z-index: 3;
}

.C {
  background-color: cadetblue;
  position: relative;
  bottom: 150px;
  left: 100px;
}

.D {
  background-color: blue;
  position: relative;
  bottom: 200px;
  left: 100px;
  z-index: -1;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/ddeb3330-da30-4925-af0c-529f432f4261)

:::note
position: relative로 실습<br/>

z-index값이 없을 경우, **HTML 태그의 작성 순서**에 따라 z-index값이 높다고 생각하면 된다.<br/>
겹쳐있는 부분 중 순서를 직접 정하고 싶다면 z-index를 설정하면 된다.<br/>

위의 결과처럼 A,B,C는 z-index 값 순서대로 동작하는 것을 볼 수 있다.<br/>
반면 D는 화면에서 보이지않는다.<br/>
이유는 D의 item은 z-index 값이 -1인 음수다.<br/>
즉, D의 item은 존재는 하나 부모 태그인 .wrapper뒤에 가려져 없어진 것처럼 보인다.
:::

</div>
</details>
