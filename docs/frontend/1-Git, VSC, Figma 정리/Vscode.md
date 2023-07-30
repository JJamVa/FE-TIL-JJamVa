# VSCODE 단축키 및 Snippet 설정

## 1. VScode사용법 및 단축키 (Window 기준)

|     기능     |                키 입력                |
| :----------: | :-----------------------------------: |
|    터미널    |            Ctrl + `(백틱)             |
|   사이드바   |               Ctrl + B                |
|  동시 선택   |               Ctrl + D                |
|  동시 수정   |            Ctrl + Alt + B             |
| 문장의 양 끝 |           Home(앞), End(뒤)           |
| 코드의 양 끝 |  Ctrl + Home(맨위), Ctrl + End(맨뒤)  |
| 순서 바꾸기  |             Alt + 방향키              |
|  주석 달기   |               Ctrl + /                |
|   들여쓰기   | Ctrl + '[' (뒤로), Ctrl + ']'(앞으로) |
|  전체 정렬   |            Alt + Shift + F            |

---

## 2. Code Snippet

1. Ctrl + P 팔레트를 연다.
2. '>snippet' 을 입력.
3. 사용언어에 따라 생성해야할 기본 형태 타입의 설정한다.(밑에 예시 코드)

```Json
{
	"Print to console": {
		"prefix": "makehtml",
		"body": [
			"<!DOCTYPE html>",
			"<html lang=\"ko\">",
			"<head>",
			"    <meta charset=\"UTF-8\">",
			"    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">",
			"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
			"    <title></title>",
			"</head>",
			"<body>",
			"</body>",
			"</html>"
		],
		"description": "한국어 페이지용 html 템플릿"
	}
}
```

:::note
Make a Snippet VSCODE ROOT: Manage -> User snippets -> Choose a language Json File -> Use Site & Make it -> Copy&Paste -> Save
:::

---
