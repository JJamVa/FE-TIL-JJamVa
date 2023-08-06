# display 속성

- 박스를 다른 박스와 어떻게 배치할지 결정하는 설정
  - `block`: 요소 전후에 줄 바꿈
  - `inline`: inline요소 상자를 생성. 공간이 있으면 가로 배치
  - `inline-block`: inline과 같이 가로 배치. block의 box-model의 width, height, margin, padding 모두 설정
  - `flex`: 내부 자식 요소들의 위치를 부모 컨테이너 요소 안에서 x, y축 단방향(1차원적)으로 설정합니다.
  - `grid`: 내부 자식 요소들의 위치를 부모 컨테이너 요소 안에서 x, y축 모두 이용해(2차원적) 설정합니다.
  - `none`: 해당 속성은 접근성 트리에서 해당 요소가 제거됩니다. 이렇게 되면 해당 요소 및 해당 하위 요소가 사라지고, 스크린리더에도 읽히지 않습니다.

:::danger
시각적인 요소만 바뀌는 것. Block레벨이 바뀌는 것은 아님.
:::

## reset.css

- 각 브라우저 마다 기본적으로 제공하는 스타일
- 브라우저마다 조금씩 다르다.

```css
/* 내가 사용하는 reset-css */
/* 전체 태그에 margin, padding값을 0으로 준다. */
* {
  padding: 0;
  margin: 0;
}

/* ol,ul,li에 대한 초기화 */
ul,
ol,
li {
  list-style: none;
}

/* 버튼 태그에 대한 초기화 */
button {
  border: none;
  background-color: #ffffff;
}
```

## 크로스 브라우징(Cross Browsing)

- 웹페이지의 상호 호환성
- 어느 한쪽에 최적화되어 치우치지 않도록 공통 요소를 사용여 웹페이지를 제작하는 기법
