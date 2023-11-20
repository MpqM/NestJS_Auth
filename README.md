# Auth
#### ⚪ About Project
* ##### 유저생성, 조회, 전체조회, 수정, 삭제, 전체삭제기능 API 사용자 모듈, Sqlite DB를 이용
* ##### 파이프로 유효성검증(Validataion Pipe, Guard, class-validator), Guard를 통한 핸드러 메서드 전 인증검증
* ##### 로그인, 회원가입 API 인증모듈에서 쿠키, 세션과 PassPort(Strategy, Session Serializer)을 사용한 인증 구현
* ##### OAuth2.0을 활용한 구글 로그인 인증, GoogleAuthGuard를 통해 세션 사용

- - -

#### ⚪ Running Screen || Video
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

#### ⚪ Built With
<p align ="center">
  <img alt="Html" src ="https://img.shields.io/badge/NestJS-E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/> <img alt="Html" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/>
</p>
  

- - -

#### ⚪ Getting Started
```bash
# prerequisites: npm, node, sqlite viewr vscode extension
# execution
git clone https://github.com/MpqM/NestJS_Auth.git
cd {project}
npm install
npm run start
# test
http://localhost:3000/auth/logingoogle
http://localhost:3000/auth/testloginsession
```

- - -

#### ⚪ Description
* ##### 유저, 인증 모듈, 가드
 <img src="https://user-images.githubusercontent.com/79093184/260433330-d974fbbb-3cd1-4a03-b63f-ec30f30d04ef.png"/>
 
* ##### 페스포트와 세션을 사용한 인증 과정
 <img src="https://user-images.githubusercontent.com/79093184/260433333-0efdf916-ba4b-4483-8176-65ac26e6ae63.png"/>
 
* ##### 로그인부터 세션 저장까지 순서도
  <img src="https://user-images.githubusercontent.com/79093184/260433337-3906a4b4-1789-469d-876e-5776a8e07f53.png"/>
  
* ##### OAuth 프로토콜 흐름, 엑세스 토큰 만료시 리프레시 토큰을 통한 재발행
  <img src="https://user-images.githubusercontent.com/79093184/260433871-291c3293-a00f-44fc-b0ff-dbf7ece1eb3c.png"/>
  
* ##### 구글 OAuth 구현 순서
  <img src="https://user-images.githubusercontent.com/79093184/260433878-42222a53-f39b-44e5-a01f-acf5b0cb4c2c.png"/>
  
* ##### GoogleAuthGuard의 동작 순서도
  <img src="https://user-images.githubusercontent.com/79093184/260433343-a54ea8a5-58d7-442f-8d67-446c4833c1b8.png"/>
  
- - -

#### ⚪ Writer
<p align ="center">
  <img src ="https://img.shields.io/badge/gmail-EA4335.svg?&style=for-the-badge&logo=gmail&logoColor=white"/></a> <a href = "https://github.com/MpqM"><img src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a> <a href = "https://MpqM.tistory.com/"> <img src ="https://img.shields.io/badge/tistory-000000.svg?&style=for-the-badge&logo=Tistory&logoColor=white"/></a>
</p>

- - -

