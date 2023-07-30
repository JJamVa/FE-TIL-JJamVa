# CSS Box Model

## CSS Box Model

- HTML 요소를 감싸는 상자
- margin-border-padding-element 요소로 구성 되어있다.
  - `element`: 텍스트, 사진 등 보여줄 대상
  - `padding`: element를 감싼다.
  - `border` : padding 영역을 둘러쌓여있다.
  - `margin` : border 영역을 둘러쌓여있다.

![image](https://github.com/JJamVa/JJamVa/assets/80045006/d095ab00-0ad2-4dc3-9a25-731ff75f24d1)

## width

- 너비를 의미
- 기본값은 콘텐츠 영역의 너비지만 `box-sizing` 속성을 사용하여 테두리 영역의 너비 설정
- `auto`: 기본값. 브라우저가 계산
- `min-content`: 최소 너비
- `max-content`: 컨텐츠 내용의 선호 너비
- `fit-content`: 컨텐츠의 너비 만큼

## height

- 요소의 높이

## padding

- 단축 속성이며, `padding-top` `padding-right` `padding-bottom` `padding-left` 순서로 작성해야함.(시계 방향 위->오른쪽->아래->왼쪽)

```css
p {
  padding: 10px; /* top, right, bottom, left 모두 10px */
  padding: 10px 20px; /* top, bottom :10px,  left, right:20px */
  padding: 10px 20px 30px; /* top:10px, left,right:20px, bottom:30px */
  padding: 10px 20px 30px 40px;
}
```

## margin

- padding과 순서, 사용 방법은 같다.
- `margin: auto`를 하면 가운데 정렬이다.(위, 아래 정렬은 되지 않음)

## margin 병합 현상(Margin Collapsing)

- element와 element 사이의 서로 겹치게 margin 값을 주었을 때, margin값을 더 큰 것만 적용되는 현상
- 부모 요소와 자식 요소에서도 자식 margin 값이 부모 높이보다 더 큰 값을 주었을 떄, 영향을 주지 않는다.
- margin 병합 현상 해결 방법
  1. 부모 요소에 `overflow` 속성 값 적용
  2. 부모 요소에 `display: inline-block`값 적용
  3. 부모 요소에 `border`값 적용
  4. 부모 요소에 `display:flow-root`를 사용(IE 지원 불가)

:::note
margin 병합 현상에 대해 인지하고 구현을 하였다면 구현에 대해 상관없다.
:::

## border

- 테두리를 지정
- 테두리는 요소가 차지하는 전체 너비, 높이의 일부
- `border-width` `border-style` `border-color`를 지정

## box-sizing

- `content-box`: 기본값. `width`,`height`에 `border`,`margin` 포함하지 않음.
- `border-box`: width = 콘텐츠 너비 + border + padding

## overflow, overflow-x, overflow-y

- 박스보다 컨텐츠가 더 클 떄, 처리하는 방법 지정
- `visible`: 박스보다 클 떄, 컨텐츠를 자르지 않는다.
- `hidden`: 내용 크기만큼 맞추고 나머지를 자른다.(스크롤바 x)
- `scroll`: 내용 크기만큼 자르고 스크롤 제공
- `auto`: 자동으로 콘텐츠를 넘칠 경우 스크롤바 노출

## border-radius

- 상자 모양을 조절

## background

- `background-attachment`
  1. `fixed`: 뷰포트고정
  2. `local`: 콘텐츠에 대해 고정. 스크롤이 존재하면 배경과 함께 스크롤
  3. `scroll`: 배경 요소는 고정. 배경은 함께 스크롤이 되지 않음.
- `background-clip`: 요소의 배경이 테두리, 안쪽 여백, 콘텐츠 상자 중 어디까지 차지할지 지정
  - 배경을 잘라냄
  - `border-box`/`padding-box`/`content-box`
- `background-origin`: 배경 위치 시작점을 결정
- `background-color`: 배경 색상 설정
- `background-image`: 배경 이미지 설정
- `background-position`: 배경의 위치를 설정
- `background-repeat`: 배경 이미지를 어떻게 반복할 것인지 설정
  - `repeat`: 반복
  - `no-repeat`: 반복x
  - `repeat-x` : x축 반복
  - `repeat-y` : y축 반복
- `background-size`
- `contain` : 이미지가 잘리거나 찌그러지지 않도록 임계치 중 제일 크게 설정. 여백이 발생할 수 있다.
- `cover` : 이미지가 찌그러지지 않는 임계치 중 제일 크게 설정. 이미지의 가로세로비가 요소와 다르다면 이미지를 세로 방향 또는 가로 방향으로 잘라내어 여백이 생기지 않도록 설정.
- 별도 크기 지정

:::tip
배경으로 사용할 경우 background, 화면에 사진을 넣을 경우 `<img>` 태그 사용을 권장
:::

```css
div {
  background: skyblue url(img/bg.jpg) no-repeat 50% 50% / center;
  /* 색, 이미지 경로, 반복형태, 가로, 세로, 위치 */
  background-clip: padding-box;
  /* 꼭 background-clip 사용시, background 태그 사용 후 사용 */
}
```

## box-shadow

- 그림자 효과를 제공
- `inset`이라는 속성 값은 박스 내부에 그림자를 넣음

## opacity

- 불투명도를 설정
- 0~1사이의 숫자만 지정(0:투명 1: 불투명)
