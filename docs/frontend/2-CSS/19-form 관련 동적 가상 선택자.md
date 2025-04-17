# form 관련 동적 가상 선택자

- form 태그와 관련된 가상 선택자

## 동적 가상 선택자

- `:active` : 클릭 시 활성화(누르고 있는 동안)
- `:visited` : 사용자가 방문했을 경우 표시, 웹 브라우저의 방문 기록을 사용
- `:disabled` : 비활성화 된 요소를 선택
- `:hover` : 마우스 커서를 요소에 올렸을 때, 상호작용
- `:focus` : focus 받은 상태를 나타냄
- `:checked` : input이 선택된 상태를 나타냄(checkbox, radio 등)
- `:enabled` : 활성화 상태
- `:read-only`, `:read-write` : 읽기만 가능한 상태(편집x)/ 읽기/편집이 가능한 상태
- `:required` : 필수입력 값

## 가상요소

- `::placeholder`: 입력에 대한 추가 정보가 있을 경우