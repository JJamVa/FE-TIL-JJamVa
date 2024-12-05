# 개발할 때 알아두면 유용한 브라우저 API(BOM)

## BOM (Browser Object Model) 이란?

- 브라우저에서 제공하는 API.
- 자바스크립트를 통해 브라우저에서 제공하는 기능들을 사용할 수 있도록 도와주는 역할.
- window 라는 객체가 바로 브라우저의 가장 최상위 객체이며, 이 window 객체 안에 아래에서 보이는 여러가지 도구들이 들어있습니다.

```jsx
window.alert(); //브라우저에 메세지 다이얼로그를 띄운다.
window.prompt(); //데이터를 입력받을 수 있는 입력 창을 띄운다
window.confirm(); //true 혹은 false 값을 반환하는 다이얼로그를 띄운다

console.clear(); //콘솔창에 보여지는 로그 내역을 다 지움
console.dir(); //현재 위치에서 가지고 있는 요소를 보여줌
console.log(); //콘솔창에 로그 메세지를 보여줌
console.error(); //콘솔창에 에러 메세지를 보여줌
console.warn(); //콘솔창에 경고 메세지를 보여줌
console.table(); //콘솔창에 데이터를 테이블 형태로 제공
console.group("그룹이름"); //그룹이름으로 묶는다
console.groupEnd(); // 묶여 있는 그룹을 해제한다
console.info("정보"); // 정보를 제공해준다.

console.log("%chello world", "color:red");
// %c는 css를 의미한다. 다음 인자 값에 css의 속성을 적용하면 콘솔창에 적용된 디자인으로 표현이 된다.
```
