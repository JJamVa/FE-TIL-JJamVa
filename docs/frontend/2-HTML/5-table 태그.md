# Table

- 테이블(Table, Excel 등)을 생성할 때 사용
- `<table>`은 테이블 데이터의 컨테이너 요소

## tr, th, td

- 테이블의 행, 테이블의 행(제목), 테이블의 데이터

## caption

- 테이블의 제목이나 설명
- table태그 바로 뒤에만 사용(필수적 사용은 아님)
- `caption-side`: top, bottom로 위치에만 설정(표의 위/아래)

## thead, tbody, tfoot

- `<thead>`: 테이블 행 블록(row block) 내에 **제목 열 그룹**(column headers)으로 구성할 경우 사용.
- `<tbody>`: 행 블록 내에 **테이블 데이터**로 구성할 때 사용.
- `<tfoot>`: 행 블록 내에 **열 요약**(column summaries)로 구성할 때 사용.
- 필수로 사용할 필요는 없다.

## colgroup

- 테이블 열 그룹을 만들고 싶을 때 사용

## col

- colgroup 요소 내부에 포함. 필수 요소는 아님.
- 중간의 열을 여러 개 묶을 떄, 앞에 해당되지 않는 열만큼 `<col>`를 생성해야됨.

## 속성값

### scope

- 행(row) 또는 열(col), 행그룹(rowgroup), 열그룹(colgroup)의 속성값으로 셀의 범위를 지정
- `th` 태그에 사용
- 행, 열의 메타 데이타를 쉽게 구분하기 위해 사용.
- 간단한 표인 경우 자동으로 유추가 가능하기 때문에 `scope`특성은 부적합

### colspan, rowspan

- `colspan`: 열 병합, `rowspan`: 행 병합
- 사용할 떄, col -> row 단위, row -> col 단위로 묶는다고 생각하면 편함.

## 표 접근성 높이기

- `scope`, `id-headers`로 셀의 내용과 셀의 관계 지정
- 제목과 셀 내용을 함께 읽어주기 때문에 데이터의 관계와 흐름을 파악하기 쉽다.

### scope

- 제목 셀이 명확한 단순한 표에 적용하여 표 구조를 나타냄

```html
<table>
  <thead>
    <tr>
      <th scope="col">Purchase</th>
      <th scope="col">Location</th>
      <th scope="col">Date</th>
      <th scope="col">Evaluation</th>
      <th scope="col">Cost (€)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Haircut</th>
      <td>Hairdresser</td>
      <td>12/09</td>
      <td>Great idea</td>
      <td>30</td>
    </tr>
  </tbody>
</table>
```

### id-headers

- 테이블이 병합되거나 내용이 많아 복잡한 경우, 해당 속성으로 명확하게 연결하는 것이 좋다.

```html
<table>
  <thead>
    <tr>
      <th id="purchase">Purchase</th>
      <th id="location">Location</th>
      <th id="date">Date</th>
      <th id="evaluation">Evaluation</th>
      <th id="cost">Cost (€)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="haircut">Haircut</th>
      <td headers="location haircut">Hairdresser</td>
      <td headers="date haircut">12/09</td>
      <td headers="evaluation haircut">Great idea</td>
      <td headers="cost haircut">30</td>
    </tr>
  </tbody>
</table>
<!-- id, headers만 사용 scope와 같이 사용하면 안된다. -->
<!-- 큰 테이블에서 사용하는 것을 권장 -->
```

### &nbsp(공백)
- 값이 없는 경우 `&nbsp`를 사용하거나 '없음'과 같은 텍스트를 삽입 후, CSS를 사용하여 숨김처리하면 접근성을 높일 수 있다.