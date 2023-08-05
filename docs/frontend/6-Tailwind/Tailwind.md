# Tailwind 사용법

## script등록

```html
<script src="https://cdn.tailwindcss.com"></script>
<!-- Tailwind를 사용하기 위해서 import를 해야된다. -->
```

## 사용방법
- html tag에 class를 선언 후, Tailwind에서 지정해 놓은 class명을 작성하면 된다.

## Tailwind 문법

### Sizing
```css
<div class="w-96 h-10">
    w-96
</div>
/* div 태그는 width가 96이고, height가 10이다. */
```

:::danger
길이 단위는 1당 0.25rem이다.

그럼 위의 코드에서 width는 96 \* 0.25rem = 24rem이며,
height는 10 \* 0.25rem = 2.5rem이다.
:::