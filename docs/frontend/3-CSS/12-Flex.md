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

## `jusitify-content`

- 주축을 기준으로 배열의 위치를 조절, 아이템 간의 간격 및 배치 설정
- `flex-start(시작점)`, `flex-end(도착점)`, `center(가운데)`, `space-between(양 끝점으로 부터 정렬)`, `space-around(양쪽 여백의 절반만큼 나눠갖게 정렬)`, `space-evenly(항목별로 동일한 여백)`

## `align-items`, `align-content`

- `align-items`: 교차 축을 기준으로 정렬
- `align-content`: 컨테이너의 교차 축의 아이템들이 여러 줄일 때 사용 가능
- `flex-wrap:wrap`인 상태에서 사용가능

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

### `flex-grow`

- 아이템 컨테이너 내부에서 할당할 수 있는 공간의 정도를 지정
- 형제 요소인 아이템들이 모두 같은 `flex-grow`값을 가지면, 동일한 공간을 할당
- 값이 0일 경우 늘어나지 않는다.
- `flex-grow`
  - 1 : 자식 요소들이 모두 동일한 크기의 공간을 할당.
  - 2이상 : 특정한 하나의 자식에게 줄 경우 다른 자식요소보다 두배의 여백 공간을 할당. 만약 자식 요소들의 컨텐츠 크기가 존재한다면 그 컨텐츠 넓이에 따라 할당 받는 값이 달라진다.

```css
flex-basis: 0;
/* 여백 공간이 아니라 전체 공간을 분할 */
```

### `flex-shrink`

- 아이템의 크기를 고정하거나 축소할 때 사용

### `align-self`

- 부모의 `align-items` 속성을 덮어 flex-item에게 개별적인 align-items 속성을 부여
- 기본값 `stretch`

### `order`

- flex-item들의 순서를 order 값에 따라 결정. 값이 작을수록 우선순위가 높다.

### `flex`

```css
flex: 1 1 100px;
/* flex-grow flex-shrink flex-basis의 단축 속성 */
```
