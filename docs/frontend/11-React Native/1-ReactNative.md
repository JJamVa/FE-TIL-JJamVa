# React Native

## React Native란?

- JavaScript와 React를 사용해 `iOS`와 `Android` 같은 모바일 플랫폼용 네이티브 애플리케이션을 개발할 수 있는 오픈소스 프레임워크
- 웹 브라우저가 아닌 모바일 기기에서 직접 실행되는 네이티브 앱

## React Native의 특징

- JavaScript로 IOS와 Android앱을 동시에 생성 가능
- 네이티브 컴포넌트로 직접 렌더링
  - 웹뷰 기반이 아닌 네이티브 UI 컴포넌트를 직접 사용해 렌더링
- 풍부한 라이브러리와 플러그인 지원
  - 오픈소스 라이브러리(네비게이션, 지도, 카메라 기능)을 쉽게 추가 가능
- 네이티브 모듈 확장성
  - Java, Swift로 직접 네이티브 모듈 작성 및 통합 가능
- 빠른 개발 속도
  - 핫 리로딩(Hot Reloading)과 Fast Refresh로 실시간 코드 반영

## React와 React Native의 차이

|                        |                 **React**                 |                              **React Native**                               |
| :--------------------: | :---------------------------------------: | :-------------------------------------------------------------------------: |
|     **개발 대상**      |      웹 애플리케이션 (브라우저 기반)      |                     모바일 애플리케이션 (iOS, Android)                      |
|    **렌더링 방식**     |    가상 DOM을 사용해 HTML 요소 렌더링     |             네이티브 컴포넌트를 렌더링하여 실제 모바일 UI 생성              |
|      **스타일링**      |            CSS, CSS-in-JS 사용            |                `StyleSheet`을 통한 JavaScript 기반 스타일링                 |
|     **네비게이션**     | `react-router-dom`을 통한 URL 기반 라우팅 |              `react-navigation`을 통한 스택/탭 기반 네비게이션              |
| **네이티브 기능 접근** | 브라우저 API (`localStorage`, `fetch` 등) |             카메라, GPS, 센서 등 모바일 하드웨어 기능 접근 가능             |
|     **개발 환경**      |      웹 브라우저에서 개발 및 디버깅       |                   에뮬레이터/실제 기기에서 테스트 및 개발                   |
|     **배포 방식**      |     웹 서버에 배포 후 브라우저로 접근     |            앱 스토어(Google Play, App Store)에 배포 후 다운로드             |
|   **코드 재사용성**    |           웹 앱에서만 사용 가능           | iOS와 Android 간 코드 재사용 가능<br/>React Native for Web으로 웹 지원 가능 |
|      **퍼포먼스**      |        브라우저 렌더링 성능에 의존        |            네이티브 컴포넌트로 렌더링되어 더 나은 퍼포먼스 제공             |

:::tip

**React Native의 단점**

- 일부 복잡한 네이티브 기능은 Java 혹은 Swift로 개발을 해야한다.
- IOS와 Android에서 다르게 동작할 수 있기 때문에 디버깅이 필요
- 고성능 어플리케이션(게임, 고해상도 그래픽)은 순수 네이티브보다 성능이 떨어질 수 있다.

:::

## React Native 설치 방법

### React Native 개발을 위한 필수 설치 항목

- [Node](https://nodejs.org/)
- [Npm](https://www.npmjs.com/get-npm)
- [JDK(Java Development Kit)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Android Studio](https://developer.android.com/studio) (모바일 기기 대체용은 Expo Go 앱 다운로드)
- [Python(React Native CLI 전용)](https://www.python.org/downloads/)
- [Xcode(React Native CLI 전용 및 Mac 전용)](https://apps.apple.com/app/xcode/id497799835?mt=12)

:::note

JDK, Andorid Studio는 환경 변수 설정 필수

```bash title="JDK 환경 변수"
// 환경 변수 => 시스템 변수 => 새로 만들기 => JAVA_HOME 생성
C:\Program Files\Java\jdk-23
// jdk 버전에 맞게 작성하기 (현재 최신 버전: JDK 23)

// 환경 변수 => 시스템 변수 => Path 편집 => 새로운 추가
%JAVA_HOME%\bin
```

```bash title="adb 환경 변수"
// 환경 변수 => 시스템 변수 => Path 편집 => 새로운 추가
C:\Users\<사용자 이름>\AppData\Local\Android\Sdk\platform-tools
```

```bash title="ANDROID_HOME 환경 변수"
// 환경 변수 => 시스템 변수 => 새로 만들기 => ANDROID_HOME 생성
C:\Users\<사용자 이름>\AppData\Local\Android\Sdk
```

```bash title="PATH변수 추가"
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
```

:::caution

환경 변수가 저장이 안될 경우, **CMD를 관리자 권한으로 실행 후**

```bash
setx 변수이름 "변수 값" /M
ex) setx JAVA_HOME "C:\Program Files\Java\jdk-23" /M
```

위와 같이 입력 /M은 **시스템 변수**, 없을 경우 **사용자 변수**
:::

---

### Expo

- React Native 앱 개발을 더 쉽고 빠르게 시작할 수 있도록 도와주는 오픈소스 플랫폼

#### Expo 실행 방법

1. 프로젝트를 생성할 경로 설정
2. Expo CLI 및 react native 프로젝트 설치

```bash
npm install -g expo-cli
npx create-expo-app <프로젝트 이름> // 일반
npx create-expo-app <프로젝트 이름> --template blank-typescript // 타입스크립트
```

3. **Expo Go** 혹은 **Android Studio** 에뮬레이터 실행
4. 프로젝트를 실행

```bash
npx expo start
```

5. 실행할 방법 선택

```md title="Expo 목록"
› Press a │ open Android // 안드로이드 앱으로 실행
› Press w │ open web // 웹 브라우저로 실행
› Press j │ open debugger // 디버거 열기
› Press r │ reload app // 앱 새로고침
› Press m │ toggle menu // Expo 토글 메뉴
› shift+m │ more tools // 추가 도구 보기
› Press o │ open project code in your editor // 프로젝트 코드를 에디터에서 열기
› Press ? │ show all commands // 모든 명령어 보기
```

- Android Studio 에뮬레이터 켰을 경우, `a`를 눌러 실행

6. 실행 결과 확인

- Android Studio 에뮬레이터 결과 화면

![Image](https://github.com/user-attachments/assets/03c74735-e853-4b82-9f1a-da30031225a4)

---

### React Native CLI

- 네이티브 코드(Android/iOS)를 직접 수정하거나 고급 기능 개발, 앱 최적화가 필요할 때 사용하는 도구

#### React Native CLI 실행 방법

1. 프로젝트를 생성할 경로 설정
2. React Native CLI 프로젝트 설치

```bash
npx @react-native-community/cli init <프로젝트 이름>
npx @react-native-community/cli init <프로젝트 이름> --template react-native-template-typescript
```

3. **Android Studio** 에뮬레이터 실행

4. vscode 터미널(CMD prompt)에 연결 확인

```bash
adb version

/* 출력
Android Debug Bridge version 1.0.41
Version X.X.X
Installed as C:\Users\<사용자 이름>\AppData\Local\Android\Sdk\platform-tools\adb.exe
*/
```

5. adb 연결이 확인된 후, 프로젝트 실행

```bash
npx npx react-native run-android
```

- 실행 후, Node(`Metro`)가 뜨는 것을 확인

![Image](https://github.com/user-attachments/assets/5ee7ae01-5f7c-440c-82a5-e4bb61aa4ab4)

- Node(`Metro`)가 뜬 후, Android Studio 에뮬레이터가 동작하는 것을 확인

![Image](https://github.com/user-attachments/assets/767beadd-2da7-4ae2-a012-f150db087901)

## Expo vs React Native CLI

|                    | **Expo**                                    | **React Native CLI**                                   |
| :----------------: | :------------------------------------------ | :----------------------------------------------------- |
|    설치 및 설정    | Expo CLI 설치 후 즉시 사용 가능             | Android Studio, Xcode, JDK, 환경 변수 설정 필요        |
|     개발 속도      | 빠름 (설정 없이 바로 개발 가능)             | 초기 설정이 복잡하지만 최적화 가능                     |
| 네이티브 코드 수정 | 불가능 (Expo가 미리 빌드한 라이브러리 사용) | 가능 (Java, Swift, Kotlin, Objective-C 직접 수정 가능) |
|    빌드 및 배포    | Expo Go 앱에서 테스트 가능                  | Xcode, Android Studio에서 직접 빌드 필요               |
|  라이브러리 지원   | Expo가 공식 지원하는 라이브러리만 사용 가능 | 모든 React Native 라이브러리 사용 가능                 |
|      앱 크기       | 더 큼 (Expo SDK 포함)                       | 더 작음 (필요한 라이브러리만 포함 가능)                |
|    OTA 업데이트    | 지원 (`expo publish` 사용)                  | 기본적으로 지원 안 함 (앱 업데이트 필요)               |
| 네이티브 모듈 추가 | 불가능 (EAS Build 사용 시 일부 가능)        | 네이티브 코드 직접 추가 가능                           |
|     배포 방식      | `expo build` 또는 `eas build`로 간편 배포   | Xcode/Android Studio에서 직접 빌드 필요                |
|   사용 추천 대상   | 빠르게 MVP 또는 간단한 앱을 만들 때 적합    | 네이티브 기능을 직접 수정하거나 최적화가 필요할 때     |
