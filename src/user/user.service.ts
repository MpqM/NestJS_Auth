import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // 사용자 생성 메서드
  async createUser(user): Promise<User> {
    return this.userRepository.save(user); // 사용자 정보를 저장하고 저장된 사용자 객체를 반환
  }

  // 이메일을 기반으로 사용자 정보 가져오는 메서드
  async getUser(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } }); // 해당 이메일에 해당하는 사용자 정보를 조회하여 반환
  }

  // 모든 사용자 정보를 가져오는 메서드
  async getAllUser(): Promise<User[]> {
    return this.userRepository.find({}); // 모든 사용자 정보를 조회하여 배열로 반환
  }

  async updateUser(email, _user) {
    const user: User = await this.getUser(email);
    user.username = _user.username;
    user.password = _user.password;
    this.userRepository.save(user); // 변경된 사용자 정보를 저장하여 업데이트
    return user;
  }

  // 사용자 삭제 메서드
  async deleteUser(email: string): Promise<void> {
    await this.userRepository.delete({ email }); // 해당 이메일에 해당하는 사용자 정보 삭제
  }

  // 모든 사용자 정보 삭제 메서드
  async deleteAllUser(): Promise<void> {
    await this.userRepository.delete({}); // 모든 사용자 정보 삭제
  }
}
