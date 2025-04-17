# background

## background property

### `background-attachment`

- `fixed`: 뷰포트고정
- `local`: 콘텐츠에 대해 고정. 스크롤이 존재하면 배경과 함께 스크롤
- `scroll`: 배경 요소는 고정. 배경은 함께 스크롤이 되지 않음.

### `background-clip`: 요소의 배경이 테두리, 안쪽 여백, 콘텐츠 상자 중 어디까지 차지할지 지정

- 배경을 잘라냄
- `border-box`,`padding-box`,`content-box`

### `background-origin`

- 배경 위치 시작점을 결정

### `background-color`

- 배경 색상 설정

### `background-image`

- 배경 이미지 설정

### `background-position`

- 배경의 위치를 설정

### `background-repeat`

- 배경 이미지에 대한 반복 여부를 설정
  - `repeat`: 반복(default값)
  - `no-repeat`: 반복을 하지않음.
  - `repeat-x` : x축 반복
  - `repeat-y` : y축 반복

### `background-size`

- `contain` : 이미지가 잘리거나 찌그러지지 않도록 임계치 중 제일 크게 설정. 여백이 발생할 수 있다.
- `cover` : 이미지가 찌그러지지 않는 임계치 중 제일 크게 설정. 이미지의 가로세로비가 요소와 다르다면 이미지를 세로 방향 또는 가로 방향으로 잘라내어 여백이 생기지 않도록 설정.
- 별도 크기 지정

:::tip
배경으로 사용할 경우 background, 화면에 사진을 넣을 경우 `<img>` 태그 사용을 권장
:::

```css
div {
  background: skyblue url(img/bg.jpg) no-repeat 50% 50% / center;
  /* 색, 이미지 경로, 반복형태, 가로, 세로, 위치 */
  background-clip: padding-box;
  /* 꼭 background-clip 사용시, background 태그 사용 후 사용 */
}
```

---

## 반응형 백그라운드 이미지

### 백그라운드 사이즈 속성들

|       속성/속성값        |                          설명                           |
| :----------------------: | :-----------------------------------------------------: |
|   background-size: px    |                  이미지의 크기를 고정                   |
|  background-size: auto   | 이미지의 종 횡비를 통해 자동으로 다른 축의 크기를 결정  |
|    background-size: %    | %를 사용하면 컨테이너의 너비에 비례하도록 사이즈를 조절 |
| background-size: contain |    컨테이너 전체를 덮지만 이미지를 자르지 않게 유지     |
|  background-size: cover  |             컨테이너 전체를 완전히 덮는다.              |

```css
/* 반응형 백그라운드 이미지 만들기 */
background: url("주소") center / cover no-repeat;
```
