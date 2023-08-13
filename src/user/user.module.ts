import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  // TypeORM을 이용하여 User 엔티티와 관련된 모듈을 가져옴
  imports: [TypeOrmModule.forFeature([User])],

  // User와 관련된 HTTP 요청을 처리하는 컨트롤러 클래스를 등록
  controllers: [UserController],

  // User와 관련된 비즈니스 로직을 처리하는 서비스 클래스를 등록
  providers: [UserService],

  // UserService를 다른 모듈에서 사용할 수 있도록 export
  exports: [UserService],
})
export class UserModule {}
