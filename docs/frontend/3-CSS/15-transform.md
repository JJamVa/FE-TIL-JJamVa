# Transform

- 요소에 다양한 변형을 줄 수 있는 속성

## scale

- 요소의 크기를 조절
- 자신의 가운데 중심으로 크기를 변경
- `transform-origin`을 통해 기준점 변경

```css
.transform-scale {
  transform: scale(1.5);
  /* 1.5배만큼 크기가 커진다. */
  transform: scale(2, 1.5);
  /* x축으로 2배, y축으로 1.5배 커진다. */
}
```

## rotate

- 요소를 회전시킨다.
- `180deg` 혹은 `turn`을 이용하여 사용 가능
- 가운데를 중심으로 회전
- `transform-origin`을 통해 기준점 변경

## translate

- 자신의 위치에서 x, y축으로 이동
- 기준점은 왼쪽 상단
- 음수값도 지정 가능

## skew

- 요소를 왜곡시키는 속성
- 각도단위(`deg`)로 사용

```css
div {
  transform: translate(30px, 30px);
}
div {
  position: relative;
  top: 30px;
  left: 30px;
}

/* 결과는 같다. */
/* 정적인 사이트에서 단순 배치는 position을 써도 된다.
애니메이션이나 동적인 요소를 위치를 이동해야하는 경우
transform 속성을 사용하는 것이 성능에 좋다. */
```

---

## transition

- CSS 속성값이 변할 때, 값의 변화가 일정 시간에 걸쳐 일어나도록 하는 것
- 단축 속성
  - `transition-property` `transition-duration` `transition-timing-function` `transition-delay`

### transition-property

- property: 속성
- 전환 효과를 적용할 CSS 속성을 설정. 하나의 속성을 적용하려면 쉼표로 나열
- `all`: 기본값. transition 효과가 나타남
- `none`: transition 효과를 받지 못함
- `initial`: 속성의 기본값으로 설정
- `inherit`: 부모요소의 속성값을 상속받음

### transition-duration

- 지속 시간을 의미

### transition-timing-function

- 진행 속도를 설정
- `ease`, `linear`, `cubic-bezier(n,n,n,n)` 등 다양한 속성 값이 있다.
- 대부분 `cubic-bezier`을 사용한다. 부드러운 곡선을 모델링 하기 위해

### transition-delay

- 지연 시간을 설정

:::note
delay의 값으로 음수 값도 지원이 가능하다.

시작 시간 = 전체 시간 - |음수의 값|
:::

:::danger
text-decoration:underline; 은 transition을 사용할 수 없다.
line, style 등 속성은 transition을 사용할 수 없다.
:::
