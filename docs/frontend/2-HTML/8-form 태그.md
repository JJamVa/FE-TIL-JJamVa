# form 태그

## form

- 사용자에게 입력받은 정보를 제출하기 위한 대화형 컨트롤을 포함하는 문서 구획

## `method` 속성

### post

- 양식 데이터를 요청 본문(body)으로 전송
- 브라우저에 캐싱이 되지 않고, 기록도 남지 않음
- POST 방식은 HTTP 요청에 의한 데이터는 쿼리 문자열과는 별도로 전송
- 데이터의 길이제한이 없고, GET 방식보다 보안성이 높음
- `enctype`속성
  - method 특성이 post인 경우 enctype은 양식 제출 시 데이터의 MIME 유형을 나타냄
    ```
    MIME 타입
    - 클라이언트에 전송된 문서의 다양성을 알려주기 위한 방법
    - 브라우저들은 리소스를 내려받았을 때 해야 할 기본 동작이 무엇인지 결정하기 위해서 사용
    ```
  - `application/x-www-form-urlencoded`: 기본값
  - `multipart/form-data`: `<input type="file">`이 존재하는 경우 사용

### Get

- `https://example.com?name=홍길동&age=20`에서 age=20에서 key와 value형태로 데이터를 보낸다.
- 양식 데이터를 action URL과 `?` 구분자 뒤에 이어 붙여서 전송.
- GET 방식의 HTTP 요청은 브라우저에 의해 캐시 저장됨.
- 보통 쿼리 문자열에 포함되어 전송되므로 길이 제한
- 보안상 취약함, 중요한 데이터(신상정보, 아이디 ,패스워드)는 POST 방식을 사용

### get/post 간단 요약

|          |               POST               |    GET     |
| :------: | :------------------------------: | :--------: |
|   전송   | 양식 데이터를 요청 본문으로 전송 | ?key=value |
|   캐시   |                X                 |     O      |
| 길이제한 |                X                 |     O      |
|   보안   |         Get방식보다 좋음         |    취약    |

## `action` 속성

- 양식 데이터를 처리할 프로그램의 URI 작성.
- 데이터를 보낼 위치를 지정
- 속성을 지정하지 않으면 form이 있는 페이지로 보냄.

## `autocomplete`속성

- 입력요소가 자동완성된 값이 기본값
- 이전에 입력한 값이 있을 경우(브라우저에 기록이 있을 경우)
- `off` 자동 입력 X, `on` 자동 입력 O(default 값)

## input

### 공통 속성

|     type     |     input 컨텐츠의 유형 (button, text, email, file…)     |
| :----------: | :------------------------------------------------------: |
|     name     |                   input 데이터의 이름                    |
|    value     |                    input 데이터의 값                     |
| autocomplete | on/off 양식 자동완성 기능에 대한 힌트(check, radio 제외) |
| palceholder  |            콘텐츠가 비어있을 때 나타나는 내용            |
|   required   |        데이터 전송을 위해 필수로 입력해야하는 값         |
|   disabled   |                         비활성화                         |
|   readonly   |                    수정불가(읽기전용)                    |

:::note
readonly vs disabled
둘다 입력 불가. 

하지만 readonly에 default 값이 존재한다면 데이터 전송이 가능.
:::

### input 유형 `<input type=”___”>`

|  button  |   기본 버튼. value로 텍스트 표시   |      text      |                텍스트 입력                |
| :------: | :--------------------------------: | :------------: | :---------------------------------------: |
|  email   |            이메일 입력             |      tel       |               전화번호 입력               |
| password |   비밀번호 입력(입력값이 가려짐)   |      url       |            웹페이지 주소 입력             |
| checkbox |        단일 값을 선택/해제         |     radio      |          선택 항목중 하나만 선택          |
|   date   |        날짜 입력(년,월,일)         | datetime-local |            날짜와 시간을 지정             |
|  month   |              연과 월               |      time      |                 시간 입력                 |
|   file   |            파일 업로드             |     color      |                  색 선택                  |
|  number  |             숫자 입력              |     range      |             슬라이드 바 형태              |
|  search  | 검색 문자열 입력(삭제 아이콘 포함) |     reset      |       form 내용을 기본값으로 초기화       |
|  submit  |             양식 전송              |     hidden     | 보이지 않지만 값은 서버로 전송하는 컨트롤 |

:::note
하나의 속성으로 다른 값들을 입력받고 처리해도 되지 않나요?
- type을 통해 데이터를 예측 가능하며, 가독성도 좋아진다.
- type에 따라 입력하는 키패드가 조금씩 다르다.
:::

### button, reset, submit

```html
<!-- 사용 방법이다. -->
<input type="button" value="버튼" />
<input type="reset" value="초기화" />
<input type="submit" value="전송" />

<!-- 위와 밑의 코드 동작은 똑같으나 속성값으로 생성하냐 텍스트로 생성하나
개발자의 마음이다. -->
<button type="button">버튼</button>
<button type="reset">초기화</button>
<button type="submit">전송</button>
```

### text / password / url / search / tel

- `maxlength`: 문자 최대 길이
- `minlength`: 문자 최소 길이

### checkbox / radio

- `checkbox`: 단일 값을 선택/해제 하는 체크박스
- `raido`: 같은 name 속성값을 가진 여러 개의 선택 중 단일 값을 선택

### file

- 파일 선택 가능
- `accept`: 허용하는 파일 유형을 지정
- `multiple`: 여러 개의 파일을 선택 가능.

### number

- 숫자 입력. 화살표 컨트롤 제공
- `max`: 최대값
- `min`: 최소값
- `step`: 증가값

## label

- 사용자 인터페이스의 항목을 나타냄
- input을 함께 사용
  - 스크린리더기로 입력하는 내용을 확인 가능
  - label태그를 이용하여 input에 포커스가 가능

### for-id를 이용해 연결하기

```html
<label for="user-id">아이디</label> <input id="user-id" type="text" />
<!-- for-id를 이용하여 user-id가 하나처럼 동작하도록 만들수 있다. -->
```

### label 안에 input 중첩하여 연결하기

```html
<label>
  아이디
  <input type="text" />
</label>
<!-- label 태그안에 a, button과 같은 태그와 제목 요소 태그는 사용 금지 -->
<!-- 제목이 필요할 경우 fieldset legend 태그를 사용하자 -->
```

## select

- 옵션 메뉴를 제공
- `multiple` : 여러개의 항목 동시 선택 가능
- `size` : 항목의 수
- `required` : 선택 필수
- `disabled` : 선택 불가

## option

- 메뉴의 각 옵션을 정의
- 모든 `option` 은 자신이 선택됐을 때의 값으로 사용할 value 속성이 필요
  - 지정하지 않은 경우, option 내의 텍스트 값으로 사용
- selected 특성을 사용하면 해당 옵션을 표현

## optgroup

- option 요소를 optgroup 요소 안에 배치하면 옵션그룹을 나눈다.

## fieldset

- form 관련 요소들을 묶을 때 사용
- `disabled` 는 모든 자손 컨트롤을 비활성화

## legend

- 그룹(filedset)의 제목

## datalist

- 다른 컨트롤에서 고를 수 있거나 추천하는 선택지를 나타내는 option 요소를 담는다.
- input과 select 기능을 합친 것
- 사용자에게 기본적으로 선택할 수 있는 옵션을 제공.
- 옵션값에 원하는 값이 없을 경우 사용자가 다른 값을 입력 가능

## textarea

- 여러줄의 text를 입력 받을 수 있다.

## text 속성

- `cols`: 입력창의 너비
- `rows`: 입력창의 높이(줄)
- `maxlength`: 문자 최대 길이
- `minlength`: 문자 최소 길이
- `placeholder`: 아무 값을 입력하지 않았을 때, 보이는 힌트 값
- `resize: none;`: textarea 크기 비활성화
