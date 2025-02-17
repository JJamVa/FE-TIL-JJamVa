# React Native Component

## View

- React의 div태그와 비슷한 역할을 하는 컨테이너 컴포넌트
- 여러 개의 요소를 감싸고 스타일을 적용할 때 사용
- 스타일 적용 시 **flexbox 레이아웃**을 지원

```jsx title="App.tsx"
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <View style={{ width: 200, height: 200, backgroundColor: "blue" }}>
        <View style={{ width: 100, height: 100, backgroundColor: "orange" }} />
      </View>
    </View>
  );
}
```

![Image](https://github.com/user-attachments/assets/a9015b63-691f-4aef-9da3-be3e68ad0faf)

:::note

React Native의 View를 이용하여 전체 화면을 표현하기 위해서는 style에 `flex: 1`을 이용하면 된다.<br/>
React Native의 기본 루트 컨테이너인 `ReactRootView`가 `flex`이기 때문에 적용 가능<br/>

:::

## Text

- 텍스트를 표시하는 컴포넌트
- View 내부에서 사용 가능하며, 여러 줄로 작성 가능

```tsx title="App.tsx"
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, color: "blue" }}>React Native Text</Text>
      <Text>가나다라마바사 {"\n"} 아자차카타파하</Text>
    </View>
  );
}
```

![Image](https://github.com/user-attachments/assets/3e32582a-6115-4d28-a7aa-f5899125e148)

:::note

React Native에서 Text안 글들을 띄워쓰기 위해서는 `{"\n"}`을 사용하면 된다.<br/>

:::

## SafeAreaView

- iOS 및 Android에서 UI가 시스템 UI 요소와 겹치지 않도록 보호하는 컨테이너 컴포넌트

```tsx
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, color: "blue" }}>React Native Text</Text>
        <Text>가나다라마바사 {"\n"} 아자차카타파하</Text>
      </View>
    </SafeAreaView>
  );
}
```

:::note

위의 **Text**에 사용한 예시 코드를 보면 Component가 Toolbar와 겹치는 현상이 발생<br/>
이를 해결하기 위해 `<SafeAreaView>`를 이용하여 해결.<br/>

:::

:::caution

- paddingTop으로 해결하면 되는 것이 아닌가?

일부 기기에서는 paddingTop을 추가하는 방식으로 해결할 수도 있다.<br/>
그러나 모든 기기(iOS, Android)마다 상태 바의 크기가 다르기 때문에, 일관된 UI를 보장하기 어려움.<br/>

iOS: <SafeAreaView>를 사용하면 자동으로 안전한 영역을 감지하여 UI가 겹치지 않도록 처리됨.
Android: SafeAreaView만으로는 완전히 해결되지 않을 수 있으므로, `StatusBar.currentHeight`를 활용하여 `paddingTop`을 추가해야 함.

```tsx
import { SafeAreaView, View, Text, Platform, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Text>Toolbar와 겹치지 않는 UI</Text>
    </SafeAreaView>
  );
}
```

Android에서 `<SafeAreaView>`를 사용해도 겹칠 경우,<br/>
`StatusBar.currentHeight`를 이용하여 코드를 작성하면 해결된다.<br/>

:::

## StatusBar

- 상태 바(Status Bar)의 스타일을 변경하거나 숨기는 역할을 하는 기본 제공 컴포넌트
- 시간, 배터리, 네트워크 상태 등의 정보를 표시하는 영역

```tsx
import { StatusBar, SafeAreaView, View, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar backgroundColor="red" />
      <View style={{ flex: 1 }}>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/608e520f-3f0d-4da9-b067-d7dc7d877d34)

### StatusBar스타일 속성 정리

|               속성                |                    설명                     |                           기본값                           |
| :-------------------------------: | :-----------------------------------------: | :--------------------------------------------------------: |
|         `backgroundColor`         |           상태 바의 배경색을 변경           |                  기기의 기본 상태 바 색상                  |
|            `barStyle`             |         상태 바 아이콘 색상을 변경          | `IOS`: default (검정)<br/> `Android`: light-content (흰색) |
|             `hidden`              |   상태 바를 숨김 (`true`로 설정하면 숨김)   |                 `false` (기본적으로 보임)                  |
|           `translucent`           | 상태 바를 투명하게 설정 (배경이 반투명해짐) |                          `false`                           |
| `networkActivityIndicatorVisible` |     네트워크 활동 표시 (iOS에서만 지원)     |                          `false`                           |

## TextInput

- 사용자 입력을 받는 텍스트 필드
- `onChangeText`를 사용하여 입력 값을 처리

```tsx title="App.tsx"
import { useState } from "react";
import { SafeAreaView, Text, TextInput, View, StatusBar } from "react-native";

export default function App() {
  const [text, setText] = useState<string>("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar />
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="값을 입력하세요"
          onChangeText={(value) => setText(value)}
          style={{ color: "red" }}
        />
        <Text style={{ color: "blue" }}>{text}</Text>
      </View>
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/7813869a-86e4-4f26-abc9-a5ddce8c84a0)

:::note

TextInput의 값을 바꾸기 위해서는 `useState`, TextInput의 `onChnageText`를 이용하면 된다.<br/>

:::

## Image

- 이미지를 표시하는 컴포넌트
- uri를 이용한 네트워크 이미지 로드 및 로컬 이미지 지원
- `resizeMode`를 사용하여 이미지 크기 조절 가능

```tsx title="App.tsx"
import { Image, View } from "react-native";
import cat from "./assets/cat.jpg";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Image source={cat} style={{ width: 200, height: 200 }} />
    </View>
  );
}
```

```tsx title="src/types/image.d.ts"
declare module "*.jpg";
```

![Image](https://github.com/user-attachments/assets/50732ef6-c2d3-46ea-be67-4c6743c50223)

:::note

Image의 source를 이용하여 사진을 불러온다.<br/>
source에는 로컬 이미지, API통신을 통한 이미지 호출도 가능하다.<br/>
로컬 이미지를 호출 하는 다른 방법 중 하나는 `require`을 이용하는 것이다.<br/>

```tsx
import { Image, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("./assets/cat.png")}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
```

---

React Native의 TypeScript버전은 이미지 확장자가 존재하지 않기 때문에<br/>
각 확장자에 대해 모듈을 선언하는 방법으로 해결하면 된다.<br/>

:::
