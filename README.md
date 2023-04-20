# ✔️ React To Do List

React, Redux를 활용한 To Do List입니다.

https://user-images.githubusercontent.com/102347529/233305147-be56516e-6e81-4743-8920-b10904a37900.mov
- 제목, 내용을 입력 후 To Do List에 추가할 수 있습니다.
- 작성한 To Do의 제목을 클릭하여 상세 페이지로 이동합니다.
- Working List에서 완료 버튼 클릭 시 Done List로 이동합니다.
- Done List에서 취소 버튼 클릭 시 Working List로 이동합니다.
- 삭제 버튼 클릭 시 해당 To Do가 리스트에서 삭제됩니다.
## Components
```
src
|— components
    |— Header.js (상단 타이틀 컴포넌트)
    |— Form.js (상단 입력 form 컴포넌트)
    |— DoneToDos.js (Done List 컴포넌트)
    |— WorkingToDos.js (Working List 컴포넌트)
    |— ToDoItem.js (ToDo 하나의 item과 관련된 컴포넌트)
    |— PageStyle.js (페이지에 import해서 사용하는 styled-components 코드)
|— pages
    |— MainPage.js (메인 To Do 페이지 컴포넌트)
    |— ToDoDetail.js (To Do 상세 페이지 컴포넌트)
|— redux
|— shared
    |— Router.js (라우터 관련 컴포넌트)
|— App.js
|— index.js
```
    
## Tools
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/redux-5A29E4?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

    
## Commit Message
| feat | 새로운 기능을 추가, 기존의 기능을 요구 사항에 맞추어 수정 |
| :---: | :--- |
| bugfix | 기능에 대한 버그 수정 |
| docs | 문서 수정 (ex. README.md) |
| refactor | 코드리펙토링 |
| merge | 병합 |
| design | CSS 등 사용자 UI 디자인 변경 |
| comment | 파일을 삭제만 한 경우 |
| test | 테스트 추가, 테스트 리팩토링 |
| rename |  파일 혹은 폴더명을 수정하거나 옮기는 작업인 경우 |
