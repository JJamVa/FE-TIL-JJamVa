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
- `resizeMode`를 사용하여 이미지 크기 조절 가능
- **네트워크(API통신을 통한 이미지 호출) 및 로컬 이미지** 지원

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

## ScrollView

- `ScrollView`는 화면보다 콘텐츠가 클 경우 스크롤이 가능하도록 해주는 컨테이너
- View와 비슷하지만, 내부 콘텐츠가 화면을 넘어갈 경우 자동으로 스크롤을 지원
- 세로 및 가로 스크롤 모두 가능
- `FlatList`와 달리 모든 자식 요소를 한 번에 렌더링하기 때문에, 많은 데이터가 있을 경우 성능 문제가 발생할 수 있음

```tsx title="App.tsx"
import { ScrollView, Text, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {Array.from({ length: 30 }).map((_, index) => (
          <Text key={index} style={{ fontSize: 18, marginVertical: 10 }}>
            {index + 1}번째: Item
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/82b90785-f1db-4216-a070-ce870b9684e2)

:::note

ScrollView를 이용하여 위아래 스크롤에 대한 View를 만들었다.<br/>
만약 좌우 스크롤을 원하는 경우, ScrollView의 속성 중 <br/>
`horizontal`과 `contentContainerStyle`속성에 `flexDirection: "row"`를 적용하면 된다.<br/>

```tsx title="스크롤 좌우 버전"
import { ScrollView, Text, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        horizontal
        contentContainerStyle={{ flexDirection: "row", padding: 20 }}
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <Text key={index} style={{ fontSize: 18, marginVertical: 10 }}>
            {index + 1}번째: Item
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/327e6b7d-e5c6-429f-9075-3aac7a0acb67)

:::

### ScrollView 속성 정리

|              속성명              |             타입             | 기본값  |                     설명                      |
| :------------------------------: | :--------------------------: | :-----: | :-------------------------------------------: |
|           `horizontal`           |          `boolean`           | `false` |       `true`일 경우 가로 스크롤 활성화        |
|     `contentContainerStyle`      |           `object`           |         |            내부 콘텐츠 스타일 지정            |
|         `scrollEnabled`          |          `boolean`           | `true`  |               스크롤 가능 여부                |
|   `keyboardShouldPersistTaps`    | `never \| always \| handled` | `never` |  키보드가 열린 상태에서 탭 이벤트 처리 방식   |
|  `showsVerticalScrollIndicator`  |          `boolean`           | `true`  |            세로 스크롤바 표시 여부            |
| `showsHorizontalScrollIndicator` |          `boolean`           | `true`  |            가로 스크롤바 표시 여부            |
|            `bounces`             |          `boolean`           | `true`  | iOS에서 스크롤 끝에서 튕기는 효과 활성화 여부 |
|         `overScrollMode`         |  `auto \| always \| never`   | `auto`  |       Android에서 오버스크롤 효과 설정        |
|         `pagingEnabled`          |          `boolean`           | `false` |          스크롤을 페이지 단위로 이동          |
|      `nestedScrollEnabled`       |          `boolean`           | `false` |    안드로이드에서 중첩된 스크롤 허용 여부     |
|            `onScroll`            |      `(event) => void`       |         |              스크롤 이벤트 감지               |
|      `onMomentumScrollEnd`       |      `(event) => void`       |         |        스크롤 애니메이션 종료 시 호출         |
|       `onScrollBeginDrag`        |      `(event) => void`       |         |       사용자가 스크롤을 시작할 때 호출        |
|        `onScrollEndDrag`         |      `(event) => void`       |         |        사용자가 스크롤을 멈출 때 호출         |

## FlatList

- FlatList는 긴 목록의 데이터를 효율적으로 렌더링하는 React Native 컴포넌트
- ScrollView와 다르게 필요한 아이템만 렌더링하여 성능 최적화
- 내부적으로 **가상화 리스트(Virtualized List)** 를 사용하여 불필요한 렌더링을 방지

```tsx title="App.tsx"
import React from "react";
import { FlatList, Text, View, SafeAreaView } from "react-native";

export default function App() {
  const DATA = Array.from({ length: 20 }).map((_, index) => ({
    id: index.toString(),
    title: `Item ${index + 1}`,
  }));

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{ padding: 15, borderBottomWidth: 1, borderColor: "#ddd" }}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
          </View>
        )}
        ListHeaderComponent={<Text>목록 시작!</Text>}
        ListFooterComponent={<Text>목록 끝!</Text>}
      />
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/b1ffd7ad-799d-4425-b3e5-1687f4c815ba)

:::note

FlatList에 `data`에 표현할 배열값을 넣은 후,<br/>
`keyExtractor`을 이용하여 해당 배열의 고유하게 식별할 수 있도록 id값 혹은 문자를 반환한다.<br/>
`renderItem`을 이용하여 해당 배열의 값으로 렌더링할 컴포넌트를 작성한다.<br/>
`ListHeaderComponent`, `ListFooterComponent`를 이용하여 FlatList의 가장 위와 아래에 표현할 컴포넌트를 넣을 수 있다.<br/>

:::

### FlatList 속성 정리

|         속성명          |                     타입                     |               기본값                |                    설명                    |
| :---------------------: | :------------------------------------------: | :---------------------------------: | :----------------------------------------: |
|         `data`          |                 `Array<any>`                 |                `[]`                 |            렌더링할 데이터 배열            |
|      `renderItem`       |      `({ item, index }) => JSX.Element`      |                                     |       개별 아이템을 렌더링하는 함수        |
|     `keyExtractor`      |          `(item, index) => string`           | `(item, index) => index.toString()` |          각 아이템의 고유 키 설정          |
|      `numColumns`       |                   `number`                   |                 `1`                 |      여러 개의 열로 표시할 경우 사용       |
|      `horizontal`       |                  `boolean`                   |               `false`               |              가로 스크롤 여부              |
| `contentContainerStyle` |                   `object`                   |                                     |              내부 스타일 지정              |
|  `ListHeaderComponent`  |                `JSX.Element`                 |                                     |       리스트 상단에 추가할 컴포넌트        |
|  `ListFooterComponent`  |                `JSX.Element`                 |                                     |       리스트 하단에 추가할 컴포넌트        |
|  `ListEmptyComponent`   |                `JSX.Element`                 |                                     |     데이터가 없을 경우 표시할 컴포넌트     |
|     `getItemLayout`     | `(data, index) => { length, offset, index }` |                                     |      아이템의 높이가 일정할 때 최적화      |
|     `onEndReached`      |                 `() => void`                 |                                     | 리스트 끝에 도달했을 때 호출 (무한 스크롤) |
| `onEndReachedThreshold` |                   `number`                   |                `0.1`                |   리스트 끝에서 이벤트 호출 트리거 (0~1)   |
|      `refreshing`       |                  `boolean`                   |               `false`               |             새로고침 상태 여부             |
|       `onRefresh`       |                 `() => void`                 |                                     |         당겨서 새로고침 기능 실행          |

## SectionList

- SectionList는 섹션이 있는 목록을 렌더링하는 React Native 컴포넌트
- FlatList와 비슷하지만, 데이터가 섹션별로 그룹화되어 있음
- data 대신 sections 속성을 사용하며, 각 섹션에는 title(헤더)과 data(목록) 필드가 필요함

```tsx title="App.tsx"
import { SectionList, Text, View, SafeAreaView } from "react-native";

export default function App() {
  const SECTIONS = [
    {
      title: "과일",
      data: ["사과", "바나나", "오렌지"],
    },
    {
      title: "야채",
      data: ["당근", "브로콜리", "시금치"],
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <SectionList
        sections={SECTIONS}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View
            style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ddd" }}
          >
            <Text style={{ fontSize: 18 }}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ backgroundColor: "#f0f0f0", padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/4e12ff37-fdd4-4a9d-af43-3a28a2b1dca0)

:::note

SectionList에는 data란 속성 대신 `sections`라는 속성을 사용<br/>
`sections`속성에는 목록에 사용할 header의 값과 내부 item값을 표현하여 값을 넣는다.<br/>
`keyExtractor`과 `renderItem`은 FlatList와 같이 사용하면 된다.<br/>
반면, SectionList에는 각 목록마다 하위 아이템들을 표현해야된다.<br/>
각 Section마다 표현해야할 아이템의 header 부분을 `renderSectionHeader`라는 속성을 통해,<br/>
header를 표현할 컴포넌트를 렌더링 한다.<br/>

:::

### SectionList 속성 정리

|            속성명             |                  타입                   |               기본값                |                    설명                    |
| :---------------------------: | :-------------------------------------: | :---------------------------------: | :----------------------------------------: |
|          `sections`           | `Array<{ title: string; data: any[] }>` |                `[]`                 |         목록을 그룹화할 섹션 배열          |
|         `renderItem`          |   `({ item, index }) => JSX.Element`    |                                     |     각 섹션의 아이템을 렌더링하는 함수     |
|     `renderSectionHeader`     |     `({ section }) => JSX.Element`      |                                     |      각 섹션의 헤더를 렌더링하는 함수      |
|     `renderSectionFooter`     |     `({ section }) => JSX.Element`      |                                     |      각 섹션의 푸터를 렌더링하는 함수      |
|        `keyExtractor`         |        `(item, index) => string`        | `(item, index) => index.toString()` |          각 아이템의 고유 키 설정          |
| `stickySectionHeadersEnabled` |                `boolean`                |               `true`                |         섹션 헤더를 고정할지 여부          |
|   `ItemSeparatorComponent`    |              `JSX.Element`              |                                     |       아이템 사이의 구분선 컴포넌트        |
|     `ListHeaderComponent`     |              `JSX.Element`              |                                     |          전체 리스트의 헤더 추가           |
|     `ListFooterComponent`     |              `JSX.Element`              |                                     |          전체 리스트의 푸터 추가           |
|        `onEndReached`         |              `() => void`               |                                     | 리스트 끝에 도달했을 때 호출 (무한 스크롤) |
|    `onEndReachedThreshold`    |                `number`                 |                `0.1`                |   리스트 끝에서 이벤트 호출 트리거 (0~1)   |
|         `refreshing`          |                `boolean`                |               `false`               |             새로고침 상태 여부             |
|          `onRefresh`          |              `() => void`               |                                     |         당겨서 새로고침 기능 실행          |

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

## Pressable

## Modal

## ActivityIndicator

## Animated
