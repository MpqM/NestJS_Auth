import {
  Body,
  Controller,
  Post,
  Response,
  Request,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.dto';
import { AuthenticatedGuard, LocalAuthGuard, LoginGuard } from './auth.guard'; // 인증 관련 가드들 가져옴

@Controller('auth') // 라우팅 경로 설정
export class AuthController {
  constructor(private authService: AuthService) {} // AuthService 주입

  // 회원 가입 엔드포인트
  @Post('register')
  async register(@Body() userDto: CreateUserDto) {
    // 사용자 생성 DTO를 받아와서 회원 가입 처리
    return await this.authService.register(userDto);
  }

  // 로그인 엔드포인트
  @Post('login')
  async login(@Request() req, @Response() res) {
    const userInfo = await this.authService.validateUser(
      req.body.email,
      req.body.password,
    );

    // 유저 정보가 유효한 경우 로그인 쿠키 생성
    if (userInfo) {
      res.cookie('login', JSON.stringify(userInfo), {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 쿠키 유효 기간 설정
      });
    }
    return res.send({ message: 'login success' });
  }

  // LoginGuard를 사용한 로그인 가드 테스트 엔드포인트
  @UseGuards(LoginGuard)
  @Post('loginguard')
  async loginGuard(@Request() req, @Response() res) {
    if (!req.cookies['login'] && req.user) {
      res.cookie('login', JSON.stringify(req.user), {
        httpOnly: true,
        maxAge: 1000 * 10, // 쿠키 유효 기간 설정
      });
    }
    return res.send({ message: 'loginGuard Success' });
  }

  // LoginGuard를 사용한 로그인 테스트 엔드포인트
  @UseGuards(LoginGuard)
  @Get('testguard')
  tesGuard() {
    return '로그인됬습니다.';
  }

  // LocalAuthGuard를 사용한 로그인 세션 테스트 엔드포인트
  @UseGuards(LocalAuthGuard)
  @Post('loginguardsession')
  loginsGuardSession(@Request() req) {
    return req.user; // 로그인 세션의 사용자 정보 반환
  }

  // AuthenticatedGuard를 사용한 세션 테스트 엔드포인트
  @UseGuards(AuthenticatedGuard)
  @Get('testguardsession')
  testGuardSession(@Request() req) {
    return req.user; // 세션의 사용자 정보 반환
  }
}
