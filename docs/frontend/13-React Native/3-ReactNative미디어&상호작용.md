# React Native Media & interactive Components

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

<!-- ## KeyBoardAvoidingView

- 키보드가 나타날 때 입력 필드가 가려지지 않도록 자동으로 조정하는 컴포넌트
- 주로 `TextInput`과 함께 사용되며, **입력창이 키보드에 의해 가려지는 문제를 해결**
- IOS와 Android에서 동작 방식이 다르기 때문에 별도 설정

```tsx title="App.tsx"

``` -->

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
