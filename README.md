# Auth
#### ⚪ About Project
* ##### NestJS로 쿠키, 세션을 이용해 인증기능 구현
* ##### 유저생성, 조회, 전체조회, 수정, 삭제, 전체삭제기능 API 사용자 모듈, Sqlite DB를 이용
* ##### 파이프로 유효성검증(Validataion Pipe, Guard, class-validator), Guard를 통한 핸드러 메서드 전 인증검증
* ##### 로그인, 회원가입 API 인증모듈에서 쿠키, 세션과 PassPort(Strategy, Session Serializer)을 사용한 인증 구현

* * *
#### ⚪ Usage
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

* * *
#### ⚪ Built With
<img alt="Html" src ="https://img.shields.io/badge/NestJS-E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/> <img alt="Html" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/>

* * *
#### ⚪ Getting Strated
* ##### Prerequisites: npm, node, sqlite viewr vscode extension
```bash
git clone https://github.com/MpqM/NestJS_Auth.git
cd {project}
npm install
# development
npm run start
# watch mode
npm run start:dev
# production mode
npm run start:prod
# unit tests
npm run test
# e2e tests
npm run test:e2e
# test coverage
npm run test:cov
```

* * *
#### ⚪ Description 
<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" value="AuthModule" style="whiteSpace=wrap;html=1;fontSize=16;verticalAlign=top;fillColor=none;fontStyle=1;" vertex="1" parent="1"><mxGeometry x="320" y="776" width="590" height="150" as="geometry"/></mxCell><mxCell id="3" value="UserModule" style="html=1;fontSize=16;verticalAlign=top;fillColor=none;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="190" y="430" width="820" height="225" as="geometry"/></mxCell><mxCell id="4" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;fontSize=16;" edge="1" source="5" target="2" parent="1"><mxGeometry relative="1" as="geometry"><Array as="points"><mxPoint x="150" y="855"/></Array></mxGeometry></mxCell><mxCell id="5" value="&lt;font style=&quot;font-size: 16px;&quot;&gt;AuthModule&lt;/font&gt;" style="html=1;aspect=fixed;fillColor=none;verticalAlign=top;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="70" y="170" width="220" height="220" as="geometry"/></mxCell><mxCell id="6" value="&lt;font style=&quot;font-size: 16px;&quot;&gt;UserModule&lt;/font&gt;" style="html=1;aspect=fixed;fillColor=none;verticalAlign=top;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="490" y="170" width="220" height="220" as="geometry"/></mxCell><mxCell id="7" value="&lt;font style=&quot;font-size: 16px;&quot;&gt;AppMoudle&amp;nbsp;&lt;/font&gt;" style="rounded=0;html=1;fillColor=none;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="290" y="20" width="166" height="60" as="geometry"/></mxCell><mxCell id="8" value="&lt;font style=&quot;font-size: 16px;&quot;&gt;AppController&lt;/font&gt;" style="rounded=1;html=1;fillColor=none;verticalAlign=top;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="100" y="210" width="160" height="160" as="geometry"/></mxCell><mxCell id="9" value="AuthService" style="rounded=1;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="120" y="270" width="120" height="60" as="geometry"/></mxCell><mxCell id="10" value="UserService" style="rounded=1;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="540" y="270" width="120" height="60" as="geometry"/></mxCell><mxCell id="11" value="" style="endArrow=classic;html=1;rounded=0;entryX=0;entryY=1;entryDx=0;entryDy=0;fontSize=16;fontStyle=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;" edge="1" source="5" target="7" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="639" y="210" as="sourcePoint"/><mxPoint x="689" y="160" as="targetPoint"/></mxGeometry></mxCell><mxCell id="12" value="" style="endArrow=classic;html=1;rounded=0;entryX=1;entryY=1;entryDx=0;entryDy=0;fontSize=16;fontStyle=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;" edge="1" source="6" target="7" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="1019" y="210" as="sourcePoint"/><mxPoint x="1130" y="150" as="targetPoint"/></mxGeometry></mxCell><mxCell id="13" value="" style="endArrow=classic;html=1;rounded=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;fontSize=16;fontStyle=1;exitX=0;exitY=0.5;exitDx=0;exitDy=0;" edge="1" source="6" target="5" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="410" y="290" as="sourcePoint"/><mxPoint x="813" y="260" as="targetPoint"/></mxGeometry></mxCell><mxCell id="14" value="주입" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;fontSize=16;fontStyle=1" vertex="1" parent="1"><mxGeometry x="354" y="220" width="60" height="30" as="geometry"/></mxCell><mxCell id="15" value="UserService" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="680" y="470" width="123" height="30" as="geometry"><mxRectangle width="123" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="16" value="createUser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="680" y="500" width="123" height="20" as="geometry"><mxRectangle width="123" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="17" value="getUser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="680" y="520" width="123" height="20" as="geometry"><mxRectangle width="123" height="40" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="18" value="updateUser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="680" y="600" width="123" height="20" as="geometry"><mxRectangle width="123" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="19" value="deleteUser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="680" y="560" width="123" height="20" as="geometry"><mxRectangle width="123" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="20" value="Repository&amp;lt;User&amp;gt;" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="830" y="470" width="150" height="30" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="21" value="save" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="830" y="500" width="150" height="20" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="22" value="findOne" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="830" y="520" width="150" height="20" as="geometry"><mxRectangle width="122" height="40" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="23" value="update" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="830" y="600" width="150" height="20" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="24" value="delete" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="830" y="560" width="150" height="20" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="25" value="UserController" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="528" y="470" width="122" height="30" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="26" value="createUser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="528" y="500" width="122" height="20" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="27" value="getUser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="528" y="520" width="122" height="20" as="geometry"><mxRectangle width="122" height="40" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="28" value="updateUser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="528" y="600" width="122" height="20" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="29" value="deleteUser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="528" y="560" width="122" height="20" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="30" value="Method, URI" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=left;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="210" y="470" width="280" height="30" as="geometry"><mxRectangle width="123" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="31" value="POST - /user/createuser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=left;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="210" y="500" width="280" height="20" as="geometry"><mxRectangle width="123" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="32" value="GET - /user/getuser/{email}" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=left;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="210" y="520" width="280" height="20" as="geometry"><mxRectangle width="123" height="40" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="33" value="DELETE - /user/deleteuser/{email}" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=left;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="210" y="560" width="280" height="20" as="geometry"><mxRectangle width="123" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="34" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="490" y="509.73" as="sourcePoint"/><mxPoint x="527" y="509.73" as="targetPoint"/></mxGeometry></mxCell><mxCell id="35" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="490" y="529.73" as="sourcePoint"/><mxPoint x="527" y="529.73" as="targetPoint"/></mxGeometry></mxCell><mxCell id="36" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="491" y="549.73" as="sourcePoint"/><mxPoint x="528" y="549.73" as="targetPoint"/></mxGeometry></mxCell><mxCell id="37" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="491" y="569.73" as="sourcePoint"/><mxPoint x="528" y="569.73" as="targetPoint"/></mxGeometry></mxCell><mxCell id="38" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="650" y="509.73" as="sourcePoint"/><mxPoint x="680" y="510" as="targetPoint"/></mxGeometry></mxCell><mxCell id="39" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="650" y="529.73" as="sourcePoint"/><mxPoint x="680" y="530" as="targetPoint"/></mxGeometry></mxCell><mxCell id="40" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="650" y="549.73" as="sourcePoint"/><mxPoint x="680" y="550" as="targetPoint"/></mxGeometry></mxCell><mxCell id="41" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="650" y="570" as="sourcePoint"/><mxPoint x="680" y="570.27" as="targetPoint"/></mxGeometry></mxCell><mxCell id="42" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="803" y="510.73" as="sourcePoint"/><mxPoint x="830" y="511" as="targetPoint"/></mxGeometry></mxCell><mxCell id="43" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="803" y="529.73" as="sourcePoint"/><mxPoint x="830" y="530" as="targetPoint"/></mxGeometry></mxCell><mxCell id="44" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="803" y="549.73" as="sourcePoint"/><mxPoint x="830" y="550" as="targetPoint"/></mxGeometry></mxCell><mxCell id="45" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="803" y="569.46" as="sourcePoint"/><mxPoint x="830" y="569.73" as="targetPoint"/></mxGeometry></mxCell><mxCell id="46" value="PUT - /user/updateuser/{email}" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=left;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="210" y="600" width="280" height="20" as="geometry"><mxRectangle width="123" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="47" value="DELETE - /user/deletealluser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=left;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="210" y="580" width="280" height="20" as="geometry"><mxRectangle width="123" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="48" value="GET - /user/getalluser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=left;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="210" y="540" width="280" height="20" as="geometry"><mxRectangle width="123" height="40" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="49" value="deleteAllUser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="528" y="580" width="122" height="20" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="50" value="getAllUser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="528" y="540" width="122" height="20" as="geometry"><mxRectangle width="122" height="40" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="51" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="490" y="590.27" as="sourcePoint"/><mxPoint x="528" y="590" as="targetPoint"/></mxGeometry></mxCell><mxCell id="52" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="491" y="608.27" as="sourcePoint"/><mxPoint x="529" y="608" as="targetPoint"/><Array as="points"><mxPoint x="491" y="608"/></Array></mxGeometry></mxCell><mxCell id="53" value="deleteAllUser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="680" y="580" width="123" height="20" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="54" value="getAllUser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="680" y="540" width="123" height="20" as="geometry"><mxRectangle width="122" height="40" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="55" value="find" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="830" y="540" width="150" height="20" as="geometry"><mxRectangle width="122" height="40" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="56" value="delete" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="830" y="580" width="150" height="20" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="57" value="AuthService" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="760" y="811" width="123" height="30" as="geometry"><mxRectangle width="123" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="58" value="register" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="760" y="841" width="123" height="20" as="geometry"><mxRectangle width="123" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="59" value="validateUser" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="760" y="861" width="123" height="20" as="geometry"><mxRectangle width="123" height="40" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="60" value="AuthController" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="608" y="811" width="122" height="30" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="61" value="register" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="608" y="841" width="122" height="20" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="62" value="login" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="608" y="861" width="122" height="20" as="geometry"><mxRectangle width="122" height="40" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="63" value="Method, URI" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=left;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="365" y="811" width="200" height="30" as="geometry"><mxRectangle width="123" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="64" value="POST - /auth/register" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=left;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="365" y="841" width="200" height="20" as="geometry"><mxRectangle width="123" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="65" value="GET - /auth/login" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=left;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="365" y="861" width="200" height="20" as="geometry"><mxRectangle width="123" height="40" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="66" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="570" y="850.73" as="sourcePoint"/><mxPoint x="607" y="850.73" as="targetPoint"/></mxGeometry></mxCell><mxCell id="67" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="570" y="870.73" as="sourcePoint"/><mxPoint x="607" y="870.73" as="targetPoint"/></mxGeometry></mxCell><mxCell id="68" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="571" y="890.73" as="sourcePoint"/><mxPoint x="608" y="890.73" as="targetPoint"/></mxGeometry></mxCell><mxCell id="69" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="730" y="850.73" as="sourcePoint"/><mxPoint x="760" y="851" as="targetPoint"/></mxGeometry></mxCell><mxCell id="70" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="730" y="870.73" as="sourcePoint"/><mxPoint x="760" y="871" as="targetPoint"/></mxGeometry></mxCell><mxCell id="71" value="GET - /auth/logout" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=left;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="365" y="881" width="200" height="20" as="geometry"><mxRectangle width="123" height="40" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="72" value="logout" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="608" y="881" width="122" height="20" as="geometry"><mxRectangle width="122" height="40" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="73" value="" style="endArrow=none;dashed=1;html=1;dashPattern=1 3;strokeWidth=2;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="740" y="680" as="sourcePoint"/><mxPoint x="739.38" y="610" as="targetPoint"/></mxGeometry></mxCell><mxCell id="74" value="findByEmailCreate" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="650" y="680" width="179.5" height="20" as="geometry"><mxRectangle width="123" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="75" value="findByEmail" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="651.75" y="710" width="179.5" height="20" as="geometry"><mxRectangle width="123" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="76" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="883" y="851" as="sourcePoint"/><mxPoint x="830" y="700" as="targetPoint"/></mxGeometry></mxCell><mxCell id="77" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="883" y="870" as="sourcePoint"/><mxPoint x="830" y="730" as="targetPoint"/></mxGeometry></mxCell><mxCell id="78" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="730" y="870.79" as="sourcePoint"/><mxPoint x="520" y="960" as="targetPoint"/></mxGeometry></mxCell><mxCell id="79" value="AuthGuard" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="450" y="960" width="122" height="30" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="80" value="canActivate()" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="450" y="990" width="122" height="20" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="81" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="448" y="990" as="sourcePoint"/><mxPoint x="414" y="990" as="targetPoint"/></mxGeometry></mxCell><mxCell id="82" value="true -&amp;gt; handler" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="292" y="980" width="122" height="20" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="83" value="false" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="450" y="1050" width="122" height="20" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="84" value="Client" style="connectable=0;recursiveResize=0;strokeColor=inherit;fillColor=none;align=center;html=1;fontSize=16;whiteSpace=wrap;fontStyle=1" vertex="1" parent="1"><mxGeometry x="680.5" y="970" width="122" height="30" as="geometry"><mxRectangle width="122" height="30" as="alternateBounds"/></mxGeometry></mxCell><mxCell id="85" value="" style="endArrow=classic;html=1;rounded=0;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;fontSize=16;" edge="1" source="6" target="3" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="810" y="415.13888888888914" as="sourcePoint"/><mxPoint x="580" y="472" as="targetPoint"/></mxGeometry></mxCell><mxCell id="86" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="510.5900000000001" y="1010" as="sourcePoint"/><mxPoint x="511" y="1050" as="targetPoint"/></mxGeometry></mxCell><mxCell id="87" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="680" y="990" as="sourcePoint"/><mxPoint x="572" y="990" as="targetPoint"/></mxGeometry></mxCell><mxCell id="88" value="(1)res" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;fontSize=16;" vertex="1" parent="1"><mxGeometry x="586.75" y="960" width="70" height="30" as="geometry"/></mxCell><mxCell id="89" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="350" y="980" as="sourcePoint"/><mxPoint x="740" y="970" as="targetPoint"/><Array as="points"><mxPoint x="350" y="940"/><mxPoint x="740" y="940"/></Array></mxGeometry></mxCell><mxCell id="90" value="(2)검증성공시 응답값 반환" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;fontSize=16;" vertex="1" parent="1"><mxGeometry x="731.25" y="940" width="210" height="30" as="geometry"/></mxCell><mxCell id="91" value="" style="endArrow=classic;html=1;rounded=0;fontSize=16;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="572" y="1060" as="sourcePoint"/><mxPoint x="740" y="1000" as="targetPoint"/><Array as="points"><mxPoint x="740" y="1060"/></Array></mxGeometry></mxCell><mxCell id="92" value="(3)실패시 403" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;fontSize=16;" vertex="1" parent="1"><mxGeometry x="740" y="1010" width="120" height="30" as="geometry"/></mxCell></root></mxGraphModel>

* * *
#### ⚪ Roadmap & Realization & Study
* ##### 회원가입, 쿠키를 통한 로그인, Guard를 통한 핸들러 메서드에 전달전 검증
* ##### 세션과 PassPort를 이용한 인증 과정
* ##### 파이프를 통한 유효성 검증, SQLite 간단 사용,
* ##### 

* * *
#### ⚪ Writer
* ##### <span>okqkrwhdtjd@gmail.com
* <a href = "https://github.com/MpqM"><img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a> <a href = "https://MpqM.tistory.com/"> <img alt="Tistory" src ="https://img.shields.io/badge/Tistory-white.svg?&style=for-the-badge"/></a>

* * *
#### ⚪ Contributing
* ##### Fork the Project https://github.com/MpqM/NestJS_Auth
* ##### Create your Feature Branch (git checkout -b feature/AmazingFeature)
* ##### Commit your Changes (git commit -m 'Add some AmazingFeature')
* ##### Push to the Branch (git push origin feature/AmazingFeature)
* ##### Open a Pull Request
