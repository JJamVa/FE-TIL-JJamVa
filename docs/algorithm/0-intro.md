# Algorithm

:::note

## 백준 입출력

```js title="백준 파일 호출"
// 문제 제출 시, node로 선택
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // 만약 txt파일을 호출할 경우, 해당 경로의 txt파일을 호출 ex) .readFileSync("example.txt")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");
```

input에 한줄 단위로 배열로 저장된다.

:::
