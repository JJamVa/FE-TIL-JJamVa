# Tree

## Tree란?

- 부모 자식 관계를 이루는 구조
- Root Node, Branch(Edge), Leaf Node로 구성
- 탐색을 위한 자료구조
- Node에 데이터가 삽입, Edge는 Node와의 관계를 표현

## Tree의 노드

### 노드와 깊이

![image](https://github.com/JJamVa/JJamVa/assets/80045006/55ddcf80-da7d-4cc2-8798-1962ff40d634)

- root Node(단말 노드): 트리의 최상단에 존재하는 노드
- branch Node(내부 노드): 자식 노드가 존재하는 노드
- leaf Node(단말 노드): 자식 노드가 존재하지 않는 노드
- 깊이(레벨): 트리의 깊이를 표현
  - ex) A노드의 깊이는 0, C노드의 깊이는 2

### 차수와 노드의 관계

![image](https://github.com/JJamVa/JJamVa/assets/80045006/aeb946b0-7612-4cb1-8175-618d61fbfa85)

- 부모: 노드의 부모
  - ex) B노드 기준으로 부모는 A노드
- 자식: 노드의 자식
  - ex) B노드 기준으로 자식은 C노드와 D노드
- 형제: 노드의 같은 깊이(레벨)
  - ex) B노드의 깊이(레벨)는 1. 같은 깊이를 가지는 노드는 E노드
- 차수: 노드의 자식 노드의 수
  - ex) B노드의 자식(C,D) 노드의 수는 2. 즉, B노드의 차수는 2

## 이진트리

- 자식노드의 개수가 최대 2개로 구성된 트리

### 포화이진트리

- 모든 노드가 두개의 자식 노드를 가지며, 동일한 깊이(레벨)을 가짐

### 완전이진트리

- 마지막 깊이(레벨)을 제외하고 노드들이 왼쪽으로 순차적으로 채워진다.

## 트리순회

![image](https://github.com/JJamVa/JJamVa/assets/80045006/30eaae49-52f7-43e1-8383-b05d0d6bb38c)

- `전위 순회`: root Node부터 시작해서 leaf Node 방향으로 방문
  - 순서: A -> B -> C -> D -> E -> F
- `중위 순회`: 왼쪽 leaf Node부터 시작해서 오른쪽 leaf Node방향으로 방문
  - 순서: C -> B -> D -> A -> E -> F
- `후위 순회`: leaf Node를 모두 탐색한 후, root Node를 방문
  - 순서: C -> D -> B -> F -> E -> A
