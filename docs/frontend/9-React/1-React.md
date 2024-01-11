# React

## React란?

- meta에서 개발되었으며 가장 인기있는 자바스크립트 라이브러리 중 하나
- 가상 DOM을 사용하여 애플리케이션 성능을 최적화하고 효율적으로 유지
- Component 기반으로 작업하기 때문에 코드의 재사용성이 높다

## React의 특징

- 빠르고 효과적인 방식으로 복잡한 UI를 구성하는 것
- 가상 DOM을 사용해 화면을 빠르게 업데이트하고, 컴포넌트 기반 아키텍처를 채택하여 코드의 재사용성을 높다
- 다른 라이브러리나 프레임워크와 조합하여 사용할 수 있는 유연성을 가지고 있다
- 다양한 개발 툴과 커뮤니티 지원이 풍부

## React 라이브러리와 Babel

- React어플리케이션을 사용할 수 있게하는 라이브러리와 도구

```js
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
// React 라이브러리의 개발 버전을 로드
// React 핵심기능 및 개발에 사용

<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
// React DOM 라이브러리의 개발 버전을 로드
// React Component를 정의하고 상태관리

<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
// Babel Standalone 라이브러리의 최소화된 버전을 로드
// JSX문법을 JS로 변환하는데 사용

<script type="text/babel">
{/* "text/babel"은 스크립트 태그 내부의 코드는 Babel이 해석하고 트랜스파일할 JavaScript 코드를 의미*/}
{/*React와 JSX코드를 사용*/}
</script>
```

<details>
<summary>React 간단한 실습 1</summary>
<div markdown="1">

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title></title>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>

  <body>
    <h1>React 연습</h1>
    <p>버튼을 눌러주세요!</p>
    <div id="root"></div>
    <script type="text/babel">
      const element = React.createElement;

      class Greeting extends React.Component {
        constructor(props) {
          super(props);
          this.state = { bool: false };
        }

        render() {
          if (this.state.bool) {
            return <strong> 만나서 반갑습니다! </strong>;
          }

          return (
            <button onClick={() => this.setState({ bool: true })}>
              Touch This!!!
            </button>
          );
        }
      }

      const domContainer = document.querySelector("#root");
      const root = ReactDOM.createRoot(domContainer);
      root.render(element(Greeting));
    </script>
  </body>
</html>
```

:::note
버튼을 눌렀을 경우, 화면에 `만나서 반갑습니다!`라는 문구를 띄우는 코드이다.<br/>
`<head>`태그에 React라이브러리와 Babel을 선언한다.<br/>

```js
const element = React.createElement;
```

element는 React라이브러리에서 제공하는 함수 중 하나이며, **가상 DOM 트리의 노드**를 나타낸다.<br/>

```js
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bool: false };
  }

  render() {
    if (this.state.bool) {
      return <strong> 만나서 반갑습니다! </strong>;
    }

    return (
      <button onClick={() => this.setState({ bool: true })}>
        Touch This!!!
      </button>
    );
  }
}
```

Greeting의 클래스는 React의 Component 클래스를 정의한다.<br/>
Greeting은 React.Component의 클래스를 상속받는다.<br/>
render()는 Component의 랜더링 메소드이다.<br/>
JSX문법이 사용하기 때문에 return에 ()를 이용하여 HTML태그를 이용하여 반환한다.<br/>

```js
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(element(Greeting));
```

domContainer는 id가 root인 태그를 지목한다.<br/>
root는 ReactDOM.createRoot(domContainer)를 통해 React 애플리케이션을 렌더링할 DOM요소를 지정<br/>
root.render(element(Greeting))을 통해 Greeting Component를 렌더링 한다.

:::

</div>
</details>

<details>
<summary>React 간단한 실습2</summary>
<div markdown="1">

```html
<html>
  <head>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>

  <body>
    <div id="root"></div>

    <script type="text/babel">
      function Header() {
        return (
          <header>
            <h1>H1</h1>
            <nav>
              <ul>
                <li>li1</li>
                <li>li2</li>
              </ul>
            </nav>
          </header>
        );
      }

      function Main() {
        return (
          <main>
            <h2>H2</h2>
            <p>Greeting</p>
            <ul>
              <li>1. Hello World!</li>
              <li>2. Hello World!</li>
              <li>3. Hello World!</li>
            </ul>
          </main>
        );
      }

      function Footer() {
        return (
          <footer>
            <h2>Hello Footer</h2>
            <address>I live in Seoul</address>
          </footer>
        );
      }

      function Body() {
        return (
          <div>
            {Header()}
            {Main()}
            {Footer()}
            <Header />
            <Main />
            <Footer />
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
          </div>
        );
      }

      const domContainer = document.querySelector("#root");
      const root = ReactDOM.createRoot(domContainer);
      root.render(Body());
      // root.render(<Body/>);
    </script>
  </body>
</html>
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/6eeac401-5958-4773-8330-53eb3c3d715b)

:::note

`Header()`, `Main()`, `Footer()`, `Body()`전부 **React 함수형 컴포넌트** 이다.<br/>
Body 함수에서는 컴포넌트를 호출하는 방법은 크게 3가지가 존재한다.<br/>
1. `{함수()}`
2. `<함수/>`, 
3. `<함수><함수/>`

:::

</div>
</details>
