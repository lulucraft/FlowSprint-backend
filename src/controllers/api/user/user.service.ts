import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@controllers/api/user/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  // async create(firstName: string, lastName: string, email: string, password: string): Promise<User> {
  //   const user = this.userRepository.create({ firstName, lastName, email, password });
  //   return this.userRepository.save(user);
  // }
  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(id: number, firstName: string, lastName: string, email: string, password: string): Promise<User | null> {
    const user = await this.findOne(id);
    if (!user) return null;

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;

    return this.userRepository.save(user);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.userRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
