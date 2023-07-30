# CSS개념 및 사용법

- Cascading Style Sheets(폭포수)
- 웹페이지의 디자인(모양/색상/표현)
- 확장자 `.css`

## 1. CSS 작성 방법

```css
선택자(태그) {
  속성(Property) : 속성값(Property Value) ;(세미콜론)
}
```

- 적용 종류:
  - 인라인 스타일(Inline)
  - 태그 선택자
  - 그룹 선택자(,)(다중 선택)
  - 상속 이용하기

- 주석 : /_ 주석 _/ (Ctrl + /)

## 2. CSS 상속

- CSS에서 상속되는 속성과 되지 않는 속성이 있다.

| 속성값  |                   특징                    |
| :-----: | :---------------------------------------: |
| inherit | 선택 요소자의 부모와 동일하게 상속받는다. |
| initial |       브라우저 속성에 영향을 받음.        |
|  unset  |    상속 상태면 inherit 아니면 initial     |

:::danger
 width,height,margin,padding,border은 상속되지 않는다. 또한 button,input과 같은 form 태그 또한 상속받지 않는다.
:::