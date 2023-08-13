import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Controller('user') // '/user' 경로로 접근하는 요청을 처리하는 컨트롤러
export class UserController {
  constructor(private userService: UserService) {} // 유저 서비스 주입

  // POST /user/createuser 경로로 접근하는 요청을 처리하는 메서드
  @Post('/create')
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user); // UserService를 통해 사용자 생성 요청 처리
  }

  @Get('/get/:email') // GET /user/getuser/:email 경로로 접근하는 요청을 처리하는 메서드
  async getUser(@Param('email') email: string) {
    const user = await this.userService.getUser(email); // UserService를 통해 사용자 정보 조회 요청 처리
    return user;
  }

  @Get('/getall') // GET /user/getalluser 경로로 접근하는 요청을 처리하는 메서드
  async getAllUser() {
    return await this.userService.getAllUser(); // UserService를 통해 모든 사용자 정보 조회 요청 처리
  }

  @Put('/update/:email') // PUT /user/updateuser/:email 경로로 접근하는 요청을 처리하는 메서드
  updateUser(@Param('email') email: string, @Body() user: UpdateUserDto) {
    return this.userService.updateUser(email, user); // UserService를 통해 사용자 정보 업데이트 요청 처리
  }

  // DELETE /user/delete/:email 경로로 접근하는 요청을 처리하는 메서드
  @Delete('/delete/:email')
  deleteUser(@Param('email') email: string) {
    return this.userService.deleteUser(email); // UserService를 통해 사용자 삭제 요청 처리
  }

  // DELETE /user/deleteall 경로로 접근하는 요청을 처리하는 메서드
  @Delete('/deleteall')
  deleteAllUser() {
    return this.userService.deleteAllUser(); // UserService를 통해 모든 사용자 삭제 요청 처리
  }
}
