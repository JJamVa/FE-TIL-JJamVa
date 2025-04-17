# Float

- 한 요소가 보통 흐름으로부터 빠져 텍스트 및 인라인 요소가 그 주위를 감싸 해당 요소에 좌 우측에 배치
- `left`, `right`, `none(default값)`

:::note
float은 블록 레이아웃 사용을 의미함
inline, inline-block 요소에 float속성을 주면 block으로 계산되어 적용.
:::

## float 해제하기

```css
.box {
  clear: both;
}
/* clear 속성을 통해 float를 해제한다. 즉, float를 사용하여 요소들이 겹치게 되거나 그 주변을 둘러 쌓을 때, float를 더 이상 사용하지 않고 그 전의 상태로 돌리고 싶다면 clear를 쓰는 것이다.*/
```

:::danger
자식 요소들이 모두 float 속성을 가진다면, 컨테이너 요소의 높이에 자식 요소들의 높이가 포함되지 않음.<br/>
해결방법
1. 부모에게 높이값을 주기
2. overflow: hidden 사용
3. clear-fix 방법
   
:::

```css
.box {
  /* 방법1 */
  height: 200px;
  /* 방법2 */
  overflow: hidden;
}

/* 방법3 */
/* 가상 요소 */
.box::after {
  content: "";
  /* 빈 공간 생성 */
  display: block;
  /* 생성한 부분에 대하여 block 컨테이너로 지정 */
  clear: left;
  /* float를 해제한다. */
}
```
