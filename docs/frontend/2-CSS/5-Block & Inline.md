# Block와 Inline

## `Block`

- 부모 요소의 전체 공간을 차지하는 블록 생성
- 좌우 최대한 늘어나 모든 너비를 차지
- 이전 이후 요소 사이에 줄을 바꾼다.
- 페이지를 구조적으로 나타낼 때 사용한다.
- Block요소 안에 Inline요소가 사용이 되나 그 반대는 되지 않는다.
- `width`,`height`,`padding`,`border`,`margin` 속성을 사용할 수 있다.
- 대표적으로 `<div>`,`<p>`,`<nav>`,`<footer>` 등이 있다.

```html
<div>
  블록요소 안
  <span>인라인요소 중첩 가능</span>
</div>
<!-- 중첩 가능 -->

<span>
  인라인요소 안
  <div>블록요소 중첩 불가능</div>
</span>
<!-- 중첩 불가능 -->

<a href="”#”"><div></div></a>
<!-- Inline 요소 중 a태그는 블록 요소 중첩이 가능하다. -->
```

## `Inline`
- 블록 레벨 요소 안에 포함된다.
- 자기가 필요한 공간만 할당을 받는다.(가로 증가)
- 문장, 단어를 사용하는데 적용된다.
- 새로운 줄을 생성하지 않는다.
- `width`,`height`는 크기 지정 불가
- `padding`,`border`,`margin` 속성은 사용 가능. 하지만 `margin`의 위, 아래 속성은 이용 불가능.
- `<a>`,`<em>`,`<strong>` 등이 있다.

## `Inline-Block`
- Inline의 기능과 Block의 기능이 합해진 것이다.
- 할당받은 공간만 사용(가로 증가)
- Block과 똑같이 속성을 이용가능