# 이미지 관련 태그

## `<img>`

- 문서에 이미지를 삽입

```html
<img src="jjamva.jpg" alt="jjamva" />
```

- `src`: 경로
- `alt`: 이미지에 대한 오류를 텍스트로 반환
  - 시각장애인을 위한 스크린리더를 지원
  - 이미지를 대체하는 텍스트가 중복이라면 `alt=""`로 빈값으로 둔다.(alt를 지워서는 안된다.)

![image](https://github.com/JJamVa/JJamVa/assets/80045006/44dd3560-bf7a-49d0-9d9a-e882068018a1)

:::tip
이미지 하단에 빈공간이 생기는 이유????

`<img>`가 inline요소라 img의 세로 정렬이 글자의 baseline을 따르게 된다. 이러한 현상을 해결하기 위해서는

```css
img {
vertical-align: top;
}
```

작성하면된다.
:::

## `<figure>`, `<figuration>`

- 이미지에 캡션(이미지에 대한 설명, 제목 등)을 달고 싶을 때 사용

```html
<figure>
  <img src="###" alt="###" />
  <figcaption>안녕하세요</figcaption>
</figure>
<!-- img밑에 출력 -->
```
