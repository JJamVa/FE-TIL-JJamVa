# Number연산자

## Number 산술 연산자

```js
console.log(10 + 2); //12
console.log(10 - 2); //8
console.log(10 * 2); //20
console.log(10 / 2); //5
console.log(10 / 3); //3.33333 소수점까지 나온다.
console.log(10 % 2); //0
console.log(10 % 3); //1 나머지를 의미한다.
console.log(10 ** 2); //100 제곱을 의미한다.
```

:::tip

부동소수점 연산

```js
console.log(0.1 + 0.2); // 0.3000000000005
```

소수점에 대한 연산을 하면 유사값은 나오지만 완전 정확한 값은 나오지 않는다.<br/>
메모리 영역에서 소수점에 대한 연산을 할때, 추가적으로 연산 메모리 공간확보가 되면서 생기는 문제같다.<br/>
자세한 내용은 밑의 영상참고를 하면 좋을거 같다.

**[부동소수점 관련 영상](https://youtu.be/-GsrYvZoAdA)**

:::

## Number 단항 연산

```js
console.log(-2); //-2
console.log(-(-2)); //2
console.log(+4); //4
console.log(+"4"); //4
console.log(~~3.14); //3 소수점을 제거한다.
```

## Number 증감연산자

|  형태   |             특징              |   연산자   |
| :-----: | :---------------------------: | :--------: |
| ++value | 값을 연산하기전에 증가시킨다. | 전위연산자 |
| --value |   값을 연산전에 감소시킨다.   | 전위연산자 |
| value++ |   값을 연산 후, 증가시킨다.   | 후위연산자 |
| value-- |  값을 연산 후, 감소 시킨다.   | 후위연산자 |

```js
var a = 1;

console.log(++a); //2 출력하기 전에 1을 더한다.
console.log(a++); //2 출력하고 난 후에 1을 더한다.
console.log(a); //3
```

## Number 비교연산자

- 반환값은 `true`,`false`로 반환된다. (타입은 `Boolean`)

|  형태   |                특징                |
| :-----: | :--------------------------------: |
|  > , <  | 두수의 크기를 비교한다.(초과,미만) |
| <= , >= | 두수의 크기를 비교한다.(이상,이하) |
|   ==    |       값이 같은지 비교한다.        |
|   ===   |       값이 같은지 비교한다.        |
|   !=    |       값이 다른지 비교한다.        |
|   !==   |       값이 다른지 비교한다.        |

:::caution

`==` 과 `===`의 차이점은 뭘까?

```js
console.log(1 == "1"); //true
console.log(1 == "11"); //false
console.log(1 == "001"); //true
console.log(1 === "1"); //false
console.log(1 === 11); //false
console.log(1 === 1); //true
```

- `==`은 정말 값만 같은지 확인만 해주면된다. 위와 같은 경우에서 의도하지 않은 결과가 나올수 있다.
- `===`은 조금 엄격하게 값을 비교한다. 즉, 값만 비교하는 것이 아니라 **자료형**도 같이 비교한다는 것이다.
- 결론: `===`을 쓰자

:::

## 숫자를 표현하는 기법(`Infinity` & `NaN`)

- `Infinity`: 무한대를 의미.
- `NaN`: Not a Number의 줄임말이다.

```js
console.log(1 / 0); // Infinity가 출력된다. 결과가 나올수 없는 값
console.log(2e10); // 20000000000
console.log(9999e10000 === Infinity); // true
console.log("aa" * 2); //NaN
```

:::danger

**NaN은 자신과 같지 않다?**

NaN을 서로 비교하면 어떤 값이 나올까?

```js
console.log(NaN === NaN);
```

정답은 `false`이다.<br/>
이 동작은 JavaScript의 설계 문제가 아니라, **IEEE 754 부동소수점 표준**에 따른 것이다.<br/>
만약 `NaN`을 비교하기 위해서는 `Number.isNaN()`을 사용하면 된다.<br/>

```js
console.log(Number.isNaN(NaN)); // true
```

:::
