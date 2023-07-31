# CSS 이미지 Sprite 및 Retina 디스플레이

## CSS Sprite 기법

- 여러가지의 이미지를 하나의 이미지 파일안에 배치하여 이미지로드 부담을 줄이는 방법

![image](https://github.com/JJamVa/JJamVa/assets/80045006/5f53d718-059f-479a-bf61-14ed7481f420)


:::tip
여러 가지의 이미지들을 Sprite 이미지로 바꿔주는 사이트

https://www.toptal.com/developers/css/sprite-generator/
:::

## Retina Display 대응법

:::note
레티나란?

특정한 시야 거리에서 인간의 눈으로는 화소를 구분할 수 없는 화소 밀도(300 PPI 이상)를 가진 **애플 LCD**의 브랜드 이름
:::

### 원인
- 레티나로 넘어오면서 논리픽셀과 물리픽셀의 차이가 발생. 브라우저가 css에 정의한 픽셀만큼 이미지를 렌더링 해야하기 때문에 물리픽셀에 맞게 렌더링된 이미지가 논리픽셀만큼 커져버린다.

### 해결방법
- 기존의 이미지에서 가로, 세로가 2배가 된 이미지를 준비하면 된다.
