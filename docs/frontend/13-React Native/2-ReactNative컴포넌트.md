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
React Native의 기본 루트 컨테이너인 `ReactRootView`가 `flex`이기 때문에 적용 가능.<br/>

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

### Text 속성 정리

|         속성명         |                 타입                  |  기본값  |                        설명                        |
| :--------------------: | :-----------------------------------: | :------: | :------------------------------------------------: |
|        `style`         |               `object`                |          |                텍스트의 스타일 지정                |
|    `numberOfLines`     |               `number`                |          |         최대 줄 수 제한 (초과 시 말줄임표)         |
|    `ellipsizeMode`     | `"head"` `"middle"` `"tail"` `"clip"` | `"tail"` |                 말줄임표 위치 설정                 |
|   `allowFontScaling`   |               `boolean`               |  `true`  |         사용자의 글꼴 크기 조절 허용 여부          |
|      `selectable`      |               `boolean`               | `false`  |               텍스트 선택 가능 여부                |
|       `onPress`        |             `() => void`              |          |             텍스트 클릭 시 실행할 함수             |
|     `onLongPress`      |             `() => void`              |          |          텍스트 길게 누를 때 실행할 함수           |
| `adjustsFontSizeToFit` |               `boolean`               | `false`  |            텍스트 크기를 자동으로 조정             |
|   `minimumFontScale`   |               `number`                |          | `adjustsFontSizeToFit` 사용 시 최소 글꼴 크기 설정 |
| `suppressHighlighting` |               `boolean`               | `false`  |           IOS에서 터치 시 강조 표시 방지           |

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

### StatusBar 속성 정리

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

### TextInput 속성 정리

|         속성명         |                          타입                           |   기본값    |                        설명                        |
| :--------------------: | :-----------------------------------------------------: | :---------: | :------------------------------------------------: |
|        `value`         |                        `string`                         |    `""`     |               현재 입력된 텍스트 값                |
|     `placeholder`      |                        `string`                         |    `""`     |             입력 전 표시할 힌트 텍스트             |
| `placeholderTextColor` |                        `string`                         |   `gray`    |             `placeholder` 텍스트 색상              |
|     `onChangeText`     |                `(text: string) => void`                 |             |         입력 값이 변경될 때 호출되는 함수          |
|   `secureTextEntry`    |                        `boolean`                        |   `false`   |        비밀번호 입력 시 `true` 설정 ex) ●●●        |
|     `keyboardType`     | `"default"` `"numeric"` `"email-address"` `"phone-pad"` | `"default"` |                  키보드 타입 설정                  |
|    `returnKeyType`     |      `"done"` `"go"` `"next"` `"search"` `"send"`       |  `"done"`   |                엔터 키의 동작 지정                 |
|      `maxLength`       |                        `number`                         | `undefined` |          입력할 수 있는 최대 문자 수 제한          |
|      `multiline`       |                        `boolean`                        |   `false`   |               여러 줄 입력 가능 여부               |
|    `numberOfLines`     |                        `number`                         |     `1`     |        `multiline={true}`일 때 표시할 줄 수        |
|       `editable`       |                        `boolean`                        |   `true`    |            `false`일 경우 입력 비활성화            |
|      `autoFocus`       |                        `boolean`                        |   `false`   |        화면이 열릴 때 자동으로 포커스 설정         |
|     `autoCorrect`      |                        `boolean`                        |   `true`    |             자동 수정 기능 활성화 여부             |
|  `selectTextOnFocus`   |                        `boolean`                        |   `false`   |      포커스를 얻었을 때 기존 텍스트 자동 선택      |
|   `clearTextOnFocus`   |                        `boolean`                        |   `false`   |    포커스를 얻으면 기존 텍스트 자동 삭제 (IOS)     |
|    `selectionColor`    |                        `string`                         |   `blue`    |                선택된 텍스트의 색상                |
|     `caretHidden`      |                        `boolean`                        |   `false`   |                 커서를 숨길지 여부                 |
|      `textAlign`       |        `"auto" \| "left" \| "right" \| "center"`        |  `"auto"`   |                  텍스트 정렬 방향                  |
|   `onSubmitEditing`    |                      `() => void`                       |             | 키보드에서 엔터(완료) 버튼을 눌렀을 때 실행할 함수 |
|     `blurOnSubmit`     |                        `boolean`                        |   `true`    |      엔터 입력 시 키보드가 자동으로 닫힘 여부      |
|       `onFocus`        |                      `() => void`                       |             |     `TextInput`이 포커스를 받을 때 실행할 함수     |
|        `onBlur`        |                      `() => void`                       |             |    `TextInput`이 포커스를 잃었을 때 실행할 함수    |

## Image

- 이미지를 표시하는 컴포넌트
- uri를 이용한 네트워크 이미지 로드 및 로컬 이미지 지원
- `resizeMode`를 사용하여 이미지 크기 조절 가능
- **네트워크(API통신을 통한 이미지 호출) 및 로컬 이미지** 지원

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
각 확장자에 대해 **타입 모듈을 선언**하는 방법으로 해결하면 된다.<br/>

:::

### Image 속성 정리

|      속성       |                          타입                           |                       설명                        |   기본값    |
| :-------------: | :-----------------------------------------------------: | :-----------------------------------------------: | :---------: |
|    `source`     |        `{ uri: string }` 또는 `require("path")`         |       이미지 소스 지정 (네트워크 또는 로컬)       |  **필수**   |
|  `resizeMode`   | `"cover"` `"contain"` `"stretch"` `"repeat"` `"center"` |               이미지 크기 조절 방식               |  `"cover"`  |
|     `style`     |                 `StyleProp<ImageStyle>`                 |         스타일 적용 (width, height 필수)          | `undefined` |
|    `onLoad`     |                      `() => void`                       |          이미지가 로드될 때 실행할 함수           | `undefined` |
|    `onError`    |                    `(error) => void`                    |          이미지 로드 실패 시 실행할 함수          | `undefined` |
|  `onLoadStart`  |                      `() => void`                       |          이미지 로드 시작 시 실행할 함수          | `undefined` |
|   `onLoadEnd`   |                      `() => void`                       |          이미지 로드 완료 후 실행할 함수          | `undefined` |
|  `onProgress`   |                    `(event) => void`                    |         로드 중인 이미지의 진행 상태 반환         | `undefined` |
| `fadeDuration`  |                        `number`                         | Android에서 이미지가 로드될 때의 페이드 효과 (ms) |    `300`    |
| `defaultSource` |                  `ImageSourcePropType`                  |       로드되기 전 표시할 기본 이미지 (iOS)        | `undefined` |
|  `blurRadius`   |                        `number`                         |       블러 효과 적용 (숫자가 클수록 흐려짐)       |     `0`     |
|   `tintColor`   |                        `string`                         |               이미지 색상 필터 적용               | `undefined` |

---

- resizeMode 속성 값 설명

|    값     |                          설명                           |
| :-------: | :-----------------------------------------------------: |
|  `cover`  |  원본 비율을 유지하면서 컨테이너를 채움 (잘릴 수 있음)  |
| `contain` | 원본 비율을 유지하면서 컨테이너 내에 맞춤 (잘리지 않음) |
| `stretch` |          원본 비율을 무시하고 컨테이너에 맞춤           |
| `center`  |             원본 크기를 유지하며 중앙 정렬              |
| `repeat`  |           이미지가 반복되도록 설정 (iOS only)           |

## ImageBackground

- 이미지를 배경으로 설정할 때 사용하는 컴포넌트
- Image와 다르게 `children`을 포함 가능
- Image와 같이 `resizeMode`를 사용하여 이미지 크기 조절 가능

```tsx title="App.tsx"
import { ImageBackground, SafeAreaView, Text } from "react-native";
import cat from "./assets/cat.jpg";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ImageBackground source={cat} style={{ flex: 1 }}>
        <Text style={{ color: "yellow", fontSize: 30 }}>Cat is Cute</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}
```

```tsx title="src/types/image.d.ts"
declare module "*.jpg";
```

![Image](https://github.com/user-attachments/assets/84952cd8-0055-4312-b795-7e17ebe9aeb0)

:::note

`<Image>`태그와 다르게 `<ImageBackground>`태그는 배경으로 사용을 하며,<br/>
하위 태그에 다른 태그를 사용가능하다.<br/>

Image에서 작성된 속성과 동일하게 사용할 수 있다.<br/>

:::

## TouchableWithoutFeedback

- 터치 이벤트를 감지하지만, 기본적인 피드백(애니메이션 효과 등)은 제공하지 않는 컴포넌트
- **키보드 숨기기**, **모달 외부 클릭 감지** 등에 유용하게 사용

```tsx title="App.tsx"
import {
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        onPress={() => console.log("이미지 외부 클릭!")}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableWithoutFeedback onPress={() => console.log("이미지 클릭!")}>
            <Image
              source={require("./assets/cat.jpg")}
              style={{ width: "50%", height: "50%" }}
            />
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/c51b2bb1-006a-4ef9-884e-af04856f166b)

:::note

이미지를 클릭할 경우, `이미지 클릭!`이 출력,<br/>
이미지 밖을 클릭할 경우, `이미지 외부 클릭!`이 출력된다.<br/>

`TouchableWithoutFeedback`을 이용하여 이벤트를 처리할 영역마다 감싸주면 된다.<br/>

:::

:::info

```tsx title="App.tsx"
import { useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Text,
} from "react-native";

export default function App() {
  const [text, setText] = useState<string>("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TouchableWithoutFeedback>
            <TextInput
              placeholder="값 입력"
              onChangeText={(e) => setText(e)}
              style={{
                width: "50%",
                borderWidth: 2,
                borderColor: "#3498db",
                borderRadius: 8,
              }}
            />
          </TouchableWithoutFeedback>
          <Text>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/2f2a8371-94a5-4396-be0c-78191590af01)

TextInput을 제외한 나머지 영역을 TouchableWithoutFeedback으로 감싼 후,<br/>
onPress에 `Keyboard.dismiss`를 설정하면,<br/>
사용자가 TextInput 외부를 터치할 때 키보드가 자동으로 닫힌다.

단, TouchableWithoutFeedback으로 감싸더라도 내부 요소(TextInput)가<br/>
터치 이벤트를 계속 받을 수 있도록 accessible={false} 를 추가하는 것이 좋다.<br/>

:::

### TouchableWithoutFeedback 속성 정리

|           속성명            |               타입               |   기본값    |                                     설명                                      |
| :-------------------------: | :------------------------------: | :---------: | :---------------------------------------------------------------------------: |
|          `onPress`          |           `() => void`           |             |                        터치 이벤트 발생 시 실행할 함수                        |
|        `accessible`         |            `boolean`             |   `true`    | `false`로 설정하면 내부 요소가 접근성 요소로 인식되지 않음 (이벤트 방해 방지) |
|         `disabled`          |            `boolean`             |   `false`   |                      `true`이면 터치 이벤트가 비활성화됨                      |
|          `hitSlop`          |  `{ top, left, bottom, right }`  | `undefined` |                     터치 영역을 확장하거나 축소할 수 있음                     |
|         `onPressIn`         |           `() => void`           |             |                        터치가 시작될 때 실행되는 함수                         |
|        `onPressOut`         |           `() => void`           |             |                        터치가 끝났을 때 실행되는 함수                         |
| `keyboardShouldPersistTaps` | `"always"` `"handled"` `"never"` |  `"never"`  |                         터치 시 키보드 유지 여부 설정                         |

## Modal

- React Native에서 화면 위에 새로운 뷰를 띄우는 컴포넌트
- 팝업, 다이얼로그, 알림창 등을 만들 때 사용

```tsx title="App.tsx"
import { useState } from "react";
import {
  Modal,
  View,
  Image,
  Button,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Button title="모달 열기" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.5)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableWithoutFeedback>
              <Image
                source={require("./assets/cat.jpg")}
                style={{ width: "50%", height: "50%" }}
              />
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/b604bab9-a4de-4bce-acf8-f80148522955)

:::note

Modal의 `열림/닫힘`을 관리하기 위해 `useState`를 사용한다.<br/>
Modal은 React Native의 **최상의 뷰에서 동작하는 독립적인 컴포넌트**이기 때문에<br/>
Button과 같은 위치에 코드를 작성해도 동작에 문제가 없다.<br/>

Modal이 열린 후, Image영역 외의 배경을 클릭하면 Modal이 닫히도록 `TouchableWithoutFeedback`을 사용하였다.<br/>
이때, TouchableWithoutFeedback을 중첩하여 이미지 클릭 시에는 닫히지 않도록 처리했다.

:::

### Modal 속성 정리

|       속성명        |                             타입                              |    기본값    |                      설명                      |
| :-----------------: | :-----------------------------------------------------------: | :----------: | :--------------------------------------------: |
|      `visible`      |                           `boolean`                           |   `false`    |                 모달 표시 여부                 |
|   `animationType`   |                  `"none"` `"slide"` `"fade"`                  |    `none`    |         모달이 열릴 때 애니메이션 효과         |
|    `transparent`    |                           `boolean`                           |   `false`    |           모달 배경을 투명하게 설정            |
|  `onRequestClose`   |                         `() => void`                          |              | 안드로이드에서 뒤로 가기 버튼을 눌렀을 때 실행 |
| `presentationStyle` | `"fullScreen"` `"pageSheet"` `"formSheet"` `"overFullScreen"` | `fullScreen` |            iOS에서 모달 스타일 지정            |

## ActivityIndicator

- 로딩 상태를 표시하는 기본적인 UI 컴포넌트
- **실제 로딩을 표현하는 것이 아닌 시각적인 피드백만 제공**

```tsx title="App.tsx"
import { useState } from "react";
import { ActivityIndicator, View, Button } from "react-native";

export default function App() {
  const [loading, setLoading] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <View style={{ flexDirection: "row", gap: 20 }}>
        <Button title="로딩 시작" onPress={() => setLoading(true)} />
        <Button title="로딩 종료" onPress={() => setLoading(false)} />
      </View>
      {loading && <ActivityIndicator size={100} color="pink" />}
    </View>
  );
}
```

![Image](https://github.com/user-attachments/assets/266b03d8-2f36-4365-9d80-875353fd2b7d)

:::note

위의 실행 화면과 같이 사용자에게 로딩 중임을 시각적으로 전달한다.<br/>
따라서, 데이터 로딩을 표현해야할 경우 `useState` 등을 활용하여 로딩 상태를 관리하면서 표시해야 한다.<br/>

:::

### ActivityIndicator 속성 정리

|       속성명       | 타입                              | 기본값    | 설명                                 |
| :----------------: | --------------------------------- | --------- | ------------------------------------ |
|    `animating`     | `boolean`                         | `true`    | `true`일 경우 애니메이션 활성화      |
|       `size`       | `"small"` `"large"` 혹은 `number` | `"small"` | 인디케이터 크기 설정                 |
|      `color`       | `string`                          | `gray`    | 인디케이터 색상 지정                 |
| `hidesWhenStopped` | `boolean`                         | `true`    | `animating=false`일 때 자동으로 숨김 |

## Animated

- React Native에서 애니메이션을 구현하는 핵심 API

```tsx title="App.tsx"
import { useEffect, useRef, useState } from "react";
import { Animated, Text, SafeAreaView, Button, View } from "react-native";

export default function App() {
  const [state, setState] = useState<boolean>(false);
  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    fade.setValue(0);
    slide.setValue(100);

    Animated.timing(fade, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(slide, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [state]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
    >
      <View>
        <Button title="에니메이션 실행" onPress={() => setState(!state)} />
      </View>
      <Animated.View style={{ opacity: fade }}>
        <Text style={{ fontSize: 20 }}>Fade In</Text>
      </Animated.View>
      <Animated.View style={{ transform: [{ translateY: slide }] }}>
        <Text style={{ fontSize: 20 }}>Slide Up</Text>
      </Animated.View>
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/c5756da7-0b26-4f83-8190-90278f482765)

:::note

fade, slide는 useRef를 통해 `Animated.value` 객체를 생성하고 각 애니메이션을 위한 초기값을 설정한다.<br/>
useEffect를 통해 각 애니메이션을 어떻게 표현할지 정의한다.<br/>

```tsx
Animated.timing(Animated.value로 생성된 객체, {
  // 애니메이션에 대한 정의
  toValue: 변화시킬 최종 값,
  duration: 변화 시간(ms),
  useNativeDriver: 네이티브 드라이버 사용 여부(true),
}).start(); // 애니메이션 시작
```

각 속성에 대한 정의를 하였으면, 해당 컴포넌트에 ref값을 넣는다.<br/>

```tsx
// 예시
<Animated.View style={{ opacity: fade }}>
<Animated.View style={{ transform: [{ translateY: slide }] }}>
```

:::

### Animated 속성 정리

#### Animated.Value 속성

|       속성명       |            타입             |     기본값     |                   설명                    |
| :----------------: | :-------------------------: | :------------: | :---------------------------------------: |
|  `Animated.Value`  |          `number`           |      `0`       |          애니메이션 값 초기 설정          |
| `Animated.ValueXY` | `{ x: number, y: number }`  | `{x: 0, y: 0}` |           2D 애니메이션 값 설정           |
|     `setValue`     |      `(value: number)`      |                |         애니메이션 값을 즉시 변경         |
|   `addListener`    |        `(callback)`         |                |    값이 변경될 때마다 실행할 콜백 추가    |
|   `interpolate`    | `(inputRange, outputRange)` |                | 값의 범위를 변환 (예: `0~1` → `0~360deg`) |

#### Animated API (애니메이션 실행 메서드)

|       속성명        |                           설명                            |
| :-----------------: | :-------------------------------------------------------: |
|  `Animated.timing`  | 일정 시간 동안 값이 변경되는 애니메이션 (선형 애니메이션) |
|  `Animated.spring`  |          스프링 효과를 사용하여 자연스럽게 변화           |
|  `Animated.decay`   |         초기 속도를 설정하고 점점 느려지면서 정지         |
| `Animated.sequence` |          여러 개의 애니메이션을 순차적으로 실행           |
| `Animated.parallel` |            여러 개의 애니메이션을 동시에 실행             |
|   `Animated.loop`   |                  애니메이션을 무한 반복                   |

#### Animated.timing 속성

|      속성명       |   타입    |           기본값            |                         설명                          |
| :---------------: | :-------: | :-------------------------: | :---------------------------------------------------: |
|     `toValue`     | `number`  |                             |              애니메이션이 도달할 최종 값              |
|    `duration`     | `number`  |            `500`            |               애니메이션 지속 시간(ms)                |
| `useNativeDriver` | `boolean` |           `false`           | `true` 설정 시 네이티브 스레드에서 실행 (성능 최적화) |
|      `delay`      | `number`  |             `0`             |           애니메이션 시작 전 대기 시간(ms)            |
|     `easing`      | `Easing`  | `Easing.inOut(Easing.ease)` |               애니메이션 속도 곡선 조절               |

#### Animated.View 적용 가능한 스타일 속성

|            속성명             |                    설명                     |
| :---------------------------: | :-----------------------------------------: |
|           `opacity`           | 투명도 조절 (`0 = 완전 투명`, `1 = 불투명`) |
| `transform: [{ translateX }]` |                X축으로 이동                 |
| `transform: [{ translateY }]` |                Y축으로 이동                 |
|   `transform: [{ scale }]`    |               크기 확대/축소                |
|   `transform: [{ rotate }]`   |           회전 (`0deg ~ 360deg`)            |

## Switch

- (On/Off)를 전환할 수 있는 토글 버튼

```tsx title="App.tsx"
import { useState } from "react";
import { Switch, Text, SafeAreaView } from "react-native";

export default function App() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isEnabled ? "black" : "white",
        marginTop: 30,
      }}
    >
      <Text style={{ color: isEnabled ? "white" : "black" }}>
        스위치 상태: {isEnabled ? "ON" : "OFF"}
      </Text>
      <Switch
        value={isEnabled}
        onValueChange={() => setIsEnabled(!isEnabled)}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
      />
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/704c8c8f-b068-4e37-b5d8-e1ff11909d20)

:::note

Switch의 value속성에 현재 상태를 포함한 boolean값을 전달 한다.<br/>
`onValueChange`를 통해 토글 버튼을 눌렀을 때, 값을 어떻게 변화시킬지에 대한 함수를 넣는다.<br/>
`trackColor`에 `true`와 `false`일 경우 토글아이콘의 배경에 대한 색상을 정의한다.<br/>
`thumbColor`에는 토글의 버튼에 대한 색상을 정의한다.<br/>

:::

### Switch 속성 정리

|        속성명         |               타입                | 기본값  |               설명                |
| :-------------------: | :-------------------------------: | :-----: | :-------------------------------: |
|        `value`        |             `boolean`             | `false` |        현재 Switch의 상태         |
|    `onValueChange`    |    `(value: boolean) => void`     |         |    상태 변경 시 호출되는 함수     |
|      `disabled`       |             `boolean`             | `false` |    `true`로 설정하면 비활성화     |
|     `trackColor`      | `{ false: string, true: string }` |  `{}`   |       스위치 배경 색상 설정       |
|     `thumbColor`      |             `string`              |  `""`   |    버튼(동그란 부분) 색상 설정    |
| `ios_backgroundColor` |             `string`              |  `""`   | iOS에서 비활성화된 배경 색상 설정 |

## Slider

- 사용자가 드래그하여 값을 조정할 수 있는 입력 컨트롤
- `음량 조절`, `밝기 조절` 등 연속적인 값 조절이 필요한 경우에 사용

```bash
// slider 설치
npm install @react-native-community/slider
```

```tsx title="App.tsx"
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { Text, SafeAreaView } from "react-native";

export default function App() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <Text style={{ fontSize: 30 }}>슬라이더 값: {sliderValue}</Text>
      <Slider
        style={{ width: 200, height: 50 }}
        minimumValue={0}
        maximumValue={100}
        step={5}
        value={sliderValue}
        onValueChange={(e) => setSliderValue(e)}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="gray"
        thumbTintColor="skyblue"
      />
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/4b32cef2-d572-4c97-86b9-10910279759a)

### Slider 속성 정리

|         속성명          |           타입            | 기본값  |                   설명                    |
| :---------------------: | :-----------------------: | :-----: | :---------------------------------------: |
|         `value`         |         `number`          |         |              현재 Slider 값               |
|     `onValueChange`     | `(value: number) => void` |         |       값이 변경될 때 호출되는 함수        |
|     `minimumValue`      |         `number`          |   `0`   |                  최소 값                  |
|     `maximumValue`      |         `number`          |   `1`   |                  최대 값                  |
|         `step`          |         `number`          |         | 값이 증가하는 단위 (예: `1`이면 1씩 증가) |
| `minimumTrackTintColor` |         `string`          | `blue`  |             진행된 부분 색상              |
| `maximumTrackTintColor` |         `string`          | `gray`  |          진행되지 않은 부분 색상          |
|    `thumbTintColor`     |         `string`          | `white` |            슬라이더 핸들 색상             |
|       `disabled`        |         `boolean`         | `false` |    `true`로 설정하면 슬라이더 비활성화    |
