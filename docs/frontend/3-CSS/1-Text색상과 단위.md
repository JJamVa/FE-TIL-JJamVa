# CSS 텍스트 꾸미기

## Color

- 폰트의 색상을 가르킨다.
- 'font-'를 붙이지않는다.
- #+Hex(16진수), rgb(), rgba(), hsl(), hsla()가 있다. a가 붙은 것은 투명도를 의미한다.
- transparent 속성 값은 투명함을 의미
- 상속관계를 이용해 inherit을 사용하는 것도 매우 중요

```html
<div>
  <p>안녕하세요.</p>
  <p></p>
</div>
```

```css
div {
  color: skyblue;
}
p {
  color: inherit;
  /* border: 1px solid currentColor를 이용하여 부모의 색을 물려받을 수 있다. */
  /* 결과는 p태그의 color가 skyblue가 나온다. */
}
```

:::danger
실제 홈페이지를 제작할 때, 폰트의 색상과 대비가 잘맞아야된다. 4.5:1 방식으로 권장
:::

- font-family 종류:
  - link 태그로 삽입(HTML)
  - import 삽입(CSS)
  - @font-face(CSS)