# SVG 속성 설정 및 변경

## SVG 형태

- svg태그에 크기 및 정보 작성
- svg태그안 path라는 태그에 어떤 모양을 표현할지에 대한 속성 작성

```html title="SVG"
<svg viewBox="0 0 1000 160" xmlns="...">
  <path
    id="path"
    fill="none"
    stroke="black"
    stroke-width="5"
    stroke-linecap="round"
    stroke-linejoin="join"
    d="M0,80c0,0,320.5,0.7,331.2,0.8C342,80.9,353.4,39,361,24.2c0,0-28.8,79.1-34,115.5
                  c0,0,7.8-47.9,13.8-63.3c-8.9-4.1-21.2-6.4-24.4-17.1c-1.3-4.3-1.1-8.8-0.3-13.2c2.7-15.5,12.4-27.4,26.6-34
                  c21.4-9.8,49.3-4.2,63.8,14.6c7.2,8.7,15.4,36.5-10.5,77.5c-30,47.5-92.5,43.5-31,6c20.5-12.5,33-13,50.5-20
                  c9.5-3.8,23.5-16,20.5-19c-7.8-7.8-31,17.5-19,29c9.6,9.2,24.3-3.8,30.5-11.5c0.8-5.5,3-17.4,5-21c-6,22.2-10.2,53.7,21,2.5
                  c-1.5,6.2-0.8,18.5,14,18.5c18.5,0,28-23,15-18.5s-22.5,32.5-8.5,32.5s22-8,36-25.5c11-13.8,20.5-30.4,25.3-47.4
                  c1-3.7,1.8-7.6,1.1-11.4c-0.3-1.6-0.9-3.2-2.2-4.3c-2.8-2.6-6.4-0.3-8.7,1.8c-12,11.5-18.1,33.5-21.6,49.2
                  c-2.5,11.1-4.3,23.7-0.7,34.8c0.9,2.8,2.3,5.6,4.2,7.8c10.4,12,23.7-1,29-9c0.3-0.4-1-4-1.1-4.6c-0.3-2-0.5-4.1-0.4-6.1
                  c0.2-6.9,6.4-15.4,13-14.5c-3.8-0.8-9.1,3.4-11.4,6.9c-2.3,3.6-2.8,8-2,12.2c0.5,2.9,3.1,7.3,6.4,7.6c10.5,1.6,16-19.9,9.5-26
                  c3.3,3.1,8.4,3.6,12.6,2.2c5.3-1.8,7.6-6.4,8.4-11.7c-4.3,20.3-13.8,66.4-17,88c2.8-22.8,12-70.6,26-79c14-8.4,16.8-2.5,16.5,1.5
                  c-0.3,3.4-1.8,7.2-2.9,10.4c-1.3,3.9-2.6,7.8-4.6,11.4c-2,3.6-4.7,6.9-8.2,9c-0.8,0.5-1.9,0.8-2.4,0.1c-0.2-0.3-0.3-0.7-0.3-1.1
                  c-0.1-7.6,7.3-17.4,13.1-21.8c5.5-4.2,12.9-4.2,17.8,0.9c9-2.8,25.4-9.6,19-14c-8-5.5-30,19.5-21,27.5c9,8,28.5,0.5,32-9
                  c2.8-7.6,5.8-21.5,7-27.5c-2.2,8.8-6.9,30.1-8.5,44.5c0.8-6.6,5-13,8.7-18.2c3.2-4.5,10.3-14.7,16.7-14c2.9,0.3,4.4,2.8,6.5,4.5
                  c2,1.7,4.3,2,6.8,2c8.3,0,303.3,0,303.3,0"
  />
</svg>
```

## SVG 속성

### fill

- SVG에서 Stroke영역을 제외한 남은 공간(배경)에 대한 색을 지정

### stroke

- SVG를 표현하기 위한 선의 색을 표현

### stroke-width

- SVG를 표현하기 위한 선의 색의 크기(굵기)를 설정

### stroke-linecap

- SVG의 stroke 양쪽선의 모양을 설정하는 속성

### stroke-linejoin

- SVG의 stroke가 꺽인선 영역에 대해 모양 설정

:::note
![image](https://github.com/JJamVa/JJamVa/assets/80045006/59bce1af-57d4-4ad8-bbbf-37b44b66e746)

위의 사진의 선을 SVG의 stroke라고 보았을 때,<br/>
빨간 동그라미 부분은 `stroke-linecap`을 이용하여 모양을 설정<br/>
파란 동그라미 부분은 `stroke-linejoin`을 이용하여 꺽인선 부분의 모양을 설정

:::

### stroke-dasharray

- stroke의 표현영역과 공백영역을 표현하기 위해 사용하는 속성
- `stroke-dasharray: (표현할 줄의 길이) (공백 간격)`

```css
path {
  stroke-dasharray: 10 20;
  /* 10만큼 표현 20만큼 공백 */
}
```

```html
<svg
  width="320"
  height="2"
  viewBox="0 0 320 2"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M0 1H320" stroke="black" />
</svg>
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/95a043b1-1690-4e57-9a44-574d54b8fee3)

### stroke-dashoffset

- stroke의 표현 시작점을 지정하는 속성
- `stroke-dasharray`의 시작점을 나타내기 때문에 **`stroke-dasharray`속성이 없다면 동작하지 않는다**.

<details>
<summary>stroke-dashoffset 예시</summary>
<div markdown="1">

```css
path {
  stroke-dasharray: 30 30;
  stroke-dashoffset: 0;
}
```

```html title="직선 SVG"
<svg
  width="320"
  height="2"
  viewBox="0 0 320 2"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M0 1H320" stroke="black" />
</svg>
```

### `stroke-dashoffset: 0`

![image](https://github.com/JJamVa/JJamVa/assets/80045006/ecb93872-7848-40fb-9540-114528e4f681)


### `stroke-dashoffset: 30`

![image](https://github.com/JJamVa/JJamVa/assets/80045006/3ca56bba-232e-46e5-9863-6acb8e02c72d)

### `stroke-dashoffset: 50`

![image](https://github.com/JJamVa/JJamVa/assets/80045006/6a4578ae-c717-4ffe-83fe-a9827abbf1cd)

위의 화면들을 보면 값이 증가할수록 왼쪽으로 사라지고 오른쪽에 삽입되는 것처럼 보인다.<br/>
즉, 시작점 0을 기준으로 `stroke-dashoffset`의 속성값 만큼 떨어진 지점에서부터 화면 표현한다는 것이다.<br/>
`stroke-dashoffset`의 속성값만큼 잘린 stroke 영역은 기존의 stroke영역 맨뒤에 들어간다.


</div>
</details>
