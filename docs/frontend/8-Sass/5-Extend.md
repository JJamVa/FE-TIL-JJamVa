# Extend

## Extend란?

- 요소들끼리 스타일 코드가 중복된 경우에 사용
- 이미 스타일이 작성된 선택자의 클래스를 extend하거나 , `%`를 사용해서 따로 스타일을 정의한 후 extend하여 원하는 선택자에게 스타일을 적용

:::info

### mixin과 extend의 차이점

- `mixin`: (관계 없는) 선택자에서 다른 스타일을 적용할 때 사용
- `extend`: 관계 있는 선택자들의 동일한 소스코드 적용시 사용

:::

## Extend하는 방법

### class이름으로 가져오기

- 기존에 작성한 클래스 내에 코드를 그대로 복사하려는 영역에 **@extend와 클래스 명**을 작성하면, 클래스에 있는 **코드 전체가 extend** 된다.

```scss title="Sass코드"
.one {
  background-image: ("./이미지주소");
  background-position: 0px 0px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.two {
  @extend .one;
}
```

```css title="Sass 컴파일 후 CSS코드"
.one,
.two {
  background-image: ("./이미지주소");
  background-position: 0px 0px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
```

:::caution
class명을 extend 하는 경우 **다중 선택자 클래스**를 사용할 수 없다.<br/>
ex) `.one .two`,`.one + .two`
:::

### %placeholder

- `% + 이름`로 선택자 생성
- %선택자는 컴파일이 되지 않는다.

```scss title="Sass코드"
%format-btn {
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.check-btn {
  @extend %format-btn;
  color: red;
  background-color: skyblue;
}

.send-btn {
  @extend %format-btn;
  background-color: black;
}
```

```css title="Sass 컴파일 후 CSS코드"
.send-btn,
.check-btn {
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.check-btn {
  color: red;
  background-color: skyblue;
}

.send-btn {
  background-color: black;
} /*# sourceMappingURL=Practice.css.map */
```

:::tip
Extend사용은 클래스보다 **%를 권장**
:::