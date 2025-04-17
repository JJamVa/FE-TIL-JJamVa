# DFS

## DFS란?

- Depth-First Search
- 깊이 우선 탐색, 한 방향으로 갈 수 있을 만큼 깊이 들어가며 탐색
- `Stack 자료구조` 또는 `재귀함수`를 활용

## DFS의 사용 목적

- 모든 경로 탐색
- 백트래킹 문제
- 그래프 사이클 탐지
- 분리된 영역 개수 세기

## DFS 코드 문제

- 5 × 5 크기의 2차원 배열이 존재
- 각 칸의 값은 다음을 의미
  - `1` : 지나갈 수 있는 길
  - `0` : 지나갈 수 없는 길 (벽)
- 시작 위치는 `(0, 0)`, 도착 위치는 `(4, 4)`, 도달이 불가할 경우 "IMPOSSIBLE" 출력
- 목표: `(0, 0)`에서 출발하여 갈 수 있는 모든 경로 중, 최장 거리를 구하기

```js
let maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
let visited = Array.from({ length: maps.length }, () =>
  Array(maps[0].length).fill(false)
);
let answer = [];
let [x_end, y_end] = [maps.length - 1, maps[0].length - 1];
let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

function dfs(x, y, depth) {
  visited[x][y] = true;
  if (x === x_end && y === y_end) answer.push(depth);

  for (let i = 0; i < dx.length; i++) {
    let dot_x = dx[i] + x;
    let dot_y = dy[i] + y;

    if (dot_x < 0 || dot_x > x_end || dot_y < 0 || dot_y > y_end) continue;
    if (maps[dot_x][dot_y] !== 1 || visited[dot_x][dot_y]) continue;

    dfs(dot_x, dot_y, depth + 1);
  }

  visited[x][y] = false;
}

dfs(0, 0, 1);
console.log(answer.length > 0 ? Math.max(...answer) : "IMPOSSIBLE");
```

:::note

위의 코드를 보면 BFS와 유사하지만, 동작 방식은 다르다.<br/>
visited 배열을 이용해 해당 좌표를 이미 방문했는지 여부를 확인할 수 있도록 한다.<br/>
dx, dy 배열은 상하좌우 방향(아래, 오른쪽, 위, 왼쪽)으로 좌표를 탐색하기 위해 선언한다.<br/>

DFS는 재귀 함수를 사용하여 구현되며, 문제의 시작 위치 `(0, 0)`과 초기 depth 1을 인자로 전달하여 탐색을 시작한다.<br/>
방문한 좌표는 visited 배열에서 true로 표시하여 **중복 방문을 막는다**.<br/>

---

그 후, 현재 위치를 기준으로 네 방향을 확인한다.<br/>

- `배열의 범위를 벗어났는지`
- `이미 방문한 좌표인지`
- `해당 좌표가 이동 가능한 길인지`

모든 조건을 만족하는 경우 다음 좌표로 재귀적으로 DFS를 호출한다.<br/>

---

결론적으로, `(0, 0)`에서 시작해 DFS로 트리 구조처럼 분기되는 모든 경로를 탐색하고,<br/>
그 중 가장 깊이 들어갈 수 있는 경로의 최대 길이(depth)를 계산한다.<br/>
이때 visited 배열을 통해 이미 방문한 좌표를 다시 방문하지 않도록 처리하며,<br/>
탐색이 끝난 뒤에는 해당 좌표의 visited 값을 **다시 false로 되돌려 다른 경로에서도 해당 좌표를 사용**할 수 있도록 한다.<br/>
이러한 방식은 **백트래킹** 이며, DFS에서 모든 가능한 경로를 빠짐없이 탐색하기 위해 필수적인 처리이다.<br/>
(백트래킹 기법은 추후에 별도로 더 자세히 다룰 예정)

:::

:::tip DFS 추천 알고리즘 문제집

[DFS 알고리즘 문제 - 백준](https://www.acmicpc.net/workbook/view/18658)

:::
