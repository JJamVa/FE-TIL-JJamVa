# SVG, Canvas

## SVG

- 확장 가능한 벡터 그래픽(scalable vector graphics)으로 XML 기반의 2차원 그래픽. HTML 태그로 그래픽 구현이 가능하며, css와 javascript로 컨트롤이 가능.
- 장점: 이미지의 크기를 확대, 축소해도 깨지지 않음. 이미지 크기를 키워도 용량이 늘어나진 않음.
- 단점: 코드로 구성되어 있어, 복잡한 이미지를 생성할 경우 파일 사이즈가 커짐.

## 사용방법

```html
<!-- img 태그를 사용 -->
<img src="icon-home.svg" alt="home" />

<!-- CSS background 속성을 이용하여 배경으로 넣기 -->
background: url(./icon-home.svg) no-repeat 50% 50% / contain;

<!-- 인라인 속성으로 SCV 이미지를 표현 -->
<!-- 이미지 조작이 필요한 경우는 인라인으로 처리하는 것이 좋다. -->
<button class="inline">
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
      stroke="#767676"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 21V12H15V21"
      stroke="#767676"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <span class="a11y-hidden">Home</span>
</button>
```

## Canvas

- JS와 HTML를 통해 그래픽으로 그림을 그림.
- 픽셀 기반의 비트맵 방식
