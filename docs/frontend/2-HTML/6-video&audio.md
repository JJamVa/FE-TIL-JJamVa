# video & audio

## video

- video 속성 태그
  - `autoplay`: 동영상 자동 재생
  - `controls`: 재생, 정지 등 조작 메뉴 노출
  - `loop`: 동영상 반복 재생
  - `poster`: 동영상 재생 전에 보여 줄 이미지
  - `preload`: 페이지를 열 때 무엇을 로드할지 결정
    - `none` : 비디오 파일을 미리 로딩하지 않음.
    - `metadata` : 미리 로딩하지 않지만 파일의 메타데이터 미리 가져옴.
    - `auto` : 비디오 파일을 미리 로딩하여 사용자가 바로 영상을 볼 수 있도록 준비
  - `src`: 동영상 주소
  - `type`: 동영상 타입
  - `<track>` : `<audio>` 혹은 `<video>` 요소의 자식으로 자막 텍스트를 보여줄 때 사용.
    - `kind` : 텍스트 트랙의 종류를 지정합니다. subtitles(자막), captions(설명)
    - `srclang` : 텍스트 트랙의 언어를 지정.
    - `label` : 텍스트 트랙의 제목 지정.

## audio

- audio 태그가 공식적으로 지원하는 표준 오디오 파일: `MP3`, `WAV`, `Ogg`
- audio 태그 속성
  - `src` : 파일의 경로
  - `controls` : 동작을 조절 패널
  - `autoplay`: 자동 재생 체크
  - `loop` : 반복 재생 체크
  - `preload`: 파일의 내용 전부를 가져올지 체크

---

## iframe

- `inline frame`을 줄여 쓴 것
- 현재 웹페이지에 다른 HTML 페이지를 포함시켜 중첩하는 기능 제공

```css
    <iframe
        width="1280"
         /*너비  */
        height="720"
        /* 높이 */
        src="https://www.youtube.com/embed/-iuX3r8PSzU"
        /* 주소 */

        frameborder="0"
        /* 테두리 표시 여부 0은 테두리있음, 1은 테두리 없음 */

        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        /* allow는 iframe에서 허용할 기능들을 지정 */
        allowfullscreen>
        /* allowfullscreen은 전체화면을 지원 */
    </iframe>
    /* scrolling: 스크롤바 표시 유무(yes,no,auto) */
    /* longdesc: 내용을 설명하는 페이지 */
    /* marginwidth: left,right,margin */
    /* align: 정렬(top,bottom,left,right) */
```

:::tip
일부분 저작권 등 기타문제로 iframe을 가져와도 동작하지 않을 때가 있다.
:::

---

## 반응형 동영상

### `<video>`태그 반응형 동영상

- `<img>`태그를 반응형으로 만드는 방식이 같다.
  - `width:100%`
  - `max-width: 100%`

### YouTube비디오를 활용한 반응형 동영상(`<iframe>`)

```html
<article class="cont-video">
  <iframe
    class="video-next-level"
    src="https://www.youtube.com/embed/4TWR90KJl84?autoplay=1&mute=1&loop=1&playlist=4TWR90KJl84&controls=1"
    title="YouTube video player"
    frameborder="0"
    allowfullscreen
  ></iframe>
</article>
```

```css
.cont-video {
    position: relative;
    padding-top: 56.25%;
		/* padding-top, padding-bottom 속성의 % 값은 부모 요소의 너비에 비례합니다. */
		/* 예를 들어 부모의 너비가 1200px 이라면 자식요소의 padding-top=50% 의 값은 600px 과 같습니다. */
    aspect-ratio: 16 / 9
    /* 화면 비율을 가로 16 세로 9의 비율 */
    /* padding-top의 값을 56.25%를 준 이유는 (9/16) * 100 한 값이 56.25이다. */
} 


.video-next-level {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

}
```
