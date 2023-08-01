# Git개념 및 사용법

## 1. Git과 GitHub

- Git은 분산 버전 관리 시스템
- GitHub은 웹서비스. GitHub를 사용하려면 Git에 대한 이해도가 있어야한다.
- 엄밀히 두개는 다르다. 하지만 현재는 똑같이 부르는 사람이 많음.
- 장점
  - 유지보수
  - 저장 용량
  - 장소에 제한 없이 코드 확인이 가능
  - 코드 공유(코드저장, 노트북을 잃어버려도 마지막으로 저장한 파일에 영향은 없다.)
  - 버전 관리(Commit을 조회하면 버전및 내역을 확인 가능)
- 내용
  - 용량: 파일이 N개면 N \* 파일용량 -> 수정 내역만 저장(Git)
  - 협업: 파일 주고 받기, 누가 수정했는지, 프로젝트 보드
  - 관리: 원하는 Version으로 되돌리기(Git), Code 피드백과 리뷰(GitHub)

---

## 2. GitHub사용법

- 사용방법
  1. GUI(Graphical User Interface)
  2. CLI(Command Line Interface)
     ```html
     git clone 주소
     <!-- git 주소에 있는 전체 레포지토리 가져오기 -->
     git status
     <!-- 파일 상태 확인 -->
     git init
     <!-- git 저장소로 만들어 원하는 디렉토리 기준으로 버전관리 -->
     git pull (origin main)
     <!--레포지토리 내용 가져오기 -->
     git add .<!-- 수정 및 추가한 작업에 대하여 저장 -->
     git commit -m "Text"<!-- 저장한것에 대하여 일 혹은 수정작업 이름 작성 -->
     git commit --date "1 day ago" -m "커밋 메세지"
     <!-- 지난 날에 대한 commit을 작성한다. -->
     git push (origin main)<!-- 레포지토리에 올리기 -->
     ```
  3. Git Dev
     - 내가 현재 보고 있는 레포지토리에서 .을 누르거나 주소창에 (com -> dev)로 바꾸면 VSC 편집기로 변한다. 수정 한 후에 commit 및 push도 가능하다.
