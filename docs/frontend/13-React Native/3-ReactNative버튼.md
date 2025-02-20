# React Native Button

## Button

- Button은 React Native에서 기본 제공하는 클릭 가능한 버튼 컴포넌트
- 터치 이벤트를 감지하고 사용자 입력을 처리할 수 있음

```tsx title="App.tsx"
import { useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";

export default function App() {
  const [state, setState] = useState<boolean>(false);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Button
        title={state ? "누르세요!" : "눌렀음!"}
        onPress={() => setState(!state)}
      />
      <Text>{state ? "Hello World!" : ""}</Text>
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/6775ff26-43ed-49ef-80db-37626cadf682)

:::note

Button은 onPress속성을 통해 눌렀을 때, 어떤 이벤트를 처리할 지 함수를 작성하면 된다.<br/>

:::

## TouchableOpacity

- TouchableOpacity는 React Native에서 터치 이벤트를 감지할 수 있는 컴포넌트
- 버튼을 클릭할 때 투명도가 변경되어 사용자가 터치했음을 시각적으로 제공
- Button 컴포넌트보다 스타일링이 자유롭고, 다양한 UI 요소를 감쌀 수 있음

```tsx title="App.tsx"
import { useState } from "react";
import { Text, TouchableOpacity, SafeAreaView } from "react-native";

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <TouchableOpacity
        style={{ backgroundColor: "#3498db", padding: 15, borderRadius: 10 }}
        onPress={() => setCount(count + 1)}
        delayPressOut={3000}
      >
        <Text style={{ color: "white", fontSize: 18 }}>누르세요!</Text>
      </TouchableOpacity>
      <Text>누른 횟수 : {count}</Text>
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/fed15155-b70b-48ff-a5ed-5ba7b1a2fea9)

:::note

TouchableOpacity는 Button과 달리 TouchableOpacity 버튼안 직접 child 컴포넌트를 작성할 수 있다.<br/>
즉, **Button보다 스타일링 및 기능이 확장된 컴포넌트**이다.<br/>

`delayPressOut`을 이용하여 터치가 끝난 후, 3000ms(3초) 후에 다시 버튼이 활성화 된 것을 볼 수 있다.<br/>

:::

### TouchableOpacity 속성 정리

|     속성명      |     타입     | 기본값  |                        설명                        |
| :-------------: | :----------: | :-----: | :------------------------------------------------: |
|    `onPress`    | `() => void` |         |                터치 시 실행할 함수                 |
| `activeOpacity` |   `number`   |  `0.2`  |           터치 시 투명도 (0~1 사이의 값)           |
|   `disabled`    |  `boolean`   | `false` |                 버튼 비활성화 여부                 |
|  `onLongPress`  | `() => void` |         |             길게 눌렀을 때 실행할 함수             |
| `delayPressIn`  |   `number`   |         | 터치 시작 후 `onPress` 이벤트까지의 지연 시간 (ms) |
| `delayPressOut` |   `number`   |         |       터치 해제 후 애니메이션 지속 시간 (ms)       |
|     `style`     |   `object`   |         |                    스타일 적용                     |

## TouchableHighlight

- TouchableHighlight는 React Native에서 터치 이벤트를 감지하는 컴포넌트
- **TouchableOpacity와 유사**하지만, 버튼을 누를 때 배경색이 변경되는 효과가 추가됨
- TouchableOpacity보다 터치 했을 때, 시각적으로 명확하게 표현

```tsx title="App.tsx"
import { useState } from "react";
import { Text, SafeAreaView, TouchableHighlight } from "react-native";

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <TouchableHighlight
        style={{ backgroundColor: "#3498db", padding: 15, borderRadius: 10 }}
        onPress={() => setCount(count + 1)}
        underlayColor={"#1f618d"}
        delayPressOut={3000}
      >
        <Text style={{ color: "white", fontSize: 18 }}>누르세요!</Text>
      </TouchableHighlight>
      <Text>누른 횟수 : {count}</Text>
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/a685a457-413c-4a86-908d-90c229e4802b)

:::note

TouchableHighlight는 TouchableOpacity와 사용법은 같다.<br/>
차이점은 TouchableHighlight은 underlayColor로 버튼을 누른 후, 색상을 별도로 지정할 수 있다.<br/>

:::

## Pressable

- React Native에서 보다 세밀한 터치 이벤트를 제어할 수 있는 컴포넌트
- `TouchableOpacity`, `TouchableHighlight`보다 더 다양한 상태(pressed, hovered 등)를 감지 가능
- 버튼뿐만 아니라 모든 UI 요소에 적용 가능

```tsx title="App.tsx"
import { Text, SafeAreaView, Pressable, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#2980b9" : "#3498db",
          padding: 15,
          borderRadius: 10,
        })}
        onPress={() => console.log("onPress 실행")}
        onLongPress={() => console.log("onLongPress 실행")}
        onPressIn={() => console.log("onPressIn 실행")}
        onPressOut={() => console.log("onPressOut 실행")}
      >
        <Text style={{ color: "white", fontSize: 18 }}>누르세요!</Text>
      </Pressable>
    </SafeAreaView>
  );
}
```

:::note

- 버튼을 짧게 눌렀을 경우

![Image](https://github.com/user-attachments/assets/288fd2cb-162c-4e56-8b9a-f59abdf73f78)

- 버튼을 길게 눌렀을 경우

![Image](https://github.com/user-attachments/assets/0fd9b110-aa1c-4ec7-adaf-67ed740f68ce)

:::

### Pressable 속성 정리

|    속성명     |        타입         | 기본값  |                   설명                   |
| :-----------: | :-----------------: | :-----: | :--------------------------------------: |
|   `onPress`   |    `() => void`     |         |        버튼을 짧게 눌렀을 때 호출        |
| `onLongPress` |    `() => void`     |         |        버튼을 길게 눌렀을 때 호출        |
|  `onPressIn`  |    `() => void`     |         |          터치가 시작될 때 호출           |
| `onPressOut`  |    `() => void`     |         |           터치가 끝날 때 호출            |
|    `style`    | `(state) => object` |         | `pressed` 상태를 활용해 동적 스타일 적용 |
|  `disabled`   |      `boolean`      | `false` |            버튼 비활성화 여부            |

:::info

**언제 어떤 버튼을 써야 할까?**

|       버튼 종류        |              추천 상황              |                        주요 특징                         |
| :--------------------: | :---------------------------------: | :------------------------------------------------------: |
|       **Button**       |        기본 버튼이 필요할 때        |                스타일 커스터마이징 제한적                |
|  **TouchableOpacity**  |   일반적인 터치 효과가 필요할 때    |                 터치 시 **투명도 변경**                  |
| **TouchableHighlight** | 터치 시 **배경색 변경**이 필요할 때 |           `underlayColor`로 **색상 변경 가능**           |
|     **Pressable**      |   세밀한 터치 이벤트가 필요할 때    | `onPressIn`, `onPressOut` 등 **세밀한 이벤트 처리 가능** |

:::
