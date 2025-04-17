# CSS 변수, 함수

## `:root`

- 전역 CSS 변수 선언하기

```css
:root {
  --main-color: skyblue;
  --pane-padding: 5px 40px;
  /* --뒤에는 어떤 이름이 들어와도 상관없다. 그리고 사용할 변수의 값들을 적어주면 된다. */
}
```

## `var()`

- CSS 변수값으로 지정할 수 있다.

```css
strong {
  color: var(--main-color, blue);
  /* var()을 이용하여 전역 변수를 사용할 수 있으며, 만약 값이 존재하지않거나 존재하지 않는 전역 변수를 사용시
    두번째 값을 넣어 대체 */
}
```

## `calc()`

- CSS 속성 값으로 계산식을 지정할 수 있다.

```css
.box {
  width: calc(100% - 80) px;
  /* calc(연산) 연삭식에서 좌우 공백은 필수. 만일 공백이 없을 경우 실행이 되지않거나 이상한 값으로 적용될 수 있다. */
  height: calc(8px + -50%);
  /* 백분율간의 덧셈으로 처리는 음의 값을 가질 경우 앞에 +를 무조건 넣어야한다.*/
  /* *, / 연산자는 좌우 공백을 요구하지 않지만, 일관성을 위해서 넣는것이 좋음. */
}
```

## `min()`,`max()`

- 쉼포로 구분된 () 내 목록에서 가장 작은 혹은 가장 큰 값을 설정

```css
.wrap {
  width: 1400px;
  margin: auto;
  max-width: calc(100% - 60px);
}
.wrap {
  width: min(1400px, calc(100% - 60px));
  margin: auto;
}
/* 기능상 같은 동작을 하는 코드이다. */
```

## `clamp()`

- 범위 제한, 고정시키다.
- 반응형 폰트를 설정할 때 사용할 수 있다.

```css
.box {
  font-size: clamp(1rem, 2.5vw, 2rem);
  /* clamp(최소값, 이상적인 값, 최대값); 세가지를 입력한다. */
}
```
