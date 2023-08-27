# Mixin

## Mixin이란?

- 코드를 재사용하기 위해 만들어진 기능
- 중복되는 코드는 mixin으로 만들고 원하는 선택자 블럭에 mixin을 include하면 된다.

## Mixin 사용

- `@Mixin`과 이름을 작성 후, 중괄호 `{ }` 안에 CSS코드를 작성.
- `@include`를 이용하여 필요한 요소에 작성.

```scss
@mixin 이름(Parameter); //생성
@include 이름(Argument); //사용
```

<details>
<summary>Mixin예시</summary>
<div markdown="1">

```css
.one {
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
}

.two {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}
```

위의 css코드를 보면 `display`,`justify-content`, `align-items`의 속성과 속성값이 동일하다.

```scss
@mixin duplicate {
  // 중복 요소를 mixin으로 묶기
  display: flex;
  justify-content: center;
  align-items: center;
}

.one {
  @include duplicate; //includes로 값을 사용
  background: slateblue;
}

.two {
  @include center-xy;
  background: skyblue;
}
```

중복 요소를 `maxin`과 `includes`를 사용하면 코드 유지보수가 좋아진다.

</div>
</details>

## Mixin의 Parameters와 Arguments

- mixin도 함수와 같이 Parameter를 이용하여 속성에 대한 값을 정의할 수 있다.
- includes를 사용할 때 mixin에 사용되는 Parameter의 개수와 동일하게 Argument값을 넣어야한다.
- mixin의 Parameter값에 기본값을 설정하여 Argument의 값이 없어도 사용 가능

```scss
@mixin setting($ft_size, $f_c, $pad ,$bgc: white) {
  font-size: $ft_size;
  color: $f_c;
  padding: $pad
  background-color: $bgc;
}

.one {
  @include setting(16px, salmon, 10px, red);
}
// font-size: 16px;
// color: salmon;
// padding: 10px
// background-color: red;

.two {
  @include setting(2rem, slateblue, 10px 15px 20px 25px);
}
// font-size: 2rem;
// color: slateblue;
// padding: 10px 15px 20px 25px
// background-color: white;
```

## Content

- @content를 이용하여 원하는 부분에 스타일을 추가 전달

```html title="HTML코드"
<section class="one">
  반갑습니다.
  <div>안녕하세요.</div>
</section>
```

```scss title="Scss코드"
@mixin test {
  display: flex;
  justify-content: center;
  align-items: center;
  @content;
}

.one {
  div {
    color: black;
  }
  @include test {
    color: skyblue;//mixin test에 속성을 전달
  }
  background-color: red;
}
```

![image](https://github.com/JJamVa/JJamVa/assets/80045006/5b90e918-544e-44fb-8901-6ebcba111761)
