# Native API

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

## Alert

- 다이얼로그 창을 띄워 사용자에게 메세지를 전달하는 기능을 제공

```tsx title="App.tsx"
import { Alert, Button, SafeAreaView } from "react-native";

export default function App() {
  const showAlert = () => {
    Alert.alert("경고", "이 작업을 수행하시겠습니까?", [
      {
        text: "취소",
        style: "cancel",
        onPress: () => console.log("취소 클릭"),
      },
      {
        text: "삭제",
        style: "destructive",
        onPress: () => console.log("삭제 클릭"),
      },
      {
        text: "확인",
        style: "default",
        onPress: () => console.log("확인 클릭"),
      },
    ]);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Button title="알림 띄우기" onPress={showAlert} />
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/e139e6ed-1ad7-4816-b99a-e04a4e02eeed)

:::note

Alert 컴포넌트를 통해 사용자에게 알람창을 띄운다.<br/>
showAlert를 통해 Alert를 어떻게 동작할 지 정의를 한다.<br/>

- Alert의 alert 메소드

```ts
    Alert.alert(알림창 제목, 알림창 내용, [
      {
        text: 버튼 이름,
        style: 버튼 종류,
        onPress: 버튼 누른 후, 동작,
      },
      // 최대 3개까지 권장
      // 3개이상일 경우 IOS는 무시
      // Android는 UI가 복잡해짐
    ]);
```

- style에 사용가능한 속성

|    style값    |                       설명                        |
| :-----------: | :-----------------------------------------------: |
|   "default"   |             기본 버튼 스타일 (기본값)             |
|   "cancel"    |     취소 버튼 스타일 (IOS에서는 굵게 강조됨)      |
| "destructive" | 위험한 작업 (삭제) 시 사용, iOS에서는 빨간색 표시 |

:::

## Vibration

- 기기가 진동할 수 있도록 제어하는 기능을 제공
- Android에서는 실행되지만, IOS에서는 일부 제한이 있음

```tsx title="App.tsx"
import { Vibration, Button, SafeAreaView } from "react-native";

export default function App() {
  const vibrate = () => {
    Vibration.vibrate();
  };

  const vibratePattern = () => {
    Vibration.vibrate([500, 1000], true);
  };

  const cancelVibration = () => {
    Vibration.cancel();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
    >
      <Button title="진동 실행" onPress={vibrate} />
      <Button title="패턴 진동 실행" onPress={vibratePattern} />
      <Button title="진동 멈추기" onPress={cancelVibration} />
    </SafeAreaView>
  );
}
```

![Image](https://github.com/user-attachments/assets/e5c3c352-0d61-4c75-b0fc-6257d00cb09b)

:::note

코드 실행은 `Android Expo Go`로 실행하였다.<br/>
`진동 실행`버튼은 Vibrate.vibrate()가 실행되며, 약 400ms로 한번만 진동이 된다.<br/>

`패턴 진동 실행`은 첫번째 인자 값에 반복 패턴을 작성하면 된다.<br/>
첫 번째 인자값은 **짝수번째 인덱스는 `대기 시간`**이며, **홀수번째 인덱스는 `진동 시간`**이다.<br/>
두 번째 인자값은 **무한 반복 여부**를 표현한다.<br/>

`진동 멈추기`는 Vibrate.cancle()로 실행중인 진동을 멈춘다.<br/>

:::
