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

## box-shadow

- 그림자 효과를 제공
- `inset`이라는 속성 값은 박스 내부에 그림자를 넣음

## opacity

- 불투명도를 설정
- 0~1사이의 숫자만 지정(0:투명 1: 불투명)
